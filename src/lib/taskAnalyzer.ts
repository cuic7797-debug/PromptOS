import { getIndustryKnowledge } from "./industryKnowledge";


export interface TaskAnalysis {

  project: string;

  industry: string;

  businessModel: string;

  goal: string;

  audience: string;


  // V2核心字段

  insights: string[];

  strategies: string[];


  // 兼容旧组件

  industryInsights: string[];

  industryStrategies: string[];

  strategy: string[];


  tasks: string[];

  outputs: string[];

}






export function analyzeTask(input:string):TaskAnalysis {


const text=input.toLowerCase();



let result:TaskAnalysis={



project:
`${input}智能商业执行方案`,



industry:
"AI任务规划",



businessModel:
"AI辅助决策与执行",



goal:
"帮助用户完成目标任务并生成执行方案",



audience:
"目标用户群体",




insights:[

"分析用户需求",

"识别关键问题",

"寻找执行机会"

],



strategies:[

"需求分析",

"方案设计",

"执行优化"

],



tasks:[

"拆解任务目标",

"制定执行方案",

"优化执行流程"

],



outputs:[

"执行方案",

"专业Prompt",

"内容规划"

],



industryInsights:[],


industryStrategies:[],


strategy:[

"需求分析",

"方案设计",

"执行优化"

]


};






// ============================
// 动漫IP商业增长
// ============================


if(

text.includes("动漫")
||
text.includes("手办")
||
text.includes("二次元")
||
text.includes("模型")
||
text.includes("ip")

){



result={


project:
`${input}商业增长方案`,


industry:
"动漫IP商业增长",



businessModel:
"IP价值 + 粉丝经济 + 收藏消费 + 内容电商",



goal:
"通过内容传播、用户运营和销售转化提升商业增长",



audience:
"动漫爱好者、IP粉丝、收藏玩家、兴趣消费者",




insights:[


"动漫手办属于兴趣消费市场，购买受到IP认同影响",


"用户购买不仅关注产品功能，更关注情感连接和收藏价值",


"限量、稀缺和角色故事能够提升产品溢价能力",


"二次元社区和内容平台是主要传播渠道"


],




strategies:[


"打造IP角色故事和情感连接",


"强化收藏价值和限量策略",


"利用短视频进行内容种草",


"通过社区运营沉淀粉丝用户",


"设计从兴趣到购买的转化路径"


],




tasks:[


"分析IP和产品核心卖点",


"建立目标用户画像",


"设计内容营销方案",


"规划短视频传播策略",


"设计销售成交路径",


"制定用户复购方案"


],




outputs:[


"动漫IP商业增长方案",


"用户画像分析报告",


"短视频销售脚本",


"商品详情页文案",


"粉丝运营方案",


"AI图片生成Prompt",


"AI视频生成Prompt"


],



industryInsights:[],


industryStrategies:[],


strategy:[

"IP内容营销",

"粉丝社群运营",

"短视频种草",

"销售转化优化"

]


};



}





// ============================
// 电商商业增长
// ============================


else if(


text.includes("卖")
||
text.includes("销售")
||
text.includes("电商")
||
text.includes("商品")
||
text.includes("产品")

){



result={


project:
`${input}电商商业增长方案`,



industry:
"电商商业增长",



businessModel:
"产品销售 + 内容营销 + 用户转化",



goal:
"提升产品曝光、用户转化和销售增长",



audience:
"潜在消费者、目标用户、购买人群",



insights:[


"用户需求决定购买行为",


"内容营销影响消费决策",


"信任建立影响成交转化",


"用户运营决定长期价值"


],



strategies:[


"产品定位优化",

"用户画像分析",

"内容营销推广",

"渠道流量获取",

"成交路径优化"


],



tasks:[


"分析产品卖点",

"研究用户需求",

"制定营销策略",

"规划内容传播",

"优化购买流程"


],



outputs:[


"产品营销方案",

"用户分析报告",

"广告投放方案",

"销售页面文案",

"AI营销Prompt"


],



industryInsights:[],


industryStrategies:[],


strategy:[

"产品定位",

"内容营销",

"销售转化"

]


};



}






// ============================
// 短视频增长
// ============================


else if(


text.includes("视频")
||
text.includes("抖音")
||
text.includes("短视频")
||
text.includes("账号")

){



result={



project:
`${input}短视频增长方案`,



industry:
"短视频内容营销",



businessModel:
"内容流量 + 用户增长 + 商业转化",



goal:
"提升内容传播能力和商业价值",



audience:
"短视频平台用户",



insights:[


"前三秒决定用户停留",

"内容价值影响传播效果",

"互动和信任推动转化"


],



strategies:[


"账号定位",

"内容规划",

"爆款设计",

"用户增长"


],



tasks:[


"设计内容方向",

"规划视频结构",

"优化传播效果",

"设计商业转化"

],



outputs:[


"短视频脚本",

"分镜方案",

"标题文案",

"视频生成Prompt"

],



industryInsights:[],


industryStrategies:[],


strategy:[

"内容定位",

"爆款设计",

"用户增长"

]


};



}






// ============================
// 注入行业知识库（去重复）
// ============================


const industryData=getIndustryKnowledge(text);



if(industryData){



result.insights=[
...new Set([
...result.insights,
...industryData.insights
])
];



result.strategies=[
...new Set([
...result.strategies,
...industryData.strategies
])
];


// 新增

result.tasks=[
...new Set([
...result.tasks,
...(industryData.tasks || [])
])
];


result.outputs=[
...new Set([
...result.outputs,
...(industryData.outputs || [])
])
];


}





// 兼容字段同步


result.industryInsights =
result.insights;


result.industryStrategies =
result.strategies;


result.strategy =
result.strategies;



return result;



}