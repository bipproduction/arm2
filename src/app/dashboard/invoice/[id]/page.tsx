import { DetailInvoice } from '@/modules/bills';
import React from 'react';

export default function Page({params}: {params: {id: string}}) {
  return (
    <DetailInvoice id={params.id}/>
  );
}

