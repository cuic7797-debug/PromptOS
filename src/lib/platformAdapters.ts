export type AIPlatform =
  | 'gpt'
  | 'deepseek'
  | 'doubao'
  | 'kimi'
  | 'claude'
  | 'gemini'
  | 'midjourney'
  | 'kling'
  | 'jimeng'
  | 'runway';


export interface PlatformAdapter {

  id: AIPlatform;

  name: string;

  category:
  | 'chat'
  | 'image'
  | 'video';

  website: string;

  instruction: string;

}



export const PLATFORM_ADAPTERS: PlatformAdapter[] = [

{
id:'gpt',
name:'ChatGPT',
category:'chat',
website:'https://chat.openai.com',
instruction:`
适配GPT模型。

要求：
使用Markdown结构。
逻辑清晰。
提供详细步骤。
`
},


{
id:'deepseek',
name:'DeepSeek',
category:'chat',
website:'https://chat.deepseek.com',
instruction:`
适配DeepSeek。

强调：
深度分析。
步骤拆解。
中文表达。
`
},


{
id:'doubao',
name:'豆包',
category:'chat',
website:'https://www.doubao.com',
instruction:`
适配豆包。

要求：
符合中文互联网表达。
注重实用性。
输出具体方案。
`
},


{
id:'kimi',
name:'Kimi',
category:'chat',
website:'https://kimi.moonshot.cn',
instruction:`
适配Kimi。

适合长文本任务。
要求结构完整。
`
},


{
id:'claude',
name:'Claude',
category:'chat',
website:'https://claude.ai',
instruction:`
适配Claude。

强调：
长文本理解。
专业分析。
`
},


{
id:'gemini',
name:'Gemini',
category:'chat',
website:'https://gemini.google.com',
instruction:`
适配Gemini。

适合多模态任务。
`
},


{
id:'midjourney',
name:'Midjourney',
category:'image',
website:'https://www.midjourney.com',
instruction:`
适配Midjourney。

输出：
主体
风格
光影
构图
摄影参数
`
},


{
id:'kling',
name:'可灵',
category:'video',
website:'https://klingai.kuaishou.com',
instruction:`
适配视频生成。

包含：
镜头
动作
场景
时间
`
}

];



export function getPlatform(id:string){

return PLATFORM_ADAPTERS.find(
item=>item.id===id
);

}