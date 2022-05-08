import React, {useRef, useContext} from 'react'
import {Button} from '@mui/material';
import '../styles/Modal.css'
import AppContext from '../context/AppContext';


export const Modal = ({setOpenModal}) => {
  
  const {getApi} = useContext(AppContext);
  const form = useRef(null);

  const handleUser = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current)
    const data = {
      name: formData.get('name'),
      city: formData.get('city')
    }
    getApi(data.city, data.name);
    setOpenModal(false);
  }

  const eventUser = () => {
    setOpenModal(false);
  }

  return (
    <div className='div-container--modal'>
        <form ref={form}>
            <label >Hey!! Dime tu nombre: </label>
            <input name='name' type='text' placeholder='Name'></input>
            <label >Que ciudad quieres buscar: </label>
            <input name='city' type='text' placeholder='City'></input>
            <Button onClick={handleUser} variant="contained">START USING THE API</Button>
        </form>
        <button onClick={eventUser} className='div-close'>X</button>
    </div>
  )
}
