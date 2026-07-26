import { useRef, useState } from "react";


export default function Upload(){

const [fileName,setFileName] = useState("");
const fileInputRef = useRef(null);


function handleFile(event){

const file = event.target.files[0];

if(file){

setFileName(file.name);

}

}



return (

<div className="
min-h-screen
flex
items-center
justify-center
bg-slate-100
">


<div className="
bg-white
rounded-xl
shadow-md
p-8
max-w-lg
w-full
text-center
">


<h1 className="
text-4xl
font-bold
">

🌍 Travel Companion

</h1>


<p className="
text-gray-600
mt-3
mb-8
">

Upload your trip Excel file to create your travel planner

</p>


<input
  ref={fileInputRef}
  type="file"
  accept=".xlsx"
  onChange={handleFile}
  className="hidden"
/>

<button
  onClick={() => fileInputRef.current.click()}
  className="
    mt-2
    bg-blue-600
    hover:bg-blue-700
    text-white
    font-semibold
    px-6
    py-3
    rounded-xl
    shadow-md
    transition
  "
>
  📂 Select Excel File
</button>


{
  fileName && (
    <div className="mt-6 rounded-lg border border-green-300 bg-green-50 p-4">
      <p className="font-medium text-green-700">
        ✅ {fileName}
      </p>
    </div>
  )
}

<a
  href="/templates/Travel_Companion_Template.xlsx"
  download
  className="mt-4 block text-blue-600 hover:underline"
>
  ⬇ Download Travel Companion Template
</a>


</div>


</div>

)

}