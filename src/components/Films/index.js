import React from 'react'
import { useNavigate } from 'react-router-dom'

const Films = ({ apiResponse }) => {
const navigate = useNavigate();
  return (
    <div>
      {
        apiResponse?.results?.map((film) => {
          return (
            <div key={film.title} className="filmDetails">
                <div><h3>{film.title}</h3></div>
                {/* <div>{film.name}</div> */}
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
