import type {
  WorkflowResult
} from "../types/workflow";



export function generateWorkflow(
input:string
):WorkflowResult{


const text=input.trim();



let industry="AI商业创业";


if(
text.includes("卖") ||
text.includes("商品") ||
text.includes("产品")
){

industry="电商销售";

}



const steps=[


{

id:"market",

title:"市场分析",

description:
"分析目标市场规模、竞争环境和机会点",

status:"pending" as const,

prompt:
`
你是一名市场分析专家。

请分析以下项目：

${text}

输出：
1. 市场趋势
2. 竞争情况
3. 用户需求
4. 商业机会
`

},



{

id:"user",

title:"用户画像",

description:
"分析目标客户群体",

status:"pending" as const,

prompt:
`
你是一名用户研究专家。

针对：

${text}

生成：

1. 用户年龄
2. 用户兴趣
3. 消费心理
4. 购买动机

`

},



{

id:"product",

title:"产品定位",

description:
"设计产品价值和卖点",

status:"pending" as const,

prompt:
`
你是一名产品经理。

分析：

${text}

输出：

1. 产品定位
2. 核心卖点
3. 差异化优势

`

},



{

id:"content",

title:"内容营销",

description:
"生成内容传播策略",

status:"pending" as const,

prompt:
`
你是一名内容营销专家。

为：

${text}

设计：

1. 内容方向
2. 爆款主题
3. 发布策略

`

},



{

id:"video",

title:"短视频方案",

description:
"生成短视频内容计划",

status:"pending" as const,

prompt:
`
你是一名短视频运营专家。

针对：

${text}

生成：

20秒视频脚本

包括：

开头3秒
剧情
卖点
行动引导

`

},



{

id:"copy",

title:"商品文案",

description:
"生成销售文案",

status:"pending" as const,

prompt:
`
你是一名电商文案专家。

为：

${text}

生成：

商品标题
卖点描述
详情页文案

`

},



{

id:"execute",

title:"AI执行Prompt",

description:
"生成最终执行指令",

status:"pending" as const,

prompt:
`
请把以下需求转化为专业AI执行Prompt：

${text}

要求：

角色明确
任务明确
步骤明确
输出格式明确

`

}


];



return {

industry,

goal:
`帮助用户完成：${text}`,

steps

};


}