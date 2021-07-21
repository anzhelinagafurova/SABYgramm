import React from 'react';
import './chatMenu.scss';

const ChatMenu = ({ showed }) => {

  if (showed) {
    return (
      <ul className='settings'>
        <li>Сделать тихим</li><li>Сделать гроким</li><li>Удалить</li>
      </ul>
    )
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