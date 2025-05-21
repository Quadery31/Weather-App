
const apiKey = "e0c04ba2ffa99f86dc3ca73940fb21b6";
//const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=kolkata";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
async function checkWeather(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
  try {
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data); 
    // Should now print weather data for Kolkata
    document.querySelector(".city").innerHTML= data.name;
    document.querySelector(".temp").innerHTML= data.main.temp;
    document.querySelector(".humidity").innerHTML= data.main.humidity;
    document.querySelector(".Wind").innerHTML= data.wind.speed+"km/hr" ;
    if(data.weather[0].main == "Clouds"){
      weatherIcon.src = "images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
      weatherIcon.src=  "images/Clear.png";
    }
    else if(data.weather[0].main == "Rain"){
      weatherIcon.src=  "images/Rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
      weatherIcon.src= "images/drizzle.png";
    }
      else if(data.weather[0].main == "Mist"){
      weatherIcon.src=  "images/mist.png";
    }
  } 
  catch (error) {
    console.error("Error fetching weather:", error);
  }
}
searchBtn.addEventListener("click", ()=>{
  const city=searchBox.value.trim();
  if(city){
    checkWeather(city);
  }
}) 
//listen for enter key 
searchBox.addEventListener("keypress", (event)=> {
  if(event.key === "Enter"){
  const city= searchBox.value.trim();

  if(city){
    checkWeather(city);
  }
}
})
//checkWeather();
