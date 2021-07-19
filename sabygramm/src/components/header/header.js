import React, { useState } from 'react';
import './header.scss';

const Header = ({ groupId, onSearch, dialogs, onSettings }) => {
    const [inputVisible, setVisibility] = useState(false);

    let groupName = null;

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
        case "all":
            groupName = "Контакты";
            break;
        default:
            groupName = null;
    }

    const handleSearch = () => {
        inputVisible === false ? setVisibility(true) : setVisibility(false)
    }

    const searchDialogs = (e) => {
        let dialogsFound = [];

        if(groupId === "all"){
            dialogs.forEach((dialogGroup) => {
                dialogGroup.forEach((dialog) => {
                    if (dialog.name.toLowerCase().includes(e.target.value.toLowerCase()))
                    dialogsFound.push(dialog)
                    })
                })
            }
        else {
            dialogs[groupId].forEach((dialog) => {
            if (dialog.name.toLowerCase().includes(e.target.value.toLowerCase()))
                dialogsFound.push(dialog)
            })
        }
        onSearch(dialogsFound)
    }

    const clearDialogs = (e) => {
        onSearch(null);
        setVisibility(false);
        e.target.value = null
    }

    return (
        <header className="dialogs-header">
            {groupName && <i className="fa fa-bars" aria-hidden="true" onClick={onSettings}></i>}
            {groupName && <i className="fa fa-users" aria-hidden="true"></i>}
            <div className="group-name">{ groupName }</div>
            <input type="text" className="dialogs-search" onInput={searchDialogs} onBlur={clearDialogs} hidden={!inputVisible} autoFocus={true}></input>
            {groupName &&  <i className="fa fa-search" aria-hidden="true" onClick={handleSearch}></i> }
        </header>
    )
}
export default Header;