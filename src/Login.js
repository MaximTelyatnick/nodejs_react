import React from 'react';
import { Switch, Route ,withRouter,Redirect} from 'react-router-dom'
import {fakeAuth} from './auth'
import {firebaseApp, db,auth} from "./Config/config"
import { Navbar, Grid, Row, Col,Button, Modal,Jumbotron, Form,FormControl,FormGroup,ButtonToolbar } from "react-bootstrap";
import logo from './Static/img/logo.png'


class Login extends React.Component {
    state = {
        email: '',
        password: '',
        redirectToReferrer: false
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        auth.signInWithEmailAndPassword(this.state.email, this.state.password).then(() => {
            this.setState({redirectToReferrer: true});
            this.login();
        });
    }
    login = () => {
        fakeAuth.authenticate(() => {
            this.setState({ redirectToReferrer: true })
        })

    }

    render() {
        const { from } = this.props.location.state || { from: { pathname: '/' } }
        const { redirectToReferrer } = this.state

        if (redirectToReferrer) {
            return (
                <Redirect to={{
                    pathname: '/app'}}/>
            )
        }

        return(

                    /*<div>
                        <p>You must log in to view the page at {from.pathname}</p>
                        <button onClick={this.login}>Вихід</button>
                    </div>*/
            <div className="container" style={{height: '200px',width:'400px',marginTop:'200px'}}>
                <img width={150} height={120} src={logo} style={{marginLeft: '30%'}}/>
            <form onSubmit={this.handleSubmit}>
                <FormGroup controlId="formHorizontalPassword">

                    <Col>
                        <FormControl type="login" placeholder="Логін" value={this.state.email}
                                     onChange={e => this.setState({email: e.target.value})}/>
                    </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalPassword">

                    <Col >
                        <FormControl type="password" placeholder="Пароль" value={this.state.password}
                                     onChange={e => this.setState({password: e.target.value})}style={{}} />
                    </Col>
                </FormGroup>
                <ButtonToolbar>
                    <Button bsStyle="primary" type="submit" bsSize="dafault" active style={{marginLeft: '40%',width:'20%'
                        }}>Увійти</Button>
                </ButtonToolbar>

            </form>
            </div>
            );


    }
}

export default Login

