import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Contactsrow from "../ui/Contactsrow";
import { ContactContext } from "../context/Contactcontext";

function Contactspage() {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Delete button</th>
          </tr>
        </thead>
        <tbody>
          <Contactsrow />
        </tbody>
      </table>
      <button>
        <Link to={`/addnewcontact`}>Add new contact</Link>
      </button>
    </>
  );
}

export default Contactspage;
