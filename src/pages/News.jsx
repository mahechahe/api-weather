import React, {useContext} from 'react'
import '../styles/News.css'
import newImage from '../assets/Mapa-tormenta-CNN.png'
import AppContext from '../context/AppContext'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import { useModal } from '../hooks/useModal'
import { ModalNews } from '../components/ModalNews'

export const News = () => {
  const {name} = useContext(AppContext);

  const {openModal, closeModal, openModalTotal} = useModal();

  const handleChangeUSer = () => {
    openModalTotal()
  }

  return (
    <section className='section-container--news'>
      {openModal && <div className='open-modal'>
                      <ModalNews closeModal={closeModal} name={name} newImage={newImage}></ModalNews>
                    </div>}
      <div className='title--saludo'>
        <h2 >Hola {name}, esta es tu seccion de noticias</h2>
      </div>
      <div className='section-div-pricipal-new'>
        <div className='principal-new--left'>
          <h1>Clima</h1>
          <p>El cambio climático afecta nuestra vida cotidiana, desde la política y los negocios hasta los niveles del mar y el tiempo, la ropa y la comida</p>
          <figure onClick={handleChangeUSer}>
            <img src={newImage} alt="wenImage" />
          </figure>
          <h2>70 millones de personas en EE.UU. están bajo amenazas de tormentas fuertes</h2>
          <p>Tormentas severas continúan azotando el país esta semana, amenazando a 70 millones de personas en todo el sureste y el Atlántico medio.</p>
        </div>
        <div className='principal-new--right'>
          <div className='div-news1'>
            <figure>
              <img src={img1} alt="" />
            </figure>
            <p>El cóctel mortal de factores para la sequía y los incendios en California</p>
          </div>
          <div className='div-news1'>
            <figure>
              <img src={img2} alt="" />
            </figure>
            <p>La India registra las temperaturas más altas en 122 años</p>
          </div>
          <div className='div-news1'>
            <figure>
              <img src={img3} alt="" />
            </figure>
            <p>Agua o electricidad: elección imposible ante la megasequía en EE.UU.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
