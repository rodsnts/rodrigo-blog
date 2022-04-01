import React from "react";
import Link from "next/link";

import * as S from "./style";

type PostListProps = {
  slug: string;
  datePosted: string;
  title: string;
};

const PostList = ({ datePosted, title, slug }: PostListProps) => {
  return (
    <S.PostListWrapper>
      <li>
        <time itemProp="datePublished">{datePosted}</time>
        <Link href={`/posts/${slug}`} as={`/posts/${slug}`}>
          <a>{title}</a>
        </Link>
      </li>
    </S.PostListWrapper>
  );
};

export default PostList;
