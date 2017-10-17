import React, { Component, PropTypes } from 'react';
import './NoteForm.css';
import "bootstrap/dist/css/bootstrap.css";

import { Navbar, Grid, Row, Col,Button, Modal,Jumbotron, Form,FormControl,FormGroup } from "react-bootstrap";

class NoteForm extends Component{
    constructor(props, context){
        super(props, context);
        this.showFormModal = this.showFormModal.bind(this);
        this.hideFormModal = this.hideFormModal.bind(this);

        this.state = {
            newImage: '',
            newTittle: '',
            newDescription: '',
            newOrder: '',
            formModalIsShowing: false
        };

        this.handleUserImage = this.handleUserImage.bind(this);
        this.handleUserTittle = this.handleUserTittle.bind(this);
        this.handleUserDescription = this.handleUserDescription.bind(this);
        this.handleUserOrder = this.handleUserOrder.bind(this);
        this.writeNote = this.writeNote.bind(this);

    }
    showFormModal(event){
        this.setState({
            formModalIsShowing: true
        });
    }

    hideFormModal(event){
        this.setState({
            formModalIsShowing: false
        });
    }
    // When the user input changes, set the newNoteContent
    // to the value of what's in the input box.
    handleUserImage(e){
        this.setState({
            newImage: e.target.value,
        })
    }
    handleUserTittle(e){
        this.setState({
            newTittle: e.target.value,
        })
    }

    handleUserDescription(e){
        this.setState({
            newDescription: e.target.value,
        })
    }

    handleUserOrder(e){
        this.setState({
            newOrder: e.target.value,
        })
    }

    writeNote(){
        // call a method that sets the noteContent for a note to
        // the value of the input
        this.props.addNote(this.state.newImage,this.state.newTittle,this.state.newDescription, this.state.newOrder);

        // Set newNoteContent back to an empty string.
        this.setState({
            newNoteContent: '',
        })
    }

    render(){
        return(


            <div className="container">
                <Form horizontal>
                    <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass="dfdf" sm={2}>
                            Назва меню
                        </Col>
                        <Col sm={10}>
                            <FormControl type="text" placeholder="Назва меню" value={this.state.newTittle}
                                         onChange={this.handleUserTittle} />
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalPassword">
                        <Col componentClass="dfdf" sm={2}>
                            Посилання на зображення
                        </Col>
                        <Col sm={10}>
                            <FormControl type="text" placeholder="Посилання на зображення" value={this.state.newImage}  onChange={this.handleUserImage}/>
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formHorizontalPassword">
                        <Col componentClass="dfdf" sm={2}>
                            Ціна у національній валюті
                        </Col>
                        <Col sm={10}>
                            <FormControl type="password" placeholder="Ціна" value={this.state.newOrder}
                                         onChange={this.handleUserOrder}/>
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formHorizontalPassword">
                        <Col componentClass="dfdf" sm={2}>
                            Опис
                        </Col>
                        <Col sm={10}>
                            <FormControl type="textarea" placeholder="Опис" value={this.state.newDescription}
                                         onChange={this.handleUserDescription}style={{height: '140px'}} />
                        </Col>
                    </FormGroup>
                </Form>
                <Button type="submit" onClick={this.writeNote}>Додати</Button>
            </div>



        );
    }
}


export default NoteForm;