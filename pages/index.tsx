import type { NextPage } from "next";
import Head from "next/head";
import Logo from "./components/Logo/Logo";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Rodrigo Santos</title>
        <meta name="description" content="Just my dev blog :)" />
        <link
          rel="preload"
          href="/fonts/Menlo-Regular.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
      </Head>
      <Logo title="Rodrigo Santos" />
    </>
  );
};

export default Home;
