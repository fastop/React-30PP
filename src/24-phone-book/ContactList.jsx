import React from 'react'
import Contact from './Contact';

export default function ContactList({contacts}) {


    const generateRandomImg=()=>{
      const types = [
        "identicon",
        "initials",
        "bottts",
        "avataaars",
        "micah",
        "lorelei"
      ];

 
      return types[Math.floor(Math.random()* types.length)];
    };

    console.log("https://api.dicebear.com/10.x/"+generateRandomImg()+"/svg");

  return (
      <>
      {contacts.map((contact, id) => {
        return (
            <div> 
              <Contact key={id}
                      icon={`https://api.dicebear.com/10.x/${generateRandomImg()}/svg`} 
                      firstName={contact.first_name} 
                      lastName={contact.last_name} 
                      phoneNr={contact.phone} />
            </div>
        )}
      )}
      </>
     
  )
}
