import React from 'react';
import { useLazyLoadQuery, graphql } from 'react-relay';
import Heading from "@kiwicom/orbit-components/lib/Heading";
import Stack from "@kiwicom/orbit-components/lib/Stack";

import { Discussion } from './Discussion';
import type { DashboardQuery } from './__generated__/DashboardQuery.graphql';
import { TextLink } from '@kiwicom/orbit-components';

const repoName = 'graphql-starter';
const repoOwner = 'jaroslav-kubicek';
const discussionNo = 3;
const discussionLink = `https://github.com/jaroslav-kubicek/graphql-starter/discussions/${discussionNo}`;

export const Dashboard = () => {
  const data = useLazyLoadQuery<DashboardQuery>(
      graphql`
      query DashboardQuery($repo: String!, $owner: String!, $discussion: Int!) {
        repository(name: $repo, owner: $owner) {
          discussion(number: $discussion) {
            ...Discussion
          }
        }
      }
      `,
      { repo: repoName, owner: repoOwner, discussion: discussionNo }
  );

  const discussion = data.repository?.discussion;

  return (
    <Stack>
      <Heading>Discussion <TextLink href={discussionLink} external>#3</TextLink> in {repoName}</Heading>
      {discussion && <Discussion discussion={discussion} />}
    </Stack>
  );
}
