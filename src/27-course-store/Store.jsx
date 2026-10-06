import React, {useState} from 'react'
import Button from '../components/Button';
import Courses from './components/Courses';

//BD
import { coursesDB } from './db/courseDB';
import { currenciesDB } from './db/currenciesDB';

//Context
import { CurrencyContext } from './context/currencies-context';


document.body.style.backgroundColor="#282c34";
document.body.style.color="#eee";

export default function Store() {

    const [currency, setCurrency] = useState(currenciesDB.Euro);
 

  return (

      <CurrencyContext.Provider value={currency}>
 

          <div className="container p-1">
              <h4 className="mb-2">Change Currency</h4>
              
    
               {Object.values(currenciesDB).map((currency) => (
                                   
                   <Button 
                      key={currency.label}
                      text={currency.code}
                      btnClass={"btn btn-light btn-sm"}
                      onClick={() => setCurrency(currency)}/> 
              ))} 

              <header className="text-center mt-4">
                  <h1 className="title fs-xl">Welcome to the Course Store</h1>
                  <h2 className="text-uppercase mb-2"> Become a Web Developer</h2>
                  <p className="mx-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                  </p>
              </header>

            <Courses list={coursesDB}/>  

          </div>


      </CurrencyContext.Provider>          
  )
}
