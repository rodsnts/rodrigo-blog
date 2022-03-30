import React from "react";
import Link from "next/link";

import * as S from "./style";

type PostListProps = {
  date: string;
  title: string;
};

const PostList = ({ date, title }: PostListProps) => {
  return (
    <S.PostListWrapper>
      <li>
        <time dateTime={new Date(date).toISOString()} itemProp="datePublished">
          {date}
        </time>
        <Link href={`/posts/${title}`}>
          <a>{title}</a>
        </Link>
      </li>
    </S.PostListWrapper>
  );
};

export default PostList;
