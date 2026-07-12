import { useState } from 'react';
import {
  Wand2,
  Copy,
  Download,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Zap,
  Target,
  RotateCcw,
  Check
} from 'lucide-react';

import { useAppStore } from '../store/appStore';
import { CopyModal } from '../components/CopyModal';

import {
  generatePrompt,
  AI_MODELS,
  analyzeQuality
} from '../lib/promptEngine';

import { analyzeTask } from '../lib/taskAnalyzer';

import {
  generateId,
  copyToClipboard,
  downloadText,
  getGradeColor
} from '../lib/utils';

import type {
  GeneratorForm,
  QualityScore
} from '../types';



const defaultForm: GeneratorForm = {

  role: '',
  goal: '',
  context: '',
  task: '',
  constraint: '',
  outputFormat: '',
  qualityCheck: '',
  aiAdapter: '',
  mode: 'advanced'

};



export function Generator() {


const [form,setForm] =
useState<GeneratorForm>(defaultForm);


const [result,setResult] =
useState('');


const [quality,setQuality] =
useState<QualityScore|null>(null);


const [showQuality,setShowQuality] =
useState(false);


const [copied,setCopied] =
useState(false);


const [showCopyModal,setShowCopyModal] =
useState(false);


const [selectedModel,setSelectedModel] =
useState('gpt-4');


const {
addHistory
}=useAppStore();




const handleGenerate = ()=>{


const analysis =
analyzeTask(
form.goal || form.task
);



const enhancedForm = {


...form,


context:`

任务分析：

行业：
${analysis.industry}


目标：
${analysis.goal}


用户：
${analysis.audience}


执行任务：

${analysis.tasks.join('\n')}


输出：

${analysis.outputs.join('\n')}


${form.context}

`

};



const prompt =
generatePrompt({

...enhancedForm,

aiAdapter:selectedModel

});



setResult(prompt);



const q =
analyzeQuality(prompt);


setQuality(q);



addHistory({

id:generateId(),

title:
form.goal ||
form.task ||
'未命名提示词',

content:prompt,

model:selectedModel,

createdAt:Date.now(),

quality:q.overall,

tags:[
form.mode
]

});


};






const handleCopy = async()=>{


await copyToClipboard(result);


setCopied(true);


setShowCopyModal(true);



setTimeout(()=>{

setCopied(false);

},2000);


};





const handleDownload=()=>{


downloadText(

result,

`prompt-${Date.now()}.txt`

);


};





const handleReset=()=>{


setForm(defaultForm);

setResult('');

setQuality(null);


};





const updateField = (

field:keyof GeneratorForm,

value:string

)=>{


setForm(prev=>({

...prev,

[field]:value


}));


};






const modeLabels={


basic:{

label:'基础版',

desc:'角色 + 任务 + 输出格式'

},


advanced:{

label:'进阶版',

desc:'+ 能力矩阵 + 执行框架'

},


expert:{

label:'专家版',

desc:'完整 Prompt Engine 框架'

}


};





const formFields=[


{
key:'role' as const,
label:'角色定位',
placeholder:'例如：你是一位资深电商运营专家',
required:true,
rows:2
},


{
key:'goal' as const,
label:'任务目标',
placeholder:'例如：制作动漫手办销售方案',
required:true,
rows:2
},


{
key:'context' as const,
label:'背景上下文',
placeholder:'补充产品、用户、市场信息',
required:false,
rows:2
},


{
key:'task' as const,
label:'具体任务',
placeholder:'例如：生成营销方案',
required:true,
rows:3
},


{
key:'constraint' as const,
label:'约束条件',
placeholder:'例如：避免夸大宣传',
required:false,
rows:2
},


{
key:'outputFormat' as const,
label:'输出格式',
placeholder:'例如：Markdown列表',
required:false,
rows:2
},


{
key:'qualityCheck' as const,
label:'质量控制',
placeholder:'例如：检查逻辑和真实性',
required:false,
rows:2
}


];



return (

<div className="space-y-6 max-w-4xl mx-auto">


<div>

<h1 className="text-2xl font-bold flex items-center gap-2">

<Wand2 className="w-6 h-6 text-blue-500"/>

Prompt Generator

</h1>


<p className="text-slate-500 mt-2">

专业 Prompt 生成引擎

</p>

</div>
      {/* Mode Selector */}

      <div className="glass-card rounded-xl p-4">

        <label className="text-sm font-medium mb-3 block">
          生成模式
        </label>


        <div className="grid grid-cols-3 gap-3">

        {
        (Object.keys(modeLabels) as Array<keyof typeof modeLabels>)
        .map(mode=>{


        const item = modeLabels[mode];


        return (

        <button

        key={mode}

        onClick={()=>
        updateField('mode',mode)
        }


        className={`
        p-3 rounded-xl text-left transition-all

        ${
        form.mode===mode
        ?
        'ring-2 ring-blue-500 bg-blue-50 dark:bg-blue-900/20'
        :
        'hover:bg-slate-100 dark:hover:bg-slate-800'
        }

        `}


        >

        <div className="font-medium text-sm">

        {item.label}

        </div>


        <div className="text-xs text-slate-500 mt-1">

        {item.desc}

        </div>


        </button>


        )


        })

        }

        </div>

      </div>




      {/* AI Platform */}

      <div className="glass-card rounded-xl p-4">

      <label className="text-sm font-medium mb-3 block">

      AI 平台适配

      </label>


      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">


      {

      AI_MODELS.map(model=>(


      <button


      key={model.id}


      onClick={()=>
      setSelectedModel(model.id)
      }


      className={`

      p-3 rounded-lg text-left text-sm

      ${
      selectedModel===model.id
      ?
      'ring-2 ring-blue-500 bg-blue-50 dark:bg-blue-900/20'
      :
      'border border-slate-200 dark:border-slate-700'
      }

      `}

      >

      <div className="font-medium">

      {model.name}

      </div>


      <div className="text-xs text-slate-400">

      {model.description}

      </div>


      </button>


      ))

      }


      </div>


      </div>





      {/* Fields */}


      <div className="glass-card rounded-xl p-5 space-y-4">


      {

      formFields.map(field=>(


      <div key={field.key}>


      <label className="text-sm font-medium">

      {field.label}

      {
      field.required &&
      <span className="text-red-500">
      *
      </span>
      }


      </label>



      <textarea


      rows={field.rows}


      value={form[field.key]}


      placeholder={field.placeholder}


      onChange={
      e=>
      updateField(
      field.key,
      e.target.value
      )
      }


      className="w-full mt-2 px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-sm resize-none"


      />


      </div>


      ))

      }


      </div>






      {/* Buttons */}


      <div className="flex gap-3">


      <button


      onClick={handleGenerate}


      className="px-6 py-3 rounded-xl text-white bg-gradient-to-r from-blue-600 to-purple-600 flex items-center gap-2"


      >


      <Sparkles className="w-4 h-4"/>

      生成提示词


      </button>




      <button


      onClick={handleReset}


      className="px-5 py-3 rounded-xl bg-slate-200 dark:bg-slate-800 flex items-center gap-2"


      >


      <RotateCcw className="w-4 h-4"/>

      重置


      </button>


      </div>








{
result && (


<div className="space-y-4">



{/* Quality */}


{

quality &&


<div className="glass-card rounded-xl p-4">


<button

className="flex justify-between w-full"

onClick={()=>
setShowQuality(!showQuality)
}


>


<div className="flex gap-2 items-center">


<Target className="w-5 h-5 text-blue-500"/>


<span>

质量评分

</span>


<span className="text-xs">

{quality.grade}级 · {quality.overall}分

</span>


</div>


{

showQuality

?

<ChevronUp/>

:

<ChevronDown/>

}


</button>





{

showQuality &&


<div className="mt-4 space-y-2">


{

quality.suggestions.map(

(s,i)=>(

<div

key={i}

className="text-sm text-slate-500"

>

<Zap className="inline w-3 h-3 mr-1"/>

{s}

</div>

)

)

}


</div>


}



</div>


}







{/* Prompt Result */}



<div className="glass-card rounded-xl overflow-hidden">


<div className="flex justify-between items-center px-4 py-3 border-b">


<div className="flex gap-2 items-center">


<Sparkles className="w-4 h-4 text-blue-500"/>


生成的提示词


</div>





<div className="flex gap-2">


<button


onClick={handleCopy}


className="p-2 hover:bg-slate-800 rounded-lg"


>


{

copied

?

<Check className="text-green-500"/>

:

<Copy/>

}


</button>




<button


onClick={handleDownload}


className="p-2 hover:bg-slate-800 rounded-lg"


>


<Download/>


</button>



</div>


</div>




<pre className="p-5 whitespace-pre-wrap text-sm">

{result}

</pre>



</div>




</div>


)

}






{/* Copy Modal */}



<CopyModal


open={showCopyModal}


prompt={result}


onClose={()=>

setShowCopyModal(false)

}


/>




</div>

);


}