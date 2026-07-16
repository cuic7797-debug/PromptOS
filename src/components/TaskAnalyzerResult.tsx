import {
  Target,
  Users,
  Megaphone,
  Image,
  FileText
} from "lucide-react";


interface Props {

analysis:any;

}



export function TaskAnalyzerResult({
analysis
}:Props){


if(!analysis){

return null;

}



return (

<div className="
space-y-4
">


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

<Target
className="text-blue-500"
/>

<h3 className="
font-bold
">

产品定位

</h3>

</div>


<p className="
text-sm
text-slate-600
">

{analysis.industry}

</p>


</div>





<div className="
grid
md:grid-cols-2
gap-4
">


<div className="
glass-card
rounded-xl
p-5
">


<div className="
flex
gap-2
items-center
mb-3
">


<Users
className="text-green-500"
/>


<h3 className="font-bold">

用户画像

</h3>


</div>


<p className="text-sm">

{analysis.audience}

</p>


</div>





<div className="
glass-card
rounded-xl
p-5
">


<div className="
flex
gap-2
items-center
mb-3
">


<Megaphone
className="text-purple-500"
/>


<h3 className="font-bold">

营销方向

</h3>


</div>


<p className="text-sm">

{analysis.goal}

</p>


</div>


</div>






<div className="
glass-card
rounded-xl
p-5
">


<div className="
flex
gap-2
items-center
mb-3
">


<FileText
className="text-orange-500"
/>


<h3 className="font-bold">

执行任务

</h3>


</div>


<ul
className="
text-sm
space-y-2
"
>

{

analysis.tasks?.map(

(task:string,index:number)=>(

<li key={index}>

• {task}

</li>

)

)

}


</ul>


</div>






<div className="
glass-card
rounded-xl
p-5
">


<div className="
flex
gap-2
items-center
mb-3
">


<Image
className="text-pink-500"
/>


<h3 className="font-bold">

内容输出

</h3>


</div>



<ul
className="text-sm space-y-2"
>

{

analysis.outputs?.map(

(item:string,index:number)=>(

<li key={index}>

• {item}

</li>


)

)

}


</ul>


</div>



</div>

);


}