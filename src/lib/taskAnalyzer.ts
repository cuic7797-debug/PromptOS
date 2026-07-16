export interface TaskAnalysis {


industry:string;


project:string;


goal:string;


audience:string;


strategy:string[];


tasks:string[];


outputs:string[];


}



export function analyzeTask(input:string):TaskAnalysis{


const text=input.toLowerCase();



let result:TaskAnalysis={


industry:"AI项目规划",


project:
"根据用户需求制定智能执行方案",


goal:
"帮助用户快速完成目标任务",


audience:
"目标用户群体",


strategy:[

"分析需求场景",

"规划执行路径",

"生成专业方案"

],


tasks:[

"拆解任务目标",

"制定执行步骤",

"优化工作流程"

],


outputs:[

"执行方案",

"专业Prompt",

"内容规划"

]


};





// 电商商业


if(

text.includes("卖")
||
text.includes("销售")
||
text.includes("电商")
||
text.includes("产品")
||
text.includes("商品")

){



result={


industry:
"电商商业增长",


project:
`${input}商业增长方案`,


goal:
"提升产品曝光、用户转化和销售增长",


audience:
"目标消费者、兴趣用户、潜在购买人群",


strategy:[

"产品定位分析",

"用户购买心理分析",

"营销渠道规划",

"内容推广策略"

],


tasks:[

"分析产品卖点",

"建立用户画像",

"制定营销方案",

"规划短视频内容",

"设计成交路径"

],


outputs:[

"产品营销方案",

"短视频销售脚本",

"商品详情页文案",

"广告投放方案",

"AI图片生成Prompt"

]


};


}





// 短视频


if(

text.includes("视频")
||
text.includes("抖音")
||
text.includes("短视频")
||
text.includes("账号")

){


result={


industry:
"内容营销与短视频运营",


project:
`${input}内容增长方案`,


goal:
"打造高传播内容，提高账号影响力",


audience:
"短视频平台用户、兴趣用户",


strategy:[

"账号定位",

"爆款内容规划",

"用户增长策略"

],


tasks:[

"设计内容方向",

"规划视频结构",

"优化前三秒",

"设计互动转化"

],


outputs:[

"短视频脚本",

"分镜方案",

"标题文案",

"视频Prompt"

]


};


}






// AI绘图


if(

text.includes("图片")
||
text.includes("绘画")
||
text.includes("设计")
||
text.includes("海报")

){



result={


industry:
"AI视觉创作",


project:
`${input}视觉设计方案`,


goal:
"生成符合需求的高质量视觉内容",


audience:
"设计师、品牌方、内容创作者",


strategy:[

"视觉风格分析",

"画面构图设计",

"AI模型参数优化"

],


tasks:[

"分析视觉需求",

"设计画面元素",

"优化生成参数"

],


outputs:[

"Midjourney Prompt",

"Stable Diffusion Prompt",

"视觉设计方案"

]


};


}




return result;


}