import React from "react";

const Message = (props) => {
    const handleClick = () => props.enterEditMode(props.index);
    const formatTime = (time) => {
        return time.toString().split(' ')[1].split(':')[0] + ':' + time.toString().split(' ')[1].split(':')[1]
    }
    return (
        <>
            {props.message.direction === "outgoing" ? (
                <div className="outgoing">
                    <button
                        className={
                            props.editMode && props.index === props.editIndex
                                ? "message editing"
                                : "message"
                        }
                        onClick={handleClick}
                    >
                        {props.message.message}
                        <p className="msg-date">
                            {props.message.edit
                                ? "ред. " + formatTime(props.message.edit)
                                : formatTime(props.message.time)}
                        </p>
                    </button>

                </div>
            ) : (
                <div className="incoming">
                    <div className="message">{props.message.message}
                        <p className="msg-date">
                            {props.message.edit
                                ? "ред. " + formatTime(props.message.edit)
                                : formatTime(props.message.time)}
                        </p></div>

                </div>
            )}
        </>
    );
};

export default Message;
