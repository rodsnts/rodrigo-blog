import { createContext, useState, useEffect } from "react";

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
  const [loading, setLoading] = useState<any>(true);
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
        setLoading(false);
      });
  }, []);

  return (
    <PostContext.Provider value={{ posts, loading }}>
      {children}
    </PostContext.Provider>
  );
};

export default PostContext;
