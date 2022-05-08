import React from 'react'
import cloudy from '../assets/cloudy.png'
import hot from '../assets/clima-caliente.png'
import llovizna from '../assets/llovizna.png'
import templado from '../assets/templado.png'
import truenos from '../assets/truenos.png'

export const Card = ({info}) => {

  return (
        <div className='container--data'>
                <div className='container--data--img'>
                  <figure>
                    <img src={
                      info.main.temp > 25 ? hot :
                      info.main.temp <= 25 & info.main.temp > 20 ? templado :
                      info.main.temp <= 20 & info.main.temp > 15 ? cloudy :
                      info.main.temp <= 15 & info.main.temp > 10 ? llovizna :
                      truenos
                    }
                    alt='cloudy'
                    />
                  </figure>
                  <p>Today</p>
                </div>

                <div className='container-data--grades'>
                  <p>{info.main.temp}°<span>C</span></p>
                </div>

                <div className='container-data--dates'>
                  <div className='data-clima'>
                    <p>Wind: {info.wind.speed}kmph</p>
                    <p>Precip: {info.wind.deg}mm</p>
                    <p>Pressure: {info.main.pressure}mb</p>
                  </div>
                </div>
        </div>
  )
}
