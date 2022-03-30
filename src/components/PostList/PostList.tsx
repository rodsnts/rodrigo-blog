import React from "react";
import Link from "next/link";

import * as S from "./style";

type PostListProps = {
  slug: string;
  date: string;
  title: string;
};

const PostList = ({ date, title, slug }: PostListProps) => {
  return (
    <S.PostListWrapper>
      <li>
        <time itemProp="datePublished">{date}</time>
        <Link href={`/posts/${slug}`}>
          <a>{title}</a>
        </Link>
      </li>
    </S.PostListWrapper>
  );
};

export default PostList;
