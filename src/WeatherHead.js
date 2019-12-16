import React from "react"
import "./WeatherHead.css"

function WeatherHead(props){
  return(
    <div>
      <div className = "container">
        <div className = "row">
          <div className = "col-md-5">
            <div className = "teesra">

            <div style = {{align:"center", padding:"20px 20px 1px 20px"}}>
          <form onSubmit = {props.fetchWeather} class="navbar-form" role="search">

            <div class="input-group add-on">
              <input class="form-control" placeholder="Search" name="city" placeholder = "City" id="srch-term" type="text" />
              <div class="input-group-btn">
                <button class="btn btn-default" type="submit">
                 <i class="glyphicon glyphicon-search"></i></button>
              </div>
            </div>

          </form>
          </div>



            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherHead
