import React, { createContext, useState } from 'react'
import { getContacts, setContact } from "../api/Contactsapi" 


export const ContactContext = createContext()

const contactData = await getContacts();

export const  ContactcontextProvider = ({children}) => {

const [contacts, setContacts] = useState(contactData)

const postContact = (contact) =>{
    setContacts(prev => [...prev, contact])

    setContact(contacts);
}

const deleteContact = (id) =>{
    setContacts(prev => prev.filter(contact => contact.id !== id))
    deleteContact(id);
}

  return (
    <ContactContext.Provider value={{ contacts, postContact, deleteContact }}>
      {children}  
    </ContactContext.Provider>
  )
}
