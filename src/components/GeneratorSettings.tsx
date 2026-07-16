import { useState } from "react";
import { Settings, ChevronDown, ChevronUp } from "lucide-react";


interface Props {

mode:'basic' | 'advanced' | 'expert';

setMode:(value:'basic' | 'advanced' | 'expert')=>void;

model:string;

setModel:(value:string)=>void;

}



export function GeneratorSettings({

mode,
setMode,
model,
setModel

}:Props){


const [open,setOpen]=useState(false);



return (

<div className="
glass-card
rounded-xl
p-4
">


<button

onClick={()=>setOpen(!open)}

className="
flex
items-center
justify-between
w-full
text-sm
font-medium
"

>


<div className="
flex
items-center
gap-2
">

<Settings
className="
w-4
h-4
"
/>


高级设置


</div>



{

open

?

<ChevronUp/>

:

<ChevronDown/>

}


</button>




{

open &&

<div className="
mt-4
space-y-4
">


<div>


<label className="
text-sm
block
mb-2
">

生成模式

</label>


<select

value={mode}

onChange={
e=>setMode(e.target.value as 'basic' | 'advanced' | 'expert')
}

className="
w-full
rounded-lg
bg-slate-100
dark:bg-slate-800
px-3
py-2
"


>

<option value="basic">
快速模式
</option>


<option value="advanced">
专业模式
</option>


<option value="expert">
专家模式
</option>


</select>


</div>





<div>


<label className="
text-sm
block
mb-2
">

目标AI模型

</label>


<select

value={model}

onChange={
e=>setModel(e.target.value)
}


className="
w-full
rounded-lg
bg-slate-100
dark:bg-slate-800
px-3
py-2
"


>


<option value="deepseek">
DeepSeek
</option>


<option value="gpt-4">
ChatGPT
</option>


<option value="claude">
Claude
</option>


<option value="gemini">
Gemini
</option>


</select>


</div>



</div>


}


</div>


);


}