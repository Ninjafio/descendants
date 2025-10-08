import React from 'react'
import "./ProfileEvent.scss"
import SideMenu from '@/components/sideMenu/SideMenu'
const ProfileEvent = () => {
  return (
    <div>
      <SideMenu />
      <div className='conteiner'>
        <h1 className='conteiner__title conteiner__title--profile'>Мой профиль</h1>
        <div className='conteiner__line'></div>
        <div className="conteiner__list">
          <a href='/profile/profileAboutMe' className="conteiner__item ">Основное</a>
          <a href='/profile/profileEvent'className="conteiner__item conteiner__item--active">События</a>
          <a href='/profile/profilePhoto'className="conteiner__item">Фото</a>
          <a href='/profile/profileDocuments'className="conteiner__item">Документы</a>
        </div>
        <div className='conteiner__line'></div>
        <div className="conteiner__eby">
        <h2 className="conteiner__title">События</h2>
        <button className='eby__button'>Редактировать</button>
        </div>
           
      </div>
    </div>
  )
}

export default ProfileEvent