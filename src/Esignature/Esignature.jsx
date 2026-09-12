import React, {useState} from 'react'
import Title from '../components/Title'
 
export default function Esignature() {

  const inputStyle = {
    border:"none",
    borderBottom: "2px dotted black",
    outline: "none",
    padding: ".35rem 0"
  }

  document.body.style.backgroundColor = "#eee";


    const[name, setName] = useState("Your Signature"); //Para el nombre
    const[date, setDate] = useState(""); //Para la fecha

    const handleNameChange = (e) => {
      setName(e.target.value);
      console.log("Name change")
    };

    const handleDateChange = (e) => {
      setDate(e.target.value);
    };


  return (
    <div className="container text-center">

      <Title text={name} classes={"title"} />
      <Title text={!date? "Fecha de Nacimiento Dude!": date} classes={"main-title mb-4"} />

      <p>
        lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
      </p>

    <footer className="d-flex" style={{ justifyContent:"space-around", position:"relative", top:"40vh"}}>
      <input type="date" value={date} onChange={handleDateChange} style={{ inputStyle }} />
      <input type="text" value={name} onChange={handleNameChange} style={{ inputStyle }} />
    </footer>


    </div>
  )
}
