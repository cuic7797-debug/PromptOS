import type { GeneratorForm, QualityScore } from '../types';

export function generatePrompt(form: GeneratorForm): string {

const {
role,
goal,
context,
task,
constraint,
outputFormat,
qualityCheck,
aiAdapter,
mode
}=form;


const platform=getPlatformAdapter(aiAdapter);



/*
 PromptOS V2
 AI商业执行引擎
*/


if(mode==="basic"){

return `

# 角色定位

${role || "你是一名专业AI助手"}


# 任务目标

${goal || "完成用户需求"}


# 执行任务

${task || "分析问题并提供解决方案"}


# 输出要求

${outputFormat || "结构化输出"}

`;

}




if(mode==="advanced"){

return `

# 角色定位

${role || "你是一名专业领域专家"}


# 项目背景

${context}


# 核心目标

${goal}


# 执行任务

${task}


# 输出要求

${outputFormat}


# 约束条件

${constraint}


`;

}





// ===============================
// PromptOS V2 Expert Engine
// ===============================


const expertPrompt = `


# [系统角色设定]


## 角色定位


${role || 
`
你是一名专业商业增长专家，
具备行业分析、用户洞察、
营销策略和商业执行能力。
`
}



## 核心能力矩阵


你具备以下能力：


- 行业分析能力

深入理解行业商业逻辑、
市场环境和竞争机会


- 用户洞察能力

分析用户需求、
购买心理和消费行为


- 增长策略能力

制定产品、
内容、
渠道和销售增长方案


- 内容生产能力

设计短视频、
广告、
营销内容


- AI执行能力

输出可以直接交给AI执行的专业Prompt




# [项目分析]


${context}




# [商业目标]


${goal}




# [核心执行任务]


${task}




# [执行框架]


请按照以下流程完成：



## 第一阶段：商业分析


分析：

1. 行业趋势

2. 用户画像

3. 市场机会

4. 产品定位




## 第二阶段：增长方案设计


制定：


1. 产品卖点策略


2. 用户购买心理分析


3. 内容营销策略


4. 渠道推广方案


5. 成交转化路径




## 第三阶段：内容生产方案


设计：


1. 短视频内容方向


2. 爆款选题


3. 视频脚本结构


4. 商品文案策略




## 第四阶段：AI生产任务


生成：


1. AI图片生成Prompt


2. AI视频生成Prompt


3. 营销文案Prompt


4. 销售优化Prompt




# [最终输出格式]


请严格按照以下结构输出：



# 第一部分：项目商业分析


## 行业分析


## 用户画像


## 市场机会


## 产品定位




# 第二部分：商业增长方案


## 产品卖点


## 用户购买心理


## 营销渠道


## 转化策略




# 第三部分：内容营销方案


## 短视频方案


## 爆款内容方向


## 文案策略




# 第四部分：销售增长方案


## 流量获取


## 用户转化路径


## 复购策略




# 第五部分：AI执行Prompt


输出可直接复制给AI执行的Prompt




# [执行要求]


${constraint ||
`
真实、
专业、
可执行。

避免空泛建议。
`
}



# [质量检查]


${qualityCheck ||
`
检查逻辑完整性、
商业可行性、
执行价值。
`
}



# [AI平台适配]


目标平台：

${platform.name}


模型特点：

${platform.style}


输出优化：

${platform.format}



请严格按照该AI平台最佳实践执行。


`;



return expertPrompt.trim();


}

