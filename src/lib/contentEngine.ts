import type { TaskAnalysis } from "./taskAnalyzer";



export interface BusinessContent {


  productAnalysis: string[];

  userProfile: string[];

  marketingPlan: string[];

  videoScript: string[];

  salesCopy: string[];

  imagePrompt: string[];

  videoPrompt: string[];

}




export function generateBusinessContent(
  analysis: TaskAnalysis
): BusinessContent {



const industry = analysis.industry;

const project = analysis.project;





let content:BusinessContent={


productAnalysis:[

"分析产品核心价值",

"提炼产品差异化卖点",

"建立用户购买理由"

],



userProfile:[

"分析目标用户年龄和兴趣",

"分析用户消费动机",

"分析购买决策因素"

],



marketingPlan:[

"制定内容营销策略",

"规划用户增长渠道",

"设计销售转化路径"

],



videoScript:[

"设计短视频开场吸引点",

"规划内容展示流程",

"设计购买引导"

],



salesCopy:[

"生成商品卖点文案",

"优化商品详情页结构",

"提升用户购买信任"

],



imagePrompt:[

"生成产品视觉展示Prompt",

"设计商业宣传图片Prompt"

],



videoPrompt:[

"生成视频制作Prompt",

"设计镜头、动作和场景"

]


};







// ============================
// 动漫IP商业增长
// ============================


if(
industry.includes("动漫")
||
project.includes("动漫")
||
project.includes("手办")
){



content={


productAnalysis:[

"IP角色价值分析：挖掘角色背景、故事、人设和粉丝情感连接",

"收藏价值分析：通过限定编号、特殊版本提升收藏属性",

"产品差异化：强化造型设计、细节还原和展示价值",

"情绪价值：满足用户对于角色陪伴和身份认同需求"

],



userProfile:[

"核心用户：16-35岁动漫爱好者",

"兴趣用户：喜欢二次元文化、角色收藏和周边产品",

"购买动机：喜欢角色、支持IP、收藏展示",

"消费心理：追求稀缺感、归属感和情感满足"

],



marketingPlan:[

"打造角色故事内容，提高用户情感连接",

"利用短视频展示制作过程和细节",

"通过二次元社区进行用户种草",

"建立粉丝社群，提高复购和传播",

"设计限量发售制造购买动力"

],



videoScript:[

"黄金3秒：展示手办震撼细节，引发用户停留",

"前5秒：介绍角色背景和收藏价值",

"中段：展示材质、做工、细节",

"结尾：加入限量发售和购买入口"

],



salesCopy:[

"这不仅是一件手办，更是一段角色记忆",

"高度还原经典角色细节",

"限量收藏版本，适合收藏展示",

"属于真正喜欢这个IP的人"

],



imagePrompt:[

"动漫手办商业摄影，高清产品展示，专业灯光，收藏级质感",

"二次元角色模型展示，精细雕刻，高质量渲染，电商主图风格"

],



videoPrompt:[

"电影级产品展示视频，镜头环绕动漫手办，展示细节纹理",

"短视频广告风格，快速切换镜头，突出收藏价值和情感故事"

]


};

}







// ============================
// 电商
// ============================


else if(
industry.includes("电商")
){


content={


productAnalysis:[

"分析产品功能价值",

"提炼核心卖点",

"寻找市场差异化优势"

],


userProfile:[

"分析目标消费者",

"分析购买需求",

"分析消费场景"

],


marketingPlan:[

"制定内容营销方案",

"规划流量获取渠道",

"优化销售转化流程"

],


videoScript:[

"设计产品展示",

"突出用户痛点",

"加入购买理由"

],


salesCopy:[

"优化商品标题",

"设计卖点描述",

"增强购买信任"

],


imagePrompt:[

"生成高转化率电商产品图片",

"突出产品特点和使用场景"

],


videoPrompt:[

"生成产品宣传视频",

"包含镜头、动作和场景"

]


};

}







// ============================
// 短视频
// ============================


else if(
industry.includes("短视频")
){



content={


productAnalysis:[

"分析内容定位",

"明确账号价值",

"确定用户需求"

],


userProfile:[

"分析观看用户",

"分析兴趣标签",

"分析互动行为"

],


marketingPlan:[

"设计账号增长策略",

"规划内容矩阵",

"优化传播路径"

],


videoScript:[

"前三秒制造冲突",

"中间提供价值",

"结尾引导互动"

],


salesCopy:[

"设计视频标题",

"优化行动引导",

"提升转化率"

],


imagePrompt:[

"生成视频封面设计Prompt"

],


videoPrompt:[

"生成短视频制作Prompt",

"包含镜头语言和节奏设计"

]


};

}





return content;


}