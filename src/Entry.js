import React from "react"
import ReactDOM from "react-dom"

// class Entry extends React.Component {
//
//   constructor(props){
//     super(props)
//     this.state = {
//
//     }
//   }

function Entry(props){

  return(
    <div>
  {/*  <form onSubmit = {props.fetchWeather} class="navbar-form" role="search"> */}


<div class="container">
<div class="col-md-5">
  {/*}<form class="navbar-form" role="search"> */}
  <form onSubmit = {props.fetchWeather} class="navbar-form" role="search">

    <div class="input-group add-on">
      <input class="form-control" placeholder="Search" name="city" placeholder = "City" id="srch-term" type="text" />
      <div class="input-group-btn">
        <button class="btn btn-default" type="submit"><i class="glyphicon glyphicon-search"></i></button>
      </div>
    </div>

  </form>
  </div>
  </div>

  {
  /*
      <div class="form-group has-search">
      <span class="fa fa-search form-control-feedback"></span>
      <input type='text' class = "form-control" name = "city" placeholder ="City" />
      </div>
      <button type = "submit"> Search </button>
      </form>
      </div>
      */}
  </div>




  )

}


export default Entry
