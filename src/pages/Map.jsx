export default function Map() {

const destinations = [

{
name:"Lima",
description:"Capital city and arrival point",
icon:"🌊"
},

{
name:"Cusco",
description:"Historic Inca capital",
icon:"🏛️"
},

{
name:"Sacred Valley",
description:"Ancient Inca villages and landscapes",
icon:"🌄"
},

{
name:"Machu Picchu",
description:"Iconic Inca citadel",
icon:"🏔️"
}

];


return (

<div className="max-w-6xl mx-auto p-6">


<h1 className="text-4xl font-bold">

🗺️ Peru Explorer Map

</h1>


<p className="text-gray-600 mb-8">

Your journey through Peru

</p>



<div className="
bg-slate-200
rounded-xl
h-96
flex
items-center
justify-center
shadow
mb-8
">


<div className="text-center">

<p className="text-5xl">
🇵🇪
</p>

<p className="text-xl font-semibold mt-3">

Interactive Map Coming Soon

</p>


<p className="text-gray-600">

Google Maps integration in next phase

</p>

</div>


</div>



<h2 className="
text-2xl
font-semibold
mb-4
">

Destinations

</h2>



<div className="
grid
md:grid-cols-2
gap-5
">


{
destinations.map((place,index)=>(

<div
key={index}
className="
bg-white
rounded-xl
shadow-md
p-5
"
>


<div className="text-3xl">

{place.icon}

</div>


<h3 className="
text-xl
font-semibold
mt-2
">

{place.name}

</h3>


<p className="text-gray-600">

{place.description}

</p>


</div>


))
}


</div>


</div>

)

}