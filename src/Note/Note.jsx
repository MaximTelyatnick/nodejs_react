import React, { Component } from 'react';
import './Note.css';
import PropTypes from 'prop-types';
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, Grid, Row, Col,Button,Media, Modal, Form,FormControl,FormGroup } from "react-bootstrap";

class Note extends  Component{

    constructor(props){
        super(props);
        this.noteImage = props.noteImage;
        this.noteTittle = props.noteTittle;
        this.noteDescription = props.noteDescription;
        this.noteOrder = props.noteOrder;
        this.noteId = props.noteId;
        this.handleRemoveNote = this.handleRemoveNote.bind(this);
    }
    handleRemoveNote(id){
        this.props.removeNote(id);
    }
    render(props){

        return(
            <div className="container">
                <span className="closebtn"
                onClick={() => this.handleRemoveNote(this.noteId)}>&times;
                </span>

                <Media>
                    <Media.Left>
                        <img width={300} height={200} src={this.noteImage} alt="Image"/>
                    </Media.Left>
                    <Media.Body>
                        <Media.Heading>{this.noteTittle}</Media.Heading>
                        <p>{this.noteDescription}</p>
                        <p>{this.noteOrder}</p>
                    </Media.Body>
                </Media>


            </div>


        )
    }


}
Note.propTypes ={
    noteDescription: PropTypes.string,
    noteImage:PropTypes.string,
    noteTittle:PropTypes.string,
    noteOrder:PropTypes.string

}
export default Note;