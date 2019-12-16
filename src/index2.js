import React from "react"
import ReactDOM from "react-dom"
import Title from "./Title.js"
import Entry from "./Entry"
import Detail from "./Detail"
import Booty from "./Booty"
import WeatherHead from "./WeatherHead"
import Vistaar from "./Vistaar"
import "./res/blurybg.jpg"
import Multivistaar from "./Multivistaar"


var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
/*var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday"; */

//var n = weekday[d.getDay()];


const API_KEY = "55521da97659123ad78d3f7b36534cf1";
const iconURL = "http://openweathermap.org/img/wn/10d@2x.png"

const apiUrl = "https://samples.openweathermap.org/data/2.5/forecast?q=Delhi&units=metric&appid=55521da97659123ad78d3f7b36534cf122"
const apiForecast = "http://api.openweathermap.org/data/2.5/forecast?q=sydney&appid=55521da97659123ad78d3f7b36534cf1&units=metric"
console.log(1979)


class Mapp extends React.Component{

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    day: undefined,
    maxtemp: undefined,
    mintemp: undefined,
    icon: undefined,
    error: undefined,
    APIresponse: undefined,
    returned: false

  }


  fetchWeather = async (evnt) => {

    evnt.preventDefault();

    const city = evnt.target.elements.city.value;
    console.log(city)
    /*const apiCall = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`); */
    try{

    const apiForecastCall = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`)

    /*const apiReply = await apiCall.json();*/
    const apiReply = await apiForecastCall.json();

    console.log(apiReply)
    console.log(apiReply.list[0].main.temp)
    console.log(apiReply.list[0].main.temp_max)
    var dinaak = apiReply.list[0].dt_txt
    dinaak = new Date(dinaak)
    var dayOfWeek = dinaak.getDay()
    console.log(weekday[dayOfWeek])
    console.log(apiReply.list[0].weather[0].description)
    console.log(apiReply.list[0].main.humidity)
    var i;
    for (i in apiReply.list) {
      console.log('moscow',apiReply.list[i].main.temp);
    }
    console.log('India',this.state.mintemp)

    if (city!=undefined) {
      this.setState({
        temperature: apiReply.list[0].main.temp,
        city: apiReply.city.name,
        country: apiReply.city.country,
        humidity: apiReply.list[0].main.humidity,
        description: apiReply.list[0].weather[0].description,
        day: weekday[dayOfWeek],
        maxtemp: apiReply.list[0].main.temp_max,
        mintemp: apiReply.list[0].main.temp_min,
        icon: apiReply.list[0].weather[0].icon,
        APIresponse : apiReply,
        returned: true,
        error: ""
      }

    );
  }

  else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        icon:undefined,
        maxtemp: undefined,
        mintemp: undefined,
        returned: false,
        error: "Try entering valid data. It's as simple as Rocket Science! "
      });
    }

  }

  catch(err){
    alert('Only cities on Earth please')
  }

    console.log('Bharat',this.state.returned)




  }

  get_max_temp(){
    var taap;
    var maxt = []
    var dayCounter = 0;
    var trasharr = []
    var apiReply = this.state.APIresponse
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

  get_min_temp(){
    var taap;
    var mint = []
    var dayCounter = 0;
    var trasharr = []
    var apiReply = this.state.APIresponse

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




  render(){
    var responseExists = this.state.returned;
    var flexy;

    if (responseExists){
      flexy = <div> <Multivistaar obj = {this.state.APIresponse} status = {this.state.returned} maxtt = {this.get_max_temp} mintt = {this.get_min_temp}/>
       </div>
    }
    else {
      flexy = <span> </span>
    }
    return(
      <div>
      <WeatherHead fetchWeather = {this.fetchWeather}/>
      { /* <Title /> */}
      {/*<Entry fetchWeather = {this.fetchWeather} /> */}

      {/*<Vistaar
      temperature={this.state.temperature}
      humidity={this.state.humidity}
      day = {this.state.day}
      city={this.state.city}
      country={this.state.country}
      description={this.state.description}
      max_temp = {this.state.maxtemp}
      min_temp = {this.state.mintemp}
      icon = {this.state.icon}
      error={this.state.error}

      /> */ }

      {flexy}



    {/*  <h1> data is {this.state.city} </h1> */}

{/*
      <Detail
              temperature={this.state.temperature}
              humidity={this.state.humidity}
              city={this.state.city}
              country={this.state.country}
              description={this.state.description}
              error={this.state.error}
              /> */}



      </div>
    )
  }
}

ReactDOM.render(<Mapp />, document.getElementById('root'))


export default Mapp
