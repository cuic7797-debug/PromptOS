import {
  Video,
  ShoppingBag,
  PenTool,
  FileText,
  Megaphone,
  Sparkles,
  ChevronRight
} from 'lucide-react';

import { useNavigate } from 'react-router-dom';
import { CREATIVE_TEMPLATES } from '../data/creativeTemplates';




export function Studio(){


const navigate = useNavigate();



const handleOpen=(item:any)=>{


navigate('/generator',{

state:{

template:item.template

}

});


};



return (

<div className="space-y-6">


<div>

<h1 className="text-2xl font-bold flex items-center gap-2">

<Sparkles className="text-purple-500"/>

AI创作中心

</h1>


<p className="text-slate-500 mt-2">

选择应用场景，一键生成专业AI提示词

</p>

</div>





<div className="grid grid-cols-1 md:grid-cols-2 gap-5">


{

CREATIVE_TEMPLATES.map(item=>{


const Icon=item.icon;


return (

<button

key={item.id}

onClick={()=>handleOpen(item)}

className="
glass-card
rounded-xl
p-5
text-left
hover:shadow-xl
transition-all
group
"


>


<div className="flex justify-between">


<div
className={`
p-3
rounded-xl
bg-slate-100
dark:bg-slate-800
${item.color}
`}
>

<Icon className="w-7 h-7"/>

</div>


<ChevronRight
className="
w-5 h-5
text-slate-400
group-hover:text-blue-500
"
/>


</div>



<h2 className="font-bold text-lg mt-4">

{item.title}

</h2>



<p className="text-sm text-slate-500 mt-2">

{item.description}

</p>



</button>


)


})

}


</div>



</div>

)

}