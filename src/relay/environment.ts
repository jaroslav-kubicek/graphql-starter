import { Environment, Network, RecordSource, Store } from "relay-runtime";

import createRequestHandler from "./createRequestHandler";
import { fetchGraphQL } from "./fetcher";

export const createEnvironment = () => {
  const fetcher = createRequestHandler(fetchGraphQL);

  return new Environment({
    network: Network.create(fetcher),
    store: new Store(new RecordSource()),
  });
};
