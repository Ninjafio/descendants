'use client'
import React, { useState, useEffect, useRef } from 'react';
import "./RadialTree.scss";

const RadialTree = () => {
  const [scaleFactor, setScaleFactor] = useState(1);
  const [positionX , setPositionX] = useState(0);
  const [positionY , setPositionY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startPosition = useRef({ x: null, y: null });
  const containerRef = useRef(null);
  useEffect(() => {
    const handleWheel = (event:any) => {
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
  const onMouseDown = (event:any) => {
    setIsDragging(true);
    startPosition.current.x = event.clientX;
    startPosition.current.y = event.clientY;
  };

  // Обработка завершения перетаскивания
  const onMouseUp = () => {
    setIsDragging(false);
  };

  // Обработка перемещения мыши
  const onMouseMove = (event:any) => {
    if (!isDragging || !startPosition.current.x || !startPosition.current.y) return;

    const deltaX = event.clientX - startPosition.current.x;
    const deltaY = event.clientY - startPosition.current.y;

    setPositionX(positionX + deltaX );
    setPositionY(positionY + deltaY  );

    startPosition.current.x = event.clientX;
    startPosition.current.y = event.clientY;
  };

  return (
    <div style={{  transform: `translate(${positionX}px, ${positionY}px) scale(${scaleFactor})`, transformOrigin: 'top left' }} 
    className="container">
      <div ref={containerRef} onMouseDown={onMouseDown} onMouseUp={onMouseUp} onMouseMove={onMouseMove}>

     
      <div className="RadialTree"  ></div>
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
    </div>
  );
};

export default RadialTree;
