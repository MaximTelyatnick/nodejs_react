
import React, { Component } from 'react'
import Note from './Note/Note'
import firebase from 'firebase/app';
import 'firebase/database';
import {firebaseApp, db} from "./Config/config"

class App extends Component {

    constructor(props){
        super(props);
        this.removeNote = this.removeNote.bind(this);
        if (!firebase.apps.length) {
            this.app=  firebaseApp;
        }
        this.database = db.ref().child('Position');
        this.state = {
            notes:[],
        }
    }
    componentWillMount(){
        const previousNotes = this.state.notes;

        // DataSnapshot
        this.database.on('child_added', snap => {
            previousNotes.push({
                id: snap.key,
                noteImage:snap.val().Image,
                noteTittle: snap.val().Tittle,
                noteDescription: snap.val().Description,
                noteOrder: snap.val().Order,

            })

            this.setState({
                notes: previousNotes
            })
        })

        this.database.on('child_removed', snap => {
            for(var i=0; i < previousNotes.length; i++){
                if(previousNotes[i].id === snap.key){
                    previousNotes.splice(i, 1);
                }
            }

            this.setState({
                notes: previousNotes
            })
        })


    }



    removeNote(noteId){
        console.log("from the parent: " + noteId);
        this.database.child(noteId).remove();
    }

    render() {
        return (
            <div>
                <div className="notesBody">
                    {
                        this.state.notes.map((note)=>{
                            return(
                                <Note noteTittle={note.noteTittle}
                                      noteImage={note.noteImage}
                                      noteDescription={note.noteDescription}
                                      noteOrder={note.noteOrder}
                                      noteId={note.id}
                                      key={note.id}
                                      removeNote ={this.removeNote}
                                />

                            )
                        })
                    }

                </div>

            </div>
        );
    }
}

export default App;

