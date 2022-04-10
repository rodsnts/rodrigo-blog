import { useContext } from "react";

import type { NextPage } from "next";

import Logo from "../src/components/Logo/Logo";
import Spinner from "../src/components/Spinner/Spinner";
import Gap from "../src/components/Gap/Gap";
import PostList from "../src/components/PostList/PostList";
import PostContext from "../src/context/PostContext";

const Home: NextPage = () => {
  const { posts, loading } = useContext(PostContext);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="body">
          <Gap size={5} />
          <Logo title="rodrigo." />
          <div className="content">
            {posts.map((post: any) => (
              <PostList key={post.id} {...post.attributes} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
