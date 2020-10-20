import React from 'react';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';
import { Layout } from './layout.styles';

export default function layout({ children }) {
  return (
    <Layout>
      <Menu />
      <main>{children}</main>
      <Footer />
    </Layout>
  );
}
