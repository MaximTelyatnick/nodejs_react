import React from 'react'
import { Switch, Route ,withRouter,Redirect} from 'react-router-dom'
import App from './App'
import Orders from './Orders'
import Add from './Add'
import {fakeAuth,AuthButton,PrivateRoute} from './auth'
import login from './Login';
import out from './out';


// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
export const Main = () => (
    <main>

        <Switch>
            <PrivateRoute exact path='/app' component={App}/>
            <PrivateRoute path='/orders' component={Orders}/>
            <PrivateRoute path='/add' component={Add}/>
            <Route path="/login" component={login}/>
            <PrivateRoute path="/out" component={out}/>

        </Switch>
    </main>
)

const Public = () => <h3>Public</h3>
const Protected = () => <h3>Protected</h3>


export default Main

