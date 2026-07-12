export interface PlatformAdapter {

  id:string;

  name:string;

  category:string;

  description:string;

  url:string;

  features:string[];

  icon:string;

}



export const PLATFORM_ADAPTERS:PlatformAdapter[]=[


{
id:"chatgpt",
name:"ChatGPT",
icon:"💬",
category:"海外AI",
description:"OpenAI通用智能助手",
url:"https://chat.openai.com/",
features:[
"通用推理",
"内容创作",
"结构化输出"
]
},


{
id:"deepseek",
name:"DeepSeek",
icon:"🔷",
category:"国内AI",
description:"深度推理模型",
url:"https://chat.deepseek.com/",
features:[
"逻辑推理",
"代码分析",
"复杂任务"
]
},


{
id:"doubao",
name:"豆包",
icon:"🟢",
category:"国内AI",
description:"字节AI助手",
url:"https://www.doubao.com/",
features:[
"中文优化",
"营销内容",
"短视频"
]
},


{
id:"qwen",
name:"通义千问",
icon:"🟠",
category:"国内AI",
description:"阿里AI模型",
url:"https://tongyi.aliyun.com/",
features:[
"商业分析",
"办公任务",
"知识整理"
]
},


{
id:"kimi",
name:"Kimi",
icon:"📄",
category:"国内AI",
description:"长文本专家",
url:"https://kimi.moonshot.cn/",
features:[
"长文档",
"总结",
"资料分析"
]
},


{
id:"claude",
name:"Claude",
icon:"🧠",
category:"海外AI",
description:"Anthropic AI",
url:"https://claude.ai/",
features:[
"写作",
"长文本",
"逻辑分析"
]
},


{
id:"gemini",
name:"Gemini",
icon:"✨",
category:"海外AI",
description:"Google AI",
url:"https://gemini.google.com/",
features:[
"多模态",
"知识分析"
]
},


{
id:"grok",
name:"Grok",
icon:"🤖",
category:"海外AI",
description:"xAI助手",
url:"https://grok.com/",
features:[
"实时信息",
"观点分析"
]
},


{
id:"copilot",
name:"Copilot",
icon:"🛠️",
category:"代码AI",
description:"微软AI助手",
url:"https://copilot.microsoft.com/",
features:[
"代码生成",
"开发辅助"
]
},


{
id:"cursor",
name:"Cursor",
icon:"⚡",
category:"代码AI",
description:"AI代码编辑器",
url:"https://cursor.com/",
features:[
"代码重构",
"项目开发"
]
}



];



export function getPlatform(id:string){

return PLATFORM_ADAPTERS.find(
item=>item.id===id
);

}