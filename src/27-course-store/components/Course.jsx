import React, {useContext} from 'react'
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
 
 
  return (
    <li className={`card mb-2`} style={{ width:250 }}>
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
