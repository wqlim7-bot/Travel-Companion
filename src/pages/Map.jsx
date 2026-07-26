import {
  MapContainer,
  TileLayer,
  Marker,
  Popup
} from "react-leaflet";

import "leaflet/dist/leaflet.css";


const destinations = [

{
name:"Lima",
position:[-12.0464,-77.0428],
description:"Capital city and arrival point"
},

{
name:"Cusco",
position:[-13.5319,-71.9675],
description:"Historic Inca capital"
},

{
name:"Sacred Valley",
position:[-13.3289,-72.0742],
description:"Ancient Inca sites"
},

{
name:"Machu Picchu",
position:[-13.1631,-72.5450],
description:"Iconic Inca citadel"
}

];


export default function Map(){


return (

<div className="max-w-6xl mx-auto p-6">


<h1 className="text-4xl font-bold mb-3">

🗺️ Peru Explorer Map

</h1>


<p className="text-gray-600 mb-6">

Lima → Cusco → Sacred Valley → Machu Picchu

</p>



<div className="
rounded-xl
overflow-hidden
shadow-lg
">


<MapContainer

center={[-13.2,-72]}

zoom={5}

style={{
height:"500px",
width:"100%"
}}

>


<TileLayer

url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"

/>



{
destinations.map((place,index)=>(

<Marker

key={index}

position={place.position}

>

<Popup>

<h3 className="font-bold">

{place.name}

</h3>

<p>

{place.description}

</p>

</Popup>


</Marker>

))
}



</MapContainer>


</div>



</div>

)

}