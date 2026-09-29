import React, {useState, useEffect, useRef} from 'react';
import Title from "../components/Title";
import ExpensesForm from './styles/ExpensesForm';
import ExpensesList from './styles/ExpensesList';
import { BudgetStyle } from './styles/Budget.style'; 
import {v4 as uuidV4} from "uuid";


const initialExpense = localStorage.getItem("expenses")?
        JSON.parse(localStorage.getItem("expenses")) : [];

export default function ExpensesCalcApp() {

    const [expenses, setExpenses] = useState(""); //All expenses
    const [date, setDate] = useState(""); //Single Expense
    const [amount, setAmount] = useState(""); //Single Amount
    const [charge, setCharge] = useState(""); //Single Charge 
    const [budget, setBudget] = useState(""); // Budget
    const [id, setId] = useState(0); //Id's
    

    //HANDLERS

    //Handle Budget
    const changeBudget = (e) => {
       // setBudget(e.target.value);
        setBudget(inputBudget.current.value);
    };

    //Handle Charge
    const handleCharge = (e) => {
        setCharge(e.target.value);
    };

    //Handle Date
    const handleDate = (e) => {
        setDate(e.target.value);
    };

    //Handle Amount
    const handleAmount = (e) => {

        setAmount(e.target.value);
 
        // let tempExpense = expenses.map((item)=>{
        //     return item.id === id? {...item, date, charge, amount} : item;
        // });
  
        // //Set Expense
        // setExpenses(tempExpense);
 
    };

    //Handle Submit
    let edit;
    const handleSubmit = (e) => {
       e.preventDefault();

        console.log(date);
        console.log("Charge: "+charge);
        console.log("Amount: "+amount);

    //   if(date !=="" && charge !== "" && amount > 0){
        if(date !=="" && charge !== "") {
            console.log("Estoy dentro ayyy");
        console.log("Edit: "+edit);

        if(edit){
            console.log("editando");
            let tempExpense = expenses.map((item)=>{
                return item.id === id ? {...item, date, charge, amount } : item;
            });

           setExpenses(tempExpense);
        } else {
            console.log("Me la pelas");
            const singleExpense = {id:uuidV4(), date, charge, amount};
            setExpenses([...expenses, singleExpense]);
        }
       } 

       //Set Expense

    };

    let inputBudget = useRef(null);

    useEffect(()=>{
        inputBudget.current.focus();        
        // inputBudget.current.value === "" && inputBudget.current.focus();
        localStorage.setItem("expenses", JSON.stringify(expenses));
    }, [expenses]);



  return (
    <main className='container'>
        <Title text={"Expenses Calculator"}/>
        {/* Alert Comp */}

        <section style={{ 
            display:"grid",
            gridTemplateColumns: "repeat(2,1fr)",
            gap:"25px",
            margin:"1rem"
         }}>

            <aside>
               <ExpensesForm date={date} 
                             charge={charge} 
                             amount={amount} 
                             handleDate={handleDate}
                             handleCharge={handleCharge}
                             handleAmount={handleAmount}
                             handleSubmit={handleSubmit} /> 

                    

                <section className='card mt-2 bt-primary text-light text-right  card bg-success '>
                    <div className='card-body'>
                          <BudgetStyle /> 
                            <h3>Budget : $</h3>
                            <input type="number" 
                                    value={budget} 
                                    onChange={changeBudget} 
                                    ref={inputBudget}
                                    className='form-control' />
                         {/* </BudgetStyle> */}
                            <h3 className='mb-1'>Total expenses: $</h3>
                        {/*Cacl economies*/}
                            <h2>Economies: $</h2>
                    </div>
                </section>
            </aside>
        </section>
         <section className=' card bg-success text-light '> 
            <ExpensesList/> 
        </section>


    </main>
    
  )
}
