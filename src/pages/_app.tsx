import type { AppType } from 'next/app';
import { trpc } from '../utils/trpc';
import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';
import '~/styles/globals.css';

export type NextPageWithLayout<
  TProps = Record<string, unknown>,
  TInitialProps = TProps,
> = NextPage<TProps, TInitialProps> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default trpc.withTRPC(MyApp);
