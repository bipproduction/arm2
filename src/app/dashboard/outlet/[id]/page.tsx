import { DetailOutlet } from '@/modules/insights';
import React from 'react';

export default function Page({params}: {params: {id: string}}) {
  return (
    <DetailOutlet id={params.id}/>
  );
}
