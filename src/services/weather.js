export async function getWeather(){

const latitude = -13.5319;
const longitude = -71.9675;


const response = await fetch(

`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code`

);


const data = await response.json();


return data.current;

}