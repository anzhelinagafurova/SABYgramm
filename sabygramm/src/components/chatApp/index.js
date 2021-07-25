import React, { useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import ChatWindow from "../chatWindow";
import './chatApp.scss';
import MsgHeader from "../msgHeader";
//import SabygramService from "../../services/SabygramService";

/**
 * The chat application
 */
const ChatApp = () => {
    const location = useLocation();

    if (location.state) {
        var { groupId, name, img, id } = location.state
    }
    else {
        groupId = 0;
        name = 'Vasya';
        img = 'https://i1.sndcdn.com/artworks-000094489636-qzznk3-t500x500.jpg';
        id = 100;
    }




    /**
     * The currentConv state determines the conversation currently rendered
     */
    const [currentConv] = useState("0");
    //индекс диалога в группе

    /** The editMode state defines if a message is being edited or not */
    const [editMode, setEditMode] = useState(false);

    /** editIndex holds the index of the message currently being edited */
    const [editIndex, setEditIndex] = useState(null);

    const msgInput = useRef();
    //const service = new SabygramService();
    //const dialogs = service.getDialogData(0);
    //индекс группы

    /**
     * The data object holds all friends and their related messages
     */
    const [data, setData] = useState({
        0: {
            name: name, messages: [{
                message: "newMessage",
                time: new Date().toLocaleString(),
                direction: 'incoming',
            }, {
                message: "newMessage",
                time: new Date().toLocaleString(),
                direction: 'outgoing',
            }], saved: "", editMode: false, groupId: groupId, img: img
        },
        // 1: { name: name, messages: [{
        //     message: "newMessage1",
        //     time: new Date().toLocaleString(),
        //     direction: 'incoming',
        // },{
        //     message: "newMessage1",
        //     time: new Date().toLocaleString(),
        //     direction: 'outgoing',
        // }], saved: "", editMode: false, groupId: groupId, img: img },
    });
    //поменять индексы и должно работать, но не могу с сервиса забрать в пропс сразу

    /**
     * The savedMsg state hold the text currently displayed in the message input
     */
    const [savedMsg, setSavedMsg] = useState("");

    /**
     * Add a message to the current conversation
     * @param {string} newMessage
     * @param {string} direction
     */
    const addNewMessage = (newMessage, direction) => {
        const selectedConv = data[currentConv];
        const time = new Date().toLocaleString();
        selectedConv.messages.push({
            message: newMessage,
            time: time,
            direction: direction,
        });
        console.log(selectedConv.messages)
        const updatedData = { ...data };
        updatedData[currentConv] = selectedConv;
        setData(updatedData);
        setSavedMsg("");
    };

    /**
     * The following function saves any unsent message to that current conversation
     * object
     * @param {string} msg The saved message
     */
    const updateSaved = (msg) => {
        const selectedConv = data[currentConv];
        selectedConv.saved = msg;
        const updatedData = { ...data };
        updatedData[currentConv] = selectedConv;
        setData(updatedData);
    };

    /**
     * The following finds the message to be edited, adds this
     * message to the text input and focuses on it.
     * @param {number} index The index of the message to be edited
     */
    const enterEditMode = (index) => {
        const savedMessage = data[currentConv].messages[index].message;
        setEditIndex(index);
        setSavedMsg(savedMessage);
        setEditMode(true);
        msgInput.current.focus();
    };

    /**
     * This message updates a message and turns off "edit mode"
     * @param {string} newMessage The updated message
     */
    const updateMessage = (newMessage) => {
        if (newMessage.trim().length > 0) {
            const selectedConv = data[currentConv];
            const time = new Date().toLocaleString();
            selectedConv.messages[editIndex].message = newMessage;
            selectedConv.messages[editIndex].edit = time;
            const updatedData = { ...data };
            updatedData[currentConv] = selectedConv;
            setData(updatedData);
        }
        setEditMode(false);
        setSavedMsg("");
    };

    return (
        <>
            <MsgHeader
                groupId={data[currentConv].groupId}
                name={data[currentConv].name}
                img={data[currentConv].img} />
            <div className="chat-container">
                <ChatWindow
                    messages={data[currentConv]}
                    addNewMessage={addNewMessage}
                    updateSaved={updateSaved}
                    setSavedMsg={setSavedMsg}
                    savedMsg={savedMsg}
                    editMode={editMode}
                    setEditMode={setEditMode}
                    editIndex={editIndex}
                    setEditIndex={setEditIndex}
                    updateMessage={updateMessage}
                    msgInput={msgInput}
                    enterEditMode={enterEditMode}
                />
            </div>
        </>
    );
};

export default ChatApp;
