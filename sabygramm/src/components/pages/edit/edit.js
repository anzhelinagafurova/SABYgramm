import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './edit.css';


export default class Edit extends Component {
  state = {
    name: 'Ваше имя',
  }

  render() {
    return (

      <section className='edit-container'>
        <form action="/login" method="post" className='name-form'>
          <label htmlFor="file-upload" className="upload-background">
            <div className="plus">+</div>

          </label>

          <input type="file" id="file-upload" onChange={() => { console.log('sdsd') }} />


          <p className='photo-label'>Фото</p>

          <input type="text" name="username" placeholder={this.state.name} required ></input>

          <Link to="/edit" type="submit" className='edit-button'><i className="fas fa-play"></i></Link>

        </form>
      </section>

    )
  }
}

