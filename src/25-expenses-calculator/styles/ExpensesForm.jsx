import React from 'react';
import Button from "../../components/Button";
import FormGroup from "../../components/FormGroup";
import {MdEdit, MdAddCircle} from "react-icons/md";


export default function ExpensesForm({handleSubmit, date, handleDate, charge, handleCharge, edit}) {
  return (
    <form onSubmit={handleSubmit} className='card bg-success text-light'>
        <div className='card-body'>
            <FormGroup labelText={"Data"}
                       className={"form-control"} 
                       inputType="date"
                       values={date}
                       onChange={handleDate}/>

            <FormGroup labelText={"Expenses"}
                       className={"form-control"}
                       inputType="text"
                       values={charge}
                       onChange={handleCharge}
                       placeholder={"e.g. rent"} />

            <FormGroup labelText={"Amount"}
                       className={"form-control"}
                       inputType="number"
                       values={charge}
                       onChange={handleCharge}
                       placeholder={"e.g. 1500"} />
          {" "}

            {edit ? (
                    <Button btnClass={"form-control btn-warning"}
                            icon={<MdEdit className='btn-icon' />}
                            text="Edit" /> 
            ):(
                    <Button btnClass={"form-control btn-warning"}
                            icon={<MdAddCircle className='btn-icon' />}
                            text="Add" /> 
            )}

        </div>
    </form>
  )
}
