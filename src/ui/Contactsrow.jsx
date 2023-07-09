
import React, { memo, useContext } from 'react'
import { ContactContext } from "../context/Contactcontext"


const Contact = memo (({name, phone, id, removeContact}) => {
  return(
    <tr>
      <td>{name}</td>
      <td>{phone}</td>
      <button onClick={() => removeContact(id)}>Delete contact</button>
    </tr>
  )
});


function Contactsrow() {

  const {contacts, removeContact} = useContext(ContactContext);


  return (
    <>
    {contacts.map(contact => (
        <Contact
        {...contact}
        removeContact={removeContact}
        key={contact.id}
        />
    ))}
    </>
  )
}

export default Contactsrow