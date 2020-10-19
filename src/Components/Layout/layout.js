import React from 'react';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';

export default function layout({ children }) {
  return (
    <>
      <Menu />
      <main>{children}</main>
      <Footer />
    </>
  );
}
