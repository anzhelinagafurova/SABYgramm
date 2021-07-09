import React from 'react';
import { Switch, Route } from 'react-router';
import Auth from '../pages/auth/auth';
import Edit from '../pages/edit/edit';

const App = () => {
    return (
        <Switch>
            <Route path to="/" component={Auth} exact />
            <Route path="/edit" component={Edit} />
        </Switch>
    )
}

export default App;