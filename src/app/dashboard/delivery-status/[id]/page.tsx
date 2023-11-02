import { DetailDeliveryStatus } from '@/modules';
import React from 'react';

function Page({params} : {params: {id: string}}) {
  return (
    <DetailDeliveryStatus id={params.id}/>
  );
}

export default Page;
