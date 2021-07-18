import React from 'react';
import { Switch, Route } from 'react-router';
import Auth from '../pages/auth/auth';
import Edit from '../pages/edit/edit';
import Dialogs from '../pages/dialogs/dialogs';
import ChatApp from '../chatApp/index'


const App = () => {
    return (
        <Switch>
            <Route exact path="/" component={Auth} />
            <Route path="/edit" component={Edit} />
            <Route path="/dialogs" component={Dialogs} />
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