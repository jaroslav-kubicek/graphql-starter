import React from "react";
import { useFragment, graphql } from 'react-relay';

import Card from "@kiwicom/orbit-components/lib/Card";
import Stack from "@kiwicom/orbit-components/lib/Stack";
import Text from "@kiwicom/orbit-components/lib/Text";
import TextLink from "@kiwicom/orbit-components/lib/TextLink";

import type { User_user$key } from "./__generated__/User_user.graphql";

type Props = {
  userRef: User_user$key
};

export const User = ({ userRef }: Props) => {
  const user = useFragment(
    graphql`
      fragment User_user on User {
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
    `,
    userRef,
  );

  return (
    <Card 
      icon={<img alt={user.name ?? "user avatar"} src={user.avatarUrl} />}
      header={(
        <Stack align="center" inline justify="end" >
          <TextLink href={`"https://twitter.com/${user.twitterUsername}`}>@{user.twitterUsername}</TextLink>
          <Text>Followers: {user.followers.totalCount}</Text>
          <Text>Following: {user.following.totalCount}</Text>
        </Stack>
      )}
    />
  );
}
