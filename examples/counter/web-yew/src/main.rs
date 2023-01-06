use anyhow::Result;
use gloo_net::http;
use yew::prelude::*;

use shared::{
    http::{HttpError, HttpRequest, HttpResponse},
    Effect, Event, Request, ViewModel,
};

#[derive(Default)]
struct RootComponent;

enum CoreMessage {
    Message(Event),
    Response(Vec<u8>, Outcome),
}

pub enum Outcome {
    Http(Result<HttpResponse, HttpError>),
}

impl Component for RootComponent {
    type Message = CoreMessage;
    type Properties = ();

    fn create(ctx: &Context<Self>) -> Self {
        let link = ctx.link();
        link.send_message(CoreMessage::Message(Event::Get));

        Self::default()
    }

    fn update(&mut self, ctx: &Context<Self>, msg: Self::Message) -> bool {
        let link = ctx.link();

        let reqs = match msg {
            CoreMessage::Message(event) => shared::message(&bcs::to_bytes(&event).unwrap()),
            CoreMessage::Response(uuid, outcome) => shared::response(
                &uuid,
                &match outcome {
                    Outcome::Http(x) => bcs::to_bytes(&x).unwrap(),
                },
            ),
        };

        let reqs: Vec<Request<Effect>> = bcs::from_bytes(&reqs).unwrap();

        let mut should_render = false;

        for Request { uuid, effect } in reqs {
            match effect {
                Effect::Render(_) => should_render = true,
                Effect::Http(HttpRequest { url, method }) => {
                    let method = match method.as_str() {
                        "GET" => http::Method::GET,
                        "POST" => http::Method::POST,
                        _ => panic!("not yet handling this method"),
                    };

                    let link = link.clone();

                    wasm_bindgen_futures::spawn_local(async move {
                        let response = http(method, &url).await;
                        link.send_message(CoreMessage::Response(uuid, Outcome::Http(response)));
                    });
                }
            }
        }

        should_render
    }

    fn view(&self, ctx: &Context<Self>) -> Html {
        let link = ctx.link();
        let view = shared::view();
        let view: ViewModel = bcs::from_bytes(&view).unwrap();

        html! {
            <>
                <section class="section has-text-centered">
                    <p class="title">{"Crux Counter Example"}</p>
                </section>
                <section class="section has-text-centered">
                    <p class="is-size-5">{"Rust Core, Rust Shell (Yew)"}</p>
                </section>
                <section class="container has-text-centered">
                    <p class="is-size-5">{&view.text}</p>
                    <div class="buttons section is-centered">
                        <button class="button is-primary is-warning"
                            onclick={link.callback(|_| CoreMessage::Message(Event::Decrement))}>
                            {"Decrement"}
                        </button>
                        <button class="button is-primary is-danger"
                            onclick={link.callback(|_| CoreMessage::Message(Event::Increment))}>
                            {"Increment"}
                        </button>
                    </div>
                </section>
            </>
        }
    }
}

fn main() {
    yew::Renderer::<RootComponent>::new().render();
}

async fn http(method: http::Method, url: &str) -> Result<HttpResponse, HttpError> {
    let error = |error| HttpError {
        method: method.to_string(),
        url: url.to_string(),
        error,
    };

    let response = http::Request::new(url)
        .method(method)
        .send()
        .await
        .map_err(|e| error(e.to_string()))?;

    let status = response.status();

    match status {
        200..=299 => response.binary().await.map_or_else(
            |e| Err(error(format!("{e}"))),
            |body| {
                Ok(HttpResponse {
                    status,
                    body: Some(body),
                })
            },
        ),
        status => Err(error(format!("status: {status}"))),
    }
}
