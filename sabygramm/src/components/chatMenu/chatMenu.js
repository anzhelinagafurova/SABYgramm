import React from 'react';
import './chatMenu.scss';

const ChatMenu = ({ showed, groupId }) => {

  if (showed) {
    switch (groupId) {
      case 0:
        {
          return (
            <ul className='settings'>
              <li>Сделать тихим</li><li>Сделать гроким</li><li>Удалить</li>
            </ul>
          )
        }
      case 1:
        {
          return (
            <ul className='settings'>
              <li>Сделать общим</li><li>Сделать тихим</li><li>Удалить</li>
            </ul>
          )
        }
      case 2:
        {
          return (
            <ul className='settings'>
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


document.getElementById('root').addEventListener('click', function () {
  const removeElements = (elms) => elms.forEach(el => el.remove());
  removeElements(document.querySelectorAll(".settings"));
})

export default ChatMenu;