import React from 'react';
import { useHistory } from 'react-router-dom';
import './dialogItem.scss';

const DialogItem = ({ dialog: { name, lastMessage, img, id, timing } }) => {

    let timer;
    let touchduration = 500;
    let dialogs = document.getElementsByClassName('dialog');
    let settings = document.createElement('ul');

    settings.innerHTML = '<li>Сделать тихим</li><li>Сделать гроким</li><li>Удалить</li>';

    settings.className = 'settings';

    const touchend = () => {
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
    }

    const touchstart = (e) => {
        const current = e.currentTarget
        if (!timer) {
            timer = setTimeout(() => { current.appendChild(settings) }, touchduration);
        }
    };

    const addEventListeners = () => {
        for (let i = 0; i < dialogs.length; i++) {
            let dialog = dialogs[i];
            dialog.addEventListener("touchstart", touchstart, false);
            dialog.addEventListener("touchend", touchend, false);
            dialog.addEventListener("mousedown", touchstart, false);
            dialog.addEventListener("mouseup", touchend, false);
        }
    }

    document.addEventListener("DOMContentLoaded", addEventListeners)
    document.getElementById('root').addEventListener('click', function () {
        settings.remove();
    })

    const history = useHistory();
    const handleClick = () => {
        history.push(`/chatapp/${id}`, {
            id: id,
        })
    };

    return (
        <div className="dialog" onClick={handleClick}>
            <img src={img} alt="dialogPicture" className="dialog-img" />
            <div className="dialog-contain">
                <p className="dialog-name">{name}</p>
                <p className="dialog-message">{lastMessage}</p>
            </div>

            <div className="dialog-timing">{timing}</div>
        </div>
    )
}

export default DialogItem;