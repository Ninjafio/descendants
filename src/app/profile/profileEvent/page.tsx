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
          <a href='/profile/profileEvent' className="conteiner__item conteiner__item--active">События</a>
          <a href='/profile/profilePhoto' className="conteiner__item">Фото</a>
          <a href='/profile/profileDocuments' className="conteiner__item">Документы</a>
        </div>
        <div className='conteiner__line'></div>
        <div className="conteiner__eby">
          <h2 className="conteiner__title">События</h2>
          <button className='eby__button'>Редактировать</button>
        </div>
        <div className="conteiner__event">
          <div className="event__block event__block--start">
            <div className="block__text ">
              <p className='block__item block__item--left block__item--first'>Рождение</p>
            </div>
            <div className="block__text">
              <p className='block__item block__item--first'>Место</p>
              <p className='block__item block__item--semiBold'>Челябинск</p>
            </div>
            <div className="block__text">
              <p className='block__item block__item--first' >Дата</p>
              <p className='block__item block__item--semiBold'>00.00.00</p>
            </div>
          </div>
          <div className="event__block">
            <div className="block__text ">
              <p className='block__item block__item--left block__item--first'>Брак</p>
            </div>
            <div className="block__text">
              <p className='block__item block__item--first'>Место</p>
              <p className='block__item block__item--semiBold'>Челябинск</p>
            </div>
            <div className="block__text">
              <p className='block__item  block__item--first'>Дата</p>
              <p className='block__item block__item--semiBold'>00.00.00</p>
            </div>
            <div className="block__text">
              <p className='block__item block__item--first'>Партнёр</p>
              <p className='block__item block__item--semiBold'>Фамилия Имя Отчество</p>
            </div>
          </div>
          <div className="event__block">
            <div className="block__text ">
              <p className='block__item block__item--left block__item--first'>Образование</p>
            </div>
            <div className="block__text">
              <p className='block__item block__item--first'>Место учёбы</p>
              <p className='block__item block__item--semiBold'>Челябинск</p>
            </div>
            <div className="block__text">
              <p className='block__item block__item--start block__item--first'>Дата начала обучения</p>
              <p className='block__item block__item--semiBold'>00.00.00</p>
               <p className='block__item'>Дата окончания обучения</p>
              <p className='block__item block__item--semiBold block__item--end'>00.00.00</p>
            </div>
            <div className="block__text">
              <p className='block__item block__item--first'>Возраст по завершении события</p>
              <p className='block__item block__item--semiBold'>00 лет 00 мес. 00 дней</p>
            </div>
          </div>
          <div className="event__block">
            <div className="block__text ">
              <p className='block__item block__item--left block__item--first'>Служба в армии</p>
            </div>
            <div className="block__text">
              <p className='block__item block__item--first'>Место</p>
              <p className='block__item block__item--semiBold'>Челябинск</p>
            </div>
            <div className="block__text">
              <p className='block__item block__item--start block__item--first' >Дата начала службы</p>
              <p className='block__item block__item--semiBold'>00.00.00</p>
               <p className='block__item'>Дата окончания службы</p>
              <p className='block__item block__item--semiBold block__item--end'>00.00.00</p>
            </div>
            <div className="block__text">
              <p className='block__item block__item--first'>Возраст по завершении события</p>
              <p className='block__item block__item--semiBold '>00 г. 00 мес. 00 дней</p>
            </div>
          </div>
          <div className="event__block event__block--end">
            <div className="block__text ">
              <p className='block__item block__item--left block__item--first'>Смерть</p>
            </div>
            <div className="block__text">
              <p className='block__item block__item--first'>Место</p>
              <p className='block__item block__item--semiBold'>Челябинск</p>
            </div>
            <div className="block__text">
              <p className='block__item block__item--first'>Дата</p>
              <p className='block__item block__item--semiBold'>00.00.00</p>
            </div>
            <div className="block__text">
              <p className='block__item block__item--first'>Партнёр</p>
              <p className='block__item block__item--semiBold'>Фамилия Имя Отчество</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileEvent