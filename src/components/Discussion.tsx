import React from 'react';

import Card from "@kiwicom/orbit-components/lib/Card";
import { graphql, usePaginationFragment } from 'react-relay';

import { Discussion$key } from './__generated__/Discussion.graphql';

type Props = {
  discussion: Discussion$key;
};

export const Discussion = ({ discussion }: Props) => {
  const { data } = usePaginationFragment(graphql`
    fragment Discussion on Discussion
    @argumentDefinitions(count: { type: "Int", defaultValue: 20 }, after: { type: "String" })
    @refetchable(queryName: "DiscussionPaginatedRefetchQuery") {
      comments(first: $count, after: $after) @connection(key: "Discussions_comments") {
        edges {
          node {
            id
            body
            author {
              login
            }
          }
        }
      }
    },
  `, discussion)

  const nodes = data.comments.edges?.flatMap((edge) => edge?.node ? [edge.node] : []) ?? [];

  return (
    <>
      {nodes.map((node) => (<Card key={node.id} title={node.author?.login} description={node.body} />))}
    </>
  );
}
