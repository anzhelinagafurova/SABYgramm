import React from 'react';
import './chatMenu.scss';
import SabygramService from '../../services/SabygramService';


const ChatMenu = ({ display, groupId, id_pair, margin }) => {

  const service = new SabygramService();

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