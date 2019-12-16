import React from "react"
import Vistaar from "./Vistaar"


var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]


function Multivistaar(props) {
  var dayNumber = 0;

  console.log('GOooOOOoOOOdSTufff')
  console.log(props)
  if (props.status){
    console.log('yelostatus',props.status)
    console.log('yeloprops',props)

/*

      function get_max_temp(){
        var taap;
        var maxt = []
        var dayCounter = 0;
        var trasharr = []
        var apiReply = props.obj
        for (taap in apiReply.list){
          trasharr.push(taap.main.temp)
          dayCounter = dayCounter +1;
          if (dayCounter > 8){
            dayCounter = 0;
            maxt.push(Math.max(...trasharr))
            trasharr = []
          }
        }
        return(maxt)
      }

      function get_min_temp(){
        var taap;
        var mint = []
        var dayCounter = 0;
        var trasharr = []
        var apiReply = props.obj

        for (taap in apiReply.list){
          trasharr.push(taap.main.temp)
          dayCounter = dayCounter +1;
          if (dayCounter > 8){
            dayCounter = 0;
            mint.push(Math.max(...trasharr))
            trasharr = []
          }
        }
        return (mint)

      }

      var maxtt = get_max_temp();
      var mintt = get_min_temp();
*/

    var selective = {}

    for (var ii = 0; ii < 40; ii = ii + 8 ){
      selective[ii] = props.obj.list[ii]
    }
    console.log('SelectedOnes', selective)

  const listView2 = Object.keys(selective).map(item =>

      <li>
      <Vistaar
      temperature = {selective[item].main.temp}
      humidity = {selective[item].main.humidity}
      description = {selective[item].weather[0].description}
      day = {weekday[(new Date(selective[item].dt_txt)).getDay()]}
      month = {month[(new Date(selective[item].dt_txt)).getMonth()]}
      date = {(new Date(selective[item].dt_txt)).getDate()}
      maxtemp = {selective[item].main.temp_max}

      mintemp = {selective[item].main.temp_min}
      icon = {selective[item].weather[0].icon}
      error = "" />
    </li>

  )
  console.log('maxtima', props.maxtt)
  console.log('mintima', props.mintt)

  const  listView = Object.keys(props.obj.list).map(item =>

    <li>
    <Vistaar
    temperature = {props.obj.list[item].main.temp}
    humidity = {props.obj.list[item].main.humidity}
    description = {props.obj.list[item].weather[0].description}
    day = {weekday[(new Date(props.obj.list[item].dt_txt)).getDay()]}
    maxtemp = {props.obj.list[item].main.temp_max}
    mintemp = {props.obj.list[item].main.temp_min}
    icon = {props.obj.list[item].weather[0].icon}
    error = "" />
  </li>


)

  return(
    <ul className = "list-unstyled"> {listView2} </ul>
  )
}
return null;

}

export default Multivistaar
