/* eslint-disable relay/unused-fields */
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
        query DashboardQuery {
          user(login: "gaearon") {
            id
            name
            twitterUsername
            avatarUrl(size: 100)
            followers {
              totalCount
            }
            following {
              totalCount
            }
          }
        }
        `,
        {}
    );

  return (
    <Stack>
      <User />
      <Heading>Repositories</Heading>
      <Repositories />
    </Stack>
  );
}
