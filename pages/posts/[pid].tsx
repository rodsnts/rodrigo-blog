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
  params: {
    pid: string;
  };
};

export async function getStaticProps({ params }: ContextProps) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/posts/${params.pid}`,
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
      post: post.data.attributes,
    },
  };
}

export async function getStaticPaths() {
  const posts = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/posts`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
    },
  });

  const postsList = await posts.json();

  const paths = postsList.data.map((post: any) => ({
    params: {
      pid: post.attributes.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}
