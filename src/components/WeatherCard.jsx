export default function WeatherCard({
temperature,
condition
}){


return (

<div className="
bg-white
rounded-xl
shadow-md
p-6
">


<h2 className="text-xl font-semibold">

🌤 Cusco Weather

</h2>


<p className="
text-5xl
font-bold
mt-4
">

{temperature}°C

</p>


<p className="text-gray-600 mt-2">

{condition}

</p>


<p className="mt-4">

🏔 Good conditions for exploring

</p>


</div>

)

}