/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import GetStarted from '@/containers/GetStarted';

export default function HomePage() {
  const [page, setPage] = React.useState<string>('getStarted');

  const GetPages = () => {
    switch (page) {
      case 'getStarted':
        return <GetStarted setPage={setPage} />;
      case 'authScreen':
        return <GetStarted setPage={setPage} />;

      default:
        return <GetStarted setPage={setPage} />;
    }
  };

  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <div className='flex h-[100vh] w-full flex-row items-center justify-start bg-black  bg-background bg-cover bg-center bg-no-repeat'>
        <div className='flex h-full w-[41%] flex-col items-center justify-center overflow-hidden bg-black-100 bg-blend-multiply shadow-container backdrop-blur-[15px]'>
          <GetPages />
        </div>
      </div>
    </Layout>
  );
}
