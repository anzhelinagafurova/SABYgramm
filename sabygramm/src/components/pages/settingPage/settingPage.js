import React from 'react';
import { connect } from 'react-redux';
import { readPhoto } from '../../helpers';
import { Link } from 'react-router-dom';
import SabygramService from "../../../services/SabygramService";
import './settingPage.scss';


import contactsImg from '../../../img/1.png';
import cinemaImg from '../../../img/2.png';
import pencilImg from '../../../img/3.png';
const service = new SabygramService();

const SettingPage = ({ data, setProfilePhoto, setUserName, setWelcomeMessage, clearState}) => {
    const userName = data[0];
    const greetMessage = data[1];
    const pictureUrl = data[3];

    const setPhoto = async (e) => {
        const form = e.currentTarget.closest("form");
        const photo = await readPhoto(e);
        setProfilePhoto(await photo);
        form.pictureUrl.value = await photo
    }

    const setData = async (e) => {
        e.preventDefault();
        const form = e.currentTarget;

        let userInfo = {
            name: form.username.value,
            welcome_msg: form.message.value,
            image_link: form.pictureUrl.value
        }

        service.sendDataPost(userInfo, '/edit')

        setUserName(userInfo.name);
        setWelcomeMessage(userInfo.welcome_msg);
        //this.props.setProfilePhoto(userInfo.image_link);   
    }

    const renderForm = () => {
        return(
            <form name="profileInfo" className="profileInfo" onSubmit={setData}>
                <label htmlFor="picture" id="upload-background" className="upload-background-profile">
                    <img src={pictureUrl} alt="Profile icon" className="photo-settings" />
                    <input className="profile-photo-settings" type="file" id="picture" accept="image/*" onChange={setPhoto}/>
                </label>
                <input type="text" name="pictureUrl" hidden></input> 

                <label>
                    <input type="text" className="username-field" name="username" defaultValue={userName} maxLength="25" />
                    <img src={pencilImg} alt="edit" className="settings-pencil"></img>
                </label>
                <label>
                    <input type="text" className="message-field" name="message" defaultValue={greetMessage} maxLength="200" />
                    <img src={pencilImg} alt="edit" className="settings-pencil"></img>
                </label>
                <button type="submit" className="profileInfo-button">Сохранить</button>
                <Link to="/" className="profileInfo-button exit-button" onClick={clearState}>Выйти</Link>
                <span>SABYgramm ©</span>
            </form>
        )
    }
    return(
        <div className="setting-page">
            {renderLinks()}  
            {renderForm()}
        </div>
    )
}
const renderLinks = () => {
    return (       
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
    )
}

const mapStateToProps = ({myUserName, myWelcomeMessage, myProfilePhoto}) => {
    return{
        myUserName,
        myWelcomeMessage,
        myProfilePhoto
    }
}

const mapDispatchProps = (dispatch) => {
    return {
      setProfilePhoto: (photo) => dispatch({ type: "SET_MY_PROFILE_PHOTO", payload: photo }),
      setUserName: (name) => dispatch({ type: "SET_MY_USER_NAME", payload: name }),
      setWelcomeMessage: (message) => dispatch({ type: "SET_MY_WELCOME_MESSAGE", payload: message }),
      clearState: () => dispatch({ type: "CLEAR_STATE"})
    }
  }
export default connect(mapStateToProps, mapDispatchProps)(SettingPage);