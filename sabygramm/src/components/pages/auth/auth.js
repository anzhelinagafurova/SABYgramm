import React, { Component } from "react";
import { connect } from "react-redux";


import './auth.scss';

class Auth extends Component {

    renderAuthPage = () => {
        const {password, phone} = this.props;
        return (
            <section className='login-container'>
                <h1 className='login-text'>вход</h1>
                <form onSubmit={this.sendForm} className='login-form' method="POST" action="">  {/* сюда в action указать путь до файла-обработчика */ }
                    <div className='tel-wrapper'>
                        <p className="number-7">+7</p>
                        <input type="tel" name="phone-number" placeholder='Тел. номер' value={phone} onChange = {this.props.setPhone} maxLength="10" pattern="\d*" required></input>
                    </div>
                    <input type="text" name="password" placeholder='Пароль' onChange = {this.props.setPassword} value={password} required></input>
                    <button type="submit" className='login-button'><i className="fas fa-play" ></i></button>
                </form>
            </section>
        )
    }
    sendForm = () => {
        const {history} = this.props;
        history.push('/edit')      
    }

    render() {
        const { isAuthenticated, isRegistrated} = this.props;
        if (isAuthenticated && isRegistrated) {
            return (<div>старинца с диалогами</div>)
        }
        else if (!isRegistrated) {
            return (this.renderAuthPage("/edit"))
        }
        else if (!isAuthenticated && isRegistrated) { //заменить на dialig
            return (this.renderAuthPage("/edit"))
        }
    }
}
const mapStateToProps = ({isAuthenticated,isRegistrated}) => {
    return{
        isAuthenticated,
        isRegistrated
    }
}

const mapDispatchProps = (dispatch) => {
    return {
        setPhone: (e) => {
            const newPhone = e.target.value;
            dispatch({type:"SET_MY_PASSWORD", payload: newPhone})
            },
        setPassword: (e) => {
            const newPassword = e.target.value;
            dispatch({type:"SET_MY_PHONE", payload:newPassword})
        }
    }
  }

export default connect(mapStateToProps,mapDispatchProps)(Auth);
