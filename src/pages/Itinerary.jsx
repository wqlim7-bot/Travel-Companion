import ActivityCard from "../components/ActivityCard";


export default function Itinerary(){

const days = [

{
day:"Day 1 — Arrival in Lima",
activities:[
{
time:"15:30",
icon:"✈️",
title:"Arrive in Lima",
location:"Jorge Chávez Airport",
description:"Arrive from Singapore and transfer to hotel."
},
{
time:"18:00",
icon:"🏨",
title:"Hotel Check-in",
location:"Miraflores",
description:"Rest and prepare for Peru adventure."
},
{
time:"20:00",
icon:"🍽️",
title:"Peruvian Dinner",
location:"Barranco",
description:"Experience local cuisine."
}
]
},


{
day:"Day 5 — Cusco Exploration",
activities:[
{
time:"09:00",
icon:"🏛️",
title:"Plaza de Armas",
location:"Cusco",
description:"Explore the historic city centre."
},
{
time:"14:00",
icon:"🌄",
title:"Sacred Valley",
location:"Cusco Region",
description:"Visit ancient Inca sites."
}
]
},


{
day:"Day 8 — Machu Picchu",
activities:[
{
time:"06:00",
icon:"🚆",
title:"Train to Aguas Calientes",
location:"Ollantaytambo",
description:"Scenic journey through the Andes."
},
{
time:"10:00",
icon:"🏔️",
title:"Machu Picchu",
location:"Cusco Region",
description:"Explore the iconic Inca citadel."
}
]
}

];


return (

<div className="
max-w-6xl
mx-auto
p-6
">


<h1 className="text-4xl font-bold">

🇵🇪 Peru Adventure

</h1>


<p className="text-gray-600 mb-8">

Lima → Cusco → Sacred Valley → Machu Picchu

</p>



{
days.map((day,index)=>(

<div key={index} className="mb-10">


<h2 className="
text-2xl
font-semibold
mb-4
">

{day.day}

</h2>



<div className="space-y-4">


{
day.activities.map((activity,i)=>(

<ActivityCard
key={i}
{...activity}
/>

))
}


</div>


</div>


))
}



</div>

)

}