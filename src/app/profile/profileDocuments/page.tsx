import React from 'react'
import "./ProfileDocuments.scss"
import SideMenu from '@/components/sideMenu/SideMenu'
const ProfileDocuments = () => {
  return (
    <div>
      <SideMenu />
      <div className='conteiner'>
        <h1 className='conteiner__title conteiner__title--profile'>Мой профиль</h1>
        <div className='conteiner__line'></div>
        <div className="conteiner__list">
          <a href='/profile/profileAboutMe' className="conteiner__item ">Основное</a>
          <a href='/profile/profileEvent' className="conteiner__item ">События</a>
          <a href='/profile/profilePhoto' className="conteiner__item ">Фото</a>
          <a href='/profile/profileDocuments' className="conteiner__item conteiner__item--active">Документы</a>
        </div>
        <div className='conteiner__line'></div>
        <div className="conteiner__edit">
          <h2 className='conteiner__title'>Файлы</h2>
          <button className="edit__buttno edit__buttno--left">Редактировать</button>
          <button className="edit__buttno edit__buttno--right">Загрузить еще</button>
        </div>
        <div className="conteiner__gallery">
          <div className="gallery__block">
            <div className="gallery__foto"></div>
            <p className="gallery__text">Подпись</p>
          </div>
          <div className="gallery__block">
            <div className="gallery__foto"></div>
            <p className="gallery__text">Подпись</p>
          </div>
          <div className="gallery__block">
            <div className="gallery__foto"></div>
            <p className="gallery__text">Подпись</p>
          </div>
          <div className="gallery__block">
            <div className="gallery__foto"></div>
            <p className="gallery__text">Подпись</p>
          </div>
          <div className="gallery__block">
            <div className="gallery__foto"></div>
            <p className="gallery__text">Подпись</p>
          </div>
         
         
        </div>
      </div>
    </div>
  )
}

export default ProfileDocuments