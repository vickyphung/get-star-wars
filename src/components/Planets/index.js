import React from 'react'
import { useNavigate } from 'react-router-dom'

//props.apiResponse = apiResponse; destructuring code
const Planets = ({ apiResponse }) => {
  const navigate = useNavigate();
  return (
    <div>
      { 
        apiResponse?.results?.map((planet) => {
          return (
            <div key={planet.name} className="planetDetails">
              <div>
                <h3>{planet.name}</h3>
              </div>
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
