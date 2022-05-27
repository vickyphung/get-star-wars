import React from 'react'
import { useNavigate } from 'react-router-dom'

const Species = ({ apiResponse }) => {

  const navigate = useNavigate();

  return ( <div>
    {
      // ? checks if there is an apiResponse, if there is none the ? makes the app not error. 
      apiResponse?.results?.map((item) => {
        return (
          <div key={item.name} className="speciesDetails">
              <div><h3>{item.name}</h3></div>
              <div><a href={item.url}>More Info</a></div>
          </div>
        )
      })
    }
  </div>
  );
}

export default Species;

