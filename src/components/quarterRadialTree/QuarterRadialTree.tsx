import React from "react";
import Section from "../section/Section";

const QuarterRadialTree = ({desc}: IQuarterProps) => {

  return (
    <>
    {
        desc.map(desc, () => {
            <Section change1={140} change2={130} change3={100} change4={100}></Section>
        })
    }
    </>
  );
};

export default QuarterRadialTree;
