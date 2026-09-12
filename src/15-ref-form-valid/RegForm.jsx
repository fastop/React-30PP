import React, {useEffect, useRef, useState} from 'react'
import Title from '../components/Title.jsx';
import Button from "../components/Button.jsx";
import Alert from "../components/Alert.jsx";

export default function RegForm() {

  let inputName = useRef(null);
  let inputEmail = useRef(null);
  let inputPassword = useRef(null);

    useEffect(()=>{
      inputName.current.focus();
    },[]);

    const [values, setValues] = useState({
        user_name:"",
        email:"",
        password:""
    });

    const [submit, setSubmit]= useState(false);
    const [valid, setValid] = useState(false);


  //Handlers
    const handleNameChange = (e) =>{
      setValues({...values, user_name:e.target.value});
    }

    const handleEmailChange = (e) =>{
      setValues({...values, email:e.target.value});
    }

    const handlePasswordChange = (e) =>{
      setValues({...values, password:e.target.value});
    }    

    const handleSubmit = (e)=>{
        e.preventDefault();

        //Enfocando si estan vacios al enviar...
        if(!values.user_name)
          inputName.current.focus();
        else if(!values.email)
          inputEmail.current.focus();
        else if(!values.password)
          inputPassword.current.focus();


        if(values.user_name && values.email && values.password) {
          setValid(true);
        }
        setSubmit(true);
    }

    

 
  return (
    <div className='m-auto'>

      {/* Alerts & Welcome */}

      {submit && valid? (
        <>
          <Alert type ={"success"} 
                 message={"Registration was succesul!"}
                 delay={true}
                 delayTime={5000}
          />

          <Title text={`Welcome ${values.user_name}`}/>
        </>
      ):(


        
        <div className="container m-auto mt-4 p-2 shadow-sm border-5">
            <Title text="Registration" />
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                  <input type="text"  
                         className='form-control mb-2' 
                         placeholder='Enter your name' 
                         ref={inputName}
                         value={values.user_name}
                         onChange={handleNameChange}/>

                      {submit && !values.user_name ?(
                                <label className='text-danger fs-sm'> Please enter your name</label>
                              ):(null)}

                  
                </div> {" "}
                <div className='form-group '>
                  <input type="email" 
                         className='form-control mb-2' 
                         placeholder='Enter your email' 
                         ref={inputEmail}
                         value={values.email}
                         onChange={handleEmailChange}/>
                      
                      {submit && !values.email?(
                                 <label className='text-danger fs-sm'> Please enter your email</label>
                              ):(null)}
                               
                </div> {" "}
                <div className='form-group '>
                  <input type="password"  
                         className='form-control mb-2' 
                        placeholder='Enter your password' 
                        ref={inputPassword}
                        value={values.password}
                        onChange={handlePasswordChange}/>

                      
                      {submit && !values.password ?(
                                <label className='text-danger fs-sm'> Please enter your password</label>
                              ):(null)}

                                
                </div> {" "}          

                <Button btnClass={"btn-primary btn-lg btn-block w-100"} text='Register'/>

 

            </form>

        </div>

        )}
      
    </div>
  )
}
