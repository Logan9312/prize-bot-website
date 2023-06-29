import type { PropsWithChildren } from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Script from "next/script";

const Layout = (props: PropsWithChildren) => {
  return (
    <div className="flex h-screen flex-col">
      <Head>
        <title>Prize Bot</title>
        <meta name="description" content="Discord Prize Bot" />
        <link rel="icon" href="/favicon.png" />
        <meta property="og:title" content="Discord Prize Bot" />
        <meta
          property="og:description"
          content="Manage your server's prizes with ease!"
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta lang="en" />
      </Head>
      <Script
        src="https://kit.fontawesome.com/e6ae3fbb74.js"
        crossOrigin="anonymous"
      ></Script>
      <header>
        <Navbar />
      </header>
      <main className="flex min-h-screen ">{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
