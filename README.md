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

The goal of this exercise is to show a paginated list of pull requests for the given repository in a modal dialog when a user clicks on "Show Detail".

- Try to use [usePreloadedQuery](https://relay.dev/docs/api-reference/use-preloaded-query/) -> data should be fetched already when a user hovers over the "Show Detail" button.
