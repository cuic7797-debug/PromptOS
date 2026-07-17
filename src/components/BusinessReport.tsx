import {
  Package,
  Users,
  Megaphone,
  Video,
  FileText,
  Image,
  Clapperboard
} from "lucide-react";

import type {
  BusinessContent
} from "../lib/contentEngine";



interface BusinessReportProps {

  content: BusinessContent;

}



export function BusinessReport({
  content
}:BusinessReportProps){



const Section=({
title,
icon,
items
}:{
title:string;
icon:React.ReactNode;
items:string[];
})=>(


<div className="
glass-card
rounded-xl
p-5
space-y-3
">


<div className="
flex
items-center
gap-2
font-bold
text-lg
">


{icon}


{title}


</div>



<div className="
space-y-2
text-sm
text-slate-600
dark:text-slate-300
">


{
items.map(
(item,index)=>(

<div
key={index}
className="
flex
gap-2
"
>

<span>
•
</span>

<span>
{item}
</span>


</div>

)
)

}


</div>



</div>


);



return (

<div className="
space-y-5
mt-6
">


<div className="
glass-card
rounded-xl
p-5
">


<h2 className="
text-xl
font-bold
flex
items-center
gap-2
">


🚀 AI商业执行方案


</h2>



<p className="
text-sm
text-slate-500
mt-2
">


PromptOS 已完成商业分析与执行方案生成


</p>


</div>





<Section

title="产品分析"

icon={<Package className="w-5 h-5 text-blue-500"/>}

items={content.productAnalysis}

/>




<Section

title="用户画像"

icon={<Users className="w-5 h-5 text-green-500"/>}

items={content.userProfile}

/>




<Section

title="营销方案"

icon={<Megaphone className="w-5 h-5 text-orange-500"/>}

items={content.marketingPlan}

/>




<Section

title="短视频方案"

icon={<Video className="w-5 h-5 text-purple-500"/>}

items={content.videoScript}

/>




<Section

title="商品销售文案"

icon={<FileText className="w-5 h-5 text-yellow-500"/>}

items={content.salesCopy}

/>




<Section

title="AI图片生成Prompt"

icon={<Image className="w-5 h-5 text-pink-500"/>}

items={content.imagePrompt}

/>




<Section

title="AI视频生成Prompt"

icon={<Clapperboard className="w-5 h-5 text-red-500"/>}

items={content.videoPrompt}

/>



</div>


);


}