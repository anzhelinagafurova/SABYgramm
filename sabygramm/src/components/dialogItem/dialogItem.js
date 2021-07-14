import React from 'react';

import './dialogItem.scss';

var timer;
var touchduration = 500;
var dialogs = document.getElementsByClassName('dialog');
var settings = document.createElement('ul');
settings.innerHTML = '<li>Сделать тихим</li><li>Сделать гроким</li><li>Удалить</li>';
settings.className = 'settings';
function touchend() {
    if (timer) {
        clearTimeout(timer);
        timer = null;
    }
}

function touchstart(e) {
    const current = e.currentTarget
    if (!timer) {

        timer = setTimeout(() => { current.appendChild(settings) }, touchduration);
    }

};
document.addEventListener("DOMContentLoaded", function (event) {
    for (var i = 0; i < dialogs.length; i++) {
        let dialog = dialogs[i];
        dialog.addEventListener("touchstart", touchstart, false);
        dialog.addEventListener("touchend", touchend, false);
        dialog.addEventListener("mousedown", touchstart, false);
        dialog.addEventListener("mouseup", touchend, false);

    }
})
//onMouseDown={touchstart} onMouseUp={touchend} onTouchStart={touchstart} onTouchEnd={touchend}
const DialogItem = ({ dialog: { name, lastMessage, img } }) => {
    return (

        <div className="dialog" >
            <img src={img} alt="dialogPicture" className="dialog-img" />
            <div className="dialog-contain">
                <p className="dialog-name">{name}</p>
                <p className="dialog-message">{lastMessage}</p>
            </div>
        </div>
    )
}




export default DialogItem;