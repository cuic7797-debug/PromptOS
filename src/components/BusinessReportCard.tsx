import {
  Briefcase,
  Users,
  TrendingUp,
  Video,
  ShoppingBag,
  Sparkles
} from "lucide-react";


interface BusinessReportCardProps {


  analysis:any;

  report:string;


}



export function BusinessReportCard({
  analysis,
  report
}:BusinessReportCardProps){



return (

<div className="space-y-5">



{/* 项目分析 */}

<div className="
glass-card
rounded-xl
p-5
">

<div className="
flex
items-center
gap-2
mb-3
">

<Briefcase
className="text-blue-500"
/>


<h2 className="font-bold text-lg">

项目商业分析

</h2>

</div>


<div className="space-y-2 text-sm">


<p>

<strong>项目：</strong>

{analysis?.project}

</p>


<p>

<strong>行业：</strong>

{analysis?.industry}

</p>


<p>

<strong>商业模式：</strong>

{analysis?.businessModel}

</p>


<p>

<strong>目标：</strong>

{analysis?.goal}

</p>


</div>


</div>







{/* 用户画像 */}

<div className="
glass-card
rounded-xl
p-5
">


<div className="
flex
items-center
gap-2
mb-3
">


<Users
className="text-purple-500"
/>


<h2 className="font-bold text-lg">

用户画像

</h2>


</div>



<p className="
text-sm
text-slate-600
dark:text-slate-300
">

{analysis?.audience}

</p>


</div>







{/* 增长策略 */}

<div className="
glass-card
rounded-xl
p-5
">


<div className="
flex
items-center
gap-2
mb-3
">


<TrendingUp
className="text-green-500"
/>


<h2 className="font-bold text-lg">

增长策略

</h2>


</div>



<div className="space-y-2">


{

analysis?.strategies?.map(
(item:string,index:number)=>(


<div
key={index}
className="
text-sm
p-2
rounded-lg
bg-slate-100
dark:bg-slate-800
"
>


{item}


</div>


)

)

}


</div>


</div>








{/* 内容生产 */}

<div className="
glass-card
rounded-xl
p-5
">


<div className="
flex
items-center
gap-2
mb-3
">


<Video
className="text-red-500"
/>


<h2 className="font-bold text-lg">

内容生产

</h2>


</div>



<div className="
grid
grid-cols-1
md:grid-cols-2
gap-3
">


<div className="
p-3
rounded-lg
bg-slate-100
dark:bg-slate-800
text-sm
">

🎬

短视频脚本

</div>



<div className="
p-3
rounded-lg
bg-slate-100
dark:bg-slate-800
text-sm
">

🖼️

AI图片Prompt

</div>


<div className="
p-3
rounded-lg
bg-slate-100
dark:bg-slate-800
text-sm
">

🎥

AI视频Prompt

</div>



<div className="
p-3
rounded-lg
bg-slate-100
dark:bg-slate-800
text-sm
">

🛒

商品营销文案

</div>



</div>


</div>









{/* AI执行报告 */}

<div className="
glass-card
rounded-xl
p-5
">


<div className="
flex
items-center
gap-2
mb-3
">


<Sparkles
className="text-yellow-500"
/>


<h2 className="font-bold text-lg">

AI执行方案

</h2>


</div>



<pre
className="
whitespace-pre-wrap
text-sm
text-slate-600
dark:text-slate-300
"
>


{report}


</pre>


</div>





</div>


);


}