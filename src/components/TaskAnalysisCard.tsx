import {
  Target,
  Users,
  Briefcase,
  ListChecks,
  FileText,
  Sparkles,
  Rocket,
  FolderKanban
} from "lucide-react";


import type {
  TaskAnalysis
} from "../lib/taskAnalyzer";



interface TaskAnalysisCardProps {

  analysis: TaskAnalysis | null;

}



export function TaskAnalysisCard({

  analysis

}: TaskAnalysisCardProps){



if(!analysis){

  return null;

}



return (

<div
className="
glass-card
rounded-2xl
p-6
space-y-6
"
>


{/* 标题 */}

<div
className="
flex
items-center
gap-2
"
>

<Sparkles
className="
w-5
h-5
text-purple-500
"
/>


<h2
className="
text-lg
font-bold
"
>

AI任务分析报告

</h2>


</div>





{/* 项目定位 */}

<div
className="
rounded-xl
bg-purple-50
dark:bg-purple-900/20
p-4
"
>


<div
className="
flex
items-center
gap-2
text-sm
text-purple-600
mb-2
"
>


<FolderKanban
className="
w-4
h-4
"
/>


项目定位


</div>


<p
className="
font-medium
"
>

{analysis.project}

</p>


</div>







{/* 基础信息 */}

<div
className="
grid
grid-cols-1
md:grid-cols-3
gap-4
"
>



{/* 行业 */}

<div
className="
rounded-xl
bg-slate-100
dark:bg-slate-800
p-4
"
>


<div
className="
flex
items-center
gap-2
text-sm
text-slate-500
mb-2
"
>


<Briefcase
className="w-4 h-4"
/>


行业


</div>


<p
className="
font-medium
"
>

{analysis.industry}

</p>


</div>






{/* 商业目标 */}

<div
className="
rounded-xl
bg-slate-100
dark:bg-slate-800
p-4
"
>


<div
className="
flex
items-center
gap-2
text-sm
text-slate-500
mb-2
"
>


<Target
className="w-4 h-4"
/>


商业目标


</div>


<p
className="
font-medium
"
>

{analysis.goal}

</p>


</div>






{/* 用户画像 */}

<div
className="
rounded-xl
bg-slate-100
dark:bg-slate-800
p-4
"
>


<div
className="
flex
items-center
gap-2
text-sm
text-slate-500
mb-2
"
>


<Users
className="w-4 h-4"
/>


用户画像


</div>


<p
className="
font-medium
"
>

{analysis.audience}

</p>


</div>



</div>








{/* 执行策略 */}

<div>


<div
className="
flex
items-center
gap-2
font-medium
mb-3
"
>


<Rocket
className="
w-4
h-4
text-orange-500
"
/>


执行策略


</div>




<div
className="
space-y-2
"
>


{

analysis.strategy.map((item,index)=>(


<div

key={index}

className="
flex
items-center
gap-2
text-sm
"

>


<span
className="
w-5
h-5
rounded-full
bg-orange-100
dark:bg-orange-900/30
text-orange-600
text-xs
flex
items-center
justify-center
"
>

✓

</span>


{item}


</div>


))


}


</div>


</div>







{/* AI任务拆解 */}

<div>


<div
className="
flex
items-center
gap-2
font-medium
mb-3
"
>


<ListChecks
className="
w-4
h-4
text-blue-500
"
/>


AI任务拆解


</div>




<div
className="
space-y-2
"
>


{

analysis.tasks.map((task,index)=>(


<div

key={index}

className="
flex
items-center
gap-2
text-sm
"

>


<span
className="
w-5
h-5
rounded-full
bg-blue-100
dark:bg-blue-900/30
text-blue-600
text-xs
flex
items-center
justify-center
"
>

{index+1}

</span>


{task}


</div>


))


}


</div>


</div>








{/* 输出内容 */}

<div>


<div
className="
flex
items-center
gap-2
font-medium
mb-3
"
>


<FileText
className="
w-4
h-4
text-green-500
"
/>


输出结果


</div>



<div
className="
flex
flex-wrap
gap-2
"
>


{

analysis.outputs.map((item,index)=>(


<span

key={index}

className="
px-3
py-1
rounded-full
text-xs
bg-green-100
dark:bg-green-900/30
text-green-700
dark:text-green-300
"

>

{item}

</span>


))


}



</div>


</div>





</div>

);


}