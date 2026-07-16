export const INDUSTRY_KNOWLEDGE = {


  动漫: {

    keywords: [
      "动漫",
      "手办",
      "二次元",
      "模型",
      "ip"
    ],


    insights: [

      "IP价值驱动",

      "粉丝经济",

      "收藏消费心理",

      "社群传播",

      "情感消费"

    ],


    strategies: [

      "角色故事营销",

      "限量发售策略",

      "二次元社区运营",

      "KOL内容种草"

    ]

  },


  电商: {

    keywords:[

      "卖",

      "销售",

      "商品",

      "产品",

      "电商"

    ],


    insights:[

      "用户需求分析",

      "产品价值塑造",

      "营销渠道优化"

    ],


    strategies:[

      "内容营销",

      "用户转化",

      "复购运营"

    ]

  }


};





// 根据用户输入匹配行业知识

export function getIndustryKnowledge(text:string){


  for(
    const key in INDUSTRY_KNOWLEDGE
  ){


    const industry =
    INDUSTRY_KNOWLEDGE[key as keyof typeof INDUSTRY_KNOWLEDGE];



    const matched =
    industry.keywords.some(
      word => text.includes(word)
    );



    if(matched){

      return {

        insights:
        industry.insights,


        strategies:
        industry.strategies

      };

    }

  }



  return {

    insights:[],


    strategies:[]

  };


}