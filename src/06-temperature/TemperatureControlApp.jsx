import React, {useState} from 'react'
import Button from '../components/Button';

export default function TemperatureControlApp() {

  const [temperature, setTemperature] = useState(0);

  const increaseTemperature = () => {
    setTemperature(temperature + 1);
  }

  const decreaseTemperature = () => {
    setTemperature(temperature - 1);
  }


  return (
    <div className="container mt-3  text-center">
        <div className="card bg-light m-auto" style={{ width:200}}>
            <h1 className={`text-light card rounded-circle ${temperature > 0 ? "bg-danger" : "bg-info"}`}
               style={{ height: 150, width:150, border:"2px solid #666", marginLeft:"auto",marginRight:"auto", paddingTop: "50px" }}>
                {temperature}°C
               </h1>
  
      
      <div className="">
        <Button text="-" btnClass={"btn-lg btn-secondary btn-width"} onClick= {decreaseTemperature} />
        <Button text="+" btnClass={"btn-lg btn-secondary btn-width"} onClick= {increaseTemperature} />
      </div>
      </div>

    </div>
  )
}
