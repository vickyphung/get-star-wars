import React from 'react'
import { useNavigate } from 'react-router-dom'
import './style.css'

const Films = ({ apiResponse }) => {
const navigate = useNavigate();
  return (
    <div className='details'>
      {
        apiResponse?.results?.map((film) => {
          return (
            <div key={film.title} className="filmDetails">
                <div><h3>{film.title}</h3></div>
                <div>{film.director}</div>
                <div>{film.episode_id}</div>
                <div>{film.producer}</div>
                <div>{film.release_date}</div>

                <div>
                  <a href={film.url}>More Info</a>
                </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Films
