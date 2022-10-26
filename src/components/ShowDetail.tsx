import React, { useState } from 'react';

import Button from '@kiwicom/orbit-components/lib/Button';
import { RepositoryDetail } from './RepositoryDetail';

export const ShowDetail = () => {
  const [isDetailShown, setShowDetail] = useState(false);

  return (
    <>
      <Button type="secondary" onClick={() => setShowDetail(!isDetailShown)}>Show Detail</Button>
      {isDetailShown && <RepositoryDetail onClose={() => setShowDetail(false)} />}
    </>
  );
}
