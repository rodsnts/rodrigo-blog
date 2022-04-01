import React from "react";

export default function Post({ post }: any) {
  console.log(post);
  return (
    <div>
      <h1>{post.content}</h1>
    </div>
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

  return {
    props: {
      post: post?.data.attributes,
    },
  };
}
