import { useNavigate } from "react-router-dom";
import {
  ShoppingCart,
  Video,
  PenTool,
  Image,
  Code,
  FileText,
  Search,
  Megaphone,
  Briefcase,
  Sparkles
} from "lucide-react";

import {
  TASK_TEMPLATES
} from "../data/taskTemplates";


const icons:any={

电商卖货:ShoppingCart,

短视频创作:Video,

小红书运营:PenTool,

AI绘画:Image,

代码开发:Code,

SEO优化:Search,

广告文案:Megaphone,

工作效率:Briefcase,

内容创作:FileText

};



export function TaskCenter(){


const navigate=useNavigate();



const openTask=(item:any)=>{


navigate(
"/generator",
{
state:{
template:item.form
}
}
);


};



return (

<div className="space-y-6">


<div>


<h1 className="text-3xl font-bold flex items-center gap-2">

<Sparkles className="text-blue-500"/>

AI任务大厅

</h1>


<p className="text-slate-500 mt-2">

选择你的目标，让AI自动生成专业提示词

</p>


</div>





<div className="grid grid-cols-2 md:grid-cols-4 gap-4">


{

TASK_TEMPLATES.map(item=>{


const Icon =
icons[item.category] || FileText;



return (

<button

key={item.id}

onClick={()=>openTask(item)}

className="
glass-card
rounded-xl
p-5
text-left
hover:ring-2
hover:ring-blue-500
transition
"


>


<Icon
className="w-8 h-8 text-blue-500 mb-3"
/>


<h3 className="font-bold">

{item.title}

</h3>


<p className="text-sm text-slate-500 mt-2">

{item.description}

</p>


<div className="
mt-3
text-xs
text-blue-500
">

{item.category}

</div>


</button>


)


})

}



</div>



</div>


);


}