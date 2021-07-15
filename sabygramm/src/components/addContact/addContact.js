import React, { Component } from 'react';
import './addContact.scss';

export default class AddContact extends Component {

  state = {
    placeholder: 'Добавить контакт',
    phone: ''
  }

  changePlaceholderFocus = () => {
    this.setState({
      placeholder: 'Номер телефона'
    })
  }

  changePlaceholderBlur = () => {
    this.setState({
      placeholder: 'Добавить контакт'
    })
  }

  changePhone = (e) => {
    this.setState(
      {
        phone: e.target.value
      }
    )
  }

  render() {
    return (
      <form className='add-contact-form'>
        <input className='add-contact' placeholder={this.state.placeholder} onFocus={this.changePlaceholderFocus} onBlur={this.changePlaceholderBlur} value={this.state.phone} onChange={this.changePhone} />
      </form>
    )
  }
}
