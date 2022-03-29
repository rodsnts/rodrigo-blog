import { useState, useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Logo from "./components/Logo/Logo";
import Spinner from "./components/Spinner/Spinner";

const Home: NextPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

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
      {loading ? <Spinner /> : <Logo title="Rodrigo Santos" />}
    </>
  );
};

export default Home;
