import React from "react";
import * as S from "./style";

export type LogoProps = {
  title: string;
  color?: "light" | "dark";
};

const Logo = ({ title, color = "light" }: LogoProps) => {
  return <S.H1 color={color}>{title}</S.H1>;
};

export default Logo;
