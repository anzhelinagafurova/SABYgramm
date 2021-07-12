import React from 'react';
import { Link } from 'react-router-dom';
import DialogItem from '../../dialogItem/dialogItem';
import SabygramService from '../../../services/SabygramService';
import './dialogs.scss';

const Dialogs = ({ groupId }) => {
    const service = new SabygramService() 
    const dialogs = service.getDialogData(groupId); 
    if(dialogs) 
        return (
            <div className="dialog-container">
                {                
                    dialogs.map((dialog) => {
                        return <DialogItem key={dialog.id} dialog={dialog}/>
                    })
                }

                <h4>Группа { groupId }</h4>
                <Link to={`/dialogs/${+groupId - 1}`}> назад</Link>
                <Link to={`/dialogs/${+groupId + 1}`}> далее</Link>
            </div>       
        )
    return null;
}

export default Dialogs;