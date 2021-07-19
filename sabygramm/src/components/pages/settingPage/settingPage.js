import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './settingPage.scss';


import contactsImg from '../../../img/1.png';
import cinemaImg from '../../../img/2.png';
import profileImg from '../../../img/3.png';

const SettingPage = ({myUserName, myWelcomeMessage, myProfilePhoto}) => {
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

            <img className="profileImg" src={myProfilePhoto} alt="Фото профиля" />


            <form className="profileInfo">
                <input type="text" className="username-field" name="username" defaultValue={myUserName} />
                <span></span>
                <i className="fa fa-magic" aria-hidden="true"></i>
                <br/> 
                <br/> 
                <input type="text" className="message-field" name="message" defaultValue={myWelcomeMessage} />
                <i className="fa fa-magic" aria-hidden="true"></i>
            </form>

            <span>SABYgramm ©</span>
        </div>
    )
}
const mapStateToProps = ({myUserName, myWelcomeMessage, myProfilePhoto}) => {
    return{
        myUserName,
        myWelcomeMessage,
        myProfilePhoto
    }
}
export default connect(mapStateToProps)(SettingPage);