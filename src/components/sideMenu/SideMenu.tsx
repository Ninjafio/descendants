import React from 'react'
import "./SideMenu.scss"
import profileIcon from "../profileIcon.png"
import relativeCardsIcon from "../relativeCardsIcon.png"
import materialsIcon from "../materialsIcon.png"
import settingsIcon from "../settingsIcon.png"
import Link from 'next/link'
const SideMenu = () => {
  return (
    <div className='SideMenu'>
      <h2 className='SideMenu__title SideMenu__title--paddding'>Нескучные потомки</h2>

      <div className="navigation">
        <button className="naviBut" >
          <Link href="/profile/profileAboutMe" className='naviBut__link'>
            <img className="naviButIcon" src="../profileIcon.png" alt="profileIcon" />
            Профиль
          </Link>
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