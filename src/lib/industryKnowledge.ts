export interface IndustryKnowledgeItem {

  keywords:string[];

  insights:string[];

  strategies:string[];

  tasks?:string[];

  outputs?:string[];

}




export const INDUSTRY_KNOWLEDGE:Record<string,IndustryKnowledgeItem> = {



  动漫: {


    keywords:[

      "动漫",
      "手办",
      "二次元",
      "模型",
      "ip"

    ],



    insights:[


      "IP价值驱动购买决策",


      "粉丝情感连接影响消费",


      "收藏属性提升产品溢价",


      "二次元社区具有传播优势",


      "兴趣消费具有长期用户价值"


    ],



    strategies:[


      "角色故事营销",


      "限量发售策略",


      "二次元社区运营",


      "KOL内容种草",


      "粉丝社群运营"


    ],



    tasks:[


      "分析IP核心价值和产品卖点",


      "建立二次元用户画像",


      "设计内容营销方案",


      "规划短视频传播策略",


      "设计用户购买转化路径",


      "制定粉丝运营方案"


    ],



    outputs:[


      "动漫IP商业增长方案",


      "用户画像分析报告",


      "短视频销售脚本",


      "商品详情页文案",


      "粉丝社群运营方案",


      "AI图片生成Prompt",


      "AI视频生成Prompt"


    ]



  },







  电商:{



    keywords:[


      "卖",


      "销售",


      "商品",


      "产品",


      "电商"


    ],



    insights:[


      "用户需求决定购买行为",


      "产品价值影响转化率",


      "内容营销提升曝光效率",


      "信任建立影响成交",


      "用户运营提升长期价值"


    ],



    strategies:[


      "产品定位优化",


      "内容营销推广",


      "渠道流量获取",


      "用户转化优化",


      "复购运营"


    ],



    tasks:[


      "分析产品核心卖点",


      "建立目标用户画像",


      "设计营销增长方案",


      "规划推广渠道",


      "优化成交流程"


    ],



    outputs:[


      "产品营销方案",


      "用户分析报告",


      "广告投放方案",


      "商品详情页文案",


      "销售增长策略"


    ]



  }



};








// 根据用户输入匹配行业知识


export function getIndustryKnowledge(
  text:string
):IndustryKnowledgeItem {



  for(
    const key in INDUSTRY_KNOWLEDGE
  ){


    const industry =
    INDUSTRY_KNOWLEDGE[key];



    const matched =
    industry.keywords.some(
      word =>
      text.includes(word)
    );



    if(matched){


      return industry;


    }


  }



  return {


    keywords:[],


    insights:[],


    strategies:[],


    tasks:[],


    outputs:[]


  };


}