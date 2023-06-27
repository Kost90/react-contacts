import React from 'react'
import {Outlet, Link} from 'react-router-dom';
import Contactsrow from '../ui/Contactsrow';
import Tablehead from '../ui/Tablehead';

function Contactspage() {

  return (
    <>
 <table>
    <thead>
    <Tablehead/>
    </thead>
    <tbody>
    <Contactsrow />
    </tbody>
  </table>
    <button><Link to={`/form`}>Add new contact</Link></button>
    <Outlet/>
    </>

  )
}

export default Contactspage

