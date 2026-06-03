import { Html, Head, Main, NextScript } from "next/document";

// Custom document head with fonts and manifest
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="Eduverse — World-class courses with real video lessons, reading materials, quizzes, and free certificates. Completely free forever." />
        <meta name="keywords" content="eduverse, online learning, free courses, education, video lessons, certificates" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content="Eduverse — Learn Without Limits" />
        <meta property="og:description" content="World-class courses with real video lessons, reading materials, quizzes, and free certificates. Completely free forever." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://eduverse-opal.vercel.app" />
        <meta property="og:image" content="https://eduverse-opal.vercel.app/og-image.png" />
        <meta property="og:site_name" content="Eduverse" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Eduverse — Learn Without Limits" />
        <meta name="twitter:description" content="World-class courses with real video lessons, reading materials, quizzes, and free certificates. Completely free forever." />
        <meta name="twitter:image" content="https://eduverse-opal.vercel.app/og-image.png" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
