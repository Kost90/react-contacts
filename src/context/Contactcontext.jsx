import React, { createContext, useState } from 'react'
import { getContacts, addContact, deleteContact } from "../api/Contactsapi" 


export const ContactContext = createContext()

const contactData = await getContacts();

export const  ContactcontextProvider = ({children}) => {

const [contacts, setContacts] = useState(contactData)

console.log(contacts)

const postContact = (contact) =>{
  addContact(contact)
  .then((resp) =>{
    if(resp.ok){
      console.log(resp)
      return resp.json();
    }
  })
  .then ((data) =>{
  setContacts((prev) => [...prev, contact]);
  })
}

const removeContact = (id) =>{
    deleteContact(id)
    .then((resp) =>{
      if(resp.ok){
        console.log(resp)
        return resp.json();
      }
    })
    .then((data) =>{
      setContacts(prev => prev.filter(contact => contact.id !== id))
    })
}

  return (
    <ContactContext.Provider value={{ contacts, postContact, removeContact }}>
      {children}  
    </ContactContext.Provider>
  )
}
