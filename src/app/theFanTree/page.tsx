"use client";
import React from 'react';
import './TheFanTree.scss'


const theFanTree = () => {
  const members = {
    name: 'Я',
    radius: 50,
    children: [
      {
        name: 'Мать',
        radius: 40,
        children: [
          {
            name: 'Бабушка по маме', radius: 30, children: [{
              name: 'праБабушка по маме', radius: 30, children: []
            }]
          },
          {
            name: 'Дедушка по маме', radius: 30, children: [
              {
                name: 'праДедушка по маме', radius: 30, children: []
              }
            ]
          },
        ],
      },
      {
        name: 'Отец',
        radius: 40,
        children: [
          {
            name: 'Бабушка по папе', radius: 30, children: [
              {
                name: 'праДедушка по папе', radius: 30, children: []
              }
            ]
          },
          {
            name: 'Дедушка по папе', radius: 30, children: [
              {
                name: 'праДедушка по папе', radius: 30, children: [{
                  name: 'праДедушка по папе', radius: 30, children: []
                }, {
                  name: 'праДедушка по папе', radius: 30, children: []
                }]
              }
            ]
          },
        ],
      },
    ],
  }

  const levels: any = [];
  const computePositions = (node: any, level = 0, xOffset = 500, yOffset = 0) => {
    if (!levels[level]) {
      levels[level] = [];
    }
    // Центр для текущего узла
    const x = xOffset + node.radius;
  //  const y = yOffset + node.radius;

    // Запоминаем позицию
    levels[level].push({ ...node, x, y: level * 60 }); // вертикальный интервал y: level * 100  
    let childXOffset = x - node.radius; // стартовая точка для детей
  // let childYOffset = y - node.radius; // стартовая точка для детей
    node.children.forEach((child: any) => {
      computePositions(child, level + 1, childXOffset);
      // Обновляем смещение для следующего ребенка
      childXOffset += child.radius * 2;
    //  childYOffset += y - child.radius * 0;
    });
  };

  computePositions(members);
  return (
    <div className='div1' >
      {levels.map((level: any, index: any) => (
        level.map((member: any) => (
          <div
            className='call'
            key={member.name}
            style={{
              position: 'absolute',
              top: `${member.y}px`,
              left: `${member.x + member.radius}px`,
              width: `${member.radius * 2}px`,
              height: `${member.radius * 2}px`,
              borderRadius: '50%',
              backgroundColor: '#89CFF0',
              border: '2px solid #333',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '8px',
              fontWeight: 'bold',
              // marginLeft: '40px',
              // marginRight: '40px',
            }}
          >
            {member.name}
          </div>
        ))
      ))}
    </div>
  );
};

export default theFanTree;