import React, { Component } from "react";
import { connect } from "react-redux";
import SabygramService from "../../../services/SabygramService";

import './auth.scss';

class Auth extends Component {
    service = new SabygramService();

    state = {
        phone: '', 
        password: ''
    }

    renderAuthPage = () => {
        
        return (
            <section className='login-container'>
                <h1 className='login-text'>вход</h1>
                <form className='login-form' onSubmit={this.sendForm}>
                    <div className='tel-wrapper'>
                        <p className="number-7">+7</p>
                        <input type="tel" name="phoneNumber" placeholder='Тел. номер' maxLength="10" pattern="\d*" required></input>
                    </div>
                    <input type="password" name="password" placeholder='Пароль' maxLength="12" required></input>
                    <button type="submit" className='login-button'><i className="fas fa-play" ></i></button>
                </form>
            </section>
        )
    }
    sendForm = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const {setProlifePhoto, setUserName, setWelcomeMessage} = this.props;
        let userInfo = {
            phone: form.phoneNumber.value,
            password: form.password.value
        };
        this.service.sendDataPost(userInfo, '')
        .then((result) => result.json())
        .then((answer) => {
            if(answer.status === 0){
                setUserName(answer.name)
                setWelcomeMessage(answer.welcome_msg)
                setProlifePhoto(answer.image_link)
                const { history } = this.props;
                history.push('/dialogs');
            }
            if(answer.status === 1) {
                alert("Password is incorrect!")
            }
            if(answer.status === 2) {
                const { history } = this.props;
                history.push('/edit');
            }
        })
        
    }

    render() {
        return(
            this.renderAuthPage()
        )
    }
}
const mapStateToProps = ({ myUserName, myWelcomeMessage, myProfilePhoto }) => {
    return { 
        myUserName, myWelcomeMessage, myProfilePhoto 
    }
}

const mapDispatchProps = (dispatch) => {
    return {
        setPhone: (e) => {
            const newPhone = e.target.value;
            dispatch({ type: "SET_MY_PASSWORD", payload: newPhone })
        },
        setPassword: (e) => {
            const newPassword = e.target.value;
            dispatch({ type: "SET_MY_PHONE", payload: newPassword })
        },
        setProlifePhoto: (photo) => {
            dispatch({ type: "SET_MY_PROFILE_PHOTO", payload: photo })
        },
        setUserName: (name) => {
            dispatch({ type: "SET_MY_USER_NAME", payload: name })
        },
        setWelcomeMessage: (message) => {
            dispatch({ type: "SET_MY_WELCOME_MESSAGE", payload: message })
        },
    }
}

export default connect(mapStateToProps, mapDispatchProps)(Auth);
