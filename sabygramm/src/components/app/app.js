import React from 'react';
import { Switch, Route } from 'react-router';
import Auth from '../pages/auth/auth';
import Edit from '../pages/edit/edit';
import Dialogs from '../pages/dialogs/dialogs';
import ChatApp from '../chatApp/index'
import Contacts from '../pages/contacts/contacts';

let socket = new WebSocket("wss://javascript.info/article/websocket/demo/hello");
socket.onopen = function(e) {
    alert("[open] Соединение установлено");
    alert("Отправляем данные на сервер");
    socket.send("Меня зовут Анжелина");
  };
  
  socket.onmessage = function(event) {
    alert(`[message] Данные получены с сервера: ${event.data}`);
  };
  
  socket.onclose = function(event) {
    if (event.wasClean) {
      alert(`[close] Соединение закрыто чисто, код=${event.code} причина=${event.reason}`);
    } else {
      // например, сервер убил процесс или сеть недоступна
      // обычно в этом случае event.code 1006
      alert('[close] Соединение прервано');
    }
  };
  
  socket.onerror = function(error) {
    alert(`[error] ${error.message}`);
  };
const App = () => {
    return (
        <Switch>
            <Route exact path="/" component={Auth} />
            <Route path="/edit" component={Edit} />
            <Route path="/dialogs" component={Dialogs} />
            <Route path="/contacts" component={Contacts} />
            <Route path="/chatapp/:id"
                render={({ match }) => {
                    const { id } = match.params;
                    return <ChatApp dialogId={id} />
                }}
            />

        </Switch>
    )
}


export default App;
