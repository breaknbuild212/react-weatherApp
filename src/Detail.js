import React from "react"
import "./res/blurybg.jpg"
import "./Detail.css"


function Detail(props){

  const outing = Object.keys(props).map(item => <li class="list-group-item"> {item} {props[item]} {props.temperature} </li>)
      return (
      <div>
      <h1> Block details </h1>


	 {props.city && <p> Location: { props.city }, { props.country } </p>}

	 {props.temperature && <p> Temperature: {props.temperature }	</p> }

   { props.humidity && <p> Humidity: { props.humidity } </p> }

	 { props.description && <p> Conditions: { props.description } </p> }

	 { props.error && <p>{ props.error }</p> }

   {console.log(1.01)}
   {console.log(props)}

   <ul class="list-group list-group-flush"> {outing} </ul>


  <div class="card" style={{width: 18 + 'rem'}}>
 <img class="card-img-top" src="./res/blurybg.jpg" alt="Card image cap" />
 <div class="card-body">
   <h5 class="card-title">Card title</h5>
   <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
 </div>
 <ul class="list-group list-group-flush">
   <li class="list-group-item">	 {props.city && <p> Location: { props.city }, { props.country } </p>}
</li>
   <li class="list-group-item">{props.temperature && <p> Temperature: {props.temperature }	</p> }</li>

   <li class="list-group-item">   { props.humidity && <p> Humidity: { props.humidity } </p> }
</li>

 </ul>
 <div class="card-body">
   <a href="#" class="card-link">Card link</a>
   <a href="#" class="card-link">Another link</a>
 </div>
</div>


	</div>
);
  }

export default Detail
