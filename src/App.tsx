import React, { Suspense } from 'react';
import {
  RelayEnvironmentProvider,
} from 'react-relay/hooks';
import { Dashboard } from './components/Dashboard';

import { createEnvironment } from './relay/environment';

function App() {
  return (
    <RelayEnvironmentProvider environment={createEnvironment()}>
      <Suspense fallback={'Loading...'}>
        <Dashboard />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default App;
