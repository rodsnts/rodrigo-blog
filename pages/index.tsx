import { useState, useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Logo from "../src/components/Logo/Logo";
import Spinner from "../src/components/Spinner/Spinner";
import Gap from "../src/components/Gap/Gap";

const Home: NextPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1800);
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
      {loading ? (
        <Spinner />
      ) : (
        <div className="body">
          <Gap size={6.4} />
          <Logo title="rodrigo." />
        </div>
      )}
    </>
  );
};

export default Home;
