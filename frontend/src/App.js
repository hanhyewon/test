import React from 'react';
import { Route } from 'react-router-dom';
import { SignIn, SignUp } from './index';

//import Main from './container/Main';

function App() {

    return (
        <div>
            <Route exact path="/" component={SignIn}/>
            <Route path="/signUp" component={SignUp}/>
        </div>
    )
}

export default App;
