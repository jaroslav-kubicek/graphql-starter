import React from 'react';

import Card from "@kiwicom/orbit-components/lib/Card";
import { graphql, usePaginationFragment } from 'react-relay';

import { Discussion$key } from './__generated__/Discussion.graphql';
import { AddComment } from './AddComment';

type Props = {
  discussion: Discussion$key;
};

export const Discussion = ({ discussion }: Props) => {
  const { data } = usePaginationFragment(graphql`
    fragment Discussion on Discussion
    @argumentDefinitions(count: { type: "Int", defaultValue: 20 }, after: { type: "String" })
    @refetchable(queryName: "DiscussionPaginatedRefetchQuery") {
      id
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

  const nodes = data.comments.edges?.flatMap((edge) => {
    if (edge === null) {
      console.error('CommentEdge is null!');

      return [];
    }

    if (edge.node === null) {
      console.error('Comment node is null!');

      return [];
    }

    return [edge.node];
  }) ?? [];

  return (
    <>
      <AddComment discussionId={data.id} />
      {nodes.map((node) => (<Card key={node.id} title={node.author?.login} description={node.body} />))}
    </>
  );
}
