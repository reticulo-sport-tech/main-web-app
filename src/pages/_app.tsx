import { useEffect } from "react";
import type { AppProps } from "next/app";
import Router from "next/router";
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import NProgress from "nprogress";
import PlausibleProvider from "next-plausible";

import "@fontsource/poppins/500.css";
import "@fontsource/poppins/700.css";

import { theme } from "../theme";
import { AppLayout } from "@/layout/AppLayout";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const inIframe = () => window.location !== window.parent.location;

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Do not initialize splitbee for iframe previews
    if (!inIframe()) {
      // splitbee.init();
    }

    // Necessary because otherwise 100% body height will break the template preview
    document.body.classList.add("body");
  }, []);

  return (
    <PlausibleProvider
      domain="reticulo.in"
      selfHosted={true}
      customDomain="https://analytics.reticulo.in"
      trackOutboundLinks={true}
      enabled={false}
    >
      <ChakraProvider theme={theme}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="shortcut icon" type="image/x-icon" href="/favicon.png" />
        </Head>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </ChakraProvider>
    </PlausibleProvider>
  );
}

export default App;
