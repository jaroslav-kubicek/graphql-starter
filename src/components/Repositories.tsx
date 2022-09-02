import React from 'react';

import Card from "@kiwicom/orbit-components/lib/Card";
import { graphql, usePaginationFragment } from 'react-relay';
import Button from '@kiwicom/orbit-components/lib/Button';

import type { Repositories_repositories$key } from './__generated__/Repositories_repositories.graphql';

type Props = {
  repositoriesRef: Repositories_repositories$key,
};

export const Repositories = ({ repositoriesRef }: Props) => {
  const { data, hasNext, isLoadingNext, loadNext } = usePaginationFragment(
    graphql`
      fragment Repositories_repositories on User 
      @argumentDefinitions(count: { type: "Int", defaultValue: 20 }, after: { type: "String" })
      @refetchable(queryName: "RepositoriesPaginatedRefetchQuery") {
        repositories(first: $count, after: $after) @connection(key: "repositories_repositories") {
          edges {
            node {
              id
              name
              description
            }
          }
        }
      }
    `,
    repositoriesRef,
  )

  const edges = data.repositories?.edges ?? [];

  return (
    <>
      {edges.map((edge) => (
        <Card 
          key={edge?.node?.id} 
          title={edge?.node?.name} 
          description={edge?.node?.description} 
        />))}
        {hasNext && (
        <Button disabled={isLoadingNext} onClick={() => { loadNext(50) }}>Load more</Button>
        )}
    </>
  );
}
