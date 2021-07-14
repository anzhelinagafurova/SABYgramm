import React from 'react';

import './dialogItem.scss';

var timer;
var touchduration = 500;
var dialogs = document.getElementsByClassName('dialog');


function touchstart() {
    if (!timer) {
        timer = setTimeout(onlongtouch, touchduration);
    }
}

function touchend() {
    if (timer) {
        clearTimeout(timer);
        timer = null;
    }
}

const onlongtouch = () => {
    timer = null;
    alert('asa');
};
document.addEventListener("DOMContentLoaded", function (event) {
    for (var i = 0; i < dialogs.length; i++) {
        //dialogs[i].addEventListener("touchstart", touchstart, false);
        //dialogs[i].addEventListener("touchend", touchend, false);
        //dialogs[i].addEventListener("onMouseDown", touchstart, false);
        //dialogs[i].addEventListener("onMouseUp", touchend, false);
        console.log(`dialogs[i]`, dialogs[i].attributes)
    }
})

const DialogItem = ({ dialog: { name, lastMessage, img } }) => {
    return (

        <div className="dialog" onMouseDown={touchstart} onMouseUp={touchend} onTouchStart={touchstart} onTouchEnd={touchend}>
            <img src={img} alt="dialogPicture" className="dialog-img" />
            <div className="dialog-contain">
                <p className="dialog-name">{name}</p>
                <p className="dialog-message">{lastMessage}</p>
            </div>
        </div>

    )
}

export default DialogItem;