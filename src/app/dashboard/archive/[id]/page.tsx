import { DetailArchive } from '@/modules';
import React from 'react';

export default function Page({params}: {params: {id: string}}) {
  return (
    <DetailArchive id={params.id}/>
  );
}
