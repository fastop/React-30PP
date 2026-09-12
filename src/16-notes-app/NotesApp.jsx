import React from 'react';
import NewNote from './NewNote';
import Button from '../components/Button';

export default function notesApp() {
  return (
    <div className='container'>
        <Button btnClass={" btn-info"} text="+ New Note"/>

        <div className="container container-sm d-flex" style={{gap:25, flexWrap:"wrap"}}>

            <NewNote/>
            <NewNote/>
            <NewNote/>
            <NewNote/>
            <NewNote/>
            <NewNote/>
            <NewNote/>

        </div>

    </div>
  )
}
