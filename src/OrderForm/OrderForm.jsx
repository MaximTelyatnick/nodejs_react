import React, { Component } from 'react';
import './OrderForm.css';
import PropTypes from 'prop-types';
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, Grid, Row, Col,Button,Media, Modal, Form,FormControl,FormGroup,Checkbox } from "react-bootstrap";

class OrderNote extends  Component{

    constructor(props){
        super(props);
        this.noteId = props.noteId;
        this.idOrder = props.idOrder;
        this.nameOrder = props.nameOrder;
        this.readyOrder = props.readyOrder;
        this.qweChange = this.qweChange.bind(this);
    }

    qweChange(id){
    this.props.changeOrder(id);
    }


    render(props){

        return(



                    <tbody>
                    <tr>
                        <td>{this.idOrder}</td>
                        <td>{this.nameOrder}</td>
                        <td>{this.readyOrder}</td>
                    </tr>
                    </tbody>






        )
    }


}
OrderNote.propTypes ={
    idOrder: PropTypes.string,
    nameOrder:PropTypes.string,
    readyOrder:PropTypes.string

}
export default OrderNote;