import React, { Component } from "react";
import { NavLink, Link } from 'react-router-dom';
import './edit.css';


export default class Edit extends Component {
  state = {
    name: 'Ваше имя',
  }

  render() {
    return (

      <section className='edit-container'>
        <form action="/login" method="post" className='name-form'>
          <label for="file-upload" class="upload-background">
            <div class="plus">+</div>

          </label>

          <input type="file" id="file-upload" />


          <p className='photo-label'>Фото</p>

          <input type="text" name="username" placeholder={this.state.name} required ></input>

          <Link to="/edit" type="submit" className='edit-button'><i class="fas fa-play"></i></Link>

        </form>
      </section>

    )
  }
}

