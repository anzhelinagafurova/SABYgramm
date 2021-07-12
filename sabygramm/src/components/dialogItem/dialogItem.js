import React from 'react';
import './dialogItem.scss';

const DialogItem = ({dialog: {name, lastMessage, img}}) => {
    return (
        <div className="dialog">
            <img src={img} alt="dialogPicture" className="dialog-img"/>
            <div className="dialog-contain">
                <p className="dialog-name">{name}</p>
                <p className="dialog-message">{lastMessage}</p>
            </div>
        </div>
    )
}

export default DialogItem;