import React from 'react'

export default function SliderComp({setValue, handleInput, bgColor, textColor}) {
  return (
     <div className="container d-flex flex-column">
   

            <input type="range" min={0} max={100} value={setValue} onInput={handleInput}/>
            <div style={{ color: !textColor?"black": textColor,
                           backgroundColor: !bgColor?"lightgray": bgColor,
                           height:`${setValue*3}px`,
                           width: `${setValue*3}px`,
                           fontWeight:600,
                           display:"flex",
                           justifyContent:"center",
                           alignItems:"center",
                           borderRadius:"50%", 
                           marginLeft: "auto",    
                           marginRight: "auto"
             }}>

                <span>
                     CIRCLE
                </span>
            </div>


     </div>
  )
}
