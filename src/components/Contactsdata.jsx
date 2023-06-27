
import React, { useState } from 'react'
import { getContacts } from '../api/Contactsapi';
import Contactsrow from '../ui/Contactsrow';
import { Outlet } from 'react-router-dom';

const contactsData = await getContacts()

function Contactsdata (){

const [contact, setContact] = useState(contactsData);

  return (
    <>
    {contact.map(element => (
        <Contactsrow
        name ={element.name}
        phone={element.phone}
        key={element.id}
        />
    ))}
    </>
  )
}

export default Contactsdata
