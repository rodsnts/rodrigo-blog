import { useState, useEffect } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import Logo from "../src/components/Logo/Logo";
import Spinner from "../src/components/Spinner/Spinner";
import Gap from "../src/components/Gap/Gap";
import PostList from "../src/components/PostList/PostList";

const Home: NextPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1100);
  }, []);

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
      {loading ? (
        <Spinner />
      ) : (
        <div className="body">
          <Gap size={6} />
          <Logo title="rodrigo." />
          {/* <Image
            src="https://images.pexels.com/photos/8698152/pexels-photo-8698152.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=2048&w=2048"
            alt="photo"
            layout="fill"
            blurDataURL={
              "https://images.pexels.com/photos/8698152/pexels-photo-8698152.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=5&w=940"
            }
            placeholder="blur"
          /> */}
          <Gap size={3.4} />
          <PostList
            date="2022-03-30"
            title="Hi, this is my first blog post 🙃"
          />
        </div>
      )}
    </>
  );
};

export default Home;
