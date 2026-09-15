import React, {useRef, useEffect, useState} from 'react'
import FormGroup from "../components/FormGroup";
import CompoundInteresRateCalc from './CompoundInteresRateCalc';

export default function CompoundInteresRateApp() {

    let inputPrinciple = useRef(null); //For the focus

    useEffect(()=>{
        inputPrinciple.current.focus();
    },[]);

    const [compound, setCompound] = useState({
            principleAmount:0,
            monthlyContribution:0,
            interestRate: 0,
            years:0
    });


    document.body.style.background="#2174af";

  return (
    <div className="container">
        <div className='card card-primary bg-warning shadow-md text-dark m-auto mt-4'
             style={{ maxWidth:300}}>

            <div className='card-body'>
                <FormGroup
                    labelText={"Principle amount $:"}
                    inputType={"Number:"}
                    values={compound.principleAmount}
                    onChange={(e)=>setCompound({...compound, principleAmount: e.target.value})}
                    className={"form-control"}
                    reference={inputPrinciple}
                />

                <FormGroup
                    labelText={"Monthly contributions $:"}
                    inputType={"Number:"}
                    values={compound.monthlyContribution}
                    onChange={(e)=>setCompound({...compound, monthlyContribution: e.target.value})}
                    className={"form-control"}
                />

                <FormGroup
                    labelText={"Interest rate %:"}
                    inputType={"Number:"}
                    values={compound.interestRate}
                    onChange={(e)=>setCompound({...compound, interestRate: e.target.value})}
                    className={"form-control"}
                />


                <FormGroup
                    labelText={"Year of invest"}
                    inputType={"Number:"}
                    values={compound.years}
                    onChange={(e)=>setCompound({...compound, years: e.target.value})}
                    className={"form-control"}
                />                

            </div>
            <div className='card-footer text-right fs-lg bg-danger bg-gradient text-light'> 
              <CompoundInteresRateCalc 
                        principleAmount={compound.principleAmount}
                        monthlyContribution={compound.monthlyContribution}
                        interestRate={compound.interestRate}
                        years={compound.years}/>
              
            </div>

        </div>      
    </div>
  )
}
