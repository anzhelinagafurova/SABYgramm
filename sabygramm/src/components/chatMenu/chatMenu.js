import React from 'react';
import './chatMenu.scss';
import SabygramService from '../../services/SabygramService';


const ChatMenu = ({ display, groupId, id, margin, id_pair }) => {

  const service = new SabygramService();

  const onHandleClicked = (id, group_number) => {
    service.handleDialogs({
      status: 0,
      user_id: id,
      id_pair,
      group_number: group_number
    }, '/dialogs')
  }


  if (display === "block") {
    switch (groupId) {
      case 0:
        {

          return (
            <ul className='settings' style={{ display: `${display}`, marginTop: `${margin}` }}>
              <li onClick={function () { onHandleClicked(id, 2) }}>Сделать тихим</li>
              <li onClick={function () { onHandleClicked(id, 1) }}>Сделать гроким</li>
              <li>Удалить</li>
            </ul>
          )
        }
      case 1:
        {
          return (
            <ul className='settings' style={{ display: `${display}`, marginTop: `${margin}` }}>
              <li onClick={function () { onHandleClicked(id, 0) }}>Сделать общим</li>
              <li onClick={function () { onHandleClicked(id, 2) }}>Сделать тихим</li>
              <li>Удалить</li>
            </ul>
          )
        }
      case 2:
        {
          return (
            <ul className='settings' style={{ display: `${display}`, marginTop: `${margin}` }}>
              <li onClick={function () { onHandleClicked(id, 0) }}>Сделать общим</li>
              <li onClick={function () { onHandleClicked(id, 1) }}>Сделать гроким</li>
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