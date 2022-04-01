import { useContext } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Logo from "../src/components/Logo/Logo";
import Spinner from "../src/components/Spinner/Spinner";
import Gap from "../src/components/Gap/Gap";
import PostList from "../src/components/PostList/PostList";
import PostContext from "../src/context/PostContext";

const Home: NextPage = () => {
  const { posts, loading } = useContext<any>(PostContext);

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
          <Gap size={5} />
          <Logo title="rodrigo." />
          {posts.map((post: any) => (
            <PostList key={post.id} {...post.attributes} />
          ))}
        </div>
      )}
    </>
  );
};

export default Home;
