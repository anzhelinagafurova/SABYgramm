import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './edit.css';


export default class Edit extends Component {
  state = {
    name: 'Ваше имя',
  }
  renderPhoto = () => {
    console.log('фото')
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

          <Link to="/edit" type="submit" className='edit-button'><i className="fas fa-play"></i></Link>

        </form>
      </section>

    )
  }
}

