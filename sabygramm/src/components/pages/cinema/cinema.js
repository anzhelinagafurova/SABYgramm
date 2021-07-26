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
        {/* <iframe className="movie" src={this.state.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
        <iframe className="movie" width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen>
        </iframe>
        <div className='blue-div-link'>

          <input className='link' value="https://www.youtube.com/embed/dQw4w9WgXcQ" placeholder='https://www.youtube.com/embed/dQw4w9WgXcQ' onChange={this.changeLink} />
          <InviteFriend />
          <ChatApp />
        </div>
      </div>

    )
  }
}