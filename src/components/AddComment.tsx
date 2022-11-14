import React, { useRef } from 'react';
import { Button, Stack, InputField } from "@kiwicom/orbit-components";
import { graphql, useMutation } from 'react-relay';
import { AddCommentMutation } from './__generated__/AddCommentMutation.graphql';

type Props = {
  discussionId: string;
  connectionId: string;
};

export const AddComment = ({ discussionId, connectionId }: Props) => {
  const [addComment, isAddingComment] = useMutation<AddCommentMutation>(graphql`
    mutation AddCommentMutation($connections: [ID!]!, $input: AddDiscussionCommentInput!) @raw_response_type {
      addDiscussionComment(input: $input) {
        comment @prependNode(connections: $connections, edgeTypeName: "DiscussionCommentEdge") {
          ...Comment
        }
      }
    }
  `)
  const input = useRef<HTMLInputElement>(null);
  const onAdd = () => {
    if (!input.current?.value) {
      return;
    }

    addComment({ 
      optimisticResponse: {
        addDiscussionComment: {
          comment: {
            id: 'random_id',
            body: input.current.value,
            author: {
              __typename: 'Actor',
              __isNode: '',
              id: 'unknown',
              login: 'unknown',
            },
          }
        }
      }, variables: { 
        input: { body: input.current.value, discussionId }, 
        connections: [connectionId] },
    },);

    input.current.value = '';
  };

  return (
    <Stack>
      <InputField
        label="Text:"
        ref={input}
      />
      <Button loading={isAddingComment} onClick={onAdd}>Add comment</Button>
    </Stack>
  );
};
