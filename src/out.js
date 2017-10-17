import React from 'react';
import { Switch, Route ,withRouter,Redirect} from 'react-router-dom'
import {fakeAuth, PrivateRoute,AuthButton} from './auth'
import {firebaseApp, db,auth} from "./Config/config"
import { Navbar, Grid, Row, Col,Button, Modal,Jumbotron, Form,FormControl,FormGroup,ButtonToolbar } from "react-bootstrap";


class out extends React.Component {
    state = {

        redirectToReferrer: true
    }



    render() {
        return(

            <div className="container" style={{height: '200px',width:'400px',marginTop:'200px'}}>
    <form >

        <ButtonToolbar>
        <Button bsStyle="primary" type="submit" bsSize="dafault" active  onClick={() => {
            withRouter(({ history }) => fakeAuth.signout(() => history.push('/')))
        }} style={{marginLeft: '40%',width:'20%'
        }}>Вийти</Button>
        </ButtonToolbar>

        </form>
        </div>
        );


    }
}

export default out;