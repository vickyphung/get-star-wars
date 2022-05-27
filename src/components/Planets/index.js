import React from 'react'
import { useNavigate } from 'react-router-dom'
import './style.css'

//props.apiResponse = apiResponse; destructuring code
const Planets = ({ apiResponse }) => {
  const navigate = useNavigate();
  return (
    <div className='details'>
      { 
        apiResponse?.results?.map((planet) => {
          return (
            <div key={planet.name} className="planetDetails">
              <div>
                <h3>{planet.name}</h3>
              </div>

              <div>{planet.rotation_period}</div>
                <div>{planet.orbital_period}</div>
                <div>{planet.diameter}</div>
                <div>{planet.gravity}</div>
                <div>{planet.terrain}</div>
                <div>{planet.surface_water}</div>
                <div>{planet.climate}</div>
                <div>{planet.population}</div>
                <div>{planet.films}</div>
              <div>
                <a href={planet.url}>More Info</a>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Planets
