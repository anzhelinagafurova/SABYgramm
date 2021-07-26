import React from 'react';
import './chatMenu.scss';
import SabygramService from '../../services/SabygramService';


const ChatMenu = ({ display, groupId, id, margin, canChange }) => {

  const service = new SabygramService();

  const onHandleClicked = (id, group_number) => {
    if (canChange) {
      service.handleDialogs({
        user_id: id,
        group_number: group_number
      }, '/dialogs')
    }
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
              <li onClick={onHandleClicked(id, 0)}>Сделать общим</li>
              <li onClick={onHandleClicked(id, 2)}>Сделать тихим</li>
              <li>Удалить</li>
            </ul>
          )
        }
      case 2:
        {
          return (
            <ul className='settings' style={{ display: `${display}`, marginTop: `${margin}` }}>
              <li onClick={onHandleClicked(id, 0)}>Сделать общим</li>
              <li onClick={onHandleClicked(id, 1)}>Сделать гроким</li>
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