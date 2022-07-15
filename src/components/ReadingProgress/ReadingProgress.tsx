import React, { useState, useEffect } from "react";
import * as S from "./style";

const ReadingProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    //on scroll
    window.addEventListener("scroll", () => {
      const scrollTop = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const bodyHeight = document.body.offsetHeight;
      const progress = Math.round(
        (scrollTop / (bodyHeight - windowHeight)) * 100
      );
      setProgress(progress);
    });
  }, [progress]);

  return <S.ReadingProgress width={progress} />;
};

export default ReadingProgress;
