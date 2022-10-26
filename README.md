# GraphQL/Relay starter

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Up & running

First of all, you need to set GitHub Auth token, you can generate one in [GitHub settings](https://github.com/settings/tokens/new?description=pbctl&scopes=repo,user:email,admin:public_key,read:org):

```
export REACT_APP_GITHUB_AUTH_TOKEN=<token>
```

To install dependencies:

```
yarn
```

To run the application:

```
yarn start
```

If you want to recompile relay automatically on changes:

```
yarn relay --watch
```

> Tip: You can use also [GitHub GraphQL Explorer](https://docs.github.com/en/graphql/overview/explorer) to consult GraphQL schema and try out queries.

## Exercise

The goal of this exercise is to render a paginated list of repositories in the Repositories component, using [usePaginationFragment](https://relay.dev/docs/api-reference/use-pagination-fragment/#usepaginationfragment) hook.

- There should be 20 repositories displayed by default.
- A the bottom, there should be a button that can load the next 20 repositories.

A possible solution can be found in `step-ii` branch.
