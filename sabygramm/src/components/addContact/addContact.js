import React, { Component } from 'react';
import SabygramService from '../../services/SabygramService';
import './addContact.scss';

export default class AddContact extends Component {
service = new SabygramService();
  state = {
    placeholder: 'Добавить контакт',
    resultHidden: true,
    found: []
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
    this.service.sendDataGet(e.target.value, '')
    .then((result) => this.setState({
      found: result,
      resultHidden: false
    }))
  }

  render() {
    return (
      <form className='add-contact-form'>
        <input type="tel" className='add-contact' placeholder={this.state.placeholder} onFocus={this.changePlaceholderFocus} onBlur={this.changePlaceholderBlur} onChange={this.changePhone} />        
          <div className='add-contact-result-container' hidden={this.state.resultHidden}>
            {
              this.state.found.map((result) => {
                return (
                  <div key={result.id} className="add-contact-result">
                    <img src={result.picture} alt="avatar"></img>
                    <span>{result.name}</span>
                    <i className="fa fa-plus-circle" aria-hidden="true"></i>
                  </div>
                )
              })
          }   
          </div>
      </form>
    )
  }
}
