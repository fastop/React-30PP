import React, {useContext, useState, useEffect} from 'react'
import Button from '../../components/Button';
//Context
import { CurrencyContext } from '../context/currencies-context';


export default function Course({ course }) {

    const currency = useContext(CurrencyContext);
    const {title, image, price, description} = course ;

    console.log(currency);

      const contextPrice = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: currency.code
    }).format(price * currency.conversionRate);
 
    //Changes course background color
    const [courseBg, setCourseBg] = useState();
    useEffect(()=>{
        if(currency.code === "USD") setCourseBg("bg-light");
        if(currency.code === "EUR") setCourseBg("bg-secondary");
        if(currency.code === "GBP") setCourseBg("bg-dark");  
    },[currency.code]);
 
  return (
    <li className={`card mb-2 ${courseBg}`} style={{ width:250 }}>
        <div className="card-header"> { title } </div>
        <img src={image} alt="course img" style={{ height: "100%" }} />
        <p className="card-body"> 
            {description}            
        </p>
        <div className="card-footer d-flex space-between">
            <h4>{contextPrice}</h4>
            <Button btnClass="btn-success" text={"BUY!"} />
        </div>
    </li>
  );
}
