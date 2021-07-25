import React, { Component } from 'react';
import ChatApp from '../../chatApp';
import InviteFriend from '../../inviteFriend/inviteFriend';
import './cinema.scss'

export default class Cinema extends Component {
  state = {
    link: 'https://www.youtube.com/embed/dQw4w9WgXcQ',

  }
  changeLink = (e) => {
    this.setState({
      link: `${e.target.value}`
    })
  }
  render() {
    return (
      <div className='cinema-page'>
        <iframe title='movie' className="movie" src={this.state.link} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <div className='blue-div-link'>

          <input className='link' value="https://www.youtube.com/embed/dQw4w9WgXcQ" placeholder='https://www.youtube.com/embed/dQw4w9WgXcQ' onChange={this.changeLink} />
          <InviteFriend />
          <ChatApp />
        </div>
      </div>

    )
  }
}