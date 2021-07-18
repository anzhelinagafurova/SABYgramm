import React, { useState } from 'react';
import './header.scss';

const Header = ({ groupId, onSearch, dialogs }) => {
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
        default:
            groupName = null;
    }

    const handleSearch = () => {
        inputVisible === false ? setVisibility(true) : setVisibility(false)
    }

    const searchDialogs = (e) => {
        let dialogsFound = [];
        dialogs[groupId].forEach((dialog) => {
            if (dialog.name.toLowerCase().includes(e.target.value.toLowerCase()))
                dialogsFound.push(dialog)
        })
        onSearch(dialogsFound)
    }

    const clearDialogs = (e) => {
        onSearch(null);
        setVisibility(false);
        e.target.value = null
    }

    return (
        <header className="dialogs-header">
            <i className="fa fa-bars" aria-hidden="true"></i>
            <i className="fa fa-users" aria-hidden="true"></i>
            <div className="group-name">{groupName}</div>
            <input type="text" className="dialogs-search" onInput={searchDialogs} onBlur={clearDialogs} hidden={!inputVisible} autoFocus={true}></input>
            <i className="fa fa-search" aria-hidden="true" onClick={handleSearch}></i>
        </header>
    )
}
export default Header;