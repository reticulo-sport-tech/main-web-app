import { Box } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { ReactNode } from "react";

import {
  SEO_TITLE,
  SEO_DESCRIPTION,
  SEO_KEYWORDS,
  SEO_OG_IMAGE,
  SEO_TWITTER_IMAGE,
  PRODUCTION_URL,
} from "../constants";

export type SEOProps = {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
};

export const SEO = ({
  description = SEO_DESCRIPTION,
  keywords = SEO_KEYWORDS,
  title = SEO_TITLE,
  ogImage = SEO_OG_IMAGE,
  ogUrl = PRODUCTION_URL,
  twitterImage = SEO_TWITTER_IMAGE,
}: SEOProps) => {
  const router = useRouter();

  return (
    <Head>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={SEO_TITLE} />
      <meta property="og:url" content={`${ogUrl}${router.asPath}`} />
      <meta property="og:type" content={"website"} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={twitterImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <script
        async
        defer
        data-website-id="de4f108a-2fa4-4e87-ad83-1f57903729b7"
        src="https://analytics.reticulo.in/script.js"
      />
    </Head>
  );
};

type SEOWrapperProps = SEOProps & { children: ReactNode };

export const SEOWrapper = (props: SEOWrapperProps) => {
  return (
    <Box>
      <SEO {...props} />
      {props.children}
    </Box>
  );
};
