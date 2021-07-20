import React, { Component } from "react";
import { connect } from "react-redux";
import { createPictureBlob, readPhoto } from '../../helpers';
import SabygramService from "../../../services/SabygramService";
import './edit.scss';

class Edit extends Component {
  service = new SabygramService();

  setPhoto = async (e) => {
    const form = e.currentTarget.closest("form");
    const photo = await readPhoto(e);
    this.props.setProfilePhoto(await photo);
    form.pictureUrl.value = await photo
  }

  setData = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    
    if(!this.props.photo) {
      var profilePicSvg = await createPictureBlob(form.username.value[0].toUpperCase());
      form.pictureUrl.value = await profilePicSvg;
    }

    let userInfo = {
      name: form.username.value,
      welcome_msg: form.message.value || "Привет всем друзьям!",
      image_link: form.pictureUrl.value || profilePicSvg
    }

    this.service.sendDataPost(userInfo, '/edit')

    this.props.setUserName(userInfo.name);
    this.props.setWelcomeMessage(userInfo.welcome_msg);
    this.props.setProfilePhoto(userInfo.image_link);

    const { history } = this.props;
    history.push('/dialogs');
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

          <input type="text" name="pictureUrl" hidden /> 
          
          <p className='photo-label'>Фото</p>

          <input type="text" name="username" placeholder='Ваше имя' maxLength="25" required />

          <input type="text" name="message" placeholder='Привет всем друзьям!' maxLength="200" />

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

