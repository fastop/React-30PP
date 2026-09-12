import React, {useState, useEffect} from 'react';
import Title from '../components/Title';
import Button from '../components/Button';
import {BsFillFileEarmarkTextFill} from 'react-icons/bs';
import {FaUserAlt} from 'react-icons/fa';
import {BiCommentDetail} from 'react-icons/bi';


export default function TestimonialsApp() {

     const handleClick = (e) => {
        console.log("Button clicked", e.target.innerText);
    }   

    const [testimonials, setTestimonials] = useState("");
    const [items, setItems] = useState();    

   useEffect(() => { 
       fetch(`https://jsonplaceholder.typicode.com/${testimonials}`)
               .then((response) => response.json())
               .then((json) => setItems(json))
   }, [testimonials]);


  return (
    <div className="container m-auto">

        <Title text={"Testimonials"} classes="title text-center" />

        <Button text={"Posts"} 
                btnClass="btn btn-primary ms-2" 
                icon={<BsFillFileEarmarkTextFill />} onClick={()=>{ setTestimonials("Posts")}} />


        <Button text={"Users"} 
                btnClass="btn btn-primary ms-2" 
                icon={<FaUserAlt />} onClick={()=>{ setTestimonials("Users")}} />

        <Button text={"Comments"} 
                btnClass="btn btn-primary ms-2" 
                icon={<BiCommentDetail />} onClick={()=>{ setTestimonials("Comments")}} />


        <Title classes="subtitle text-primary" 
               text={!testimonials? "Select from above!":testimonials} /> 


        {/* Por aca colocamos lo del JSON */}

        {!items ? null : items.map((item) => {
                   return (
                                <div className="card card-primary mb-2" key={item.id}> 
                                   {item.name && <h2 className="card-header">{item.name}</h2>}
                                   <div className="card-body">
                                     <h4>{item.title}</h4>
                                     <p>{item.body}</p>
                                   </div>

                                   {item.email && (<small className="card-footer">{item.email}</small>)}

                                </div>);
                }
        )}; 

    </div>
  );
}
