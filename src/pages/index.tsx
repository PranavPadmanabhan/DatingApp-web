/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import AuthContainer from '@/containers/authContainer';
import DetailsScreen from '@/containers/DetailsContainer';
import GetStarted from '@/containers/GetStarted';
import ImageUploadScreen from '@/containers/ImageUploadContainer';
import OtpScreen from '@/containers/OtpScreen';
import PhoneAuthContainer from '@/containers/PhoneAuthContainer';

export default function HomePage() {
  const [page, setPage] = React.useState<string>('detailsScreen');

  const GetPages = () => {
    switch (page) {
      case 'getStarted':
        return <GetStarted setPage={setPage} />;
      case 'authScreen':
        return <AuthContainer setPage={setPage} />;
      case 'phoneAuthScreen':
        return <PhoneAuthContainer setPage={setPage} previous={false} />;
      case 'otpScreen':
        return <OtpScreen setPage={setPage} />;
      case 'detailsScreen':
        return <DetailsScreen setPage={setPage} />;
      case 'imageUploadScreen':
        return <ImageUploadScreen setPage={setPage} />;
      default:
        return <PhoneAuthContainer setPage={setPage} previous={false} />;
    }
  };

  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <div className='flex h-[100vh] w-full flex-row items-center justify-start bg-black  bg-background bg-cover bg-center bg-no-repeat'>
        <div className='relative flex h-full w-[41%] flex-col items-center justify-center overflow-hidden bg-black-100 bg-blend-multiply shadow-container backdrop-blur-[15px]'>
          <GetPages />
        </div>
      </div>
    </Layout>
  );
}
