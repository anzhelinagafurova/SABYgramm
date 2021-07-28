import React, { useState, useRef, useEffect } from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import ChatWindow from "../chatWindow";
import './chatApp.scss';
import MsgHeader from "../msgHeader";
import SabygramService from "../../services/SabygramService";


/**
 * The chat application
 */
const service = new SabygramService();
const ChatApp = (props) => {
    
    const location = useLocation();

    if (location.state) {
        var { groupId, name, img, id_pair, id } = location.state
    }
    else {
        groupId = 0;
        name = 'Vasya';
        img = 'https://i1.sndcdn.com/artworks-000094489636-qzznk3-t500x500.jpg';
        id_pair = 10000;
    }
    props.readNotification(id_pair);

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


    /**
     * The data object holds all friends and their related messages
     */
    const [data, setData] = useState({
        0: {
            name: name, messages: [],
            saved: "", editMode: false, groupId: groupId, img: img
        }
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
    const addNewMessage = (newMessage, direction, time = new Date().toLocaleString()) => {
        const selectedConv = data[currentConv];
        selectedConv.messages.push({
            message: newMessage,
            time: time,
            direction: direction,
        });

        const updatedData = { ...data };
        updatedData[currentConv] = selectedConv;
        setData(updatedData);

    };

    const socketFound = props.sockets.find((socket) => socket.id === id_pair);
    const socket = socketFound.socket;

    useEffect(() => {
        service.sendDataPost({ id_pair, status: 2, my_id: props.myId }, `/dialogs`)
            .then((result) => result.json())
            .then((dialogs) => {
                dialogs.forEach((message) => {
                    let handledDirection;
                    if (message.status === 1) {
                        message.direction === 1 ? handledDirection = "incoming" : handledDirection = "outgoing";
                    }
                    if (message.status === 0) {
                        message.direction === 0 ? handledDirection = "incoming" : handledDirection = "outgoing";
                    }
                    addNewMessage(message.message, handledDirection, message.time)
                })
            })

        socket.onopen = () => {
            console.log("Соединение установлено. ChatApp " + id_pair);
        };
        socket.onmessage = (event) => {
            console.log("Данные получены ChatApp: " + event.data);
            const data = JSON.parse(event.data);

            if (data.user_id.toString() !== props.myId.toString()) {
                addNewMessage(data.message, "incoming")
            }
        };
    }, [id_pair]);

    const sendSocketMessage = (message) => {
        if (!socket.readyState) {
            setTimeout(function () {
                socket.send(JSON.stringify({ 'message': message, 'user2_id': id, 'id_pair': id_pair }))
            }, 200);
        }
        else {
            socket.send(JSON.stringify({ 'message': message, 'user2_id': id, 'id_pair': id_pair }))
        }
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
                    sendSocketMessage={sendSocketMessage}
                />
            </div>
        </>
    );
};
const mapStateToProps = ({myId, sockets}) => {
    return {
        myId,
        sockets
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        readNotification: (index) => dispatch({type: "READ_NOTIFICATION", payload: index})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ChatApp);
