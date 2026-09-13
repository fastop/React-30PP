import React, {useState, useEffect} from 'react'
import {NoteStyle, Icons, DeletedIcon} from "./NoteStyle";
import { MdOutlineNoteAlt, MdDeleteForever } from 'react-icons/md';

export default function NewNote({note, onClick, text, cardBg}) {

    const [newCardBg, setNewCardBg] = useState();
    
    console.log(cardBg()); //You can use like this but you NEED useEffect to preserve changes, if not, every time you create a new note, it will change color on each and averyone... WARNING!

    useEffect(()=>{
        
        //!newCardBg && 
        setNewCardBg(cardBg);

    }, [newCardBg]);


  return (

    <NoteStyle className={`card ${newCardBg}`}>
        <div className="card-header text-right">
            <Icons>
                <MdOutlineNoteAlt />
                <DeletedIcon>
                    <MdDeleteForever onClick={()=>onClick(note.id)} />
                </DeletedIcon>
            </Icons>
        </div>
        <div className="card-body">
            <textarea style={{ border: "none", outline:"none"}}>{text}</textarea>
        </div>

    </NoteStyle>
  )
}
