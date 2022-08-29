import React, { Suspense } from 'react';
import {
  RelayEnvironmentProvider,
} from 'react-relay/hooks';
import Layout, { LayoutColumn } from "@kiwicom/orbit-components/lib/Layout";

import { Dashboard } from './components/Dashboard';

import { createEnvironment } from './relay/environment';
import { ErrorBoundary } from './components/ErrorBoundary';

function App() {
  return (
    <RelayEnvironmentProvider environment={createEnvironment()}>
      <Layout type="MMB">
        <LayoutColumn>
          <Suspense fallback={'Loading...'}>
            <ErrorBoundary>
              <Dashboard />
            </ErrorBoundary>
          </Suspense>
        </LayoutColumn>
      </Layout>
    </RelayEnvironmentProvider>
  );
}

export default App;
