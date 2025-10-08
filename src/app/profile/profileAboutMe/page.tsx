import React from 'react'
import "./ProfileAboutMe.scss"
import SideMenu from '@/components/sideMenu/SideMenu'
const ProfileAboutMe = () => {
  return (
    <div>
      <SideMenu />
      <div className='conteiner'>
        <h1 className='conteiner__title conteiner__title--profile'>Мой профиль</h1>
        <div className='conteiner__line'></div>
        <div className="conteiner__list">
          <a href='/' className="conteiner__item conteiner__item--active">Основное</a>
          <a href='/profile/profileEvent'className="conteiner__item">События</a>
          <a href='/profile/profilePhoto'className="conteiner__item">Фото</a>
          <a href='/profile/profileDocuments'className="conteiner__item">Документы</a>
        </div>
        <div className='conteiner__line'></div>
        <h2 className="conteiner__title">Общая информация</h2>
        <div className="conteiner__info">
          <div className="conteiner__foto"></div>
          <div className="conteiner__data">
            <p className="data__title">Фамилия Имя Отчество</p>
            <input type="text" placeholder='-' className='data__input data__input--big' />
            <div className="data__container">
              <div className=' data__container--left'>
                <p className="data__title">Дата рождения</p>
                <input type="text" placeholder='-' className='data__input' />
              </div>
              <div className=" data__conteiner--right">
                <p className="data__title">Город проживания</p>
                <input type="text" placeholder='-' className='data__input' />
              </div>
            </div>
            <div className='data__container data__container--bottom'>
              <button className='data__button data__button--left'>Изменить</button>
              <button className='data__button data__button--right'>Сохранить</button>
            </div>
          </div>
        </div>
        <h2 className="conteiner__title">Заметки</h2>
        <div className="conteiner__notes">
          <div className="notes__block"></div>
          <div className="notes__block"></div>
          <div className="notes__block"></div>
          <div className="notes__block"></div>
          <div className="notes__block"></div>
        </div>
      </div>
    </div>
  )
}

export default ProfileAboutMe