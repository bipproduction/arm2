import { ListDetailAssetsCheckout } from '@/modules/insights';
import React from 'react';

export default function Page({params}: {params: {id: string}}) {
  return (
    <ListDetailAssetsCheckout id={params.id} />
  );
}
