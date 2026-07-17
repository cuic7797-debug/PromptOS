import {
  X,
  Copy,
  Download,
  Sparkles,
  ChevronDown,
  ChevronUp
} from "lucide-react";

import { useState } from "react";

import type {
  BusinessContent
} from "../lib/contentEngine";


interface PromptResultModalProps {

  open:boolean;

  prompt:string;

  businessContent?:BusinessContent|null;

  onClose:()=>void;

  onCopy:()=>void;

  onDownload:()=>void;

  onWorkflow?:()=>void;

}


export function PromptResultModal({

open,

prompt,

businessContent,

onClose,

onCopy,

onDownload,

onWorkflow

}:PromptResultModalProps){


if(!open) return null;


const [active,setActive] = useState(
  businessContent ? "business" : "prompt"
);


const sections = [

{
id:"business",
title:"🚀 商业方案"
},

{
id:"user",
title:"👥 用户画像"
},

{
id:"marketing",
title:"📢 营销方案"
},

{
id:"video",
title:"🎬 短视频"
},

{
id:"sales",
title:"📝 商品文案"
},

{
id:"prompt",
title:"🤖 AI Prompt"
}

];



return (

<div className="
fixed
inset-0
z-50
flex
items-center
justify-center
bg-black/50
p-4
">


<div className="
bg-white
dark:bg-slate-900
rounded-2xl
w-full
max-w-4xl
max-h-[90vh]
overflow-hidden
shadow-2xl
">


{/* header */}

<div className="
flex
items-center
justify-between
p-5
border-b
">


<div className="
flex
items-center
gap-2
font-bold
text-xl
">

<Sparkles className="text-purple-500"/>

AI商业执行中心

</div>


<button onClick={onClose}>

<X/>

</button>


</div>



{/* tabs */}

<div className="
flex
gap-2
overflow-x-auto
p-4
border-b
">


{
sections.map(item=>(

<button

key={item.id}

onClick={()=>setActive(item.id)}

className={`
px-3
py-2
rounded-lg
text-sm
${active===item.id
?"bg-purple-600 text-white"
:"bg-slate-100 dark:bg-slate-800"}
`}

>

{item.title}

</button>

))

}


</div>




<div className="
overflow-y-auto
p-5
max-h-[65vh]
">


{
active==="business" && businessContent &&

<div className="space-y-4">

<h3 className="font-bold">
📦 产品分析
</h3>

{
businessContent.productAnalysis.map(
(item,index)=>
<p key={index}>• {item}</p>
)
}


</div>

}





{
active==="user" && businessContent &&

<div>

<h3 className="font-bold">
👥 用户画像
</h3>


{
businessContent.userProfile.map(
(item,index)=>
<p key={index}>• {item}</p>
)
}

</div>

}





{
active==="marketing" && businessContent &&

<div>

<h3 className="font-bold">
📢 营销方案
</h3>


{
businessContent.marketingPlan.map(
(item,index)=>
<p key={index}>• {item}</p>
)
}

</div>

}





{
active==="video" && businessContent &&

<div>

<h3 className="font-bold">
🎬 短视频方案
</h3>


{
businessContent.videoScript.map(
(item,index)=>
<p key={index}>• {item}</p>
)
}

</div>

}





{
active==="sales" && businessContent &&

<div>

<h3 className="font-bold">
📝 商品文案
</h3>


{
businessContent.salesCopy.map(
(item,index)=>
<p key={index}>• {item}</p>
)
}

</div>

}





{
active==="prompt" &&

<div>

<h3 className="
font-bold
mb-3
">

🤖 AI执行Prompt

</h3>


<pre className="
bg-slate-100
dark:bg-slate-800
rounded-xl
p-4
whitespace-pre-wrap
text-sm
">

{prompt}

</pre>


</div>

}



</div>




{/* footer */}

<div className="
border-t
p-4
flex
gap-3
">


<button

onClick={onCopy}

className="
flex
items-center
gap-2
px-4
py-2
rounded-lg
bg-blue-600
text-white
"

>

<Copy size={18}/>

复制Prompt

</button>



<button

onClick={onDownload}

className="
flex
items-center
gap-2
px-4
py-2
rounded-lg
bg-slate-200
dark:bg-slate-700
"

>

<Download size={18}/>

下载

</button>


{
onWorkflow && (

<button

onClick={onWorkflow}

className="
flex
items-center
gap-2
px-4
py-2
rounded-lg
bg-purple-600
text-white
"

>

🚀 生成AI工作流

</button>

)
}


</div>


</div>


</div>

);


}