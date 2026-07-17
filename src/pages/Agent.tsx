import {
  BusinessReportCard
} from "../components/BusinessReportCard";

import {
  Bot,
  Play,
  CheckCircle,
  Sparkles
} from "lucide-react";

import {
  useState
} from "react";


import {
  analyzeTask
} from "../lib/taskAnalyzer";


import {
  generatePrompt
} from "../lib/promptEngine";


import type {
  TaskAnalysis
} from "../lib/taskAnalyzer";


interface WorkflowStep {

  id:number;

  title:string;

  description:string;

  status:"waiting"|"running"|"done";

}



export function Agent(){


const [input,setInput]=useState("");



const [running,setRunning]=useState(false);


const [analysis,setAnalysis]=useState<TaskAnalysis|null>(null);


const [report,setReport]=useState("");



const [steps,setSteps]=useState<WorkflowStep[]>([

{
id:1,
title:"商业需求分析",
description:"分析项目目标、行业特点和市场机会",
status:"waiting"
},

{
id:2,
title:"用户画像分析",
description:"分析目标用户、购买心理和消费场景",
status:"waiting"
},

{
id:3,
title:"增长策略设计",
description:"制定产品、内容和渠道增长方案",
status:"waiting"
},

{
id:4,
title:"内容生产规划",
description:"生成短视频、图片和营销内容方向",
status:"waiting"
},

{
id:5,
title:"销售转化设计",
description:"设计成交路径和复购方案",
status:"waiting"
}

]);





const startWorkflow=()=>{


if(!input.trim()) return;


setRunning(true);



/*
第一步：
AI任务分析
*/


const taskAnalysis =
analyzeTask(input);



setAnalysis(taskAnalysis);





/*
第二步：
生成商业Prompt
*/


const prompt =
generatePrompt({


role:

`
你是一名专业商业增长专家，
具备行业分析、
用户洞察、
营销策略、
商业执行能力。
`,



goal:

taskAnalysis.goal,



context:


`

项目：

${taskAnalysis.project}


行业：

${taskAnalysis.industry}


商业模式：

${taskAnalysis.businessModel}


行业洞察：

${taskAnalysis.insights.join("\n")}


增长策略：

${taskAnalysis.strategies.join("\n")}


目标用户：

${taskAnalysis.audience}

`,



task:

taskAnalysis.tasks.join("\n"),



constraint:

`
保持真实、专业、可执行。
避免空泛建议。
`,



outputFormat:


`

请生成完整商业执行报告：


第一部分：
项目分析


第二部分：
用户画像


第三部分：
增长策略


第四部分：
内容营销


第五部分：
销售转化


第六部分：
AI执行Prompt

`,



qualityCheck:

"检查商业逻辑完整性",



aiAdapter:

"deepseek",



mode:

"expert"



});





setTimeout(()=>{


setReport(prompt);


setRunning(false);



},3000);



};





return (

<div className="space-y-6 max-w-4xl mx-auto">



<div>


<h1 className="
text-2xl
font-bold
flex
items-center
gap-2
">


<Bot
className="text-blue-500"
/>


AI工作流中心


</h1>


<p className="
text-slate-500
mt-2
">


让AI自动拆解商业任务，完成从想法到执行方案


</p>


</div>







<div className="
glass-card
rounded-xl
p-5
">


<textarea


value={input}


onChange={
e=>setInput(e.target.value)
}


placeholder="
例如：我要卖动漫手办
"


className="
w-full
h-32
rounded-lg
p-4
bg-transparent
border
border-slate-300
dark:border-slate-700
"
/>




<button


onClick={startWorkflow}


disabled={running}


className="
mt-4
w-full
py-3
rounded-xl
bg-gradient-to-r
from-blue-600
to-purple-600
text-white
flex
justify-center
items-center
gap-2
"


>


{
running

?

"AI执行中..."

:

<>

<Play
className="w-5 h-5"
/>

开始执行工作流

</>

}


</button>


</div>








<div className="
space-y-3
">


{

steps.map(step=>(


<div

key={step.id}

className="
glass-card
rounded-xl
p-4
flex
items-center
gap-4
"


>


{


step.status==="done"

?

<CheckCircle
className="
text-green-500
"
/>


:

<Sparkles
className="
text-purple-500
"
/>


}




<div>


<h3 className="font-bold">

{step.title}

</h3>


<p className="
text-sm
text-slate-500
">


{step.description}


</p>


</div>



</div>


))

}


</div>


{
report && (

<BusinessReportCard

analysis={analysis}

report={report}

/>

)
}


</div>


);


}