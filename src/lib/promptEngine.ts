import type { GeneratorForm, QualityScore } from '../types';

export function generatePrompt(form: GeneratorForm): string {
  const { role, goal, context, task, constraint, outputFormat, qualityCheck, aiAdapter, mode } = form;
  const platform = getPlatformAdapter(aiAdapter);

  let prompt = '';

  if (mode === 'basic') {
    prompt = `# 角色定位
${role || '你是一个专业的AI助手'}

# 任务目标
${goal || '请完成以下任务'}

# 具体要求
${task || '请根据要求提供详细回答'}

# 输出格式
${outputFormat || '请用中文回答，结构清晰'}
`;
  } else if (mode === 'advanced') {
    prompt = `# 角色定位
${role || '你是一个专业的AI助手'}

# 任务目标
${goal || '请完成以下任务'}

# 背景上下文
${context || '无特殊背景'}

# 核心能力矩阵
- 专业知识：具备相关领域深度知识
- 分析能力：能够逻辑清晰地分析问题
- 表达能力：输出结构化、易读的内容

# 执行框架
1. 理解需求：分析用户意图和核心诉求
2. 构建方案：设计最优解决路径
3. 执行生成：按框架输出内容
4. 质量检查：确保输出符合要求

# 具体任务
${task || '请根据要求提供详细回答'}

# 约束条件
${constraint || '无特殊约束'}

# 输出要求
${outputFormat || '请用中文回答，结构清晰，分点说明'}
`;
} else {
    // PromptOS V2 expert mode

    prompt = `# [系统角色设定]

## 角色定位

${role || '你是一名专业AI商业顾问'}


## 核心能力矩阵

- 领域专家：具备该行业深度专业知识
- 商业分析：能够分析市场、用户和增长机会
- 战略规划：能够制定完整执行路径
- 内容生产：能够设计营销和传播方案
- 结果导向：输出可执行方案


## 思维方式

- 用户中心：围绕真实用户需求分析
- 商业视角：关注增长、转化和价值
- 系统思维：考虑完整业务链路



# [项目任务分析]


${context || '根据用户需求进行分析'}




# [核心任务]


目标：

${goal || '完成用户需求'}



具体执行：

${task || 
`
1. 分析当前需求
2. 制定执行方案
3. 输出专业结果
`
}




# [三阶段执行框架]


## 阶段一：深度分析

- 分析用户需求
- 识别核心问题
- 判断行业机会
- 提炼关键策略



## 阶段二：方案设计

- 制定执行路径
- 设计内容策略
- 优化商业转化



## 阶段三：执行优化

- 检查方案完整性
- 优化执行细节
- 提供改进建议




# [行业执行要求]


请结合：

- 行业特点
- 用户心理
- 市场环境
- 商业目标

制定具有实际执行价值的方案。




# [输出规范]


${outputFormat ||
`
请输出：

1. 项目分析报告

2. 商业增长方案

3. 内容营销方案

4. 执行步骤

5. AI执行Prompt
`
}




# [执行约束]


${constraint || 
`
- 保持真实
- 避免空泛建议
- 提供具体执行方法
`
}




# [质量控制]


${qualityCheck ||
`
检查：

- 逻辑完整性
- 商业可行性
- 用户价值
- 执行难度
`
}




# AI平台适配


目标平台：

${platform.name}



模型特点：

${platform.style}



输出优化：

${platform.format}



请按照该AI平台最佳实践执行任务。
`;
}

  return prompt.trim();
}

export function analyzeQuality(prompt: string): QualityScore {
  const suggestions: string[] = [];
  let clarity = 70;
  let specificity = 70;
  let structure = 70;
  let completeness = 70;
  let executability = 70;

  // Clarity analysis
  if (prompt.length < 50) {
    clarity -= 20;
    suggestions.push('提示词过短，建议增加更多细节描述');
  }
  if (!prompt.includes('角色') && !prompt.includes('role') && !prompt.includes('你是')) {
    clarity -= 10;
    suggestions.push('建议明确指定AI角色定位');
  }
  if (prompt.includes('请') || prompt.includes('帮忙')) {
    clarity += 5;
  }

  // Specificity analysis
  if (prompt.includes('详细') || prompt.includes('具体')) {
    specificity += 10;
  }
  if (prompt.includes('示例') || prompt.includes('example')) {
    specificity += 15;
  }
  if (prompt.split('\n').length < 3) {
    specificity -= 10;
    suggestions.push('建议分点描述需求，提高具体性');
  }

  // Structure analysis
  if (prompt.includes('#') || prompt.includes('##') || prompt.includes('1.') || prompt.includes('- ')) {
    structure += 20;
  }
  if (prompt.includes('输出格式') || prompt.includes('格式')) {
    structure += 10;
  }
  if (prompt.length > 200 && !prompt.includes('\n')) {
    structure -= 15;
    suggestions.push('长文本建议分段，提高结构性');
  }

  // Completeness analysis
  const hasRole = prompt.includes('角色') || prompt.includes('role');
  const hasTask = prompt.includes('任务') || prompt.includes('目标') || prompt.includes('请');
  const hasFormat = prompt.includes('格式') || prompt.includes('输出');
  const hasConstraint = prompt.includes('约束') || prompt.includes('限制') || prompt.includes('不要');

  if (hasRole) completeness += 10;
  if (hasTask) completeness += 10;
  if (hasFormat) completeness += 10;
  if (hasConstraint) completeness += 10;
  if (!hasFormat) suggestions.push('建议指定输出格式要求');
  if (!hasConstraint) suggestions.push('建议添加约束条件，避免偏离主题');

  // Executability analysis
  if (prompt.includes('步骤') || prompt.includes('流程') || prompt.includes('框架')) {
    executability += 15;
  }
  if (prompt.includes('示例') || prompt.includes('sample')) {
    executability += 10;
  }
  if (prompt.length > 500) {
    executability += 5;
  }

  // Clamp values
  clarity = Math.max(0, Math.min(100, clarity));
  specificity = Math.max(0, Math.min(100, specificity));
  structure = Math.max(0, Math.min(100, structure));
  completeness = Math.max(0, Math.min(100, completeness));
  executability = Math.max(0, Math.min(100, executability));

  const overall = Math.round((clarity + specificity + structure + completeness + executability) / 5);
  const grade = overall >= 90 ? 'S' : overall >= 80 ? 'A' : overall >= 70 ? 'B' : overall >= 60 ? 'C' : 'D';

  if (suggestions.length === 0) {
    if (overall >= 90) suggestions.push('提示词质量优秀，可以直接使用');
    else if (overall >= 80) suggestions.push('提示词质量良好，仍有优化空间');
    else suggestions.push('提示词基本可用，建议参考优化建议改进');
  }

  return { clarity, specificity, structure, completeness, executability, overall, grade, suggestions };
}

