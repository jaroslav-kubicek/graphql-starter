import {
  Observable,
  type GraphQLResponse,
  type Variables,
  type RequestParameters,
} from "relay-runtime";

/**
 * A Sink is an object of methods provided by Observable during construction.
 * The methods are to be called to trigger each event. It also contains a closed
 * field to see if the resulting subscription has closed.
 */
type Sink = {
  next: (arg: GraphQLResponse) => void;
  error: (err: Error, isUncaughtThrownError?: boolean) => void;
  complete: () => void;
  closed: boolean;
};

export default function createRequestHandler(
  customFetcher: (request: RequestParameters, variables: Variables) => any
): (requestNode: any, variables: Variables) => Observable<GraphQLResponse> {
  return function handleRequest(requestNode, variables) {
    return Observable.create((sink: Sink) => {
      customFetcher(requestNode, variables)
        .then((response: GraphQLResponse) => {
          if ("errors" in response) {
            response.errors?.forEach((error) => {
              sink.error(new Error(error.message));
            });
          } else if ("data" in response) {
            sink.next(response);
          } else {
            sink.error(
              new Error(
                `No data field in the response, got: ${JSON.stringify(
                  response
                )}`
              )
            );
          }
        })
        .catch((error: Error) => {
          sink.error(error);
        })
        .then(() => {
          sink.complete();
        });

      return function cleanup() {
        // noop, do anything here (called after sink.complete or when Relay unsubscribes)
      };
    });
  };
}
