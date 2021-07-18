import React from 'react';
import { Link } from 'react-router-dom';
import './settingPage.scss';


import contactsImg from '../../../img/1.png';
import cinemaImg from '../../../img/2.png';
import profileImg from '../../../img/3.png';

const SettingPage = () => {
    return(
        <div className="setting-page">
            <div className="link-controllers ">
                <Link to="/contacts" className="left-controller">
                    <div className="link-contain">
                        <div className="icon">
                            <img src={contactsImg} alt="Контакты" />                          
                        </div>
                        <p>Контакты</p>
                    </div>
                </Link>
                <Link to="#!">
                    <div className="link-contain">
                        <div className="icon">
                            <img src={cinemaImg} alt="Кинотеатр" />                           
                        </div>
                        <p>Кинотеатр</p>
                    </div>
                </Link>
            </div>

            <img className="profileImg" src={profileImg} alt="Фото профиля" />


            <div className="profileInfo">
                <span>Иосиф Сталин</span>
                <i className="fa fa-magic" aria-hidden="true"></i>
                <br/> 
                <br/> 
                <span>Здравствуй, товарищ!</span>
                <i className="fa fa-magic" aria-hidden="true"></i>
            </div>

            <span>SABYgramm ©</span>
        </div>
    )
}
export default SettingPage;