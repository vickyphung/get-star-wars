import React from 'react'
import { useNavigate } from 'react-router-dom'
import './style.css'

const Species = ({ apiResponse }) => {

  const navigate = useNavigate();

  return ( 
    <div className='details'>
    {
      // ? checks if there is an apiResponse, if there is none the ? makes the app not error. 
      apiResponse?.results?.map((item) => {
        return (
          <div key={item.name} className="speciesDetails">
              <div><h3>{item.name}</h3></div>

              <div>{item.classification}</div>
                <div>{item.designation}</div>
                <div>{item.homeworld}</div>
                <div>{item.language}</div>
                <div>{item.climate}</div>
                <div>{item.population}</div>
                <div>{item.average_height}</div>
                <div>{item.skin_colors}</div>
                <div>{item.hair_colors}</div>
                <div>{item.eye_colors}</div>
                <div>{item.average_lifespan}</div>

              <div><a href={item.url}>More Info</a></div>
          </div>
        )
      })
    }
  </div>
  );
}

export default Species;

