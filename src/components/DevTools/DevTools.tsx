import React from "react";
import * as S from "./style";

const DevTools = () => {
  function clearCacheData() {
    localStorage.clear();
    sessionStorage.clear();
    caches.keys().then((names) => {
      names.forEach((name) => {
        caches.delete(name);
      });
    });
    // eslint-disable-next-line no-alert
    alert("Cache cleared");
    location.reload();
  }

  return <S.Button onClick={clearCacheData}>Clear</S.Button>;
};

export default DevTools;