export function analyzeQuality(prompt:string):QualityScore{


const suggestions:string[]=[];


let clarity=70;
let specificity=70;
let structure=70;
let completeness=70;
let executability=70;



// 长度检测

if(prompt.length<300){

clarity-=10;

suggestions.push(
"建议增加项目背景和执行细节，提高AI理解能力"
);

}



if(prompt.length>1000){

specificity+=10;
executability+=10;

}



// 角色检测

if(
prompt.includes("角色定位")
||
prompt.includes("你是一名")
){

clarity+=10;

}else{

suggestions.push(
"建议明确AI角色定位"
);

}



// 商业分析检测

if(
prompt.includes("用户画像")
&&
prompt.includes("市场")
){

specificity+=10;

}else{

suggestions.push(
"建议增加用户和市场分析"
);

}



// 输出结构检测

if(
prompt.includes("第一部分")
||
prompt.includes("第二部分")
||
prompt.includes("输出格式")
){

structure+=15;

}else{

suggestions.push(
"建议增加明确输出结构"
);

}



// 执行能力检测

if(
prompt.includes("执行")
||
prompt.includes("方案")
||
prompt.includes("步骤")
){

executability+=15;

}



// 约束检测

if(
prompt.includes("约束")
||
prompt.includes("避免")
){

completeness+=10;

}else{

suggestions.push(
"建议增加执行约束"
);

}



// AI适配检测

if(
prompt.includes("AI平台")
||
prompt.includes("模型特点")
){

completeness+=10;

}



// 限制

clarity=Math.min(100,Math.max(0,clarity));

specificity=Math.min(100,Math.max(0,specificity));

structure=Math.min(100,Math.max(0,structure));

completeness=Math.min(100,Math.max(0,completeness));

executability=Math.min(100,Math.max(0,executability));



const overall=Math.round(
(
clarity+
specificity+
structure+
completeness+
executability
)/5
);



const grade=
overall>=90
?"S"
:
overall>=80
?"A"
:
overall>=70
?"B"
:
overall>=60
?"C"
:"D";



if(suggestions.length===0){

suggestions.push(
"PromptOS生成质量优秀，可以直接执行"
);

}



return {

clarity,

specificity,

structure,

completeness,

executability,

overall,

grade,

suggestions

};


}






export function optimizePrompt(prompt:string):string{


let optimized=prompt;



if(
!optimized.includes("角色定位")
){

optimized=
`
# 角色定位

你是一名专业AI专家。


`
+
optimized;

}




if(
!optimized.includes("输出")
){

optimized+=`

# 输出要求

请结构化输出，
提供详细执行方案。
`;

}




if(
!optimized.includes("约束")
){

optimized+=`

# 约束条件

- 保持真实
- 避免空泛
- 提供可执行方法

`;

}



return optimized;


}





export function translatePrompt(
prompt:string,
targetLang:"zh"|"en",
model:string
):string{


if(targetLang==="en"){

return `

[Translated Prompt]

Optimized for ${model}


${prompt}

`;

}



return `

[中文优化Prompt]

适配模型：

${model}


${prompt}

`;

}





export const AI_MODELS=[


{
id:"deepseek",
name:"DeepSeek",
description:"免费推理模型，适合商业分析",
category:"chat" as const,
icon:"MessageSquare"
},


{
id:"doubao",
name:"豆包",
description:"中文内容创作和营销",
category:"chat" as const,
icon:"MessageSquare"
},


{
id:"kimi",
name:"Kimi",
description:"长文本分析",
category:"chat" as const,
icon:"MessageSquare"
},


{
id:"gemini",
name:"Gemini",
description:"多模态AI",
category:"chat" as const,
icon:"MessageSquare"
},


{
id:"midjourney",
name:"Midjourney",
description:"AI图片生成",
category:"image" as const,
icon:"Image"
},


{
id:"kling",
name:"可灵",
description:"AI视频生成",
category:"video" as const,
icon:"Video"
}


];






function getPlatformAdapter(model:string){


const adapters:any={

  deepseek:{
    name:"DeepSeek",
    style:
      '强调深度推理、商业分析、逻辑拆解和结构化决策',
    format:
      '按照商业分析步骤输出，先分析，再规划，最后给执行方案'
  },

  doubao:{
    name:"豆包",

style:
"适合中文营销、电商和内容生产",

format:
"符合中文互联网表达"

},



kimi:{

name:"Kimi",

style:
"适合长文本和资料分析",

format:
"保持上下文完整"

},



gemini:{

name:"Gemini",

style:
"适合多模态创意任务",

format:
"提供多角度方案"

},



midjourney:{

name:"Midjourney",

style:
"视觉创意生成",

format:
"英文视觉关键词"

},



kling:{

name:"可灵",

style:
"视频生成",

format:
"包含镜头、动作、画面"

}



};



return adapters[model]
||
{

name:model,

style:"通用AI助手",

format:"结构化输出"

};


}