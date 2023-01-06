import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import UAParser from "ua-parser-js";

import init_core, {
  message as sendMessage,
  response as sendResponse,
  view,
} from "../shared/core";
import * as types from "shared_types/types/shared_types";
import * as bcs from "shared_types/bcs/mod";
import { Optional } from "shared_types/serde/mod";

interface Message {
  kind: "message";
  message: types.Event;
}

interface Response {
  kind: "response";
  uuid: number[];
  outcome:
    | types.PlatformResponse
    | types.TimeResponse
    | types.Result
    | types.KeyValueOutput;
}

type State = {
  image: Optional<types.CatImage>;
  fact: string;
  platform: string;
};

const initialState: State = {
  image: new types.CatImage(""),
  fact: "",
  platform: "",
};

function deserializeRequests(bytes: Uint8Array) {
  let deserializer = new bcs.BcsDeserializer(bytes);

  const len = deserializer.deserializeLen();

  let requests = [];

  for (let i = 0; i < len; i++) {
    const request = types.Request.deserialize(deserializer);
    requests.push(request);
  }

  return requests;
}

const Home: NextPage = () => {
  const [state, setState] = useState(initialState);

  const dispatch = (action: Message) => {
    const serializer = new bcs.BcsSerializer();
    action.message.serialize(serializer);
    const requests = sendMessage(serializer.getBytes());
    handleRequests(requests);
  };

  const respond = (action: Response) => {
    const serializer = new bcs.BcsSerializer();
    action.outcome.serialize(serializer);
    const moreRequests = sendResponse(
      new Uint8Array(action.uuid),
      serializer.getBytes()
    );
    handleRequests(moreRequests);
  };

  const handleRequests = async (bytes: any) => {
    let requests = deserializeRequests(bytes);

    for (const request of requests) {
      switch (request.effect.constructor) {
        case types.EffectVariantRender:
          let bytes = view();
          let viewDeserializer = new bcs.BcsDeserializer(bytes);
          let viewModel = types.ViewModel.deserialize(viewDeserializer);

          // core asked for a re-render with new state
          setState({
            platform: viewModel.platform,
            image: viewModel.image,
            fact: viewModel.fact,
          });

          break;
        case types.EffectVariantTime:
          respond({
            kind: "response",
            uuid: request.uuid,
            outcome: new types.TimeResponse(new Date().toISOString()),
          });

          break;
        case types.EffectVariantPlatform:
          respond({
            kind: "response",
            uuid: request.uuid,
            outcome: new types.PlatformResponse(
              new UAParser(navigator.userAgent).getBrowser().name || "Unknown"
            ),
          });
          break;
        case types.EffectVariantKeyValue:
          break;
        case types.EffectVariantHttp:
          const { url } = (request.effect as types.EffectVariantHttp).value;

          const resp = await fetch(url);
          const body = await resp.arrayBuffer();
          const response_bytes = Array.from(new Uint8Array(body));

          respond({
            kind: "response",
            uuid: request.uuid,
            outcome: new types.ResultVariantOk(
              new types.HttpResponse(resp.status, response_bytes)
            ),
          });
          break;
        default:
      }
    }
  };

  useEffect(() => {
    async function loadCore() {
      await init_core();

      // Initial messages
      dispatch({
        kind: "message",
        message: new types.EventVariantGetPlatform(),
      });
      dispatch({
        kind: "message",
        message: new types.EventVariantGet(),
      });
    }

    loadCore();
  }, []);

  return (
    <div className="container">
      <Head>
        <title>Cat Facts - NextJS</title>
      </Head>

      <main>
        <section className="section title has-text-centered">
          <p>{state.platform}</p>
        </section>
        <section className="section container has-text-centered">
          {state.image && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              alt="A funny cat. Or at least a cute one."
              src={state.image?.file}
              style={{ height: "200px" }}
            />
          )}
        </section>
        <section className="section container has-text-centered">
          <p>{state.fact}</p>
        </section>
        <div className="buttons container is-centered">
          <button
            className="button is-primary is-danger"
            onClick={() =>
              dispatch({
                kind: "message",
                message: new types.EventVariantClear(),
              })
            }
          >
            {"Clear"}
          </button>
          <button
            className="button is-primary is-success"
            onClick={() =>
              dispatch({
                kind: "message",
                message: new types.EventVariantGet(),
              })
            }
          >
            {"Get"}
          </button>
          <button
            className="button is-primary is-warning"
            onClick={() =>
              dispatch({
                kind: "message",
                message: new types.EventVariantFetch(),
              })
            }
          >
            {"Fetch"}
          </button>
        </div>
      </main>
    </div>
  );
};

export default Home;
