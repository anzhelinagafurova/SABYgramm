import React from 'react';
import { Switch, Route } from 'react-router';
import Auth from '../Pages/Auth';

const App = () => {
    return (
        <Switch>
            <Route to="/" component={Auth} exact />
        </Switch>
    )
}

export default App;