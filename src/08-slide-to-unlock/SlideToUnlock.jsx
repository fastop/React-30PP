import React, {useState} from 'react'
import LockSlider from './LockSlider.jsx';
import { AiFillUnlock } from 'react-icons/ai';
import Lockscreen from './img/moon.jpg';
import HomeScreen from './img/home.jpg';



export default function SlideToUnlock() {

    const [uiProps, setUiProps] = useState({
      uiText: "Unlock Screen",
      uiColor: "#eee",
      uiBg:`url(${Lockscreen}) center/cover no-repeat`

    })
    const [showLockSlider, setShowLockSlider] = useState(true);
    const [lockSliderValue, setLockSliderValue] = useState(50);

    const handleLockSliderInput = (e) => {
      setLockSliderValue(e.target.value);
      // console.log(e.target.value);
       console.log(lockSliderValue);


      //  handleUnlock();//Cambiamos el estado

      if(lockSliderValue <= 10) {
        console.log("Lock Slider is visible");

        setUiProps({
          uiText: "Home Screen",
          uiColor: "#eee",
          uiBg:`url(${HomeScreen}) center/cover no-repeat`
        })

        if(lockSliderValue === 1){
          setShowLockSlider(false); 
          console.log("LOCKEEEEEEEEEEEEED!!!");
        }
      }
      else{
        //setShowLockSlider(true);
        console.log("Lock Slider is hidden");
        setUiProps({
          uiText: "Unlock Screen",
          uiColor: "#eee",
          uiBg:`url(${Lockscreen}) center/cover no-repeat`
        })
      }
    };


    function handleUnlock() {



    }

    



  return (
    <div className="container text-center d-flex flex-column" 
          style={{height:"70vh", marginTop:"15vh", width:340, 
                  border:"4px solid #000", 
                  borderRadius:"20px",
                  paddingLeft:"2.5rem",
                  background: uiProps.uiBg }}>

          <h1 className='title' style={{ color:uiProps.uiColor}}> {uiProps.uiText} </h1>

            {showLockSlider?(<LockSlider width={"250px"} handleInput={handleLockSliderInput} />): 
                            (<AiFillUnlock className="unlockIcon"/>)
            }
    </div>
  )
}
