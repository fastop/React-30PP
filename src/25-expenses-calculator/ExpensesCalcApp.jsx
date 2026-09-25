import React, {useState, useEffect} from 'react';
import Title from "../components/Title";
import ExpensesForm from './styles/ExpensesForm';
import ExpensesList from './styles/ExpensesList';
import { BudgetStyle } from './styles/Budget.style'; 


export default function ExpensesCalcApp() {

    const [expenses, setExpenses] = useState(""); //All expenses
    const [date, setDate] = useState(""); //Single Expense
    const [amount, setAmoun] = useState(""); //Single Amount
    const [charge, setCharge] = useState(""); //Single Charge 
    const [budget, setBudget] = useState(""); // Budget

    //HANDLERS

    //Handle Budget
    const changeBudget = (e) => {
        setBudget(e.target.value);
    };

    let inputBudget = useRef(null);

    useEffect(()=>{
        inputBudget.current.focus();
    });



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
               <ExpensesForm date={date} charge={charge} amount={amount} /> 

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
