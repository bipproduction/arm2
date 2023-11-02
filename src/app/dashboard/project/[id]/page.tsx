import { DetailProjectStatus } from '@/modules';
import React from 'react';

function Page({params} : {params: {id: string}}) {
  return (
    <DetailProjectStatus id={params.id}/>
  );
}

export default Page;
