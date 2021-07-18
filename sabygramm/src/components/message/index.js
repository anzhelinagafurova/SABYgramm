import React from "react";

const Message = (props) => {
    const handleClick = () => props.enterEditMode(props.index);

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
                    </button>
                    <p className="msg-date">
                        {props.message.edit
                            ? "изменено " + props.message.edit
                            : props.message.time}
                    </p>
                </div>
            ) : (
                <div className="incoming">
                    <div className="message">{props.message.message}</div>
                    <p className="msg-date">
                        {props.message.edit
                            ? "изменено " + props.message.edit
                            : props.message.time}
                    </p>
                </div>
            )}
        </>
    );
};

export default Message;
