import { createContext, useState, useEffect } from "react";

type PostProviderProps = {
  children: React.ReactNode;
};

const initialState = {
  posts: [],
};

type AppState = typeof initialState;

const PostContext = createContext<AppState>(initialState);

export const PostProvider = ({ children }: PostProviderProps) => {
  const [posts, setPosts] = useState<any>([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/posts`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.data);
      });
  }, []);

  return (
    <PostContext.Provider value={{ posts }}>{children}</PostContext.Provider>
  );
};

export default PostContext;
