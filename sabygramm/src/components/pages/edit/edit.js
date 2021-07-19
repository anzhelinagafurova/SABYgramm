import React, { Component } from "react";
import { connect } from "react-redux";
import './edit.css';

class Edit extends Component {

  setPhoto = (e) => {
    const form = document.getElementById("editForm")
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.props.setProfilePhoto(reader.result);
      form.pictureUrl.value = reader.result
    }
  }

  createPictureBlob = (letter) => {
    const newPhotoSvg = 
    `<svg xmlns="http://www.w3.org/2000/svg" width="74" height="74" version="1.1">
    <circle cx="37" cy="37" r="37" fill="#738DED"></circle>
  <text x="20" y="60" font-size="60" font-family="Roboto, sans-serif" fill="white">${letter}
        </text>  
  </svg>`
    const blob = new Blob([newPhotoSvg], {type: 'image/svg+xml'}); 
    return new Promise((resolve) => {
      let reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onload = () => {
        resolve(reader.result);
      };
    })
  }

  setData = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    
    if(!this.props.photo) {
      var profilePicSvg = await this.createPictureBlob(form.username.value[0].toUpperCase());
      form.pictureUrl.value = await profilePicSvg;
    }

    let userInfo = {
      name: form.username.value,
      welcome_msg: form.message.value || "Привет всем друзьям!",
      image_link: form.pictureUrl.value || profilePicSvg
    }

    this.props.setUserName(userInfo.name);
    this.props.setWelcomeMessage(userInfo.welcome_msg);
    this.props.setProfilePhoto(userInfo.image_link);

    this.sendData(userInfo);
  }

  sendData = (userInfo) => {
    fetch('/edit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(userInfo)
    })
    .then((result) => result.json())
    .then((result) => alert(result.message))
  }
  render() {
    const { photo } = this.props;

    return (
      <section className='edit-container'>
        <form className='name-form' id="editForm" onSubmit={this.setData}>
          <label htmlFor="picture" id="upload-background" className="upload-background">

            {photo ? <img src={photo} alt="Profile icon" className="profile-photo"></img> : <div className="plus">+</div>}
            <input type="file" id="picture" accept="image/*" onChange={this.setPhoto}/>
          </label>

          <input type="text" name="pictureUrl" hidden></input> 
          
          <p className='photo-label'>Фото</p>

          <input type="text" name="username" placeholder='Ваше имя' required ></input>

          <input type="text" name="message" placeholder='Привет всем друзьям!' ></input>

          <button type="submit" className='edit-button' ><i className="fas fa-play"></i></button>

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

