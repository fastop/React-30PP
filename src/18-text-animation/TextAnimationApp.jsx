import React, {useState, useEffect, useRef} from 'react'
import Button from '../components/Button';
import FormGroup from '../components/FormGroup';
import {Wave}  from "react-animated-text"; //React-animated-text-content doesnt work with this version on react... 
                                        // https://www.npmjs.com/package/react-animated-text
export default function TextAnimationApp() {


    const [inputValue, setInputValue]=useState("Text");
    const handleInputChange = (e) =>{
        setInputValue(e.target.value);
    }

    const [animatedtext, setAnimatedText] = useState("");
    const handleClear = (e) => {
        setAnimatedText(inputValue);
        setInputValue(()=>"");
    }

    let inputText = useRef(null);
    useEffect(()=>{
        inputText.current.focus();
    });

  return (
    <div className='container text-center'>
        <form className='container d-flex mt-4'
               onSubmit={(e)=>e.preventDefault()}>
                
            <FormGroup labelText={"Type in your text to be animated"}
                        inputType={"text"}
                        placeholder={"Your text"}
                        values={inputValue} 
                        onChange={handleInputChange}
                        reference={inputText}/>
            <Button text="Clear" 
                    btnClass={"btn-large btn-danger"} 
                    onClick={handleClear} />
        </form>


            <div className='title'>
                {animatedtext}
            </div>

                    
                {animatedtext && (
                    <h1 style={{ color:"red" }}>
                        <Wave text={animatedtext} effect="stretch" effectChange={2.2} /> 
                    </h1>
                )}
                   



            {/*         {animatedtext && (
                        <AnimatedText className = "title">{animatedtext}</AnimatedText>
                    )}
            */}        

    </div>
  )
}
