import React from "react";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { CopyBlock, vs2015 } from "react-code-blocks";
import * as S from "./style";

type BlogPostProps = {
  post: {
    content: string;
    datePosted: string;
    postedBy: string;
    title: string;
  };
};

const BlogPost = ({ post }: BlogPostProps) => {
  return (
    <S.PostListWrapper>
      <S.Title>{post.title}</S.Title>
      <S.PostInfo>
        <S.User>{post.postedBy}</S.User>
        <S.PostTime>{post.datePosted}</S.PostTime>
      </S.PostInfo>
      <ReactMarkdown
        components={{
          img: (props: any) => (
            <Image
              {...props}
              layout="responsive"
              width={1920}
              height={1080}
              alt={post.title}
            />
          ),
          code: (props: any) => (
            <CopyBlock
              text={props.children}
              showLineNumbers
              language="typescript"
              theme={vs2015}
            />
          ),
        }}
      >
        {post.content}
      </ReactMarkdown>
    </S.PostListWrapper>
  );
};

export default BlogPost;
