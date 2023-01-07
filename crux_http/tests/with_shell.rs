mod shared {
    use crux_core::render::Render;
    use crux_http::{Http, HttpResponse, HttpResult};
    use crux_macros::Effect;
    use serde::{Deserialize, Serialize};
    use url::Url;

    #[derive(Default)]
    pub(crate) struct App;

    #[derive(Serialize, Deserialize)]
    pub enum Event {
        Get,
        Post,
        Set(HttpResult),
    }

    #[derive(Default, Serialize, Deserialize)]
    pub struct Model {
        pub status: u16,
        pub body: Vec<u8>,
    }

    #[derive(Serialize, Deserialize, Default)]
    pub struct ViewModel {
        pub result: String,
    }

    impl crux_core::App for App {
        type Event = Event;
        type Model = Model;
        type ViewModel = ViewModel;

        type Capabilities = Capabilities;

        fn update(&self, event: Event, model: &mut Model, caps: &Capabilities) {
            match event {
                Event::Get => {
                    caps.http
                        .get(Url::parse("http://example.com").unwrap(), Event::Set);
                }
                Event::Post => {
                    caps.http
                        .post(Url::parse("http://example.com").unwrap(), Event::Set);
                }
                Event::Set(Ok(HttpResponse { body, status })) => {
                    model.status = status;
                    model.body = body.unwrap_or_default();
                    caps.render.render()
                }
                Event::Set(Err(_)) => caps.render.render(),
            }
        }

        fn view(&self, model: &Self::Model) -> Self::ViewModel {
            ViewModel {
                result: format!(
                    "Status: {}, Body: {}",
                    model.status,
                    String::from_utf8_lossy(&model.body),
                ),
            }
        }
    }

    #[derive(Effect)]
    pub(crate) struct Capabilities {
        pub http: Http<Event>,
        pub render: Render<Event>,
    }
}

mod shell {
    use super::shared::{App, Effect, Event, ViewModel};
    use anyhow::Result;
    use crux_core::{Core, Request};
    use crux_http::{HttpRequest, HttpResponse, HttpResult};
    use std::collections::VecDeque;

    pub enum Outcome {
        Http(HttpResult),
    }

    enum CoreMessage {
        Message(Event),
        Response(Vec<u8>, Outcome),
    }

    pub fn run(event: Event) -> Result<(Vec<Effect>, ViewModel)> {
        let core: Core<Effect, App> = Core::default();
        let mut queue: VecDeque<CoreMessage> = VecDeque::new();

        queue.push_back(CoreMessage::Message(event));

        let mut received = vec![];

        while !queue.is_empty() {
            let msg = queue.pop_front();

            let reqs = match msg {
                Some(CoreMessage::Message(m)) => core.message(&bcs::to_bytes(&m)?),
                Some(CoreMessage::Response(uuid, output)) => core.response(
                    &uuid,
                    &match output {
                        Outcome::Http(x) => bcs::to_bytes(&x)?,
                    },
                ),
                _ => vec![],
            };
            let reqs: Vec<Request<Effect>> = bcs::from_bytes(&reqs)?;

            for Request { uuid, effect } in reqs {
                match effect {
                    Effect::Render(_) => received.push(effect.clone()),
                    Effect::Http(HttpRequest { .. }) => {
                        received.push(effect);
                        queue.push_back(CoreMessage::Response(
                            uuid,
                            Outcome::Http(Ok(HttpResponse {
                                status: 200,
                                body: Some("\"Hello\"".as_bytes().to_owned()),
                            })),
                        ));
                    }
                }
            }
        }

        let view = bcs::from_bytes::<ViewModel>(&core.view())?;
        Ok((received, view))
    }
}

#[cfg(test)]
mod tests {
    use crate::{
        shared::{Effect, Event},
        shell::run,
    };
    use anyhow::Result;
    use crux_core::render::RenderOperation;
    use crux_http::HttpRequest;

    #[test]
    pub fn test_get() -> Result<()> {
        let (received, view) = run(Event::Get)?;
        assert_eq!(
            received,
            vec![
                Effect::Http(HttpRequest {
                    method: "GET".to_string(),
                    url: "http://example.com/".to_string()
                }),
                Effect::Render(RenderOperation)
            ]
        );
        assert_eq!(view.result, "Status: 200, Body: \"Hello\"");
        Ok(())
    }

    #[test]
    pub fn test_post() -> Result<()> {
        let (received, view) = run(Event::Post)?;
        assert_eq!(
            received,
            vec![
                Effect::Http(HttpRequest {
                    method: "POST".to_string(),
                    url: "http://example.com/".to_string()
                }),
                Effect::Render(RenderOperation)
            ]
        );
        assert_eq!(view.result, "Status: 200, Body: \"Hello\"");
        Ok(())
    }
}
