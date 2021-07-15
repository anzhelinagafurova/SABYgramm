import React, { Component } from "react";
import { connect } from "react-redux";
import './edit.css';

class Edit extends Component {

  setPhoto = (e) => {
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.props.setProfilePhoto(reader.result);
    }
    reader.onerror = () => {
      alert("Возникла ошибка при загрузке фотографии")
    }
  }

  setData = (e) => {
    e.preventDefault();
    this.props.setUserName(e.target[1].value);
    this.props.setWelcomeMessage(e.target[2].value);

    if(!this.props.photo) {
      const newPhotoSvg = (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" >
          <circle cx="130" cy="130" r="130"  fill="#738DED" width="200" />
          <text x="70" y="190" fontSize="180" fontFamily="Roboto, sans-serif" fill="white">{this.props.name[0]}</text>     
        </svg>
      )
      let blob = new Blob([newPhotoSvg], {type: 'image/svg+xml'});

      const reader = new FileReader();
      const file = blob;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.props.setProfilePhoto(reader.result);
      }


      // const file = URL.createObjectURL(blob);
      // this.props.setProfilePhoto(file);
    }
  }

  render() {
    const { photo } = this.props;

    return (

      <section className='edit-container'>
        <form className='name-form' onSubmit={this.setData}>
          <label htmlFor="file-upload" id="upload-background" className="upload-background">

            {photo ? <img src={photo} alt="Profile icon" className="profile-photo"></img> : <div className="plus">+</div>}

          </label>

           

          <input type="file" id="file-upload" accept="image/*" onChange={this.setPhoto} />

          <p className='photo-label'>Фото</p>

          <input type="text" name="username" placeholder='Ваше имя' required ></input>

          <input type="text" name="message" placeholder='Привет всем друзьям!' required ></input>

          <button type="submit" className='edit-button'><i className="fas fa-play"></i></button>

        </form>
      </section>

    )
  }
}

const mapStateToProps = ({ myProfilePhoto, myWelcomeMessage, myUserName }) => {
  return {
    name: myUserName,
    message: myWelcomeMessage,
    photo: myProfilePhoto
  }
}

const mapDispatchProps = (dispatch) => {
  return {
    setProfilePhoto: (photo) => dispatch({ type: "SET_MY_PROFILE_PHOTO", payload: photo }),
    setUserName: (name) => dispatch({ type: "SET_MY_USER_NAME", payload: name }),
    setWelcomeMessage: (message) => dispatch({ type: "SET_MY_WELCOME_MESSAGE", payload: message }),
  }
}

export default connect(mapStateToProps, mapDispatchProps)(Edit)

