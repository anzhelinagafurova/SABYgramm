import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import ChatMenu from '../chatMenu/chatMenu';
import './header.scss';

const MsgHeader = ({ groupId, name, img }) => {
   const [dotsClicked, dotsClick] = useState(false);


    let groupName = null;
    const history = useHistory();
    const handleClick = () => history.push(`/dialogs`);
    const onDotsClick = () => {
        dotsClick(!dotsClicked)
    }
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
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="22" viewBox="0 0 32 24" fill="none" onClick={handleClick}>
                <path d="M0.939339 10.9393C0.353552 11.5251 0.353552 12.4749 0.939339 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807614 11.0711 0.807613 10.4853 1.3934L0.939339 10.9393ZM32 10.5L2 10.5L2 13.5L32 13.5L32 10.5Z" fill="white" />
            </svg>
            <img src={img} alt="dialogPicture" className="message-dialog-img" />
            <div className='flex-names'>
                <div className='user-name'>{name}</div>
                <div className="group-name">{groupName}</div>
            </div>
            <i class="fas fa-ellipsis-v" onClick={onDotsClick}></i>
            
            <ChatMenu showed={dotsClicked} groupId={groupId}/>
        </header>
    )
}
export default MsgHeader;