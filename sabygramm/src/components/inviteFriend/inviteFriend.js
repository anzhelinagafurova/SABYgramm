import React, { Component } from 'react';
import SabygramService from '../../services/SabygramService';
import './inviteFriend.scss';

export default class InviteFriend extends Component {

  service = new SabygramService();
  state = {
    placeholder: 'Пригласить',
    resultHidden: true,
    defaultValue: null,
    result: {},
    loading: true
  }


  changePlaceholderFocus = () => {
    this.setState({
      placeholder: 'Имя',
      defaultValue: ""
    })
  }

  changePlaceholderBlur = () => {
    this.setState({
      placeholder: 'Пригласить',
      defaultValue: null
    })
  }

  changePhone = (e) => {
    if (e.target.value.length === 12) {
      this.setState({
        loading: true
      })
      this.service.sendDataPost({ status: 1, phone: e.target.value.slice(2) }, '/contacts')
        .then((result) => result.json())
        .then((result) => {
          this.setState({
            result,
            resultHidden: false,
            loading: false
          })
        })
    }
  }
  addContact = (e) => {
    this.service.sendDataPost({ status: 2, user2_id: this.state.result.id }, '/contacts')
      .then((result) => result.json())
      .then((result) => {
        if (result.dialog_id !== undefined) {
          alert("Пользователь добавлен в список контактов!")
        }
      })
  }
  renderResult() {
    if (this.state.result.status === 1) {
      return (
        <>
          <img src={this.state.result.image_link} alt="avatar"></img>
          <span>{this.state.result.name}</span>
          <i className="fa fa-plus-circle" aria-hidden="true" onClick={this.addContact}></i>
        </>
      )
    }
    if (this.state.result.status === 0) {
      return (
        <p>Не найдено</p>
      )
    }
    if (this.state.loading) {
      return (
        <p>Идёт поиск...</p>
      )
    }
  }
  render() {
    return (
      <form className='add-friend-form' >
        <input type="tel" className='add-friend' placeholder={this.state.placeholder} onFocus={this.changePlaceholderFocus} onBlur={this.changePlaceholderBlur} onChange={this.changePhone} maxLength="12" defaultValue={this.state.defaultValue} />
        <div className='add-friend-result-container' hidden={this.state.resultHidden}>
          <div className="add-friend-result">
            {this.renderResult()}
          </div>
        </div>
      </form>
    )
  }
}
