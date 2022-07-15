import { useState, useEffect } from "react";

import type { AppProps } from "next/app";
import Head from "next/head";
import NextNProgress from "nextjs-progressbar";

import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyle } from "../styles/themes";

import { PostProvider } from "../src/context/PostContext";
import DevTools from "../src/components/DevTools/DevTools";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState("dark");
  const [isDev, setIsDev] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    window.location.href.includes("localhost") && setIsDev(true);
  }, []);

  return (
    <>
      <Head>
        <title>rodrigo - blog</title>
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
        {isDev && <DevTools />}
      </ThemeProvider>
    </>
  );
}

export default MyApp;
