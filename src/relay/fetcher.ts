import { type Variables, type RequestParameters } from "relay-runtime";

export async function fetchGraphQL(
  request: RequestParameters,
  variables: Variables
) {
  const GITHUB_AUTH_TOKEN = process.env.REACT_APP_GITHUB_AUTH_TOKEN;

  // Fetch data from GitHub's GraphQL API:
  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `bearer ${GITHUB_AUTH_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: request.text,
      variables,
    }),
  });

  // Get the response as JSON
  return await response.json();
}
