import React from 'react';
import { Card } from '@kiwicom/orbit-components';
import { graphql, useFragment } from "react-relay"
import { Comment$key } from './__generated__/Comment.graphql';

type Props = {
  comment: Comment$key,
};

export const Comment = ({ comment }: Props) => {
  const data = useFragment(graphql`
    fragment Comment on DiscussionComment {
      body
      author {
        login
      }
    }
  `, comment);

  return <Card title={data.author?.login ?? 'Unknown author'} description={data.body} />
}
