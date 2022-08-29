import React from 'react';

import Card from "@kiwicom/orbit-components/lib/Card";

// FIXME: use real data here
export const Repositories = () => {
  return (
    <>
      {[...new Array(5)].map((_item, key) => (<Card key={key} title="Repository name" description="Description" />))}
    </>
  );
}
