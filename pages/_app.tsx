import type { AppProps } from "next/app";
import GlobalStyle from "../styles/GlobalStyle";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
      <NextNProgress
        color="#2bbc8a"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />
    </>
  );
}

export default MyApp;
