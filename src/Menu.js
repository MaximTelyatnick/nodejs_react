import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap'
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, NavItem, Nav, NavDropdown, MenuItem, Col } from "react-bootstrap";
import { Switch, Route ,withRouter,Redirect} from 'react-router-dom'
import {fakeAuth} from './auth'
import logo from './Static/img/logo.png'
import './Menu.css';

class Menu extends  Component{
    render(){
        return(

            <Navbar inverse collapseOnSelect>

                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer to="/add">
                        <NavItem eventKey={1}>Додати нове меню</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/orders">

                        <NavItem eventKey={2} >Замовлення</NavItem>
                        </LinkContainer>

                        <LinkContainer to="/app">
                            <NavItem eventKey={3} >Меню</NavItem>
                        </LinkContainer>

                    </Nav>
                    {fakeAuth.isAuthenticated ?(<Nav pullRight>


                            <LinkContainer to="/out">

                                <NavItem eventKey={4}> Вийти</NavItem>
                            </LinkContainer>

                        </Nav>


                    ):(<Nav pullRight>


                        <LinkContainer to="/login">

                            <NavItem eventKey={5}>Вхід</NavItem>
                        </LinkContainer>

                    </Nav>)}


                </Navbar.Collapse>
            </Navbar>

        );
    }
}
export default Menu;

/*<div>
             <Link to="/">Home</Link>
             <Link to="/orders">Orders</Link>
             <Link to="/add">Add</Link>

         </div>*/