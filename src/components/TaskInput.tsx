import {
  Sparkles,
  ArrowRight
} from "lucide-react";


interface TaskInputProps {


value:string;


onChange:(value:string)=>void;


onAnalyze:()=>void;


loading?:boolean;


}



export function TaskInput({

value,

onChange,

onAnalyze,

loading=false

}:TaskInputProps){



return (


<div className="
glass-card
rounded-2xl
p-6
space-y-4
">


<div>


<h2 className="
text-xl
font-bold
flex
items-center
gap-2
">


<Sparkles
className="w-5 h-5 text-blue-500"
/>


AI任务生成器


</h2>


<p className="
text-sm
text-slate-500
mt-2
">


告诉我你想完成什么，AI会自动拆解任务并生成专业Prompt


</p>


</div>





<textarea


value={value}


onChange={(e)=>
onChange(e.target.value)
}


placeholder="
例如：

我要卖动漫手办

我要做一个短视频账号

我要设计一个品牌Logo

我要写一篇爆款文章
"


rows={5}


className="
w-full
rounded-xl
p-4
bg-slate-100
dark:bg-slate-800
text-sm
resize-none
focus:outline-none
focus:ring-2
focus:ring-blue-500
"


/>





<button


onClick={onAnalyze}


disabled={!value.trim() || loading}


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
disabled:opacity-50
"


>


{

loading

?

"AI分析中..."

:

<>

开始分析

<ArrowRight
className="w-4 h-4"
/>

</>

}



</button>



</div>


);


}