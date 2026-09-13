import React, {useState} from 'react';
import NewNote from './NewNote';
import Button from '../components/Button';
import {v4 as uuidv4} from "uuid";

export default function NotesApp() {

  const [notes, setNotes] = useState([]);

  const addNewNote = (newNote) => {

      const newNotes = [...notes, newNote];
            newNotes.filter((note) => !note.id && (note.id = uuidv4()));
      setNotes(newNotes);

    //  console.log(newNotes);
    //  console.log(uuidv4());
    
    };
     

    const deleteNote = (id) => {
       setNotes(notes.filter((note)=>note.id !== id))
    }

    const cards = [
      "border-info",
      "border-danger",
      "border-primary",
      "border-success",
      "border-warning"
    ];

    const randomizeBg = () => {
      const random = Math.floor(Math.random() * cards.length);
      console.log("PUTAS "+cards[random]);
      return cards[random];
    }



  return (
    <div className='container'>
        <Button btnClass={" btn-info"} text="+ New Note" onClick={addNewNote}/>

        <div className="container container-sm d-flex" 
             style={{gap:25, flexWrap:"wrap"}}>

           
            {notes.map((note)=>(
              <NewNote key={note.id} 
                       note={note} 
                       onClick={deleteNote}
                       cardBg={randomizeBg}/>
            ))}

            {notes.map((note) => console.log("Putos: "+note.id))}

        </div>

    </div>
  )
}
