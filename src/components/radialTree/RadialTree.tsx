"use client";
import React, { useState, useEffect, useRef } from "react";
import QuarterRadialTree from "../quarterRadialTree/QuarterRadialTree";
import "./RadialTree.scss";

const RadialTree = () => {

  const [desc, setDesc] = useState(["Иван", "Светлана", "Дед", "Baba", "Ded2", "Baba2"])

  const [scaleFactor, setScaleFactor] = useState(1);
  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startPosition = useRef({ x: null, y: null });
  const containerRef = useRef(null);
  useEffect(() => {
    const handleWheel = (event: any) => {
      if (event.deltaY > 0 && scaleFactor >= 0.5) {
        setScaleFactor((prevScale) => prevScale - 0.1);
      } else if (event.deltaY < 0 && scaleFactor <= 2) {
        setScaleFactor((prevScale) => prevScale + 0.1);
      }
    };
    window.addEventListener("wheel", handleWheel);
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [scaleFactor]);
  // Обработка начала перетаскивания
  const onMouseDown = (event: any) => {
    setIsDragging(true);
    startPosition.current.x = event.clientX;
    startPosition.current.y = event.clientY;
  };

  // Обработка завершения перетаскивания
  const onMouseUp = () => {
    setIsDragging(false);
  };

  // Обработка перемещения мыши
  const onMouseMove = (event: any) => {
    if (!isDragging || !startPosition.current.x || !startPosition.current.y)
      return;

    const deltaX = event.clientX - startPosition.current.x;
    const deltaY = event.clientY - startPosition.current.y;

    setPositionX(positionX + deltaX);
    setPositionY(positionY + deltaY);

    startPosition.current.x = event.clientX;
    startPosition.current.y = event.clientY;
  };

  return (
    <div
      style={{
        transform: `translate(${positionX}px, ${positionY}px) scale(${scaleFactor})`,
        transformOrigin: "top left",
      }}
      className="container"
    >
      <div
        ref={containerRef}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
      >
        <div className="RadialTree"></div>
        <div className="cell1 l"></div>
        <div className="cell1 r"></div>

        <div className="temp">
        <QuarterRadialTree layers={1}>

        </QuarterRadialTree>
        </div>

        {/* <div className="cell2 tl"></div>
        <div className="cell2 tr"></div>
        <div className="cell2 bl"></div>
        <div className="cell2 br"></div>

        <div className="cell3 tl3">
          <svg
            width="100"
            height="100"
            viewBox="100 100 60 60"
            style={{
              position: "absolute",
              marginLeft: "12px",
              transform: `rotate(180deg)`,
              marginTop: "-17px",
              zIndex: "96",
            }}
          >
            <path
              d="M 100 100 L 150 128.5 A 60 60 0 0 1 100 150 Z"
              fill="#f0f0f3"
              stroke="#000"
              strokeWidth="0.5"
              className="cell3_in"
            />
          </svg>
          <svg
            width="100"
            height="100"
            viewBox="100 100 60 60"
            style={{
              position: "absolute",
              marginLeft: "-23px",
              transform: `rotate(150deg)`,
              marginTop: "42px",
              zIndex: "96",
            }}
          >
            <path
              d="M 65 65 L 150 128.5 A 70 60 0 0 1 110 160 Z"
              fill="#f0f0f3"
              stroke="#000"
              strokeWidth="0.5"
              className="cell3_in"
            />
          </svg>
          <div className="cone">
            <div
              className="cell3_in"
              style={{
                transform: `rotate(270deg)`,
                marginLeft: "-3px",
                marginTop: "-1px",
              }}
            ></div>
          </div>
          <div
            className="cell3_in"
            style={{
              transform: `rotate(225deg)`,
              marginLeft: "-1px",
              marginTop: "-3px",
            }}
          ></div> 
        </div>
        <div className="cell3 tr3">
          <svg
            width="100"
            height="100"
            viewBox="100 100 60 60"
            style={{
              position: "absolute",
              marginLeft: "-0.5px",
              transform: `rotate(180deg) scaleX(-1)`,
              marginTop: "-17px",
              zIndex: "96",
            }}
          >
            <path
              d="M 100 100 L 150 127.5 A 60 60 0 0 1 100 150 Z"
              fill="#f0f0f3"
              stroke="#000"
              strokeWidth="0.5"
              className="cell3_in"
            />
          </svg>
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
              d="M 60 65 L 143 125.5 A 70 60 0 0 1 110 160 Z"
              fill="#f0f0f3"
              stroke="#000"
              strokeWidth="0.5"
              className="cell3_in"
            />
          </svg>
        </div>
        <div className="cell3 bl3"></div>
        <div className="cell3 br3"></div> */}
      </div>
    </div>
  );
};

export default RadialTree;
