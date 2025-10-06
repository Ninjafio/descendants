import React from 'react'
import "./SideMenu.scss"
import profileIcon from "../profileIcon.png"
import relativeCardsIcon from "../relativeCardsIcon.png"
import materialsIcon from "../materialsIcon.png"
import settingsIcon from "../settingsIcon.png"

const SideMenu = () => {
  return (
    <div className='SideMenu'>
        <h2 className='SideMenu__title'>Нескучные потомки</h2>

        <div className="navigation">
          <button className="naviBut">
            <img className="naviButIcon" src="../profileIcon.png" alt="profileIcon" />
          Профиль
          </button>

          <button className="naviBut">
            <img className="naviButIcon" src="../materialsIcon.png" alt="materialIcon" />
          Полезные материалы
          </button>

          <button className="naviBut">
            <img className="naviButIcon" src="../relativeCardsIcon.png" alt="relativeCardsIcon" />
          Карточки близких
          </button>

          <button className="naviBut">
            <img className="naviButIcon" src="../settingsIcon.png" alt="settings" />
          Настройки
          </button>
        </div>

        <h2 className='treeConstructorTitle'>Ваши деревья</h2>

        <div className="consrtructor">
          
        </div>
    </div>
  )
}

export default SideMenu