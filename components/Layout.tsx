import React from "react";
import Head from "next/head";
import HeaderPrismic from './HeaderPrismic';

const Layout = ({ children, menu }) => {
  return (
    <div>
      <Head>
        <title> Prismic Next.js Multi Page Website </title>
      </Head>
      <HeaderPrismic menu={menu} />
      <main>{children}</main>
      <style jsx>{`
        div {
          width: 100%;
          height: 100%;
        }
        
        `}</style>
    </div>
  );
};

export default Layout;