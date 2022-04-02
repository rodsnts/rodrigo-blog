import { createContext, useState, useEffect } from "react";

import client from "../graphql/client";
import GET_POSTS from "../graphql/queries/getPost";

type PostProviderProps = {
  children: React.ReactNode;
};

const initialState = {
  posts: [],
  loading: true,
};

type AppState = typeof initialState;

const PostContext = createContext<AppState>(initialState);

export const PostProvider = ({ children }: PostProviderProps) => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/posts`, {
    //   method: "GET",
    //   headers: {
    //     Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setPosts(data.data);
    //     setLoading(false);
    //   });

    const fetchGetPost = async () => {
      const { posts } = await client.request(GET_POSTS);
      setPosts(posts.data);
      setLoading(false);
    };

    fetchGetPost();
  }, []);

  return (
    <PostContext.Provider value={{ posts, loading }}>
      {children}
    </PostContext.Provider>
  );
};

export default PostContext;
