import React, { Component } from 'react';
import ChatApp from '../../chatApp';
import InviteFriend from '../../inviteFriend/inviteFriend';
import './cinema.scss'

export default class Cinema extends Component {
  constructor(props) {

    super(props);

    this.state = { link: "https://vjs.zencdn.net/v/oceans.mp4" };

    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(e) {

    this.setState({
      link: e.target.value
    });

    console.log(e.target.value);
  }

  render() {
    return (
      <div className='cinema-page'>
        <video id="my_video_1" className="movie" width="100%" height="100%"
          controls preload="none" poster='http://harry.zone/assets/oceans-clip.jpg'
          data-setup='{ "aspectRatio":"750:313", "playbackRates": [0.5, 1, 1.25, 1.5, 2] }'>
          {/* <source src="https://vjs.zencdn.net/v/oceans.mp4" type='video/mp4' /> */}
          <source src={this.state.link} type='video/mp4' />
        </video>
        {/* <iframe className="movie" width="560" height="315" src={this.state.link} frameborder="0" allowfullscreen>
        </iframe> */}
        <div className='blue-div-link'>

          <input className='link' value={this.state.link} placeholder='https://vjs.zencdn.net/v/oceans.mp4' onChange={this.onChangeHandler} />
          <InviteFriend />
          <ChatApp />
        </div>
      </div>

    )
  }
}