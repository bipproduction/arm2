import { DetailProjectReport } from '@/modules/insights';
import React from 'react';

export default function Page({params}: {params: {id: string}}) {
  return (
    <DetailProjectReport id={params.id}/>
  );
}
