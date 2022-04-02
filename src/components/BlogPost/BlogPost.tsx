import React from "react";
import ReactMarkdown from "react-markdown";
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
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </S.PostListWrapper>
  );
};

export default BlogPost;
