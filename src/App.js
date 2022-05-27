import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react'
import axios from 'axios'
import './App.css';
import Home from './components/Home'
import Person from './components/Person'
import Planets from './components/Planets'
import Species from './components/Species';
import Films from './components/Films';


function App() {

  const navigate = useNavigate()

  const [apiResponse, setApiResponse] = useState({});

  const [formData, setFormData] = useState({
    search: "",
    //One object for all form data on entire site. stores data for all five forms here.
    //people is set as the default, because it is the first dropdown box option in search form
    //can see this in browser console at components/App/hooks/type
    //handleChange only works when there is input/change, and when you navigate to the page you haven't input anything, so it hasn't taken effect, thus need to set a defaults
    type: "people"
  })

    //formData is passed as a prop to other components

    //always put await in Try Catch blocks
    //format: try, {}; catch, error {}, error response.

    //handleSubmit- handles data from form, sets data, execute search
  const handleSubmit = async (event) => {
    //stop page from refreshing (which refreshes all of the state)
    event.preventDefault()
    //TRY to do this first.
    try {
    //response is a promise, use await to get resopnse/data
      const response = await axios.get(`https://swapi.dev/api/${formData.type}/?search=${formData.search}`)
      setApiResponse(response.data)
      //navigates page depending on input value from form 
      navigate(`/${formData.type}`)
    //catch problem before app crashes. instead of crashing, pastes error in console.
    } catch (error) { 
      console.error(error + "app.js line 32");
      setApiResponse({
        error: "Error Occured."
      })
    }
  }
  //deals with form data, type
  //handleChange changes the type of search conducted to the value selected by the user from dropdown box options, i.e. what type of search the user wants to conduct (people, planets, etc)
  const handleChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  

  return (
    <div className="App">
      <div className='navi'>
     <a className='getIndex' href='/'>Home</a> </div>

     <div>
      <Routes>
        {/* Routes index to Home and passes handleSubmit as a prop to homepage. handleSumbit is the function */}
        <Route path='/' element={
          <Home handleSubmit={handleSubmit} handleChange={handleChange} />} />
          {/* Have to give home function and put data into person
          apiResponse: data we are changing 
          use function in home (handleSubmit), when form is submitted 
          one form is submitted, data routes to Person.js
          Person requires data received from API (apiResponse)*/}
          <Route path='/people' element={<Person apiResponse={apiResponse} />} />
          <Route path='/planets' element={<Planets apiResponse={apiResponse} />} />
          <Route path='/species' element={<Species apiResponse={apiResponse} />} />
          <Route path='/films' element={<Films apiResponse={apiResponse} />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;

//This is the Parent
//Has control over other components, gives data
//i.e. give Home the function to change, and /people the data that was changed
//if the apiRespose was in Home.js, the data could not be shared with Person.js
//Data is in parent, which uses PROPS to pass the data to other components. 