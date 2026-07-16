import {
  X,
  Copy,
  Download,
  Sparkles,
  Check
} from "lucide-react";

import { useState } from "react";



interface PromptResultModalProps {


open:boolean;


prompt:string;


onClose:()=>void;


onCopy:()=>void;


onDownload:()=>void;


}




export function PromptResultModal({

open,

prompt,

onClose,

onCopy,

onDownload

}:PromptResultModalProps){



const [copied,setCopied]=useState(false);



if(!open){

return null;

}



const handleCopy=()=>{


onCopy();


setCopied(true);


setTimeout(()=>{

setCopied(false);

},2000);


};





return (

<div className="
fixed
inset-0
z-50
bg-black/50
backdrop-blur-sm
flex
items-center
justify-center
p-4
">


<div className="
bg-white
dark:bg-slate-900
rounded-2xl
w-full
max-w-3xl
max-h-[85vh]
overflow-hidden
shadow-2xl
">


{/* Header */}

<div className="
flex
items-center
justify-between
p-5
border-b
dark:border-slate-700
">


<div className="
flex
items-center
gap-2
">


<Sparkles
className="
w-5 h-5
text-purple-500
"
/>


<h2 className="
font-bold
text-lg
">


专业Prompt生成完成


</h2>


</div>



<button

onClick={onClose}

className="
p-2
rounded-lg
hover:bg-slate-100
dark:hover:bg-slate-800
"

>


<X
className="w-5 h-5"
/>


</button>



</div>





{/* Content */}


<div className="
p-5
overflow-y-auto
max-h-[60vh]
">


<div className="
bg-slate-100
dark:bg-slate-800
rounded-xl
p-4
">


<pre className="
whitespace-pre-wrap
text-sm
leading-relaxed
">


{prompt}


</pre>


</div>


</div>





{/* Footer */}


<div className="
p-5
border-t
dark:border-slate-700
flex
gap-3
">


<button

onClick={handleCopy}

className="
flex-1
py-3
rounded-xl
bg-blue-600
hover:bg-blue-700
text-white
flex
items-center
justify-center
gap-2
"


>


{

copied

?

<>

<Check
className="w-4 h-4"
/>

已复制

</>


:

<>

<Copy
className="w-4 h-4"
/>

复制Prompt

</>


}



</button>





<button

onClick={onDownload}

className="
px-5
rounded-xl
bg-slate-200
dark:bg-slate-800
flex
items-center
gap-2
"


>


<Download
className="w-4 h-4"
/>


下载


</button>



</div>





</div>


</div>


);


}