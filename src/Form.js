import React from "react"

function Form(props){
  return(
    <div>
      <form onSubmit = {props.fetchWeather}>
      <input type = "text" name = "city" placeholder = "City" />
      <input type = "text" name = "country" placeholder = "Country" />
      <input type = "text" name = "temperature" placeholder = "Temperature" />
      <input type = "text" name = "maxtemp" placeholder = "Max temp" />


      <button type = "submit"> Search</button>
      </form>
    </div>
  )
}

export default Form
