import React from 'react'
import { Outlet } from 'react-router-dom'


function Contactsrow({name, phone}) {

  return (
    <>
        <tr>
        <td>{name}</td>
        <td>{phone}</td>
        <td><button>Delete contact</button></td>
        </tr>
    </>
 

  )
}

export default Contactsrow