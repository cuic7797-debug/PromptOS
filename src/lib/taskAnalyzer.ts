export interface TaskAnalysis {

  industry: string;

  goal: string;

  audience: string;

  tasks: string[];

  outputs: string[];

}



export function analyzeTask(input:string):TaskAnalysis {


  const text=input.toLowerCase();


  let industry="综合领域";


  if(
    text.includes("卖") ||
    text.includes("产品") ||
    text.includes("商品") ||
    text.includes("电商")
  ){

    industry="电商营销";

  }


  else if(
    text.includes("视频") ||
    text.includes("抖音") ||
    text.includes("短视频")
  ){

    industry="内容营销";

  }


  else if(
    text.includes("文章") ||
    text.includes("公众号") ||
    text.includes("小红书")
  ){

    industry="内容运营";

  }



  let goal="提升效率";


  if(
    text.includes("卖") ||
    text.includes("推广") ||
    text.includes("营销")
  ){

    goal="提升销售转化";

  }


  const audience =
  industry==="电商营销"
  ?
  "目标消费者/潜在购买用户"
  :
  "目标受众";



  return {


    industry,


    goal,


    audience,


    tasks:[

      "用户需求分析",

      "竞争优势分析",

      "内容策略设计",

      "执行方案规划"

    ],


    outputs:[

      "营销方案",

      "内容脚本",

      "AI生成Prompt",

      "执行步骤"

    ]


  };


}