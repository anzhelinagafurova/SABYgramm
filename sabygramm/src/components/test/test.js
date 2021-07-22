import React from 'react';
import './test.scss';

const TestWebSocket = ({socket}) => {

    socket.onopen = function(e) {
        console.log("[open] Соединение установлено");
    };
    
    socket.onmessage = function(event) {
        console.log(`[message] Данные получены : ${event.data}`);
        RenderMessage(event.data, "lightblue", "my friend");
    };

    socket.onclose = function(event) {
    if (event.wasClean) {
        console.log(`[close] Соединение закрыто чисто, код=${event.code} причина=${event.reason}`);
    } else {
        console.log('[close] Соединение прервано');
    }
    };

    socket.onerror = function(error) {
        console.log(`[error] ${error.message}`);
    };

    const sendMessage = (e) => {
        e.preventDefault();
        socket.send(e.currentTarget.message.value);
        RenderMessage(e.currentTarget.message.value, "#738DED", "me")
    }

    const RenderMessage = (message, color, sender) => {
        document.querySelector(".chat").insertAdjacentHTML("afterbegin", `<div style="background:${color}" class="income-message">${sender}:${message}</div>`)
    }
    return(
        <form onSubmit={sendMessage}>
            <input name="message" type="text"></input>
            <button type="submit">Отправить</button>
            <h3>Чат</h3>
            <div className="chat"/>
        </form>
    )
}

export default TestWebSocket;