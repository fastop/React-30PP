import React from 'react'
import Button from '../components/Button.jsx'

export default function Popup({type, title, text, handleClose}) {

  const popupContainer = {
     position: 'absolute',
     top: '0',
     height: '100vh',
     width: '100vw',
    backgroundColor: 'rgba(0,0,0,0.1)',
    zIndex: '-1',
  };

  const popupStyle = {
    position: 'relative',
    margin: "40vh auto",
    zIndex: '1',
  };

  const handlePopupClose = () => {
   // handleClose(false);
    console.log("SSS")
  }

  return ( <div style={popupContainer}> 

{/*             <div className={`${type}`} style ={popupStyle}>
                <div className="alert-close">
                  <div className="d-flex flex-column">
                    <h4 className="mb-1"> {title && title } </h4>
                    <p> {text && text } </p>
                  </div>
                  <Button btnClass={"btn-close"} text={"x"} />
                </div>            
            </div>
             */}

              <div  className={`alert alert-dismissible fade show ${type}`} style ={popupStyle}>
                 <strong>{title && title } </strong>  :: {text && text } 
                 <Button btnClass={"btn-close"} text={""} onClick={()=>handleClose(false)} />

                {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={handlePopupClose} ></button> */}
              </div>
          
          </div> )
}

 



