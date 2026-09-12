import React, {useState} from 'react'
import Popup from '../components/Popup.component.jsx';
import Button from '../components/Button.jsx';


export default function PopupApp() {

    const [trigger, setTrigger] = useState(false);

    const triggerPopup = () => { 
        setTrigger(true);
    }

  return (
    <div className="text-center">
       
       <Button btnClass="btn-primary" text="Show Alert" onClick={triggerPopup} />
       {trigger && (<Popup type="alert alert-primary" 
                          title="Popeando" 
                          text="Esta es una perra alerta."
                          handleClose={setTrigger} />)}
       

    </div>
  )
}
