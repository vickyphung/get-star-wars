import React from 'react'
import { useNavigate } from 'react-router-dom'
import './style.css'


//props.apiResponse = apiResponse; destructuring code
const Person = ({ apiResponse }) => {
const navigate = useNavigate();

  return (
    <div className='details'>
      {
        // ? checks if there is an apiResponse, if there is none the ? makes the app not error. 
        apiResponse?.results?.map((person) => {
          return (
          
            <div key={person.name} className="personDetails">
                <div><h1>{person.name}</h1></div>
                <div>{person.birth_year}</div>
                <div>{person.skin_color}</div>
                <div>{person.eye_color}</div>
                <div>
                    {person.hair_color === 'n/a' ? "no hair" : `${person.hair_color}`}
                </div>
                <div>{person.height}</div>
                <div>{person.mass}</div>
                <div>{person.homeworld}</div>
                <div>{person.starships}</div>
                <div>{person.vehicles}</div>
                <div>
                  <a href={person.url}>More Info</a>
                </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Person
