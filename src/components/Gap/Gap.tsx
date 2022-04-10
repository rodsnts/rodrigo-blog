import React from "react";

type GapProps = {
  size: number;
};

const Gap = ({ size }: GapProps) => {
  return <div style={{ height: `${size}rem` }} />;
};

export default Gap;
