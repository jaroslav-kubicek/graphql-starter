# GraphQL/Relay starter

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Up & running

First of all, you need to set GitHub Auth token, you can generate one in [GitHub settings](https://github.com/settings/tokens):

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

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
