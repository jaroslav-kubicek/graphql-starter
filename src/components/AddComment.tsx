import React, { useRef } from 'react';
import { Button, Stack, InputField } from "@kiwicom/orbit-components";

type Props = {
  discussionId: string;
};

export const AddComment = ({ discussionId }: Props) => {
  const input = useRef<HTMLInputElement>(null);
  const onAdd = () => {
    if (!input.current?.value) {
      return;
    }

    // TODO call mutation to create a new comment
    console.log(input.current.value, discussionId);

    input.current.value = '';
  };

  return (
    <Stack>
      <InputField
        label="Text:"
        ref={input}
      />
      <Button onClick={onAdd}>Add comment</Button>
    </Stack>
  );
};
