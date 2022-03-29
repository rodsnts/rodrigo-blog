import React from "react";
import Barloader from "react-spinners/Barloader";
import * as S from "./style";

const Spinner = () => {
  return (
    <S.Wraped>
      <S.Loader></S.Loader>
    </S.Wraped>
  );
};

export default Spinner;
