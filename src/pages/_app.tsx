import type { AppProps } from "next/app";
import Router from "next/router";
import Head from "next/head";
import NProgress from "nprogress";

import "../styles/globals.css";

import { AppLayout } from "@/layout/AppLayout";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.png" />
      </Head>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </>
  );
}
