import React from 'react';
import { useLazyLoadQuery, graphql } from 'react-relay';
import type { DashboardQuery } from './__generated__/DashboardQuery.graphql';

export const Dashboard = () => {
    const data = useLazyLoadQuery<DashboardQuery>(
        graphql`
        query DashboardQuery {
            viewer {
                login
            }
        }
        `,
        {}
    );

  return (
    <div className="App">
      <header className="App-header">
        <p>{data.viewer.login}</p>
      </header>
    </div>
  );
}
