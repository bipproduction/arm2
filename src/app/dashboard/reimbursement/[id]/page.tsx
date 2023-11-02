import { DetailReimbursement } from '@/modules/bills/view/reimbursement/detail_reimbursement';
import React from 'react';

export default function Page({params}: {params: {id: string}}) {
  return (
    <DetailReimbursement id={params.id}/>
  );
}

