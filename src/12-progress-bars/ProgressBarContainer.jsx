import React, { useRef, useEffect, useState } from 'react'
import Title from '../components/Title';
import {ProgressBar} from '../components/ProgressBar';  

export default function ProgressBarContainer() {

    const [completed, setCompleted] = useState(0);
    const [status, setStatus] = useState({
        ui: 55,
        ux: 73,
        data: 20
    });


    const projectDate=[
        {bgcolor: 'red', completed: status.ui},
        {bgcolor: 'blue', completed: status.ux},
        {bgcolor: 'green', completed: status.data}    
    ];

    const inputStyle = {
        width: '50px',
        border:'none',
        outline:'none',
        textAlign:'center',
        borderBottom:'1px solid lightgray'
    };


    const iuInput = useRef(null);

    useEffect(() => {
        iuInput.current.focus();

        setInterval(() => 
            setCompleted(Math.floor(Math.random()*100)+1) ,2000);
    },[]); 


  return (
    <div className = "container container-sm mx-auto text-center">
        <Title title = "Progress Bars" />

        <h2>Project Status:</h2>

        <ul>
            <li>
                UI Status: {" "} 
                <input type="number"
                        style={inputStyle}
                        ref={iuInput}
                        value={status.ui}
                        onChange={(e) => setStatus({...status, ui:e.target.value})} />
            </li>

            <li>
                UX Status: {" "} 
                <input type="number"
                        style={inputStyle}
                         
                        value={status.ux}
                        onChange={(e) => setStatus({...status, ux:e.target.value})}  />
            </li>

            <li>
                DATA Status: {" "} 
                <input type="number"
                        style={inputStyle}
                        
                        value={status.data}
                        onChange={(e) => setStatus({...status, data:e.target.value})}  />
            </li>                        
        </ul>

        {/* ProgressBar */}

        {/* 
            <ProgressBar bgColor={projectDate[0].bgcolor} completed={projectDate[0].completed} />
            <ProgressBar bgColor={projectDate[1].bgcolor} completed={projectDate[1].completed} />
            <ProgressBar bgColor={projectDate[2].bgcolor} completed={projectDate[2].completed} />
        */}
        {projectDate.map((date, idx) => (
            <ProgressBar key={idx} bgColor={date.bgcolor} completed={date.completed} />
        ))}

        <ProgressBar bgColor={completed > 50 ? 'green' : 'red'} completed={completed} />

    </div>
  )
}
