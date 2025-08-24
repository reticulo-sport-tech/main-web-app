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

  const canonicalUrl = `${ogUrl}${router.asPath}`;
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Reticulo Sport Technology Private Limited",
    url: ogUrl,
    logo: SEO_OG_IMAGE,
    sameAs: [
      "https://twitter.com/Reticulo_Sport/",
      "https://www.youtube.com/@reticulosporttechnology",
      "https://linkedin.com/company/reticulo-sport-tech/",
      "https://www.instagram.com/reticulo_sport/",
    ],
  };
  const siteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SEO_TITLE,
    url: ogUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${ogUrl}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <Head>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={SEO_TITLE} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={"website"} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={twitterImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="theme-color" content="#6366F1" />
      <script
        async
        defer
        data-website-id="de4f108a-2fa4-4e87-ad83-1f57903729b7"
        src="https://analytics.reticulo.in/script.js"
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }} />
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
