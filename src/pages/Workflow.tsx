import {
useSearchParams
} from "react-router-dom";


import {
  PromptResultModal
} from "../components/PromptResultModal";


import {
  copyToClipboard,
  downloadText
} from "../lib/utils";


import {
useState,
useEffect
} from "react";


import {
  Sparkles,
  ChevronRight,
  Play,
  CheckCircle,
  LoaderCircle
} from "lucide-react";


import {
  generateWorkflow
} from "../lib/workflowEngine";


import type {
  WorkflowResult
} from "../types/workflow";



export default function Workflow(){


const [input,setInput]=useState("");

const [result,setResult]=
useState<WorkflowResult|null>(null);


const [searchParams]=useSearchParams();


useEffect(()=>{


const value =
searchParams.get("input");


if(value){

setInput(value);

}


},[searchParams]);


const [showModal,setShowModal]=useState(false);

const [activePrompt,setActivePrompt]=useState("");



function handleGenerate(){


if(!input.trim()) return;


const data =
generateWorkflow(input);


setResult(data);


}





function executeStep(id:string){


if(!result) return;


const step =
result.steps.find(
item=>item.id===id
);


if(!step) return;



setActivePrompt(step.prompt);



setShowModal(true);



setResult({

...result,

steps:
result.steps.map(item=>

item.id===id

?

{

...item,

status:"completed",

result:
`${item.title}执行完成。\n\n已生成AI执行Prompt`

}

:

item

)

});


 }


 const handleCopy=async()=>{

await copyToClipboard(activePrompt);

};


const handleDownload=()=>{

downloadText(
activePrompt,
`workflow-${Date.now()}.txt`
);

};



return (

<div className="
space-y-6
">


<div>


<h1 className="
text-2xl
font-bold
flex
items-center
gap-2
">

<Sparkles
className="text-purple-500"
/>

AI工作流中心

</h1>



<p className="
text-slate-500
mt-2
">

输入一个想法，自动生成AI执行流程

</p>


</div>





<div className="
glass-card
p-5
rounded-xl
">


<textarea


value={input}


onChange={
e=>setInput(e.target.value)
}


placeholder="例如：我要卖动漫手办"


className="
w-full
h-32
rounded-lg
border
p-3
bg-white
text-slate-900
placeholder:text-slate-400
dark:bg-slate-800
dark:text-white
dark:placeholder:text-slate-400
"


 />




<button


onClick={handleGenerate}


className="
mt-4
px-5
py-2
rounded-lg
bg-purple-600
text-white
"


>

生成AI工作流

</button>


</div>







{
result &&


<div className="
glass-card
rounded-xl
p-5
space-y-4
">


<h2 className="
font-bold
text-xl
">

🚀 AI创业工作流

</h2>



<p>

行业：

{result.industry}

</p>






{

result.steps.map(step=>(


<div


key={step.id}


className="
border
rounded-xl
p-4
"


>




<div className="
flex
items-center
justify-between
gap-2
">


<div className="
flex
items-center
gap-2
font-bold
">


<ChevronRight size={18}/>


{step.title}


</div>



<div>


{

step.status==="pending" &&

<span className="
text-sm
text-slate-500
">

⏳ 未执行

</span>

}



{

step.status==="running" &&

<span className="
flex
items-center
gap-1
text-sm
text-blue-500
">

<LoaderCircle
size={15}
className="animate-spin"
/>

执行中

</span>

}



{

step.status==="completed" &&

<span className="
flex
items-center
gap-1
text-sm
text-green-500
">

<CheckCircle size={15}/>

已完成

</span>

}



</div>


</div>






<p className="
text-sm
text-slate-500
mt-2
">

{step.description}

</p>






{

step.status==="pending" &&

<button


onClick={()=>executeStep(step.id)}


className="
mt-3
flex
items-center
gap-2
px-3
py-2
rounded-lg
bg-purple-600
text-white
text-sm
"


>

<Play size={15}/>

开始执行

</button>

}







{

step.result &&


<div className="
mt-3
bg-slate-100
dark:bg-slate-800
p-3
rounded-lg
whitespace-pre-wrap
text-sm
">

{step.result}

</div>


}







<details className="
mt-3
">


<summary

className="
cursor-pointer
text-purple-600
"

>

查看执行Prompt

</summary>




<pre className="
mt-2
bg-slate-100
dark:bg-slate-800
p-3
rounded-lg
whitespace-pre-wrap
text-sm
">


{step.prompt}


</pre>


</details>





</div>


))


}



</div>


}


<PromptResultModal

open={showModal}

prompt={activePrompt}

onClose={()=>
setShowModal(false)
}

onCopy={handleCopy}

onDownload={handleDownload}

/>


</div>


);


}