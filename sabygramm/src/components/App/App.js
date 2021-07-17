import React from 'react';
import { Switch, Route } from 'react-router';
import Auth from '../pages/auth/auth';
import Edit from '../pages/edit/edit';
import Dialogs from '../pages/dialogs/dialogs';


const App = () => {
    return (
        <Switch>
            <Route exact path="/" component={Auth} />
            <Route path="/edit" component={Edit} />
            <Route path="/dialogs" component={Dialogs}/>           
        </Switch>
    )
}


export default App;