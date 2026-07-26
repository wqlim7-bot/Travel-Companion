import DashboardCard from "../components/DashboardCard";
import { useEffect, useState } from "react";
import WeatherCard from "../components/WeatherCard";
import { getWeather } from "../services/weather";

export default function Dashboard() {
    const [weather,setWeather] = useState(null);


    useEffect(()=>{

    getWeather()
    .then(data=>{

    setWeather(data);

    });

    },[]);

return(

<div className="max-w-6xl mx-auto p-6">

<h1 className="text-4xl font-bold">

🇵🇪 Peru Adventure

</h1>

<p className="text-gray-600 mb-8">

3 September 2026

</p>

<div className="grid md:grid-cols-2 gap-6">

<DashboardCard title="Countdown">

<h1 className="text-5xl font-bold">

403

</h1>

<p>Days Remaining</p>

</DashboardCard>

<DashboardCard title="Packing">

<h1 className="text-5xl font-bold">

0%

</h1>

<p>No items packed yet</p>

</DashboardCard>

{
weather &&

<WeatherCard

temperature={
weather.temperature_2m
}

condition="Partly cloudy"

/>

}

<DashboardCard title="Next Activity">

<p>

Flight from Singapore

</p>

<p>

03 Sep 2026

</p>

</DashboardCard>

</div>

</div>

)

}