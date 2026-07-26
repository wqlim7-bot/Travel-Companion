import { useState } from "react";
import PackingItem from "../components/PackingItem";


export default function Packing(){


const initialItems = [

{
category:"Documents",
items:[
"Passport",
"Travel Insurance",
"Flight Tickets",
"Hotel Confirmation"
]
},


{
category:"Clothing",
items:[
"Hiking Shoes",
"Rain Jacket",
"Thermal Layers",
"Comfortable Walking Clothes"
]
},


{
category:"Electronics",
items:[
"Camera",
"Phone Charger",
"Power Adapter",
"Power Bank"
]
},


{
category:"Adventure",
items:[
"Sunglasses",
"Sunscreen",
"Water Bottle",
"Day Backpack"
]
}

];



const allItems = initialItems.flatMap(
(category)=>category.items
);



const [packed,setPacked] = useState([]);



function toggleItem(item){

if(packed.includes(item)){

setPacked(
packed.filter(
(i)=>i!==item
)
);

}
else{

setPacked(
[...packed,item]
);

}

}



const progress = Math.round(
(packed.length / allItems.length) * 100
);



return (

<div className="max-w-6xl mx-auto p-6">


<h1 className="text-4xl font-bold">

🎒 Peru Packing Checklist

</h1>


<p className="text-gray-600 mt-2 mb-8">

Prepare for Lima, Cusco and Machu Picchu

</p>



<div className="
bg-white
rounded-xl
shadow-md
p-6
mb-8
">


<h2 className="text-2xl font-semibold">

Packing Progress

</h2>


<p className="text-5xl font-bold mt-3">

{progress}%

</p>


<p className="text-gray-600">

{packed.length} / {allItems.length} items packed

</p>


</div>




<div className="space-y-8">


{
initialItems.map((category,index)=>(

<div key={index}>


<h2 className="
text-2xl
font-semibold
mb-4
">

{category.category}

</h2>



<div className="grid md:grid-cols-2 gap-4">


{
category.items.map((item)=>(

<PackingItem

key={item}

item={item}

checked={
packed.includes(item)
}

onToggle={()=>
toggleItem(item)
}

/>

))
}


</div>


</div>


))
}



</div>


</div>

)

}