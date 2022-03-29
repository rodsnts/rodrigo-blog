import React from "react";
import Barloader from "react-spinners/Barloader";
import * as S from "./style";

const Spinner = () => {
  return (
    <S.Wraped>
      <Barloader color={"#2bbc8a"} loading={true} />
    </S.Wraped>
  );
};

export default Spinner;
