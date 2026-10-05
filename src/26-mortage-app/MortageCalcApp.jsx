import React, {useState} from 'react'
import Title from "../components/Title";
import FormGroup from '../components/FormGroup';
import Button from "../components/Button";


export default function MortageCalcApp() {

    // let alertClass;

    //States
    const [homeValue, setHomeValue] = useState("");
    const [downPayment, setDownPayment] = useState("");
    const [loanAmount, setLoanAmount] = useState("");
    const [interestRate, setInterestRate] = useState("");
    const [loanDuration, setLoanDuration] = useState("");
    const [monthlyPayment, setMonthlyPayment] = useState("");

    function calculateLoanAmount(){
        let tmp = (homeValue - downPayment);      
        setLoanAmount(tmp);
        return tmp;
    }

    function calculateMonthlyPayment(){
        function percentageToDecimal(percent){
            console.log(percent);
            console.log(percent / 12 /100)
            return percent / 12 /100;            
        }

        function yearsToMonths(years) {
            return years * 12;
        }

        setMonthlyPayment((percentageToDecimal(interestRate) * loanAmount) / 
                              (1- Math.pow( 1+ percentageToDecimal(interestRate),
                                -yearsToMonths(loanDuration))));

        return monthlyPayment;
    }

    
     let alertClass;
     monthlyPayment ? alertClass = "alert-success" : alertClass = "alert-danger";

  return (
    <div className='container mt-4 card' style={{ width:500 }}>
        <Title text={"Mortage Cal App"}/>
        <form onSubmit={(e)=>e.preventDefault()}>
            <div className='d-grid'
                 style={{ gridTemplateColumns: "1fr 1fr", gap:10 }}>


            <FormGroup  labelText={"Home Value"}
                        inputType={"number"}
                        placeholder={"Enter the value of the home"} 
                        values={homeValue} 
                        onInput={(e)=>setHomeValue(e.target.value)}
                        onKeyUp={calculateLoanAmount}/>
            
            <FormGroup labelText={"Down Payment"}
                        inputType={"number"}
                        placeholder={"Enter your funds"}
                        values={downPayment}
                        onInput={(e)=>setDownPayment(e.target.value)}
                        onKeyUp={calculateLoanAmount}/>
            </div>
            
            <div className='d-grid'
                 style={{ gridTemplateColumns: "1fr 1fr", gap:10 }}>
            <FormGroup labelText={"Loan Amount"}
                        inputType={"number"}
                        placeholder={"The calculated amount of loan"}
                        
                        values={loanAmount}/>

            </div>
            <div className='d-grid'
                  style={{ gridTemplateColumns: "1fr 1fr", gap:10 }}>
                
                <FormGroup labelText={"Interest Rate %"}
                            inputType={"number"}
                            placeholder={"Enter your interest rate"}
                            values={interestRate}
                            onInput={(e)=>setInterestRate(e.target.value)}/>

                <FormGroup labelText={"Loan Duration (years"}
                            inputType={"number"}
                            placeholder={"Enter the duration of your loan in years"}
                            values={loanDuration}
                            onInput={(e)=> setLoanDuration(e.target.value)}/>
            </div>

            <Button btnClass={"btn-info btn-block form-control mt-2 mb-2"} 
                    text={"Calculate"} 
                    onClick={calculateMonthlyPayment}/>

            <h4 className={ `${(alertClass="alert-danger")}`}
                    style={{ width:'auto', margin:"1rem" }}>

                {monthlyPayment? 
                    `Monthly Payment: $${monthlyPayment.toFixed(2)}`: 
                    "Complete all fields"}

             </h4>

        </form>

    </div>
  )
}
