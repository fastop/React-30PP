import React from 'react'
import {MdDelete} from "react-icons/md";
import ExpenseItem from './ExpensesItem';

export default function ExpensesList({clearItems, expenses =[]}) {
  return (
    <>
        <ul className='list  card bg-success text-light '> 
            <ExpenseItem /> 
        </ul>

        {expenses.length > 0 && (
            <button className='btn btn-danger' oncClick={clearItems}>
                <MdDelete /> Clear all expenses
            </button>
        )}

    </>
  );
}
