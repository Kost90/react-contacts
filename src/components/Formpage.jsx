import React from 'react'
import {Outlet, Link} from 'react-router-dom';

function Formpage() {
  return (
    <div>
       <h1>Formpage</h1>
        <button><Link to="/">Back to contacts</Link></button>
    </div>
  )
}

export default Formpage