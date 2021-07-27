import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faSmile } from "@fortawesome/free-solid-svg-icons";
import Picker from "emoji-picker-react";

/**
 * This renders the form to send a new message.
 */
const MsgForm = (props) => {
    const input = props.msgInput.current;
    


    /** This functions handles the submission of the new message form */
    const handleSubmit = async (event) => {
        event.preventDefault();
        /* We ensure the message is not empty, and trim any extra space
         * before sending */
        // let trimmedMsg = props.savedMsg.trim();
        const message = event.target.message.value;
        const { sendSocketMessage } = props;
        sendSocketMessage(message);

        if (message.length > 0) {
            props.addNewMessage(message, "outgoing")
            event.target.message.value = "";
            // !props.editMode
                // ? props.addNewMessage(message, "outgoing")
                // : props.updateMessage(trimmedMsg);
        }
        // if (!props.editMode) {
        //     let phrase = "";
        //     const generatedPhrase = async () => {
        //         setTimeout(async () => {
        //             const result = await generatePhrase();
        //             phrase = result;
        //             props.addNewMessage(phrase, "incoming");
        //         }, 2000);
        //     };
        //     const generatePhrase = () => {
        //         return 'Какой-то текст'
        //     };
        //     generatedPhrase();
        // }

    };

    /** Update the saved message when the input changes */
    // const handleChange = (event) => {
    //     props.setSavedMsg(event.currentTarget.value);
    // };

    /** This state defines if the emoji picker is visible or not */
    const [displayEmojis, setDisplayEmojis] = useState(false);

    /**
     * This function handles displaying or hiding the emoji picker on click
     * @param {onClick} event
     */
    const handleDisplayPicker = (event) => {
        event.preventDefault();
        setDisplayEmojis(!displayEmojis);
    };

    /** Edit the latest message when up arrow is pressed */
    // const handleKeyPress = (event) => {
    //     if (
    //         event.keyCode === 38 &&
    //         props.lastMessageIndex >= 0 &&
    //         props.editMode === false
    //     ) {
    //         // Find the index of the latest outgoing message
    //         let testIndex = props.lastMessageIndex;
    //         while (props.currentMessages[testIndex].direction === "incoming") {
    //             testIndex--;
    //         }
    //         input.blur();
    //         setTimeout(() => {
    //             props.enterEditMode(testIndex);
    //         }, 0);
    //     }
    // };
    /**
     * Adds an emoji in the string of the input, at the curor's current position
     * Browser focus then returns to the text input and places the cursor after the
     * emoji
     */
    const onEmojiClick = (event, emojiObject) => {
        setDisplayEmojis(false);
        const cursorPosition = input.selectionStart;
        const selectionLength = input.selectionEnd - input.selectionStart;
        const textArray = input.value.split("");
        textArray.splice(cursorPosition, selectionLength, emojiObject.emoji);
        const newText = textArray.join("");
        props.setSavedMsg(newText);

        input.focus();
        input.selectionStart = input.selectionEnd = cursorPosition + 1;
    };

    return (
        <form
            className={
                props.editMode ? "message-form editing-input" : "message-form"
            }
            onSubmit={handleSubmit}
            key={"MessageForm"}
        >
            <div className={displayEmojis ? "emoji-picker" : "hidden"}>
                <Picker disableAutoFocus={true} onEmojiClick={onEmojiClick} />
            </div>
            <button
                type="button"
                className="open-emojis"
                onClick={handleDisplayPicker}
            >
                <FontAwesomeIcon icon={faSmile} />
            </button>
            <input name="message"
                id="message-input"
                type="text"
                ref={props.msgInput}
                className="message-input"
                placeholder="Message"
                autoComplete="off"
                // onChange={handleChange}
                //value={props.savedMsg || ""}
                // onKeyDown={handleKeyPress}
            />
            <button type="submit" className="send-message">
                <span className="sr-only">send</span>
                <FontAwesomeIcon icon={faPaperPlane} />
            </button>
        </form>
    );
};

export default MsgForm;
