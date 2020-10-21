import React from 'react';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';
import { Layout } from './layout.styles';
import { GlobalStorage } from '../../GlobalContext/Context';

export default function layout({ children }) {
  return (
    <GlobalStorage>
      <Layout>
        <Menu />
        <main>{children}</main>
        <Footer />
      </Layout>
    </GlobalStorage>
  );
}
