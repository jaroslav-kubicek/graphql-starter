import React from "react";

import Card from "@kiwicom/orbit-components/lib/Card";
import Stack from "@kiwicom/orbit-components/lib/Stack";
import Text from "@kiwicom/orbit-components/lib/Text";
import TextLink from "@kiwicom/orbit-components/lib/TextLink";

// FIXME: use real data here
export const User = () => {
  return (
    <Card 
      icon={<img alt="user" src="https://avatars.githubusercontent.com/u/810438?s=100&u=36b11d1db9c2380295b4371a98de87ab6b4c898f&v=4" />}
      header={(
        <Stack align="center" inline justify="end" >
          <TextLink href="https://twitter.com/twitterHandle">@twitterHandle</TextLink>
          <Text>Followers: 123</Text>
          <Text>Following: 45</Text>
        </Stack>
      )}
    />
  );
}
