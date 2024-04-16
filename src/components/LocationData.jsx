import React from 'react'
import './styles/locationData.css'

const LocationData = ({location}) => {


  return (
    <div className='location__container'>
      <section className='location'>
          <h2 className='location__name'>{location?.name}</h2>
          <ul className='location__list'>
              <li className='location__item'><span>Type: </span><span><br />{location?.type}</span></li>
              <li className='location__item'><span>Dimension: </span><br /><span>{location?.dimension}</span></li>
              <li className='location__item'><span>Population: </span><br /><span>{location?.residents.length}</span></li>
          </ul>
      </section>
    </div>
  )
}

export default LocationData;