import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './edit.scss';



export default class Edit extends Component {
  state = {
    name: 'Ваше имя',
    message: 'Привет всем друзьям!'
  }
  renderPhoto = () => {
    console.log('фото')
  }
  setMessage = (e) => {
    const newMessage = e.target.value;
    this.setState({
      message: newMessage
    })
  }
  render() {
    return (

      <section className='edit-container'>
        <form action="/login" method="post" className='name-form'>
          <label htmlFor="file-upload" id="upload-background">
            <div className="plus">+</div>

          </label>

          <input type="file" id="file-upload" onChange={this.renderPhoto} />


          <p className='photo-label'>Фото</p>

          <input type="text" name="username" placeholder={this.state.name} required ></input>

          <input type="text" name="message" value={this.state.message} onChange={this.setMessage}></input>

          <Link to="/edit" type="submit" className='edit-button'><i className="fas fa-play"></i></Link>

        </form>
      </section>

    )
  }
}

