import React, { useContext } from 'react'
import { v4 as uuidv4 } from 'uuid';
import {Link} from 'react-router-dom';
import { useForm } from "react-hook-form"
import { ContactContext } from '../context/Contactcontext';

export const Formpage = () => {

  const {postContact} = useContext(ContactContext)
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({defaultValues:{
    name: '',
    phone: '',
    id: uuidv4(),
  },})

  const onSubmit = (data) => {
    postContact(data)
  }

  return (
    <div>
       <h1>Add contact</h1>
       <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Enter your full name:</label>
          <br />
          <input type="text" {...register("name", { required: true})}/>
          {errors.name && (
          <div style={{color: 'red' }}>Enter your name</div>
          )}
        </div>
        <br />
      <div>
      <label htmlFor="name">Enter your mobile number:</label>
          <br />
      <input type="number" {...register("phone", { minLength: 8, maxLength: 25 })}/>
      {errors.phone && (
          <div style={{color: 'red' }}>Enter your number</div>
          )}
      </div>
        <input type="submit" />
       </form>
        <button><Link to="/">Back to home page</Link></button>
    </div>
  )
}
