import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    return await Document.getInitialProps(ctx);
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Favicon: use Reticulo logo */}
          <link rel="icon" href="/reticulo-logo-dark.png" type="image/png" />
          <link
            rel="shortcut icon"
            href="/reticulo-logo-dark.png"
            type="image/png"
          />
          {/* Set initial color mode before hydration to avoid flash/mismatch */}
          <script
            dangerouslySetInnerHTML={{
              __html: `(() => {
  try {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldDark = stored ? stored === 'dark' : prefersDark;
    const root = document.documentElement;
    if (shouldDark) root.classList.add('dark'); else root.classList.remove('dark');
  } catch (e) { /* no-op */ }
})();`,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
