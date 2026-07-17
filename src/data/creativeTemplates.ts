import {
  FileText,
  PenTool,
  ShoppingBag,
  Video,
  Image,
  MessageCircle,
  type LucideIcon
} from 'lucide-react';



export type CreativeType =
  | 'prompt'
  | 'content'
  | 'image'
  | 'video';



export interface CreativeTemplate {


  id:string;


  title:string;


  description:string;


  category:string;


  color:string;


  icon:LucideIcon;


  // V2 创作类型

  type:CreativeType;



  template:{


    role:string;


    goal:string;


    context:string;


    task:string;


    constraint:string;


    outputFormat:string;


  };


}




export const CREATIVE_TEMPLATES:CreativeTemplate[]=[



// =====================
// 短视频
// =====================


{


id:'short-video',


title:'短视频脚本生成',


description:
'生成抖音、短视频爆款脚本，包含黄金3秒、剧情设计、镜头和成交引导',


category:'内容创作',


color:'text-purple-500',


icon:Video,


type:'content',



template:{


role:
'你是一名资深短视频运营专家',


goal:
'帮助用户制作高转化短视频内容',


context:
'短视频平台，例如抖音、小红书视频号',


task:
'生成完整短视频营销脚本',


constraint:
'符合平台规则，避免夸大宣传',


outputFormat:
`
按照以下结构输出：

1. 视频标题

2. 黄金3秒开场

3. 视频剧情结构

4. 分镜设计

5. 旁白文案

6. 字幕内容

7. 成交引导CTA
`

}


},





// =====================
// 电商营销
// =====================


{


id:'ecommerce',


title:'电商营销方案',


description:
'生成商品卖点、详情页、广告文案和销售策略',


category:'电商增长',


color:'text-orange-500',


icon:ShoppingBag,


type:'content',



template:{


role:
'你是一名资深电商商业增长专家',


goal:
'提升商品曝光、转化和销售增长',


context:
'线上电商销售场景',


task:
'制定完整商品营销增长方案',


constraint:
'真实描述产品，不虚假宣传',


outputFormat:
`
输出：

1. 产品定位

2. 用户画像

3. 产品卖点

4. 商品详情页文案

5. 广告推广方案

6. 成交转化策略

`

}


},





// =====================
// 小红书
// =====================


{


id:'xiaohongshu',


title:'小红书爆款笔记',


description:
'生成种草笔记、标题、关键词和互动方案',


category:'内容营销',


color:'text-pink-500',


icon:PenTool,


type:'content',



template:{


role:
'你是一名小红书内容营销专家',


goal:
'制作高互动、高转化种草内容',


context:
'年轻消费用户社区平台',


task:
'生成小红书爆款笔记',


constraint:
'真实自然，符合用户阅读习惯',


outputFormat:
`
输出：

1. 爆款标题

2. 开头吸引点

3. 正文内容

4. 标签关键词

5. 评论互动话术

`

}


},





// =====================
// AI图片
// =====================


{


id:'image-prompt',


title:'AI图片生成Prompt',


description:
'生成适用于Midjourney、SD等图片模型的专业Prompt',


category:'AI视觉',


color:'text-green-500',


icon:Image,


type:'image',



template:{


role:
'你是一名AI视觉设计专家',


goal:
'生成高质量AI图片提示词',


context:
'AI图像生成场景',


task:
'设计专业图片生成Prompt',


constraint:
'描述具体视觉元素',


outputFormat:
`
输出：

1. 主体描述

2. 场景环境

3. 风格

4. 光影

5. 摄像参数

6. 英文Prompt

`

}


},





// =====================
// AI视频
// =====================


{


id:'video-prompt',


title:'AI视频生成Prompt',


description:
'生成可灵、Runway等视频模型提示词',


category:'AI视频',


color:'text-blue-500',


icon:Video,


type:'video',



template:{


role:
'你是一名AI视频导演',


goal:
'生成专业AI视频提示词',


context:
'AI视频生成平台',


task:
'设计视频镜头和动作Prompt',


constraint:
'包含镜头运动和视觉描述',


outputFormat:
`
输出：

1. 视频主题

2. 场景

3. 人物动作

4. 镜头运动

5. 视频Prompt

`

}


},





// =====================
// 办公
// =====================


{


id:'office',


title:'AI办公助手',


description:
'生成工作总结、邮件、方案、PPT等办公内容',


category:'办公效率',


color:'text-blue-500',


icon:FileText,


type:'prompt',



template:{


role:
'你是一名专业AI办公助手',


goal:
'提高办公效率',


context:
'企业办公场景',


task:
'生成办公文档',


constraint:
'逻辑清晰，结构完整',


outputFormat:
'使用Markdown结构输出'

}


}



];