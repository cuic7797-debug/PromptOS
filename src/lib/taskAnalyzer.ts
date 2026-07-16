import { getIndustryKnowledge } from "./industryKnowledge";


export interface TaskAnalysis {

  project: string;

  industry: string;

  businessModel: string;

  goal: string;

  audience: string;


  // V2 新字段
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



const industryData=getIndustryKnowledge(text);



let result:TaskAnalysis={


project:
`${input}智能执行方案`,


industry:
"AI项目规划",


businessModel:
"AI驱动的任务解决方案",


goal:
"帮助用户快速完成目标任务",


audience:
"目标用户群体",


insights:[

"分析用户需求",

"识别核心问题",

"寻找增长机会"

],


strategies:[

"需求分析",

"方案设计",

"执行优化"

],


tasks:[

"拆解目标",

"制定方案",

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
],


};





// ======================
// 电商商业增长
// ======================


if(

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

`${input}商业增长方案`,


industry:

"电商商业增长",


businessModel:

"产品销售 + 内容营销 + 用户转化",


goal:

"提升产品曝光、用户转化和销售增长",


audience:

"目标消费者、兴趣用户、潜在购买人群",



insights:[

"用户需求驱动购买决策",

"内容营销影响消费选择",

"社群和用户关系促进复购"

],



strategies:[

"产品定位分析",

"用户购买心理分析",

"营销渠道规划",

"内容推广策略",

"销售转化优化"

],



tasks:[

"分析产品核心卖点",

"建立目标用户画像",

"制定营销增长方案",

"规划内容传播策略",

"设计成交转化路径"

],



outputs:[

"产品营销方案",

"短视频销售脚本",

"商品详情页文案",

"广告投放方案",

"AI图片生成Prompt",

"视频生成Prompt"

],

industryInsights:[],

industryStrategies:[],

strategy:[
"产品定位分析",
"用户购买心理分析",
"营销渠道规划"
],

};

}





// ======================
// 动漫 / 二次元
// ======================


if(

text.includes("动漫")
||
text.includes("手办")
||
text.includes("二次元")
||
text.includes("模型")

){


result={


project:

`${input}IP商业增长方案`,


industry:

"动漫IP商业增长",


businessModel:

"IP价值 + 粉丝经济 + 收藏消费",


goal:

"通过内容传播和用户运营提升销售增长",


audience:

"动漫爱好者、收藏玩家、IP粉丝",



insights:[

"IP价值驱动购买",

"粉丝情感连接影响消费",

"收藏属性提升产品溢价",

"二次元社区具有传播优势"

],



strategies:[

"角色故事营销",

"限量发售策略",

"二次元社区运营",

"KOL内容种草",

"粉丝社群运营"

],



tasks:[

"分析IP和产品卖点",

"建立二次元用户画像",

"设计内容营销方案",

"规划短视频传播",

"设计销售转化路径"

],



outputs:[

"动漫IP商业方案",

"短视频销售脚本",

"商品详情页文案",

"粉丝运营方案",

"AI图片生成Prompt",

"AI视频生成Prompt"

],

industryInsights:[],

industryStrategies:[],

strategy:[
"角色故事营销",
"限量发售策略",
"二次元社区运营"
],

};

}





// ======================
// 短视频
// ======================


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


project:

`${input}内容增长方案`,


industry:

"短视频内容营销",


businessModel:

"内容流量 + 用户增长 + 商业转化",


goal:

"提升内容传播能力和商业价值",


audience:

"短视频平台用户",


insights:[

"前三秒决定观看率",

"内容价值决定传播",

"互动影响账号增长"

],


strategies:[

"账号定位",

"爆款内容设计",

"用户增长策略"

],


tasks:[

"设计内容方向",

"规划视频结构",

"优化开头吸引力",

"设计转化路径"

],


outputs:[

"短视频脚本",

"视频分镜",

"标题方案",

"视频Prompt"

],

industryInsights:[],

industryStrategies:[],

strategy:[
"账号定位",
"爆款内容设计",
"用户增长策略"
],

};

}





// 注入行业知识库

if(industryData){


result.insights=[

...result.insights,

...industryData.insights

];


result.strategies=[

...result.strategies,

...industryData.strategies

];


result.industryStrategies =
result.strategies;


result.strategy =
result.strategies;


}



return result;


}