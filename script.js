const temp=document.getElementById("temp");

let currentCity="";
let currentUnit="c";
let hourlyorWeek="Week";

//Update Date Time

function getDateTime() {
   let now = new Date(),
  hour = now.getHours(), 
  minute = now.getMinutes();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    ];
 //12 hour format
    hour = hour % 12;
    if(hour < 10) {
        hour = "0"=hour
    }
    if (minute < 10) {
        minute = "0" + minute;
    }

    let dayString = days[now.getDay()];
    return `${dayString}, ${hour}:${minnute}`;
}

date.innerText = getDateTime();
//update time every second
setInterval(()=> {
    date.innerText = getDateTime();
}, 1000);


//function to get public ip fetch


function getPublicIp() {
    fetch("https://geolocation-db.com/json/", {
     method: "GET",
    })
    .then((response)=>response.json())
    .then((data)=>{
        console.log(data);
        currentCity=data.currentCity;
    });
}
getPublicIp();

//function to get weather data

function getWeatherData(city, unit, hourlyorWeek) {
    const apikey = "VWGMJNRBSWKLKFQDVGRDJ22FW"
    fetch(
        `https://weather.visualcrossing.com/visualCrossingWebServices/rest/
    services/timeline/${city}?unitGroup=metric&key=${apikey}&
     contentType=json` ,
     {
        method: "GET",
     }
    )
    .then((response)=>response.json())
    .then((data)=>{
        let today = data.currentConditions;
        if(unit = "c"){
            temp.innerText =today.temp;
        }else{
            console.log(celciusToFahrenheit(today.temp));
            temp.innerText = celciusToFahrenheit(today.temp);
        }
    });
}

//convert celcius to fahrenheit
function celciusToFahrenheit(temp){
    return((temp*9)/5+32).toFixed(1);
}