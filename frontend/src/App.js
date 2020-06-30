import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SignIn from './container/SignIn';
import SignUp from './container/SignUp';
import Main from './container/Main';

function App() {

    return (
        <Router>
            <div>
                <Route exact path="/" component={SignIn} />
                <Route path="/signup" component={SignUp} />
                <Route path="/main" component={Main} /> 
            </div>
        </Router>
    )
}

export default App;
