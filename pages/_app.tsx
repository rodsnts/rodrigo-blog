import { useState } from "react";

import type { AppProps } from "next/app";
import Head from "next/head";
import NextNProgress from "nextjs-progressbar";

import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyle } from "../styles/themes";

import { PostProvider } from "../src/context/PostContext";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <Head>
        <title>rodrigo.</title>
        <meta name="description" content="Just my dev blog :)" />
        <link
          rel="preload"
          href="/fonts/Menlo-Regular.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
      </Head>
      <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
        <GlobalStyle />
        <PostProvider>
          <Component {...pageProps} />
        </PostProvider>
        <NextNProgress
          color="#2bbc8a"
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
        />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
