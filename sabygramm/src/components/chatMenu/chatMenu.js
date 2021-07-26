import React from 'react';
import './chatMenu.scss';

const ChatMenu = ({ display, groupId, id_pair, margin }) => {

  if (display === "block") {
    switch (groupId) {
      case 0:
        {
          return (
            <ul className='settings' style={{ display: `${display}`, marginTop: `${margin}` }}>
              <li>Сделать тихим</li><li>Сделать гроким</li><li>Удалить</li>
            </ul>
          )
        }
      case 1:
        {
          return (
            <ul className='settings' style={{ display: `${display}`, marginTop: `${margin}` }}>
              <li>Сделать общим</li><li>Сделать тихим</li><li>Удалить</li>
            </ul>
          )
        }
      case 2:
        {
          return (
            <ul className='settings' style={{ display: `${display}`, marginTop: `${margin}` }}>
              <li>Сделать общим</li><li>Сделать гроким</li><li>Удалить</li>
            </ul>
          )
        }

      default: return (<div>ups...</div>)
    }
  }
  return (
    <p></p>
  )
}




export default ChatMenu;