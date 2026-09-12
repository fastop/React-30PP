import React from 'react'

export default function Contact({contact, width=300, cardColor="card-danger", textColor=""}) {
  return (
    <div key={contact.id} 
         className={"card    m-auto"}
         style={{width: width}}> 

        <div className={`card-header  ${cardColor}`}> {contact.first_name} </div>
        <div className='card-body text-left'> </div>
            <p className='card-text'> 
                {" "} 
                <span className={`fw-bold ${textColor}`}>Last name: </span> 
                {contact.last_name}
            </p>
            <p className="card-text">
                <span className={`fw-bold ${textColor}`}>Email:</span>
                {contact.email}
            </p> {" "}

            <p className="card-text">
                <span className={`fw-bold ${textColor}`}>Phone:</span>
                {contact.phone}
            </p> {" "}

            <p className="card-text">
                <span className={`fw-bold ${textColor}`}>User Name:</span>
                {contact.user_name}
            </p> {" "}
    </div>
  )
}
