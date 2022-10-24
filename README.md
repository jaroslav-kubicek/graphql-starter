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

The goal of this exercise is to understand how to define data requirements for the component with `useFragment` hook.

1. Go to [Dashboard](https://github.com/jaroslav-kubicek/graphql-starter/blob/main/src/components/Dashboard.tsx) component and remove `/* eslint-disable relay/unused-fields */`
2. Fix eslint rules by asking only for fields we need
   1. you should use [useFragment](https://relay.dev/docs/api-reference/use-fragment/) in [User](https://github.com/jaroslav-kubicek/graphql-starter/blob/main/src/components/User.tsx) component and reference that fragment in the Dashboard query
2. Do not hardcode `login: "gaearon"` in the query, instead pass it as variable to the query

Possible solution can be found in `step-i` branch.
