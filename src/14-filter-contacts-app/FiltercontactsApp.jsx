import React, {useRef, useState, useEffect} from 'react';
import Title from '../components/Title.jsx';

import ContactData from "./Data.json";
import Contact from "./Contact.jsx";

export default function FiltercontactsApp() {


    let inputSearch = useRef(null);

    useEffect(() => {
        inputSearch.current.focus();
    }, []);


    const [searchContact, setSearchContact] = useState("");
  

  return (
    <div className="text-center">
      <Title text  = {"Filter Contacts App"} />
      <input type="text" 
             placeholder='Search Contacts'
             className="form-control " 
             style={{ padding: '0.3rem 0.5rem', width: '80%', margin: '0 auto', marginBottom:"1rem" }}
             ref={inputSearch}
             onChange={(e)=> setSearchContact(e.target.value)}
             />

       <section className="d-flex" 
                style={{ gap:15, maxWidth: "1600px", margin:"auto", flexWrap:"wrap" }}> 

            {/* {ContactData.map((contact) => (
                <Contact contact={contact} 
                            cardColor={" text-bg-danger "}
                            textColor={"text-dark"} /> 
                ))} */}

                {ContactData.filter((contact) => {
                  
                    if(searchContact === ""){
                      return contact;
                    } else if (contact.first_name.toLocaleLowerCase()
                                      .includes(searchContact.toLocaleLowerCase()) ){
                       return contact;
                    }            
              }).map((contact) => (
                <Contact contact={contact} 
                            cardColor={" text-bg-danger "}
                            textColor={"text-dark"} /> 
                ))
              }

       </section>
    </div>
  )
}
