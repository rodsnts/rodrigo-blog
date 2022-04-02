import React from "react";
import BlogPost from "../../src/components/BlogPost/BlogPost";
import Gap from "../../src/components/Gap/Gap";

export default function Post({ post }: any) {
  return (
    <>
      <Gap size={5} />
      <BlogPost post={post} />
    </>
  );
}

type ContextProps = {
  query: {
    pid: string;
  };
};

export async function getServerSideProps(context: ContextProps) {
  const { pid } = context.query;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/posts/${pid}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
      },
    }
  );

  const post = await response.json();

  if (!post.data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: post.data.attributes,
    },
  };
}
