import React, { useState } from 'react'
import axios from 'axios';
import Header from '../Header';
import './style.css'

//props - takes input from search
const Home = (props) => {

// const handleChange = (event) => {
//     setFormData({...props.formData, [event.target.name]: event.target.value})
//     }
//handleChange went to App.js 

  return (

  <div className='container'>
    <div className='header'><Header /></div>
    <div className='indexBody'>

        <div className='searchContainer'>

          <div className='searchCategory'>
          <p className='searchTitle'>Pick a category</p>
            <select className='searchDropdown' id="type" name="type" onChange={props.handleChange} >
            {/* <label className='formLabels'>Category:</label> */}
              <option value="people" >People</option>
              <option value="planets" >Planets</option>
              <option value="films" >Films</option>
              {/* <option value="starships" >Starships</option> */}
              <option value="species" >Species</option>
            </select>
          </div>

          <div className='searchKeywords'>
          <p className='searchTitle'>Type what you want to search</p>
          <div>
          <form  onSubmit={props.handleSubmit}>
            {/* <label className='formLabels' htmlFor="search">Search: </label> */}
            <input className='formInput' type="text" id="search" name="search" placeholder='leave blank to return all results' onChange={props.handleChange} />
    <br></br>
        
            <input className='submitBtn' type="submit" />
          
          
          </form>
          </div>
        </div>
    </div>
    </div>
</div>
  )
}

export default Home
