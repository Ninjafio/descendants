import React from "react";

const Section = ({change1, change2, change3, change4}: IShapeProps) => {
  return (
    <svg
      width="100"
      height="100"
      viewBox="100 100 60 60"
      style={{
        position: "absolute",
        marginLeft: "30px",
        transform: `rotate(295deg)`,
        marginTop: "10px",
        zIndex: "96",
      }}
    >
      <path
        d={`M ${change3} ${change4} L  ${change1} ${change2}  A 60 60 0 0 1 100 150 Z`}
        fill="#f0f0f3"
        stroke="#000"
        strokeWidth="0.5"
        className="cell3_in"
      />
    </svg>
  );
};

export default Section;
