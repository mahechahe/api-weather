import React from 'react'
import '../styles/ModalNews.css'
import iamge1 from '../assets/carrusel.jpeg'
import iamge2 from '../assets/carrusel2.jpeg'
import iamge3 from '../assets/carrusel3.webp'

export const ModalNews = ({closeModal, name, newImage}) => {
  const closeModalUser = () => {
      closeModal(true);
  }

  return (
    <div className='modal-news--container'>
        <button onClick={closeModalUser} className='div-close--news'>X</button>
        <div className='tittle--news-container'>
            <h1>Tormentas severas amenazan a 70 millones de personas en el sureste y el Atlántico medio de Estados Unidos</h1>
        </div>
        <div className='info--news'>
            <p>
                Después de producir tornados dañinos en varios estados, un sistema de tormentas volátiles continúa moviéndose por todo el país. Por más de una semana, una parte de Estados Unidos estuvo bajo la amenaza de tormentas severas. Y este viernes, un nuevo sistema amenaza a 70 millones de personas en todo el sureste y el Atlántico medio.
            </p>
            <p>
                Un riesgo de nivel 3 de 5 de tormentas severas se extiende desde el este de Alabama hasta las Carolinas y el sur de Virginia.   Charlotte, Atlanta, Raleigh y Virginia Beach se encuentran en riesgo aumentado. Las áreas circundantes, incluidas Nueva Orleans,  Birmingham y Tallahassee, también están en riesgo este viernes. Estas ciudades tienen un riesgo leve (nivel 2 de 5) de tormentas     severas.
            </p>
        </div>
        <div className='div--images'>
            <div>
                <img src={iamge1} alt="" />
            </div>
            <div>
                <img src={iamge2} alt="" />
            </div>
            <div>
                <img src={iamge3} alt="" />
            </div>
        </div>
    </div>  
  )
}
