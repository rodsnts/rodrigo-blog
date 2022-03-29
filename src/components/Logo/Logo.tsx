import Link from "next/link";
import React from "react";
import * as S from "./style";

export type LogoProps = {
  title: string;
  color?: "light" | "dark";
};

const Logo = ({ title, color = "light" }: LogoProps) => {
  return (
    <>
      <Link href="/">
        <a>
          <S.H1 color={color}>{title}</S.H1>
        </a>
      </Link>
    </>
  );
};

export default Logo;
