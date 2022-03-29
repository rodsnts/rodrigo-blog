import React from "react";

type GapProps = {
  size: any;
};

const Gap = ({ size }: GapProps) => {
  return <div style={{ height: `${size}rem` }} />;
};

export default Gap;
