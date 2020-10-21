import React from 'react';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';
import { Layout } from './layout.styles';
import { GlobalStorage } from '../../GlobalContext/Context';
import Head from 'next/head';

export default function layout({ children, Title }) {
  return (
    <GlobalStorage>
      <Head>
        <title>Forty - {Title}</title>
      </Head>
      <Layout>
        <Menu />
        <main>{children}</main>
        <Footer />
      </Layout>
    </GlobalStorage>
  );
}
