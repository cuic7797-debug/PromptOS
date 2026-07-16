import { GeneratorSettings } from "../components/GeneratorSettings";
import { useState } from "react";

import {
  Wand2,
  Sparkles,
  Download,
  Target
} from "lucide-react";


import { TaskInput } from "../components/TaskInput";

import {
  TaskAnalysisCard
} from "../components/TaskAnalysisCard";


import {
  PromptResultModal
} from "../components/PromptResultModal";


import CopyModal from "../components/CopyModal";


import {
  analyzeTask
} from "../lib/taskAnalyzer";


import {
  generatePrompt,
  analyzeQuality
} from "../lib/promptEngine";


import {
  generateId,
  copyToClipboard,
  downloadText
} from "../lib/utils";


import {
  useAppStore
} from "../store/appStore";


import type {
  TaskAnalysis
} from "../lib/taskAnalyzer";


import type {
  QualityScore
} from "../types";




export function Generator(){



const [input,setInput]=useState("");



const [analysis,setAnalysis]=useState<TaskAnalysis|null>(null);



const [prompt,setPrompt]=useState("");



const [showResult,setShowResult]=useState(false);



const [showCopyModal,setShowCopyModal]=useState(false);



const [quality,setQuality]=useState<QualityScore|null>(null);



const [loading,setLoading]=useState(false);


const [mode,setMode]=useState<'basic' | 'advanced' | 'expert'>("advanced");


const [selectedModel,setSelectedModel]=useState("deepseek");

const [showSettings,setShowSettings]=useState(false);

const {
addHistory
}=useAppStore();





// AI分析


const handleAnalyze=()=>{


if(!input.trim()) return;



setLoading(true);



const result=
analyzeTask(input);



setAnalysis(result);



setLoading(false);


};





// 生成Prompt


const handleGenerate=()=>{


if(!analysis) return;



const enhancedForm={


role:

`你是一名专业的${analysis.industry}专家`,



goal:

analysis.goal,



context:

`

项目定位：

${analysis.project}


行业：

${analysis.industry}


商业目标：

${analysis.goal}


目标用户：

${analysis.audience}


执行策略：

${analysis.strategy.join("\n")}


任务拆解：

${analysis.tasks.join("\n")}


最终输出：

${analysis.outputs.join("\n")}


`,



task:

analysis.tasks.join("\n"),



constraint:

"保持真实、专业、可执行",



outputFormat:

analysis.outputs.join("\n"),



qualityCheck:

"检查逻辑完整性"



};





const result=

generatePrompt({

...enhancedForm,


aiAdapter:selectedModel,

mode

});





setPrompt(result);



const score=

analyzeQuality(result);



setQuality(score);





addHistory({

id:generateId(),


title:input,


content:result,


model:"gpt-4",


createdAt:Date.now(),


quality:score.overall,


tags:[

"AI任务生成"

]

});





setShowResult(true);



};






const handleCopy=async()=>{


await copyToClipboard(prompt);



setShowCopyModal(true);


};





const handleDownload=()=>{


downloadText(

prompt,

`prompt-${Date.now()}.txt`

);


};





return (



<div className="
space-y-6
max-w-4xl
mx-auto
">



{/* 标题 */}



<div>


<h1 className="
text-2xl
font-bold
flex
items-center
gap-2
">


<Wand2

className="
w-6
h-6
text-blue-500
"

/>


AI创业任务分析器


</h1>



<p className="
text-slate-500
mt-2
">


输入一个想法，AI帮你拆解商业方案、内容方向和执行Prompt


</p>


</div>





{/* 输入 */}


<TaskInput


value={input}


onChange={setInput}


onAnalyze={handleAnalyze}


loading={loading}


/>
<div>

<button

onClick={()=>setShowSettings(!showSettings)}

className="
text-sm
text-slate-500
hover:text-blue-500
mb-3
"

>

⚙ 高级设置
{showSettings ? " ▲" : " ▼"}

</button>



{
showSettings && (

<GeneratorSettings

mode={mode}

setMode={setMode}

model={selectedModel}

setModel={setSelectedModel}

/>

)

}


</div>





{/* 分析结果 */}


<TaskAnalysisCard

analysis={analysis}

/>






{

analysis && (


<button


onClick={handleGenerate}


className="
w-full
py-3
rounded-xl
bg-gradient-to-r
from-blue-600
to-purple-600
text-white
font-medium
flex
items-center
justify-center
gap-2
"


>


<Sparkles
className="
w-5
h-5
"
/>


生成AI执行方案 + Prompt


</button>


)

}






{

quality && (


<div className="
glass-card
rounded-xl
p-4
flex
items-center
gap-3
">


<Target
className="
text-blue-500
"
/>


<div>


<div className="
font-medium
">

Prompt质量评分

</div>


<div className="
text-sm
text-slate-500
">


{quality.grade}

级

·

{quality.overall}

分


</div>


</div>



</div>


)

}






<PromptResultModal


open={showResult}


prompt={prompt}


onClose={()=>setShowResult(false)}


onCopy={handleCopy}


onDownload={handleDownload}


/>






<CopyModal


open={showCopyModal}


prompt={prompt}


onClose={()=>setShowCopyModal(false)}


/>






</div>


);


}