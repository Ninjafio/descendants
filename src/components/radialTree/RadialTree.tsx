import React from "react";
import "./RadialTree.scss";

const RadialTree = () => {
  return (
    <div>
      <div className="RadialTree"></div>
      <div className="cell1 l"></div>
      <div className="cell1 r"></div>

      <div className="cell2 tl"></div>
      <div className="cell2 tr"></div>
      <div className="cell2 bl"></div>
      <div className="cell2 br"></div>

      <div className="cell3 tl3">
        <div className="cell3_in"></div>
        <div className="cell3_in"></div>
      </div>
      <div className="cell3 tr3">
      </div>
      <div className="cell3 bl3">
      </div>
      <div className="cell3 br3">
      </div>
    </div>
  );
};

export default RadialTree;
