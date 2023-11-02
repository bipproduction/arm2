import { ViewLayout } from '@/modules/_global';
import React from 'react';

function Layout({children}: {children: React.ReactNode}) {
  return (
    <>
    <ViewLayout>
      {children}
    </ViewLayout>
    </>
  );
}

export default Layout;
