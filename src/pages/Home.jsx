import React, {useState, useContext} from 'react'
import Button from '@mui/material/Button';
import '../styles/Home.css'
import { Modal } from '../components/Modal';
import cloudy from '../assets/cloudy.png'
import AppContext from '../context/AppContext';
import { Card } from '../components/Card';
import hot from '../assets/clima-caliente.png'
import llovizna from '../assets/llovizna.png'
import templado from '../assets/templado.png'
import truenos from '../assets/truenos.png'


export const Home = () => {

  const {dataCity} = useContext(AppContext);
  const [openModal, setOpenModal] = useState(false);

  const handleClick = () => {
    setOpenModal(!openModal);
  }


  return (
    <>
        {openModal && 
        <div className='modal--container'>
          <Modal setOpenModal={setOpenModal}></Modal>
        </div>
        }
      <section className='section--home'>
        <div className='section-home--right'>
          <div className='home-right--title'>
            <h2>Real-Time & Historical World Weather Data API</h2>
          </div>
          <div className='home-right--info'>
            <p>Retrieve instant, accurate weather information for any location in the world in JSON format</p>
          </div>
          <div className='home-right--data'>
            <p>Trusted by 75.000 compannies worldwide</p>
          </div>
          <div className='home-right--button'>
            <Button onClick={handleClick} type='button' variant="contained">START USING THE API</Button>
            <p>Its free!!</p>
          </div>
        </div>

        
        <div className='section-home--left'>
          <div className='container-clima--data'>
              {dataCity.length > 1 ? <h3>{dataCity[0].name}</h3> : <h3>London</h3>}
              
              {dataCity.length > 1 ? <Card info={dataCity[0]}></Card> : 
                <div className='container--data'>
                  <div className='container--data--img'>
                    <figure>
                      <img src={cloudy} alt='cloudy'></img>
                    </figure>
                    <p>Today</p>
                  </div>

                  <div className='container-data--grades'>
                    <p>31°<span>C</span></p>
                  </div>

                  <div className='container-data--dates'>
                    <div className='data-clima'>
                      <p>Wind: 22 kmph</p>
                      <p>Precip: 0mm</p>
                      <p>Pressure: 1008 mb</p>
                    </div>
                  </div>
                </div>
              }
              

              <div  className='container--temp'>  
              {dataCity.length > 1 ? dataCity.map((day, index) => {
                return   <div key={day.id} className='card--container'>
                          <div className='card--day'>
                            <p>SUN</p>
                          </div>
                          <figure className='card--figure'>
                            <img src={
                                  day.main.temp > 25 ? hot :
                                  day.main.temp <= 25 & day.main.temp > 20 ? templado :
                                  day.main.temp <= 20 & day.main.temp > 15 ? cloudy :
                                  day.main.temp <= 15 & day.main.temp > 10 ? llovizna :
                                  truenos
                                } alt="" />
                          </figure>
                          <div className='card--grades'>
                            <p>{day.main.temp}°C</p>
                          </div>
                        </div>
              }) : 
                <>
                        <div className='card--container'>
                          <div className='card--day'>
                            <p>SUN</p>
                          </div>
                          <figure className='card--figure'>
                            <img src={cloudy} alt="" />
                          </figure>
                          <div className='card--grades'>
                            <p>36°C</p>
                          </div>
                        </div>
                        <div className='card--container'>
                          <div className='card--day'>
                            <p>SUN</p>
                          </div>
                          <figure className='card--figure'>
                            <img src={cloudy} alt="" />
                          </figure>
                          <div className='card--grades'>
                            <p>38°C</p>
                          </div>
                        </div>
                        <div className='card--container'>
                          <div className='card--day'>
                            <p>SUN</p>
                          </div>
                          <figure className='card--figure'>
                            <img src={cloudy} alt="" />
                          </figure>
                          <div className='card--grades'>
                            <p>39°C</p>
                          </div>
                        </div>
                        <div className='card--container'>
                          <div className='card--day'>
                            <p>SUN</p>
                          </div>
                          <figure className='card--figure'>
                            <img src={cloudy} alt="" />
                          </figure>
                          <div className='card--grades'>
                            <p>33°C</p>
                          </div>
                        </div>
                        <div className='card--container'>
                          <div className='card--day'>
                            <p>SUN</p>
                          </div>
                          <figure className='card--figure'>
                            <img src={cloudy} alt="" />
                          </figure>
                          <div className='card--grades'>
                            <p>27°C</p>
                          </div>
                        </div>
                        </>
              }
              </div>
             
          </div>
        </div>
      </section>
    </>
  )
}
