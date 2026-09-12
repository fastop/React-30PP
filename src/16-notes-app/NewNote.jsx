import React from 'react'
import {NoteStyle, Icons, DeletedIcon} from "./NoteStyle";

import { MdOutlineNoteAlt, MdDeleteForever } from 'react-icons/md';

export default function NewNote() {

    const [note, setNote] = useState([]);

/*     const addNewNote=(newNote)=> {
        const newNotes = [...notes, newNote];
        newNote.filter((note)=>!note.id && note.id=)
    }; */

    


  return (

    <NoteStyle className="card">
        <div className="card-header text-right">
            <Icons>
                <MdOutlineNoteAlt />
                <DeletedIcon>
                    <MdDeleteForever />
                </DeletedIcon>
            </Icons>
        </div>
        <div className="card-body">
            <textarea style={{ border: "none", outline:"none"}}></textarea>
        </div>

    </NoteStyle>
  )
}
