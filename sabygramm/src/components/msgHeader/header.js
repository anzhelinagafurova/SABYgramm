import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './header.scss';

const MsgHeader = ({ groupId, name, img }) => {
    let groupName = null;
    const history = useHistory();
    const handleClick = () => history.push(`/dialogs`);
    switch (groupId) {
        case 0:
            groupName = "Общие";
            break;
        case 1:
            groupName = "Громкие";
            break;
        case 2:
            groupName = "Тихие";
            break;
        default:
            groupName = null;
    }

    return (
        <header className="message-header">
            <i className="fas fa-arrow-left" onClick={handleClick}></i>
            <img src={img} alt="dialogPicture" className="message-dialog-img" />
            <div className='flex-names'>
                <div className='user-name'>{name}</div>
                <div className="group-name">{groupName}</div>
            </div>
        </header>
    )
}
export default MsgHeader;