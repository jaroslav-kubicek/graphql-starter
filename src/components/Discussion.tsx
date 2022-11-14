import React from 'react';

import { graphql, usePaginationFragment } from 'react-relay';

import { Discussion$key } from './__generated__/Discussion.graphql';
import { AddComment } from './AddComment';
import { Comment } from './Comment';

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
        __id
        edges {
          node {
            id
            ...Comment
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
  const connectionId = data.comments.__id;

  return (
    <>
      <AddComment discussionId={data.id} connectionId={connectionId} />
      {nodes.map((node) => (<Comment key={node.id} comment={node} />))}
    </>
  );
}