export function optimizePrompt(prompt: string): string {
  let optimized = prompt;

  // Add role if missing
  if (!optimized.includes('角色') && !optimized.includes('role') && !optimized.includes('你是')) {
    optimized = `# 角色定位\n你是一个专业的AI助手\n\n${optimized}`;
  }

  // Add format if missing
  if (!optimized.includes('格式') && !optimized.includes('输出')) {
    optimized += `\n\n# 输出要求\n请用中文回答，结构清晰，分点说明`;
  }

  // Add constraint if missing
  if (!optimized.includes('约束') && !optimized.includes('限制')) {
    optimized += `\n\n# 约束条件\n- 确保内容准确可靠\n- 避免偏离主题\n- 如有不确定内容请明确说明`;
  }

  return optimized;
}

export function translatePrompt(prompt: string, targetLang: 'zh' | 'en', model: string): string {
  if (targetLang === 'en') {
    return `[Translated to English for ${model}]\n\n${prompt}\n\n[Note: This prompt has been optimized for English-language AI models. Ensure cultural context and idioms are appropriately adapted.]`;
  } else {
    return `[已翻译为中文，适配 ${model}]\n\n${prompt}\n\n[注意：此提示词已针对中文AI模型优化。确保文化背景和表达习惯适合中文语境。]`;
  }
}

export const AI_MODELS = [
  { id: 'gpt-4', name: 'GPT-4', description: 'OpenAI 最强通用模型', category: 'chat' as const, icon: 'MessageSquare' },
  { id: 'gpt-3.5', name: 'GPT-3.5', description: '快速响应的通用模型', category: 'chat' as const, icon: 'MessageSquare' },
  { id: 'claude', name: 'Claude', description: 'Anthropic 长文本专家', category: 'chat' as const, icon: 'MessageSquare' },
  { id: 'gemini', name: 'Gemini', description: 'Google 多模态模型', category: 'chat' as const, icon: 'MessageSquare' },
  { id: 'deepseek', name: 'DeepSeek', description: '深度推理专家', category: 'chat' as const, icon: 'MessageSquare' },
  { id: 'kimi', name: 'Kimi', description: 'Moonshot 长文本模型', category: 'chat' as const, icon: 'MessageSquare' },
  { id: 'doubao', name: '豆包', description: '字节跳动通用模型', category: 'chat' as const, icon: 'MessageSquare' },
  { id: 'midjourney', name: 'Midjourney', description: 'AI 绘画图像生成', category: 'image' as const, icon: 'Image' },
  { id: 'stable-diffusion', name: 'Stable Diffusion', description: '开源图像生成模型', category: 'image' as const, icon: 'Image' },
  { id: 'dalle', name: 'DALL-E', description: 'OpenAI 图像生成', category: 'image' as const, icon: 'Image' },
  { id: 'kling', name: '可灵', description: '快手视频生成模型', category: 'video' as const, icon: 'Video' },
  { id: 'jimeng', name: '即梦', description: '字节视频生成模型', category: 'video' as const, icon: 'Video' },
  { id: 'runway', name: 'Runway', description: '专业视频生成工具', category: 'video' as const, icon: 'Video' },
  { id: 'github-copilot', name: 'GitHub Copilot', description: '代码补全助手', category: 'code' as const, icon: 'Code' },
  { id: 'cursor', name: 'Cursor', description: 'AI 代码编辑器', category: 'code' as const, icon: 'Code' },
];
function getPlatformAdapter(model:string){

const adapters:any = {

'gpt-4':{
name:'GPT',
style:'逻辑严谨，结构化输出，适合复杂任务分析',
format:'使用Markdown分层结构'
},

'claude':{
name:'Claude',
style:'长文本理解能力强，强调上下文和安全性',
format:'提供完整分析过程和总结'
},

'deepseek':{
name:'DeepSeek',
style:'强调推理能力和技术分析',
format:'步骤化解决问题'
},

'kimi':{
name:'Kimi',
style:'适合长文本处理和资料总结',
format:'保持上下文完整'
},

'doubao':{
name:'豆包',
style:'适合中文用户、电商营销、内容创作',
format:'符合中文互联网表达习惯'
},

'gemini':{
name:'Gemini',
style:'适合多模态和创新任务',
format:'提供多角度方案'
},

'midjourney':{
name:'Midjourney',
style:'图像生成专业描述',
format:'英文视觉关键词'
},

'kling':{
name:'可灵',
style:'视频生成',
format:'包含镜头、动作、画面描述'
}

};


return adapters[model] || {
name:model,
style:'通用AI助手',
format:'结构化输出'
};

}