// FIXME: uncomment the line above and fix issues
import React from 'react';
import { useLazyLoadQuery, graphql } from 'react-relay';
import Heading from "@kiwicom/orbit-components/lib/Heading";
import Stack from "@kiwicom/orbit-components/lib/Stack";

import { User } from './User';
import { Repositories } from './Repositories';
import type { DashboardQuery } from './__generated__/DashboardQuery.graphql';

export const Dashboard = () => {
  const data = useLazyLoadQuery<DashboardQuery>(
      graphql`
      query DashboardQuery($login: String!) {
        user(login:$login) {
          ...User_user
          ...Repositories_repositories
        }
      }
      `,
      { login: "gaearon" },
  );

  return (
    <Stack>
      {data.user ? <User userRef={data.user} /> : null}
      <Heading>Repositories</Heading>
      {data.user ? <Repositories repositoriesRef={data.user} /> : null}
    </Stack>
  );
}
