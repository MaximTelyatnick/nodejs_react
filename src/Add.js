import React, { Component } from 'react'
import NoteForm from './NoteForm/NoteForm'
//import {DB_CONFIG} from "./Config/config";
import firebase from 'firebase/app';
import 'firebase/database';
import {firebaseApp, db} from "./Config/config"

class Add extends Component {

    constructor(props) {
        super(props);
        this.addNote = this.addNote.bind(this);
        if (!firebase.apps.length) {
           this.app=  firebaseApp;
        }
        this.database = db.ref().child('Position');
        //this.db = this.app.database().ref().child('Position');
    }


    addNote(image, tittle, description, order) {
        this.database.push().set({Image: image, Tittle: tittle, Description: description, Order: order});
    }
    render() {
        return (


                <div className="notesFooter">
                    <NoteForm addNote={this.addNote} />
                </div>


        );
    }
}
export default Add