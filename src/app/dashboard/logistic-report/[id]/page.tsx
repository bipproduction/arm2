import { DetailLogisticReport } from '@/modules/insights';
import React from 'react';

export default function Page({params}: {params: {id: string}}) {
  return (
    <DetailLogisticReport id={params.id}/>
  );
}

