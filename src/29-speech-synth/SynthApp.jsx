import React, {useState} from 'react'
import SpeechNarrator from './SpeechNarrator.jsx'

export default function SynthApp() {

  const [text, setText] = useState('');

  return (
    <div className="container d-flex flex-column">
        <SpeechNarrator text={text} /> 

        <textarea   cols="30" 
                    rows="10" 
                    value={text} 
                    onChange={(e) => setText(e.target.value)}>
        </textarea>

    </div>
  )
}
