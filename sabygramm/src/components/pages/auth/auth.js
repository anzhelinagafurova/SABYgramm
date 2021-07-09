import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './auth.css';

export default class Auth extends Component {

    state = {
        isAuthenticated: false, //входил раньше, осталось в кэше браузера
        isRegistrated: false, //регистрировался раньше
    }

    render() {
        const { isAuthenticated, isRegistrated } = this.state;

        if (isAuthenticated && isRegistrated) {
            return (
                <div>старинца с диалогами</div>
            )
        }

        else if (!isRegistrated) {
            return (
                <section className='login-container'>
                    <h1 className='login-text'>вход</h1>
                    <form action="/login" method="post" className='login-form'>
                        <div className='tel-wrapper'>
                            <p className="number-7">+7</p>
                            <input type="tel" name="phone-number" placeholder='Тел. номер' maxLength="10" pattern="\d*" required></input>
                        </div>
                        <input type="text" name="password" placeholder='Пароль' required></input>
                        <Link to="/edit" type="submit" className='login-button'><i className="fas fa-play"></i></Link>

                    </form>
                </section>
            )
        }
        else if (!isAuthenticated && isRegistrated) { //в Link to на диалоги
            return (
                <section className='login-container'>
                    <h1 className='login-text'>вход</h1>
                    <form action="/login" method="post" className='login-form'>
                        <div className='tel-wrapper'>
                            <p className="number-7">+7</p>
                            <input type="tel" name="phone-number" placeholder='Тел. номер' maxLength="10" pattern="\d*" required></input>
                        </div>
                        <input type="text" name="password" placeholder='Пароль' required></input>
                        <Link to="/edit" type="submit" className='login-button'><i className="fas fa-play"></i></Link>
                    </form>
                </section>
            )
        }
    }
}