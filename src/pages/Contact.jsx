import React, {useRef, useState} from 'react'
import '../styles/Contact.css'
import Button from '@mui/material/Button';

export const Contact = () => {

  const [name, setName] = useState('');

  const form = useRef(null);

  const userData = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current)
    const data = {
      name: formData.get('name'),
      correo: formData.get('correo')
    }
    setName(data.name);
    console.log(name);
  }

  return (
    <div className='section-container--contact'>

      <div className='fomr--container'>
        <p>My name is Estiven Mahecha Henao, I am Frontend developer, I like to design web pages and also implement them in production with the best practices. Contact me!!</p>
        <form ref={form}>
          <label>Nombre completo</label>
          <input type="text" name="name" placeholder='Name' />
          <label>Correo electronico</label>
          <input type="email" name="correo" placeholder='Correo electronico' />
          <Button onClick={userData} className='button--contact' type='button' variant="contained">Send data</Button>
          {name ? <p className='footer-parrafo'>{name} enviaste la informacion con exito</p> :
          <p className='footer-parrafo'>Grcias por ver la pagina!!</p>
          }
        </form>
      </div>
    </div>
  )
}
