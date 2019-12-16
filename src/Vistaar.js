import React from "react"
import "./Vistaar.css"


function Vistaar(props){
  return(
    <div class = "container">

    <div class = "row" >
      <div class = "col-md-5">

        <div class = "row">

          <div class="col-md-6">
            <div class="row">
              <div class ="col-md-12">
              <div class="uparneeche"> {props.day && <p style = {{fontSize:"medium", padding:"2px 2px 0px 2px"}}> { props.day }, {props.date} {props.month} </p>}
 </div>
          </div>
        </div>
      <div class = "row">
          <div class ="col-md-12">
            <div class="uparneeche"> { props.description && <p style={{color:"grey", fontSize:"small", padding:"0px 2px 0px 2px"}}>{ props.description[0].toUpperCase() + props.description.slice(1) } </p> }
 </div>
          </div>
        </div>
          </div>

          <div class = "col-md-2">
            <div > { props.humidity && <p style={{color:"orange", fontWeight:"extrabold"}}> <b><span style={{textAlign:"center", padding:"50px 25px"}}>{ props.humidity }% </span></b> </p> }
 </div>
         </div>

         <div class="col-md-2">
           <div> { props.icon && <img src ={`http://openweathermap.org/img/wn/${props.icon}.png`} alt = "Weather Icon" />}  </div>
        </div>

        <div class="col-md-2">

          <div class="row">
            <div class ="col-md-12">
              <div class="alag"> {props.maxtemp && <p > {props.maxtemp } {props.max_tt}	</p> }
 </div>
            </div>
          </div>

          <div class="row">
            <div class ="col-md-12">
              <div class="alag"> {props.mintemp && <p> {props.mintemp }, {props.min_tt}</p> } </div>
            </div>
          </div>

      </div>

    </div>
    <hr />
  </div>

</div>

</div>
  )
}

export default Vistaar
