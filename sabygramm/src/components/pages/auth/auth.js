import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './auth.css';

export default class Auth extends Component {

    state = {
        isAuthenticated: false, //входил раньше, осталось в кэше браузера
        isRegistrated: false, //регистрировался раньше
        link: "/edit"
    }

    renderAuthPage = (link) => {
        return (
            <section className='login-container'>
                <h1 className='login-text'>вход</h1>
                <form action="/login" method="post" className='login-form'>
                    <div className='tel-wrapper'>
                        <p className="number-7">+7</p>
                        <input type="tel" name="phone-number" placeholder='Тел. номер' maxLength="10" pattern="\d*" required></input>
                    </div>
                    <input type="text" name="password" placeholder='Пароль' required></input>
                    <Link to={link} type="submit" className='login-button'><i className="fas fa-play"></i></Link>
                </form>
            </section>
        )
    }

    render() {
        const { isAuthenticated, isRegistrated, link } = this.state;

        if (isAuthenticated && isRegistrated) {
            return (<div>старинца с диалогами</div>)
        }
        else if (!isRegistrated) {
            return (this.renderAuthPage(link))
        }
        else if (!isAuthenticated && isRegistrated) { //заменить на dialig
            return (this.renderAuthPage(link))
        }
    }
}