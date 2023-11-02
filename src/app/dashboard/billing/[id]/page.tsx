import { DetailBilling } from '@/modules/bills';
import React from 'react';

export default function Page({params}: {params: {id: string}}) {
  return (
    <DetailBilling id={params.id}/>
  );
}
