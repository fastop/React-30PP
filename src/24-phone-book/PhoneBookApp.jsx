import React, {useState} from 'react';
import Title from "../components/Title";
import ContactList from "./ContactList";
import SearchFilter from './SearchFilter';
//Pseudo-database
import { getContacts } from './db';

export default function PhoneBookApp() {

    let dbContacts = getContacts();
    const [showContacts, setShowContacts] = useState(false);
    const [sortAZ, setSortAZ] = useState(true);
    const [searchContact, setSearchContact] = useState("");

    const toggleContacts = () => {
      showContacts ? setShowContacts(false) : setShowContacts(true);
    };

    const toggleSortAZ = () => {
      showContacts ? setSortAZ(false):setSortAZ(true);
    }

  return (
    <>
        <Title text={"Phone Book"}></Title>
        <main className='bg-dark text-light p-1'>
            <SearchFilter handleToggleContacts={toggleContacts}
                          handleToggleSortAZ={toggleSortAZ}
                          handleSearchContact={setSearchContact}/> 

            <div style={{ height:650, overflow:"auto" }}>
                <h2 className='subtitle text-center'> Display Contacts</h2>            
                 {showContacts && <ContactList contacts={
                    sortAZ ? dbContacts.sort((a,b)=> a.first_name.localeCompare(b.first_name)):
                             dbContacts.sort((a,b)=> b.first_name.localeCompare(a.first_name))
                             .filter((contact)=>{
                                if(searchContact === ""){
                                  return contact;
                                } else if(contact.first_name
                                          .toLocaleLowerCase()
                                          .includes(searchContact.toLowerCase())) {
                                    return contact;
                                }
                             })
                  } />}
            </div>
        </main>
    </>
  );
}
