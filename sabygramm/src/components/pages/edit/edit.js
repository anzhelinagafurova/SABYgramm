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
  setMessage = (e) => {
    const newMessage = e.target.value;
    this.props.setWelcomeMessage(newMessage)
  }
  setName = (e) => {
    const newName = e.target.value;
    this.props.setUserName(newName)
  }


  render() {
    const { name, photo, message } = this.props;
    return (

      <section className='edit-container'>
        <form action="home/urls.py" method="post" className='name-form'> {/* сюда в action указать путь до файла-обработчика */ }
          <label htmlFor="file-upload" id="upload-background" className="upload-background">

            {photo ? <img src={photo} alt="Profile icon" className="profile-photo"></img> : <div className="plus">+</div>}

          </label>

          <input type="file" id="file-upload" accept="image/*" onChange={this.setPhoto} />

          <p className='photo-label'>Фото</p>

          <input type="text" name="username" value={name} placeholder='Ваше имя' onChange={this.setName} required ></input>

          <input type="text" name="message" value={message} placeholder='Привет всем друзьям!' onChange={this.setMessage}></input>

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

