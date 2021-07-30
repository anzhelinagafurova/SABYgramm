import React from 'react';
import { Switch, Route } from 'react-router';
import Auth from '../pages/auth/auth';
import Edit from '../pages/edit/edit';
import Dialogs from '../pages/dialogs/dialogs';
import ChatApp from '../chatApp/index'
import Contacts from '../pages/contacts/contacts';
import Cinema from '../pages/cinema/cinema';

import Test from './test';

const App = () => {
    return (
        <Switch>
            <Route exact path="/" component={Auth} />
            <Route path="/edit" component={Edit} />
            <Route path="/dialogs" component={Dialogs} />
            <Route path="/contacts" component={Contacts} />
            <Route path="/cinema" component={Cinema} />
            <Route path="/test" component={Test} />
            <Route path="/chatapp/:id"
                render={({ match }) => {
                    const { id, groupId } = match.params;
                    return <ChatApp dialogId={groupId} id={id} />
                }}
            />
        </Switch>
    )
}


export default App;
