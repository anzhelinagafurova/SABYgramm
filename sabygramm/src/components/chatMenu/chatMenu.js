import React from 'react';
import './chatMenu.scss';
import SabygramService from '../../services/SabygramService';


const ChatMenu = ({ display, groupId, id, margin }) => {

  const service = new SabygramService();

  onHandleClicked = (id, group_number) => {
    service.handleDialogs({
      user_id: id,
      group_number: group_number
    }, '/dialogs')
  }

  if (display === "block") {
    switch (groupId) {
      case 0:
        {

          return (
            <ul className='settings' style={{ display: `${display}`, marginTop: `${margin}` }}>
              <li onClick={onHandleClicked(id, 2)}>Сделать тихим</li>
              <li onClick={onHandleClicked(id, 1)}>Сделать гроким</li>
              <li>Удалить</li>
            </ul>
          )
        }
      case 1:
        {
          return (
            <ul className='settings' style={{ display: `${display}`, marginTop: `${margin}` }}>
              <li onClick={service.handleDialogs({
                user_id: id,
                group_number: 0
              }, '/dialogs')}>Сделать общим</li>
              <li onClick={service.handleDialogs({
                user_id: id,
                group_number: 2
              }, '/dialogs')}>Сделать тихим</li>
              <li>Удалить</li>
            </ul>
          )
        }
      case 2:
        {
          return (
            <ul className='settings' style={{ display: `${display}`, marginTop: `${margin}` }}>
              <li onClick={service.handleDialogs({
                user_id: id,
                group_number: 0
              }, '/dialogs')}>Сделать общим</li>
              <li onClick={service.handleDialogs({
                user_id: id,
                group_number: 1
              }, '/dialogs')}>Сделать гроким</li>
              <li>Удалить</li>
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