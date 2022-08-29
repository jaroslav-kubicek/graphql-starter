import { Environment, Network, RecordSource, Store } from "relay-runtime";

import createRequestHandler from "./createRequestHandler";
import { fetchGraphQL } from "./fetcher";
import { RelayLogger, RelayRequiredFieldLogger } from "./logger";

export const createEnvironment = () => {
  const fetcher = createRequestHandler(fetchGraphQL);

  return new Environment({
    log: RelayLogger,
    requiredFieldLogger: RelayRequiredFieldLogger,
    network: Network.create(fetcher),
    store: new Store(new RecordSource()),
  });
};
