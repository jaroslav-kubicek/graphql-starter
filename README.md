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

The goal of this exercise is to fix TODO comment in `AddComment` component:

1. Use `addDiscussionComment` mutation to add new comments to the discussion.
2. Whenever a new comment is successfully added, update the list below the form so a new comment is shown either at the top or bottom. Use [Relay directives to update the connection](https://relay.dev/docs/guided-tour/list-data/updating-connections/#using-declarative-directives).
3. Add optimistic update to provide immediate feedback to a user.
4. Optional tasks: 
   1. Move `AddComment` to `Dashboard` component: does it change anything?
   2. Do not rely on Relay directives, can you add a new comment imperatively in the updater function?

Possible solution can be found in `mutations-solution` branch.
