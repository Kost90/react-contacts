
import React, { useContext } from 'react'
import { ContactContext } from "../context/Contactcontext"


function Contactsrow() {

  const {contacts, deleteContact} = useContext(ContactContext);


  return (
    <>
    {contacts.map(contact => (
        <tr key={contact.id}>
        <td>{contact.name}</td>
        <td>{contact.phone}</td>
        <td><button onClick={deleteContact}>Delete contact</button></td>
        </tr>
    ))}
    </>
 
  )
}

export default Contactsrow