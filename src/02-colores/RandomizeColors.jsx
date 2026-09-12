import React from 'react'
import Title from '../components/Title'

export default function RandomizeColors() {

    //Handler de click
    const handleClick =(e) => {

      // document.body.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;    
      let body = document.querySelector('body');
          body.style.backgroundColor = getRandomColor(); 

          e.target.style.backgroundColor = getRandomColor();
    };


    function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }


  return (
    <div className='container'>
      Randomizer Colors

        <Title text="Randomize Colors" classes ={"mb-4"} />

        <button className="btn btn-danger"    onClick={handleClick}>Click Me</button>
        <button className="btn btn-secondary" onClick={handleClick}>Click Me</button>
        <button className="btn btn-primary"   onClick={handleClick}>Click Me</button>
        <button className="btn btn-warning"   onClick={handleClick}>Click Me</button>




    </div>
  )
}
