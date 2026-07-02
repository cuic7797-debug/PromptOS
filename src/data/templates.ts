import type { PromptTemplate } from '../types';

export const TEMPLATE_CATEGORIES = [
  '全部', '电商', '短视频', '小红书', 'TikTok', 'Midjourney', 'Stable Diffusion',
  'GPT', 'Claude', 'Gemini', 'DeepSeek', 'Kimi', '豆包', '可灵', '即梦',
  '办公', '学习', '运营', 'SEO', '营销', '代码', '写作'
];

export const TEMPLATES: PromptTemplate[] = [
  {
    id: 'ecom-1', title: '亚马逊产品标题优化', description: '生成高转化率的亚马逊产品标题',
    category: '电商', tags: ['亚马逊', '标题', 'SEO'], variables: ['product_name', 'selling_points', 'keywords', 'target_audience'],
    aiModels: ['gpt-4', 'claude', 'deepseek'], isHot: true, usage: 1250,
    content: `请为以下产品生成5个亚马逊产品标题：

产品信息：
- 产品名称：{product_name}
- 核心卖点：{selling_points}
- 目标关键词：{keywords}
- 目标受众：{target_audience}

要求：
1. 标题长度控制在80-200字符
2. 包含核心关键词，自然融入
3. 突出核心卖点和差异化优势
4. 符合亚马逊标题规范
5. 每个标题侧重不同角度`
  },
  {
    id: 'ecom-2', title: '电商产品详情页文案', description: '生成高转化的产品详情页文案',
    category: '电商', tags: ['详情页', '转化', '文案'], variables: ['product_name', 'platform', 'audience', 'price_range', 'style', 'word_count'],
    aiModels: ['gpt-4', 'claude', 'kimi'], isHot: true, usage: 980,
    content: `请为以下产品撰写电商详情页文案：

产品：{product_name}
目标平台：{platform}
目标人群：{audience}
价格区间：{price_range}

结构要求：
1. 首屏卖点（3-5个核心卖点）
2. 痛点共鸣
3. 解决方案
4. 场景展示
5. 产品参数
6. 信任背书
7. 行动号召

风格：{style}
字数：{word_count}`
  },
  {
    id: 'ecom-3', title: '电商直播话术脚本', description: '生成完整的直播带货话术脚本',
    category: '电商', tags: ['直播', '话术', '带货'], variables: ['host_style', 'product', 'duration', 'target_sales', 'discount'],
    aiModels: ['gpt-4', 'claude', 'doubao'], usage: 756,
    content: `请为以下直播场景生成完整话术脚本：

主播信息：
- 主播风格：{host_style}
- 产品：{product}
- 直播时长：{duration}
- 目标销量：{target_sales}
- 优惠力度：{discount}

脚本结构：
1. 开场暖场（3分钟）
2. 产品引入（5分钟）
3. 产品展示（10分钟）
4. 价格揭晓（3分钟）
5. 促单逼单（8分钟）
6. 转场过渡（1分钟）

要求：
- 口语化、有节奏感
- 每段标注预计时长
- 包含至少5次互动话术
- 包含3个促单话术`
  },
  {
    id: 'video-1', title: '抖音短视频脚本', description: '生成抖音爆款短视频脚本',
    category: '短视频', tags: ['抖音', '脚本', '爆款'], variables: ['topic', 'duration', 'style', 'audience'],
    aiModels: ['gpt-4', 'claude', 'doubao', 'kimi'], isHot: true, usage: 2340,
    content: `请为以下主题生成抖音短视频脚本：

主题：{topic}
时长：{duration}秒
风格：{style}
目标受众：{audience}

脚本结构：
1. 黄金3秒（强钩子）
2. 内容主体（信息密度高，节奏快）
3. 高潮/反转
4. 行动号召

要求：
- 每句标注画面描述和情绪提示
- 包含至少3个情绪起伏点
- 结尾必须引导互动
- 适合口播或剧情两种形式`
  },
  {
    id: 'video-2', title: 'B站分镜脚本', description: '生成B站视频分镜脚本',
    category: '短视频', tags: ['B站', '分镜', '脚本'], variables: ['topic', 'duration', 'style', 'persona'],
    aiModels: ['gpt-4', 'claude', 'kimi'], usage: 567,
    content: `请为以下B站视频生成分镜脚本：

视频主题：{topic}
时长：{duration}分钟
风格：{style}
UP主人设：{persona}

分镜格式：
| 镜号 | 景别 | 画面内容 | 台词/字幕 | BGM/音效 | 时长 |

要求：
1. 开头15秒必须有强吸引力
2. 每30秒设置一个信息密度高点
3. 包含至少3个弹幕点
4. 结尾引导三连
5. 标注需要插入的素材提示`
  },
  {
    id: 'video-3', title: 'TikTok 海外短视频脚本', description: '生成面向海外用户的TikTok脚本',
    category: 'TikTok', tags: ['TikTok', '海外', '英文'], variables: ['topic', 'duration', 'audience', 'tone'],
    aiModels: ['gpt-4', 'claude', 'gemini'], usage: 445,
    content: `Generate a TikTok script for the following topic:

Topic: {topic}
Duration: {duration} seconds
Target audience: {audience}
Tone: {tone}

Structure:
1. Hook (0-3s)
2. Content (3-20s)
3. Twist/CTA (20-30s)

Requirements:
- Native English, culturally appropriate
- Include trending sounds/effects suggestions
- Hashtag strategy (3-5 relevant hashtags)
- Caption text for the video
- Engagement bait`
  },
  {
    id: 'xhs-1', title: '小红书种草文案', description: '生成小红书风格的种草文案',
    category: '小红书', tags: ['小红书', '种草', '文案'], variables: ['product', 'selling_points', 'audience', 'scene'],
    aiModels: ['gpt-4', 'claude', 'kimi', 'doubao'], isHot: true, usage: 3120,
    content: `请为以下产品撰写小红书种草文案：

产品：{product}
卖点：{selling_points}
目标人群：{audience}
场景：{scene}

要求：
1. 标题：必须包含emoji，制造好奇或共鸣
2. 开头：个人真实体验引入
3. 正文：分段清晰，大量使用emoji
4. 结尾：互动引导
5. 标签：10-15个精准标签

字数：300-500字`
  },
  {
    id: 'xhs-2', title: '小红书图文笔记排版', description: '生成小红书图文笔记的完整排版方案',
    category: '小红书', tags: ['小红书', '图文', '排版'], variables: ['topic', 'type', 'audience'],
    aiModels: ['gpt-4', 'claude', 'kimi'], usage: 890,
    content: `请为以下主题设计小红书图文笔记方案：

主题：{topic}
类型：{type}
目标人群：{audience}

方案要求：
1. 封面设计：标题文案、配色建议、构图建议
2. 内页规划（6-9张）：每张图的内容规划
3. 正文文案：配合图片的文案分段
4. 发布策略：最佳发布时间、标签组合建议`
  },
  {
    id: 'mj-1', title: 'Midjourney 摄影提示词', description: '生成专业的Midjourney摄影风格提示词',
    category: 'Midjourney', tags: ['Midjourney', '摄影', '提示词'], variables: ['subject', 'style', 'scene', 'mood'],
    aiModels: ['midjourney'], isHot: true, usage: 1890,
    content: `请为以下场景生成Midjourney提示词：

主题：{subject}
风格：{style}
场景：{scene}
情绪：{mood}

要求生成：
1. 主提示词（英文，详细描述）
2. 参数设置（--ar, --v, --style, --q, --s）
3. 3个变体提示词
4. 负面提示词（Negative Prompt）

格式：
Prompt: [英文主提示词]
Parameters: [参数]
Variations:
- V1: [变体1]
- V2: [变体2]
- V3: [变体3]
Negative: [负面提示词]`
  },
  {
    id: 'mj-2', title: 'Midjourney 产品设计图', description: '生成产品概念设计图的Midjourney提示词',
    category: 'Midjourney', tags: ['Midjourney', '产品', '设计'], variables: ['product_type', 'design_style', 'material', 'usage_scene'],
    aiModels: ['midjourney'], usage: 678,
    content: `请为以下产品生成Midjourney概念设计提示词：

产品类型：{product_type}
设计风格：{design_style}
材质：{material}
使用场景：{usage_scene}

要求：
1. 产品渲染级质量描述
2. 专业摄影/工作室灯光描述
3. 背景处理建议
4. 多角度提示词
5. 参数推荐`
  },
  {
    id: 'sd-1', title: 'Stable Diffusion 写实人像', description: '生成Stable Diffusion写实人像提示词',
    category: 'Stable Diffusion', tags: ['Stable Diffusion', '人像', '写实'], variables: ['character_desc', 'scene', 'art_style', 'quality'],
    aiModels: ['stable-diffusion'], usage: 534,
    content: `请为以下需求生成Stable Diffusion提示词：

人物描述：{character_desc}
场景：{scene}
风格：{art_style}
画质要求：{quality}

要求：
1. 正向提示词（英文）
2. 反向提示词（英文）
3. 推荐LoRA模型
4. 采样器/步数/CFG推荐
5. 3个不同风格的变体`
  },
  {
    id: 'code-1', title: 'Python代码生成与优化', description: '生成Python代码，包含注释、错误处理',
    category: '代码', tags: ['Python', '代码', '开发'], variables: ['requirement', 'input_format', 'output_requirement', 'constraints'],
    aiModels: ['gpt-4', 'claude', 'deepseek', 'github-copilot'], isHot: true, usage: 1567,
    content: `请为以下需求编写Python代码：

需求：{requirement}
输入数据格式：{input_format}
输出要求：{output_requirement}
技术约束：{constraints}

要求：
1. 使用Python 3.9+语法
2. 包含完整的类型提示
3. 详细的docstring文档
4. 错误处理
5. 单元测试示例
6. 时间/空间复杂度分析
7. 代码注释说明关键逻辑
8. 如果涉及算法，说明算法选择理由`
  },
  {
    id: 'code-2', title: 'SQL查询优化', description: '优化SQL查询性能，包含索引建议',
    category: '代码', tags: ['SQL', '优化', '数据库'], variables: ['original_sql', 'db_type', 'schema_info', 'data_volume', 'query_frequency'],
    aiModels: ['gpt-4', 'claude', 'deepseek'], usage: 890,
    content: `请优化以下SQL查询：

原始SQL：
{original_sql}

数据库类型：{db_type}
表结构信息：{schema_info}
数据量：{data_volume}
查询频率：{query_frequency}

要求：
1. 分析原始SQL的性能瓶颈
2. 提供优化后的SQL（多种方案对比）
3. 索引设计建议
4. 执行计划分析
5. 如果适用，提供分区/分表建议
6. 预估性能提升幅度`
  },
  {
    id: 'office-1', title: '商务邮件撰写', description: '生成专业商务邮件',
    category: '办公', tags: ['邮件', '商务', '办公'], variables: ['email_type', 'recipient', 'sender_role', 'main_point', 'tone'],
    aiModels: ['gpt-4', 'claude', 'kimi'], usage: 1234,
    content: `请撰写以下商务邮件：

邮件类型：{email_type}
收件人：{recipient}
发件人身份：{sender_role}
核心诉求：{main_point}
语气：{tone}

要求：
1. 专业的邮件主题行
2. 恰当的称呼和开头
3. 正文：逻辑清晰
4. 明确的行动号召
5. 专业的结尾和签名
6. 提供中英文双语版本`
  },
  {
    id: 'office-2', title: 'PPT大纲生成', description: '生成完整的PPT大纲',
    category: '办公', tags: ['PPT', '大纲', '演示'], variables: ['topic', 'page_count', 'audience', 'purpose', 'style'],
    aiModels: ['gpt-4', 'claude', 'kimi'], usage: 1567,
    content: `请为以下主题生成PPT大纲：

主题：{topic}
页数：{page_count}
受众：{audience}
目的：{purpose}
风格：{style}

要求：
1. 封面页：标题、副标题、视觉建议
2. 目录页：逻辑框架
3. 内容页：核心论点、数据支撑、视觉设计建议
4. 过渡页：章节衔接
5. 结尾页：总结 + 行动号召

额外要求：
- 标注每页建议的演讲时长
- 提供演讲者备注
- 推荐配色方案`
  },
  {
    id: 'seo-1', title: 'SEO文章大纲', description: '生成SEO友好的文章大纲',
    category: 'SEO', tags: ['SEO', '文章', '大纲'], variables: ['topic', 'target_keywords', 'article_type', 'word_count', 'audience'],
    aiModels: ['gpt-4', 'claude', 'deepseek'], isHot: true, usage: 2134,
    content: `请为以下主题生成SEO文章大纲：

主题：{topic}
目标关键词：{target_keywords}
文章类型：{article_type}
目标字数：{word_count}
目标受众：{audience}

要求：
1. 标题优化（含主关键词）
2. H1标签
3. H2标签（含长尾关键词）
4. H3标签（含相关关键词）
5. 每段内容要点
6. 内部链接建议
7. 外部链接建议
8. 图片/图表建议
9. FAQ部分
10. 元描述`
  },
  {
    id: 'seo-2', title: '关键词研究与布局', description: '生成关键词研究方案',
    category: 'SEO', tags: ['SEO', '关键词', '研究'], variables: ['business', 'market', 'competitors', 'current_rankings'],
    aiModels: ['gpt-4', 'claude', 'deepseek'], usage: 890,
    content: `请为以下业务进行关键词研究：

业务/产品：{business}
目标市场：{market}
竞争对手：{competitors}
现有排名：{current_rankings}

要求输出：
1. 核心关键词（5-10个，高搜索量）
2. 长尾关键词（20-30个，低竞争高转化）
3. LSI关键词（30-50个）
4. 关键词布局策略
5. 内容日历建议`
  },
  {
    id: 'marketing-1', title: '品牌故事文案', description: '生成打动人心的品牌故事',
    category: '营销', tags: ['品牌', '故事', '文案'], variables: ['brand_name', 'product', 'founder_background', 'philosophy', 'audience', 'style'],
    aiModels: ['gpt-4', 'claude', 'kimi'], usage: 678,
    content: `请为以下品牌撰写品牌故事：

品牌名称：{brand_name}
产品/服务：{product}
创始人背景：{founder_background}
品牌理念：{philosophy}
目标受众：{audience}

要求：
1. 创始人故事
2. 品牌诞生契机
3. 品牌使命
4. 品牌愿景
5. 品牌价值观
6. 用户证言
7. 品牌承诺

风格：{style}`
  },
  {
    id: 'marketing-2', title: '竞品分析报告', description: '生成结构化的竞品分析报告',
    category: '营销', tags: ['竞品', '分析', '报告'], variables: ['my_product', 'competitors', 'dimensions', 'purpose'],
    aiModels: ['gpt-4', 'claude', 'deepseek', 'kimi'], usage: 445,
    content: `请为以下产品生成竞品分析报告：

我方产品：{my_product}
主要竞品：{competitors}
分析维度：{dimensions}
报告目的：{purpose}

报告结构：
1. 执行摘要
2. 市场概览
3. 竞品画像
4. 功能对比矩阵
5. 定价策略分析
6. 用户体验对比
7. 技术架构对比
8. 营销策略分析
9. SWOT分析
10. 战略建议

要求：数据驱动，客观中立，可执行的建议`
  },
  {
    id: 'learn-1', title: '学习计划制定', description: '生成个性化的学习计划',
    category: '学习', tags: ['学习', '计划', '效率'], variables: ['goal', 'current_level', 'available_time', 'duration', 'learning_style'],
    aiModels: ['gpt-4', 'claude', 'kimi', 'deepseek'], usage: 1234,
    content: `请为以下学习目标制定详细计划：

学习目标：{goal}
当前水平：{current_level}
可用时间：{available_time}
时间周期：{duration}
偏好方式：{learning_style}

要求：
1. 阶段划分（3-5个阶段）
2. 每阶段内容：学习目标、资源、时间安排、实践任务、检验标准
3. 资源清单
4. 避坑指南
5. 激励系统
6. 应急方案`
  },
  {
    id: 'ops-1', title: '用户调研问卷设计', description: '生成专业的用户调研问卷',
    category: '运营', tags: ['运营', '调研', '问卷'], variables: ['research_goal', 'target_users', 'method', 'sample_size'],
    aiModels: ['gpt-4', 'claude', 'kimi'], usage: 556,
    content: `请为以下调研目标设计问卷：

调研目标：{research_goal}
目标用户：{target_users}
调研方式：{method}
预计样本量：{sample_size}

要求：
1. 问卷结构：筛选题、开场白、主体问题、结束语
2. 题型设计：单选、多选、量表、排序、开放题
3. 逻辑设计：跳转逻辑、必答题标注
4. 数据分析建议：关键指标、交叉分析、统计方法`
  },
  {
    id: 'write-1', title: '公众号长文撰写', description: '生成公众号风格的深度长文',
    category: '写作', tags: ['公众号', '长文', '写作'], variables: ['topic', 'audience', 'type', 'word_count'],
    aiModels: ['gpt-4', 'claude', 'kimi', 'deepseek'], usage: 1890,
    content: `请为以下主题撰写公众号深度长文：

主题：{topic}
目标受众：{audience}
文章类型：{type}
字数要求：{word_count}

要求：
1. 标题（5个备选）
2. 开头（3种开头方式）
3. 正文结构：案例支撑、金句设计、情绪起伏
4. 结尾：总结升华、行动号召、开放式结尾
5. 排版建议
6. 传播策略`
  },
  {
    id: 'write-2', title: '朋友圈文案生成', description: '生成适合朋友圈的短文案',
    category: '写作', tags: ['朋友圈', '文案', '社交'], variables: ['scene', 'purpose', 'persona', 'image_desc'],
    aiModels: ['gpt-4', 'claude', 'doubao', 'kimi'], usage: 1234,
    content: `请为以下场景生成朋友圈文案：

场景：{scene}
目的：{purpose}
人设：{persona}
配图：{image_desc}

要求生成5个版本：
1. 专业版
2. 生活版
3. 幽默版
4. 文艺版
5. 极简版

每个版本包含：文案内容、建议配图风格、建议发布时间、互动预期`
  },
  {
    id: 'ecom-4', title: '电商客服话术', description: '生成专业电商客服话术',
    category: '电商', tags: ['客服', '话术', '电商'], variables: ['shop_type', 'category', 'scenarios'],
    aiModels: ['gpt-4', 'claude', 'doubao'], usage: 445,
    content: `请为以下场景生成电商客服话术：

店铺类型：{shop_type}
产品品类：{category}
常见场景：{scenarios}

要求：
1. 售前咨询话术
2. 售中跟进话术
3. 售后处理话术
4. 每个场景提供3种话术版本
5. 包含安抚情绪和转化促单的话术
6. 标注禁用词和敏感词`
  },
  {
    id: 'video-4', title: '视频剪辑指令', description: '生成视频剪辑的详细指令',
    category: '短视频', tags: ['剪辑', '视频', '指令'], variables: ['video_type', 'duration', 'style', 'materials'],
    aiModels: ['gpt-4', 'claude', 'kimi'], usage: 334,
    content: `请为以下视频生成剪辑指令：

视频类型：{video_type}
时长：{duration}
风格：{style}
素材清单：{materials}

要求：
1. 时间轴脚本（精确到秒）
2. 每个片段的画面、转场、BGM、字幕、特效
3. 节奏设计
4. 音频设计
5. 输出规格`
  },
  {
    id: 'mj-3', title: 'Midjourney Logo设计', description: '生成品牌Logo的Midjourney提示词',
    category: 'Midjourney', tags: ['Midjourney', 'Logo', '品牌'], variables: ['brand_name', 'industry', 'style', 'colors'],
    aiModels: ['midjourney'], usage: 445,
    content: `请为以下品牌生成Midjourney Logo设计提示词：

品牌名称：{brand_name}
行业：{industry}
风格偏好：{style}
色彩偏好：{colors}

要求：
1. 主Logo提示词
2. 3个变体方向
3. 背景处理建议
4. 应用场景提示词
5. 参数设置`
  },
  {
    id: 'code-3', title: '前端组件开发', description: '生成React/Vue组件代码',
    category: '代码', tags: ['前端', '组件', 'React'], variables: ['component_name', 'framework', 'description', 'design'],
    aiModels: ['gpt-4', 'claude', 'github-copilot', 'cursor'], usage: 1234,
    content: `请开发以下前端组件：

组件名称：{component_name}
框架：{framework}
功能描述：{description}
设计稿：{design}

要求：
1. 完整组件代码（含TypeScript类型）
2. Props接口定义
3. 状态管理
4. 样式方案
5. 交互逻辑
6. 可访问性
7. 单元测试
8. Storybook文档
9. 使用示例`
  },
  {
    id: 'office-3', title: '会议纪要生成', description: '从会议记录生成结构化纪要',
    category: '办公', tags: ['会议', '纪要', '办公'], variables: ['meeting_notes', 'topic', 'attendees', 'time'],
    aiModels: ['gpt-4', 'claude', 'kimi'], usage: 890,
    content: `请根据以下会议记录生成结构化纪要：

会议记录：
{meeting_notes}

会议信息：
- 主题：{topic}
- 时间：{time}
- 参会人：{attendees}

要求：
1. 会议基本信息
2. 核心讨论点
3. 决议事项（责任人、Deadline）
4. 待办事项（优先级排序）
5. 风险与问题
6. 资源需求
7. 下次会议安排
8. 附件清单`
  },
  {
    id: 'marketing-3', title: '社交媒体内容日历', description: '生成一个月的社交媒体内容规划',
    category: '营销', tags: ['营销', '日历', '内容'], variables: ['platform', 'positioning', 'audience', 'themes', 'frequency'],
    aiModels: ['gpt-4', 'claude', 'kimi', 'doubao'], usage: 556,
    content: `请为以下账号生成月度内容日历：

平台：{platform}
账号定位：{positioning}
粉丝画像：{audience}
内容主题：{themes}
发布频率：{frequency}

要求：
1. 30天内容规划（表格形式）
2. 每天包含：主题、形式、标题、关键词、发布时间、互动设计
3. 热点日历
4. 内容比例
5. 数据追踪指标`
  },
  {
    id: 'learn-2', title: '知识卡片生成', description: '将复杂知识生成易读的知识卡片',
    category: '学习', tags: ['学习', '知识', '卡片'], variables: ['topic', 'content', 'audience', 'card_count'],
    aiModels: ['gpt-4', 'claude', 'kimi'], usage: 445,
    content: `请将以下知识生成知识卡片：

知识主题：{topic}
知识内容：{content}
目标受众：{audience}
卡片数量：{card_count}

要求：
1. 每张卡片包含：核心概念、详细解释、记忆口诀、应用场景、常见误区、关联知识
2. 卡片之间逻辑递进
3. 适合Anki/Quizlet导入
4. 视觉设计建议`
  },
  {
    id: 'ops-2', title: '活动策划方案', description: '生成完整的线上线下活动策划方案',
    category: '运营', tags: ['运营', '活动', '策划'], variables: ['activity_type', 'goal', 'budget', 'time', 'audience'],
    aiModels: ['gpt-4', 'claude', 'kimi'], usage: 667,
    content: `请为以下活动生成策划方案：

活动类型：{activity_type}
目标：{goal}
预算：{budget}
时间：{time}
目标人群：{audience}

方案结构：
1. 活动概述
2. 活动流程（时间线、环节设计、人员分工）
3. 预算分配
4. 推广方案
5. 风险预案
6. 数据指标
7. 执行checklist
8. 复盘模板`
  },
  {
    id: 'write-3', title: '短视频口播稿', description: '生成适合口播的短视频文案',
    category: '写作', tags: ['口播', '短视频', '文案'], variables: ['topic', 'duration', 'style', 'persona'],
    aiModels: ['gpt-4', 'claude', 'doubao', 'kimi'], usage: 1234,
    content: `请为以下主题生成口播稿：

主题：{topic}
时长：{duration}秒
风格：{style}
人设：{persona}

要求：
1. 口语化表达
2. 节奏设计（停顿、重音、语速变化标注）
3. 情绪曲线
4. 互动设计（3-5个引导互动的点）
5. 记忆点（1-2个金句/梗）
6. 画面配合建议
7. BGM建议`
  },
  {
    id: 'seo-3', title: '网站SEO诊断', description: '生成网站SEO诊断报告',
    category: 'SEO', tags: ['SEO', '诊断', '网站'], variables: ['website', 'industry', 'current_traffic', 'issues'],
    aiModels: ['gpt-4', 'claude', 'deepseek'], usage: 334,
    content: `请为以下网站生成SEO诊断报告：

网站：{website}
行业：{industry}
当前流量：{current_traffic}
主要问题：{issues}

报告结构：
1. 技术SEO诊断（速度、移动适配、索引、结构化数据）
2. 内容SEO诊断（关键词、质量、更新、重复内容）
3. 外链诊断（数量、质量、锚文本、 toxic links）
4. 用户体验诊断（跳出率、停留时间、转化路径）
5. 优先级修复清单（按影响排序）
6. 预期效果和时间线`
  },
  {
    id: 'ecom-5', title: '电商数据分析报告', description: '生成电商数据分析报告',
    category: '电商', tags: ['电商', '数据', '分析'], variables: ['period', 'platform', 'core_data', 'comparison'],
    aiModels: ['gpt-4', 'claude', 'deepseek'], usage: 445,
    content: `请为以下电商数据生成分析报告：

数据周期：{period}
平台：{platform}
核心数据：{core_data}
对比维度：{comparison}

报告结构：
1. 数据概览
2. 流量分析（来源、质量、趋势）
3. 转化分析（漏斗、趋势、异常）
4. 客单价分析（趋势、关联、敏感度）
5. 商品分析（畅销/滞销、品类、新品）
6. 用户分析（新老客、复购、画像）
7. 问题诊断与优化建议
8. 下阶段目标与策略`
  },
  {
    id: 'code-4', title: 'API接口设计文档', description: '生成RESTful API设计文档',
    category: '代码', tags: ['API', '接口', '设计'], variables: ['system_name', 'modules', 'tech_stack', 'auth'],
    aiModels: ['gpt-4', 'claude', 'deepseek', 'github-copilot'], usage: 556,
    content: `请为以下系统生成API设计文档：

系统名称：{system_name}
功能模块：{modules}
技术栈：{tech_stack}
认证方式：{auth}

要求：
1. 接口清单（按模块分类）
2. 每个接口：路径、方法、描述、参数、响应、状态码、示例
3. 数据模型定义（JSON Schema）
4. 分页规范
5. 限流策略
6. 版本管理
7. 接口测试用例`
  },
  {
    id: 'office-4', title: '项目进度汇报', description: '生成项目进度汇报PPT/文档',
    category: '办公', tags: ['项目', '汇报', '进度'], variables: ['project_name', 'period', 'current_phase', 'team'],
    aiModels: ['gpt-4', 'claude', 'kimi'], usage: 667,
    content: `请为以下项目生成进度汇报：

项目名称：{project_name}
汇报周期：{period}
当前阶段：{current_phase}
团队成员：{team}

汇报结构：
1. 项目概览
2. 本周期完成工作
3. 里程碑达成情况
4. 关键指标
5. 风险与问题
6. 资源使用情况
7. 下周期计划
8. 需要决策/支持的事项
9. 附录`
  },
  {
    id: 'marketing-4', title: 'KOL合作方案', description: '生成KOL/KOC合作方案',
    category: '营销', tags: ['KOL', '合作', '营销'], variables: ['product', 'platform', 'budget', 'audience', 'goal'],
    aiModels: ['gpt-4', 'claude', 'kimi', 'doubao'], usage: 445,
    content: `请为以下产品生成KOL合作方案：

产品：{product}
目标平台：{platform}
预算：{budget}
目标人群：{audience}
合作目标：{goal}

方案结构：
1. KOL筛选标准（粉丝量级、画像匹配、内容质量、报价）
2. 合作模式设计（纯佣/坑位费+佣金/置换/年框）
3. 内容规划（每个KOL的Brief、发布节奏、审核流程）
4. 效果评估（KPI、数据追踪、复盘模板）
5. 风险管控（舆情/违约/效果不达标）`
  },
  {
    id: 'learn-3', title: '论文大纲生成', description: '生成学术论文大纲',
    category: '学习', tags: ['论文', '学术', '大纲'], variables: ['title', 'field', 'method', 'word_count'],
    aiModels: ['gpt-4', 'claude', 'deepseek', 'kimi'], usage: 890,
    content: `请为以下论文主题生成详细大纲：

论文题目：{title}
学科领域：{field}
研究方法：{method}
字数要求：{word_count}

大纲结构：
1. 摘要（中英文）
2. 引言（背景、问题、意义、结构）
3. 文献综述（现状、空白、定位）
4. 研究方法（理论、数据、分析）
5. 研究结果
6. 结论（发现、贡献、局限、方向）
7. 参考文献
8. 附录`
  },
  {
    id: 'ops-3', title: '用户增长方案', description: '生成用户增长方案（AARRR模型）',
    category: '运营', tags: ['增长', '用户', '运营'], variables: ['product', 'stage', 'goal', 'budget', 'period'],
    aiModels: ['gpt-4', 'claude', 'deepseek', 'kimi'], usage: 778,
    content: `请为以下产品生成用户增长方案：

产品：{product}
当前阶段：{stage}
目标：{goal}
预算：{budget}
时间周期：{period}

方案结构（AARRR模型）：
1. 获客（渠道矩阵、预算分配、CAC目标）
2. 激活（onboarding、Aha Moment、首单激励）
3. 留存（分层运营、召回机制、会员体系）
4. 变现（定价、转化路径、Upsell）
5. 推荐（裂变机制、邀请奖励、K-factor）
6. 数据指标体系
7. 实验计划（A/B测试清单）`
  },
  {
    id: 'write-4', title: '产品需求文档(PRD)', description: '生成完整的产品需求文档',
    category: '写作', tags: ['PRD', '产品', '需求'], variables: ['feature_name', 'background', 'users', 'priority'],
    aiModels: ['gpt-4', 'claude', 'kimi', 'deepseek'], usage: 1234,
    content: `请为以下功能生成PRD文档：

功能名称：{feature_name}
产品背景：{background}
目标用户：{users}
优先级：{priority}

PRD结构：
1. 文档信息
2. 背景与目标
3. 用户故事（画像、场景、旅程）
4. 功能需求（清单、描述、流程、原型、异常）
5. 非功能需求（性能、安全、兼容）
6. 数据需求（埋点、指标、报表）
7. 验收标准
8. 风险与依赖
9. 上线计划`
  },
  {
    id: 'video-5', title: 'YouTube视频脚本', description: '生成YouTube长视频脚本',
    category: '短视频', tags: ['YouTube', '脚本', '视频'], variables: ['topic', 'duration', 'channel_positioning', 'audience'],
    aiModels: ['gpt-4', 'claude', 'gemini'], usage: 556,
    content: `请为以下主题生成YouTube视频脚本：

主题：{topic}
时长：{duration}分钟
频道定位：{channel_positioning}
受众：{audience}

要求：
1. SEO标题（5个备选）
2. 视频描述（含时间戳、链接、标签）
3. 缩略图建议
4. 脚本结构：Hook、内容、B-Roll、CTA
5. 标签策略
6. 评论区运营
7. 播放列表建议`
  },
  {
    id: 'mj-4', title: 'Midjourney UI设计', description: '生成App/Web UI设计的Midjourney提示词',
    category: 'Midjourney', tags: ['Midjourney', 'UI', '设计'], variables: ['design_type', 'style', 'color_scheme', 'usage'],
    aiModels: ['midjourney'], usage: 445,
    content: `请为以下设计需求生成Midjourney提示词：

设计类型：{design_type}
风格：{style}
配色：{color_scheme}
用途：{usage}

要求：
1. 主界面提示词（高保真）
2. 3个变体（不同布局/风格）
3. 组件级提示词
4. 参数设置
5. 设计系统建议`
  },
  {
    id: 'code-5', title: '算法题解', description: '生成算法题目的完整题解',
    category: '代码', tags: ['算法', '题解', '代码'], variables: ['problem', 'difficulty', 'algorithm_type'],
    aiModels: ['gpt-4', 'claude', 'deepseek', 'github-copilot'], usage: 1567,
    content: `请为以下算法题生成完整题解：

题目：{problem}
难度：{difficulty}
算法类型：{algorithm_type}

要求：
1. 题目理解
2. 解题思路（多种解法对比）
3. 最优解法详细推导
4. 代码实现（含注释）
5. 复杂度分析
6. 边界情况处理
7. 类似题目推荐
8. 实际应用场景`
  },
  {
    id: 'office-5', title: '年终总结报告', description: '生成个人/团队年终总结',
    category: '办公', tags: ['年终', '总结', '报告'], variables: ['subject', 'role', 'core_work', 'annual_goals', 'style'],
    aiModels: ['gpt-4', 'claude', 'kimi'], usage: 1234,
    content: `请为以下场景生成年终总结：

总结对象：{subject}
岗位/职责：{role}
核心工作：{core_work}
年度目标：{annual_goals}

结构：
1. 开篇（年度主题词）
2. 年度回顾（成果、项目、能力提升）
3. 问题反思（未完成、失误、短板）
4. 数据亮点（图表化呈现）
5. 来年规划（SMART目标、方向、资源）
6. 感谢与展望

风格：{style}`
  },
  {
    id: 'marketing-5', title: '裂变活动方案', description: '生成微信/社群裂变活动方案',
    category: '营销', tags: ['裂变', '活动', '增长'], variables: ['goal', 'audience', 'platform', 'budget'],
    aiModels: ['gpt-4', 'claude', 'kimi', 'doubao'], usage: 667,
    content: `请为以下场景生成裂变活动方案：

活动目标：{goal}
目标人群：{audience}
裂变平台：{platform}
预算：{budget}

方案结构：
1. 活动机制（裂变路径、奖励、门槛）
2. 海报设计Brief
3. 话术体系（邀请、客服、社群、朋友圈）
4. 技术实现（工具、追踪、防刷）
5. 风险预案（羊毛党、投诉、封号）
6. 效果预估（参与率、裂变系数、ROI）`
  },
  {
    id: 'learn-4', title: '面试准备指南', description: '生成针对特定岗位的面试准备指南',
    category: '学习', tags: ['面试', '求职', '准备'], variables: ['position', 'company_type', 'experience'],
    aiModels: ['gpt-4', 'claude', 'kimi', 'deepseek'], usage: 1567,
    content: `请为以下岗位生成面试准备指南：

岗位：{position}
公司类型：{company_type}
经验要求：{experience}

指南内容：
1. 岗位分析（职责、能力、文化匹配）
2. 自我介绍模板（1/3/5分钟）
3. 高频问题库（20-30题，含回答模板）
4. 项目经历准备（STAR格式）
5. 技术/业务准备清单
6. 着装与礼仪
7. 薪资谈判策略
8. 模拟面试脚本`
  },
  {
    id: 'ops-4', title: '社群运营SOP', description: '生成社群运营标准操作流程',
    category: '运营', tags: ['社群', 'SOP', '运营'], variables: ['community_type', 'goal', 'size', 'period'],
    aiModels: ['gpt-4', 'claude', 'kimi', 'doubao'], usage: 445,
    content: `请为以下社群生成运营SOP：

社群类型：{community_type}
目标：{goal}
规模：{size}
周期：{period}

SOP结构：
1. 社群定位与规则
2. 用户生命周期运营（入群、破冰、活跃、唤醒、挽回）
3. 内容日历（30天）
4. 转化路径设计（信任、需求、种草、成交、复购）
5. 数据监控（活跃度、转化率、流失率）
6. 危机处理（舆情、投诉、广告党）`
  },
  {
    id: 'write-5', title: '小说情节设计', description: '生成小说情节大纲',
    category: '写作', tags: ['小说', '情节', '创作'], variables: ['genre', 'theme', 'word_count', 'style'],
    aiModels: ['gpt-4', 'claude', 'kimi'], usage: 890,
    content: `请为以下设定生成小说情节大纲：

类型：{genre}
主题：{theme}
字数：{word_count}
风格：{style}

大纲结构：
1. 世界观设定
2. 人物设定（主角、反派、配角、关系图谱）
3. 情节结构（三幕式/英雄之旅）
4. 章节大纲（每章：场景、冲突、情绪、钩子）
5. 高潮设计（3个主要高潮点）
6. 结局类型
7. 主题表达
8. 潜在续集线索`
  },
  {
    id: 'seo-4', title: '本地SEO优化', description: '生成本地商家SEO优化方案',
    category: 'SEO', tags: ['SEO', '本地', '商家'], variables: ['business_type', 'service_area', 'competitors'],
    aiModels: ['gpt-4', 'claude', 'deepseek'], usage: 334,
    content: `请为以下商家生成本地SEO方案：

商家类型：{business_type}
服务区域：{service_area}
竞争对手：{competitors}

方案内容：
1. 本地关键词研究
2. Google商家资料优化
3. 百度地图/高德优化
4. 本地引用建设
5. 评价管理策略
6. 本地内容策略
7. 竞品本地SEO分析`
  },
  {
    id: 'ecom-6', title: '跨境电商独立站', description: '生成跨境电商独立站运营方案',
    category: '电商', tags: ['跨境电商', '独立站', '运营'], variables: ['target_market', 'category', 'budget', 'team_size'],
    aiModels: ['gpt-4', 'claude', 'deepseek'], usage: 445,
    content: `请为以下市场生成独立站运营方案：

目标市场：{target_market}
品类：{category}
预算：{budget}
团队规模：{team_size}

方案结构：
1. 选品策略（调研、供应链、差异化）
2. 建站方案（平台、架构、支付、物流）
3. 流量获取（SEO、广告、红人、邮件、联盟）
4. 转化优化（产品页、结账、信任、弃购）
5. 客服与售后（多语言、退换货、纠纷）
6. 合规与税务
7. 数据监控与迭代`
  },
  {
    id: 'code-6', title: '数据库设计文档', description: '生成数据库设计文档',
    category: '代码', tags: ['数据库', '设计', '文档'], variables: ['system_name', 'modules', 'db_type', 'data_volume'],
    aiModels: ['gpt-4', 'claude', 'deepseek', 'github-copilot'], usage: 556,
    content: `请为以下系统生成数据库设计文档：

系统名称：{system_name}
功能模块：{modules}
数据库类型：{db_type}
数据量预估：{data_volume}

文档结构：
1. 需求分析（实体、关系、读写比例）
2. 概念模型（ER图描述）
3. 逻辑模型（表结构、字段、约束、索引）
4. 物理设计（引擎、字符集、分区、读写分离）
5. SQL建表语句
6. 数据字典
7. 性能优化建议
8. 备份策略`
  },
  {
    id: 'office-6', title: '合同审查清单', description: '生成合同审查要点清单',
    category: '办公', tags: ['合同', '审查', '法务'], variables: ['contract_type', 'party_role', 'amount'],
    aiModels: ['gpt-4', 'claude', 'kimi'], usage: 445,
    content: `请为以下合同类型生成审查清单：

合同类型：{contract_type}
我方角色：{party_role}
金额：{amount}

审查清单：
1. 主体审查（资质、授权、关联方）
2. 商务条款（标的、价格、交付、变更）
3. 权利义务（对等性、合理性）
4. 违约责任（违约金、赔偿、免责）
5. 知识产权（归属、许可、侵权）
6. 保密与竞业
7. 争议解决（仲裁/诉讼/管辖）
8. 其他风险点（续约、单方解除、格式条款）
9. 修改建议（逐条）`
  },
  {
    id: 'marketing-6', title: '品牌视觉规范', description: '生成品牌视觉识别系统规范',
    category: '营销', tags: ['品牌', '视觉', 'VI'], variables: ['brand_name', 'industry', 'positioning', 'audience'],
    aiModels: ['gpt-4', 'claude', 'kimi'], usage: 334,
    content: `请为以下品牌生成视觉规范文档：

品牌名称：{brand_name}
行业：{industry}
定位：{positioning}
目标受众：{audience}

规范内容：
1. 品牌理念（故事、个性、视觉关键词）
2. Logo规范（制图、尺寸、安全空间、禁用）
3. 色彩系统（主色、辅色、功能色、中性色、比例）
4. 字体规范（中文、英文、字号阶梯）
5. 图形元素（辅助图形、图标、摄影、插画）
6. 应用场景（名片、社交、PPT、包装）
7. 使用禁忌`
  },
  {
    id: 'learn-5', title: '读书笔记模板', description: '生成结构化读书笔记',
    category: '学习', tags: ['读书', '笔记', '学习'], variables: ['book_name', 'author', 'purpose'],
    aiModels: ['gpt-4', 'claude', 'kimi'], usage: 1234,
    content: `请为以下书籍生成读书笔记：

书名：{book_name}
作者：{author}
阅读目的：{purpose}

笔记结构：
1. 书籍信息
2. 核心观点（3-5个）
3. 详细笔记（按章节：要点、金句、思考、关联）
4. 思维导图（文字版）
5. 行动清单
6. 批判性思考
7. 推荐人群
8. 评分与推荐语`
  },
  {
    id: 'ops-5', title: '客服质检标准', description: '生成客服服务质量检查标准',
    category: '运营', tags: ['客服', '质检', '标准'], variables: ['business_type', 'channels', 'goals'],
    aiModels: ['gpt-4', 'claude', 'kimi'], usage: 445,
    content: `请为以下业务生成客服质检标准：

业务类型：{business_type}
服务渠道：{channels}
考核目标：{goals}

质检标准：
1. 服务态度（礼貌、耐心、情绪）
2. 专业能力（产品知识、解决率、响应时间）
3. 沟通技巧（倾听、表达、同理心、主动）
4. 流程规范（标准执行、记录、升级、隐私）
5. 结果导向（满意度、解决率、复购/转化）

评分等级：S/A/B/C/D
奖惩机制与改进计划`
  },
  {
    id: 'write-6', title: '短视频剪辑指令', description: '生成详细的视频剪辑指令',
    category: '写作', tags: ['剪辑', '视频', '指令'], variables: ['video_type', 'duration', 'style', 'materials'],
    aiModels: ['gpt-4', 'claude', 'kimi'], usage: 556,
    content: `请为以下视频生成剪辑指令：

视频类型：{video_type}
时长：{duration}
风格：{style}
素材清单：{materials}

剪辑指令：
1. 时间轴脚本（精确到秒）
2. 每个片段：画面、转场、BGM、字幕、特效、速度
3. 节奏设计（高潮点、留白、加速/减速）
4. 音频设计（BGM、音效、人声处理）
5. 输出规格（分辨率、帧率、格式、码率）`
  },
  {
    id: 'seo-5', title: '内容营销策略', description: '生成完整的内容营销策略',
    category: 'SEO', tags: ['内容', '营销', '策略'], variables: ['business', 'audience', 'platforms', 'goals'],
    aiModels: ['gpt-4', 'claude', 'kimi', 'deepseek'], usage: 667,
    content: `请为以下业务生成内容营销策略：

业务：{business}
目标受众：{audience}
平台：{platforms}
目标：{goals}

策略结构：
1. 内容定位（人设、支柱、调性）
2. 选题策略（来源、库、评估模型）
3. 内容生产（流程、模板、标准）
4. 分发策略（平台适配、时间、跨平台）
5. 用户运营（评论、社群、分层、UGC）
6. 变现路径（广告、带货、知识付费、会员）
7. 数据监控与迭代`
  },
  {
    id: 'ecom-7', title: '私域运营方案', description: '生成私域流量运营方案',
    category: '电商', tags: ['私域', '运营', '流量'], variables: ['business', 'current_traffic', 'goal', 'budget'],
    aiModels: ['gpt-4', 'claude', 'kimi', 'doubao'], usage: 778,
    content: `请为以下业务生成私域运营方案：

业务：{business}
现有流量：{current_traffic}
目标：{goal}
预算：{budget}

方案结构：
1. 私域定位（价值主张、分层、人设）
2. 引流策略（公域引流、诱饵、路径优化）
3. 沉淀策略（企微/个微/社群、欢迎语、标签、画像）
4. 运营策略（内容日历、互动、信任）
5. 转化策略（种草节奏、限时、1v1、团购）
6. 复购与裂变（会员、积分、老带新、口碑）
7. 数据监控（加粉率、活跃率、转化率、复购率）`
  },
  {
    id: 'code-7', title: '系统架构设计', description: '生成系统架构设计文档',
    category: '代码', tags: ['架构', '系统', '设计'], variables: ['system_name', 'business_scene', 'user_scale', 'performance_req'],
    aiModels: ['gpt-4', 'claude', 'deepseek', 'github-copilot'], usage: 445,
    content: `请为以下系统生成架构设计文档：

系统名称：{system_name}
业务场景：{business_scene}
用户规模：{user_scale}
性能要求：{performance_req}

文档结构：
1. 需求分析（功能、非功能、约束）
2. 架构选型（风格、技术栈、选型理由）
3. 系统架构图（整体、模块、通信、数据流）
4. 数据架构（模型、存储、缓存、一致性）
5. 部署架构（环境、容器、CI/CD、监控）
6. 安全架构（认证、加密、防护）
7. 扩展性设计（未来3年规划）`
  },
  {
    id: 'office-7', title: '差旅报销规范', description: '生成公司差旅报销制度',
    category: '办公', tags: ['差旅', '报销', '制度'], variables: ['company_size', 'industry', 'budget_level'],
    aiModels: ['gpt-4', 'claude', 'kimi'], usage: 334,
    content: `请为以下公司生成差旅报销规范：

公司规模：{company_size}
行业：{industry}
预算级别：{budget_level}

规范内容：
1. 适用范围
2. 差旅标准（交通、住宿、餐饮、市内）
3. 报销流程（事前审批、事中管控、事后报销）
4. 单据要求（发票、信息、缺失处理）
5. 特殊情况（超标、紧急、长期、国外）
6. 违规处理
7. 附则`
  },
  {
    id: 'marketing-7', title: '新品上市方案', description: '生成新品上市全案',
    category: '营销', tags: ['新品', '上市', '营销'], variables: ['product', 'market', 'launch_time', 'budget'],
    aiModels: ['gpt-4', 'claude', 'kimi', 'doubao'], usage: 556,
    content: `请为以下新品生成上市方案：

产品：{product}
目标市场：{market}
上市时间：{launch_time}
预算：{budget}

方案结构：
1. 上市策略（定位、人群、卖点、竞争）
2. 预热期（悬念、KOL种草、媒体关系）
3. 发布期（发布会、媒体通稿、社交爆发）
4. 爆发期（广告投放、口碑、促销）
5. 持续期（内容、用户、迭代）
6. 预算分配与ROI预估
7. 风险预案（舆情、供应链、竞品）`
  },
  {
    id: 'learn-6', title: '技能树规划', description: '生成职业技能树',
    category: '学习', tags: ['技能', '学习', '规划'], variables: ['career', 'current_level', 'target_level', 'time_period'],
    aiModels: ['gpt-4', 'claude', 'kimi', 'deepseek'], usage: 1234,
    content: `请为以下职业生成技能树规划：

职业方向：{career}
当前水平：{current_level}
目标水平：{target_level}
时间周期：{time_period}

技能树结构：
1. 基础技能（树根）
2. 核心技能（树干）：每个能力的学习资源、实践项目、掌握标准、时间
3. 进阶技能（树枝）：细分方向、specialization、认证
4. 高阶技能（树叶）：领导力、创新、洞察
5. 学习路径图（时间线）
6. 里程碑与检验
7. 资源清单
8. 避坑指南`
  },
  {
    id: 'ops-6', title: '供应链优化方案', description: '生成供应链优化方案',
    category: '运营', tags: ['供应链', '优化', '运营'], variables: ['business_type', 'pain_points', 'scale', 'goals'],
    aiModels: ['gpt-4', 'claude', 'deepseek', 'kimi'], usage: 334,
    content: `请为以下业务生成供应链优化方案：

业务类型：{business_type}
当前痛点：{pain_points}
规模：{scale}
目标：{goals}

方案结构：
1. 供应链现状分析（流程、数据、瓶颈）
2. 采购优化（供应商、策略、安全库存、SRM）
3. 库存优化（ABC、动态、周转、呆滞）
4. 物流优化（仓网、配送、时效、成本）
5. 数字化建设（ERP/WMS/TMS、数据看板）
6. 绩效指标（KPI体系）
7. 实施路线图`
  },
  {
    id: 'write-7', title: '演讲稿撰写', description: '生成专业演讲稿',
    category: '写作', tags: ['演讲', '稿件', '表达'], variables: ['topic', 'occasion', 'duration', 'audience', 'style'],
    aiModels: ['gpt-4', 'claude', 'kimi'], usage: 890,
    content: `请为以下场景生成演讲稿：

演讲主题：{topic}
场合：{occasion}
时长：{duration}分钟
听众：{audience}
风格：{style}

演讲稿结构：
1. 开场（10%）：抓人注意力、建立连接、预告价值
2. 主体（70%）：3-5个核心论点、逻辑递进、情绪起伏、互动设计
3. 高潮（10%）：情绪峰值、核心金句、行动号召
4. 结尾（10%）：总结升华、情感共鸣、记忆点、感谢

附加：语速标注、PPT配合点、备选开场、应急预案`
  },
  {
    id: 'seo-6', title: '网站迁移方案', description: '生成网站迁移SEO方案',
    category: 'SEO', tags: ['SEO', '迁移', '网站'], variables: ['migration_type', 'current_site', 'target_site', 'traffic'],
    aiModels: ['gpt-4', 'claude', 'deepseek'], usage: 223,
    content: `请为以下迁移生成SEO方案：

迁移类型：{migration_type}
当前网站：{current_site}
目标网站：{target_site}
流量规模：{traffic}

方案结构：
1. 迁移前准备（URL映射、301、备份、审计）
2. 迁移执行（分阶段、301实施、链接更新、站点地图）
3. 迁移后监控（流量、排名、抓取、错误）
4. 风险应对（流量下降、排名恢复、用户沟通）
5. 预期时间线（流量恢复周期）
6. 成功指标定义`
  },
  {
    id: 'ecom-8', title: '直播选品策略', description: '生成直播带货选品方案',
    category: '电商', tags: ['直播', '选品', '策略'], variables: ['host_type', 'fans', 'theme', 'duration'],
    aiModels: ['gpt-4', 'claude', 'doubao', 'kimi'], usage: 667,
    content: `请为以下直播生成选品方案：

主播类型：{host_type}
粉丝画像：{fans}
直播主题：{theme}
时长：{duration}

选品方案：
1. 选品矩阵（引流款、福利款、利润款、形象款、搭配款）
2. 每个产品：信息、卖点、话术、演示、优惠、时长
3. 出场顺序设计（节奏曲线）
4. 价格带分布
5. 库存与备货建议
6. 售后风险预判`
  },
  {
    id: 'code-8', title: 'DevOps流水线设计', description: '生成CI/CD流水线设计',
    category: '代码', tags: ['DevOps', 'CI/CD', '流水线'], variables: ['project_type', 'tech_stack', 'team_size', 'environments'],
    aiModels: ['gpt-4', 'claude', 'deepseek', 'github-copilot'], usage: 445,
    content: `请为以下项目生成DevOps流水线设计：

项目类型：{project_type}
技术栈：{tech_stack}
团队规模：{team_size}
部署环境：{environments}

流水线设计：
1. 代码管理（分支策略、代码审查、提交规范）
2. 构建阶段（依赖、检查、测试、构建产物）
3. 测试阶段（集成、E2E、性能、安全扫描）
4. 部署阶段（环境配置、策略、迁移、回滚）
5. 监控告警（日志、指标、告警、故障响应）
6. 流水线即代码（Pipeline as Code示例）`
  },
  {
    id: 'office-8', title: '会议纪要智能生成', description: '从语音/文字记录生成结构化纪要',
    category: '办公', tags: ['会议', '纪要', '智能'], variables: ['meeting_transcript', 'topic', 'time', 'location', 'attendees', 'recorder'],
    aiModels: ['gpt-4', 'claude', 'kimi', 'deepseek'], usage: 1234,
    content: `请根据以下会议记录生成结构化纪要：

会议记录原文：
{meeting_transcript}

会议信息：
- 主题：{topic}
- 时间：{time}
- 地点：{location}
- 参会人：{attendees}
- 记录人：{recorder}

纪要要求：
1. 会议基本信息
2. 讨论议题（按时间线，背景→讨论→结论）
3. 决议事项（责任人、标准、Deadline）
4. 待办事项（P0/P1/P2排序）
5. 风险与问题
6. 资源需求
7. 下次会议安排
8. 附件清单

额外：区分已确认/待确认、标注冲突点`
  },
  {
    id: 'marketing-8', title: '危机公关预案', description: '生成品牌危机公关预案',
    category: '营销', tags: ['危机', '公关', '预案'], variables: ['brand', 'crisis_type', 'impact_scope'],
    aiModels: ['gpt-4', 'claude', 'kimi'], usage: 334,
    content: `请为以下场景生成危机公关预案：

品牌：{brand}
潜在危机类型：{crisis_type}
影响范围：{impact_scope}

预案结构：
1. 危机分级（一级到四级）
2. 响应流程（监测、研判、策略、执行、监测、复盘）
3. 话术库（道歉、媒体、客服、社交、内部）
4. 媒体策略（主流媒体、KOL、自有渠道、SEO压制）
5. 法律准备（律师函、声明、证据保全）
6. 恢复计划（信任重建、品牌修复）`
  },
  {
    id: 'learn-7', title: '错题本整理', description: '生成结构化错题本条目',
    category: '学习', tags: ['错题', '学习', '整理'], variables: ['question', 'your_answer', 'correct_answer', 'subject'],
    aiModels: ['gpt-4', 'claude', 'kimi', 'deepseek'], usage: 1567,
    content: `请为以下错题生成结构化错题本条目：

题目：{question}
你的答案：{your_answer}
正确答案：{correct_answer}
学科：{subject}

错题本格式：
1. 题目信息（来源、日期、难度、知识点）
2. 错误分析（类型、错因、知识漏洞）
3. 正确解法（详细步骤、关键思路、易错点）
4. 变式练习（3道：同类型、改条件、综合应用）
5. 总结提炼（解题模板、记忆口诀、识别特征）`
  },
  {
    id: 'ops-7', title: '仓库管理优化', description: '生成仓库管理优化方案',
    category: '运营', tags: ['仓库', '管理', '优化'], variables: ['warehouse_type', 'area', 'sku_count', 'daily_orders'],
    aiModels: ['gpt-4', 'claude', 'deepseek', 'kimi'], usage: 223,
    content: `请为以下仓库生成管理优化方案：

仓库类型：{warehouse_type}
面积：{area}
SKU数：{sku_count}
日单量：{daily_orders}

优化方案：
1. 布局优化（区域、货架、动线、热销区）
2. 流程优化（入库、出库、盘点、退货）
3. 系统优化（WMS、条码、RFID、自动化）
4. 人员管理（岗位、绩效、培训、安全）
5. 库存优化（ABC、安全库存、效期、呆滞）
6. 成本分析（优化前后对比）`
  },
  {
    id: 'write-8', title: '产品说明书撰写', description: '生成专业产品说明书',
    category: '写作', tags: ['说明书', '产品', '文档'], variables: ['product_name', 'product_type', 'users'],
    aiModels: ['gpt-4', 'claude', 'kimi'], usage: 445,
    content: `请为以下产品生成说明书：

产品名称：{product_name}
产品类型：{product_type}
目标用户：{users}

说明书结构：
1. 产品概述（名称、场景、功能、规格）
2. 包装清单
3. 安装/组装说明（步骤、工具、注意事项）
4. 使用说明（开机、基本操作、高级功能、故障排除）
5. 维护与保养（清洁、存储、配件更换）
6. 安全警告（禁忌、风险、应急）
7. 售后服务（保修、联系方式、维修网点）
8. 技术参数（完整规格表）
9. 合规认证`
  },
  {
    id: 'seo-7', title: '视频SEO优化', description: '生成视频内容SEO优化方案',
    category: 'SEO', tags: ['SEO', '视频', '优化'], variables: ['topic', 'platform', 'audience'],
    aiModels: ['gpt-4', 'claude', 'kimi', 'doubao'], usage: 556,
    content: `请为以下视频生成SEO优化方案：

视频主题：{topic}
平台：{platform}
目标受众：{audience}

优化方案：
1. 标题优化（主标题、副标题、长度、A/B测试）
2. 描述优化（前150字、时间戳、链接、标签）
3. 标签策略（核心、长尾、品牌、趋势）
4. 缩略图优化（构图、文字、情绪、品牌）
5. 字幕优化（校对、关键词、多语言）
6. 互动优化（置顶评论、互动问题、投票）
7. 播放列表策略
8. 跨平台分发适配`
  },
  {
    id: 'ecom-9', title: '会员体系设计', description: '生成电商/品牌会员体系方案',
    category: '电商', tags: ['会员', '体系', '设计'], variables: ['brand', 'industry', 'user_scale', 'avg_order_value'],
    aiModels: ['gpt-4', 'claude', 'kimi', 'doubao'], usage: 445,
    content: `请为以下品牌生成会员体系方案：

品牌：{brand}
行业：{industry}
用户规模：{user_scale}
客单价：{avg_order_value}

会员体系：
1. 等级设计（3-5级：名称、升级条件、有效期、降级规则）
2. 权益设计（基础、等级、情感、社交）
3. 积分体系（获取、消耗、价值、有效期）
4. 成长体系（任务、成长值、里程碑、排行榜）
5. 运营策略（会员日、专属活动、沉默唤醒、流失挽回）
6. 数据监控（会员数、活跃率、ARPU、复购率）`
  },
  {
    id: 'code-9', title: '安全漏洞修复方案', description: '生成安全漏洞修复方案',
    category: '代码', tags: ['安全', '漏洞', '修复'], variables: ['vulnerability_type', 'affected_system', 'severity'],
    aiModels: ['gpt-4', 'claude', 'deepseek', 'github-copilot'], usage: 334,
    content: `请为以下漏洞生成修复方案：

漏洞类型：{vulnerability_type}
影响系统：{affected_system}
严重程度：{severity}

修复方案：
1. 漏洞分析（原理、影响、利用条件、CVSS）
2. 修复方案（思路、代码、配置、依赖升级）
3. 验证方法（复现测试、修复验证、回归测试、渗透测试）
4. 应急响应（临时缓解、数据排查、用户通知、法律合规）
5. 预防措施（审计、测试、培训、赏金计划）`
  },
  {
    id: 'office-9', title: '团建活动策划', description: '生成团队建设活动策划方案',
    category: '办公', tags: ['团建', '活动', '策划'], variables: ['team_size', 'team_characteristics', 'budget', 'time', 'location'],
    aiModels: ['gpt-4', 'claude', 'kimi'], usage: 556,
    content: `请为以下团队生成团建方案：

团队规模：{team_size}
团队特点：{team_characteristics}
预算：{budget}
时间：{time}
地点：{location}

方案结构：
1. 活动目标
2. 活动主题与形式
3. 详细流程（时间表、破冰、主体、总结）
4. 游戏/活动设计（3-5个：规则、道具、分组、计分、安全）
5. 预算明细
6. 分工安排
7. 应急预案（天气、受伤、冲突、走失）
8. 效果评估`
  },
  {
    id: 'marketing-9', title: '品牌联名方案', description: '生成品牌联名合作方案',
    category: '营销', tags: ['联名', '品牌', '合作'], variables: ['brand_a', 'brand_b', 'goal'],
    aiModels: ['gpt-4', 'claude', 'kimi'], usage: 334,
    content: `请为以下联名生成合作方案：

品牌A：{brand_a}
品牌B：{brand_b}
联名目标：{goal}

方案结构：
1. 合作背景（契合度、人群重叠、互补价值）
2. 合作模式（产品、内容、渠道、技术）
3. 产品方案（设计、限量、定价、包装）
4. 营销方案（预热、发布、持续、预算）
5. 渠道策略（线上、线下、分销）
6. 商务条款（分成、成本、IP、排他、违约）
7. 风险评估与预案`
  },
  {
    id: 'learn-8', title: '思维导图生成', description: '将复杂知识生成结构化思维导图文本',
    category: '学习', tags: ['思维导图', '知识', '结构化'], variables: ['topic', 'depth', 'usage'],
    aiModels: ['gpt-4', 'claude', 'kimi', 'deepseek'], usage: 1234,
    content: `请为以下主题生成思维导图文本（Markdown格式）：

主题：{topic}
深度：{depth}
用途：{usage}

要求：
1. 中心主题明确
2. 主分支（3-7个，MECE原则）
3. 子分支（逐层展开，逻辑递进）
4. 每个节点：关键词、简要说明、关联标记
5. 视觉建议：配色、图标、布局
6. 导出格式（Markdown/XMind/FreeMind）`
  },
  {
    id: 'ops-8', title: '客服排班优化', description: '生成客服团队排班优化方案',
    category: '运营', tags: ['客服', '排班', '优化'], variables: ['business_type', 'service_hours', 'daily_volume', 'team_size'],
    aiModels: ['gpt-4', 'claude', 'kimi'], usage: 334,
    content: `请为以下客服团队生成排班方案：

业务类型：{business_type}
服务时间：{service_hours}
日均咨询量：{daily_volume}
团队规模：{team_size}

排班方案：
1. 人力需求预测（时段分布、咨询类型、响应时效、并发）
2. 班次设计（早/中/晚/夜班、时长、交接班）
3. 人员配置（技能分组、新老搭配、弹性人员）
4. 轮班制度（周期、公平性、偏好、节假日）
5. 应急预案（突发高峰、人员缺勤、系统故障）
6. 绩效与激励（夜班补贴、高峰奖励）
7. 数据监控（接通率、满意度、负荷率）`
  },
  {
    id: 'write-9', title: '新闻稿撰写', description: '生成专业新闻稿',
    category: '写作', tags: ['新闻稿', '媒体', '公关'], variables: ['event', 'publisher', 'audience', 'purpose'],
    aiModels: ['gpt-4', 'claude', 'kimi'], usage: 667,
    content: `请为以下事件生成新闻稿：

事件：{event}
发布方：{publisher}
受众：{audience}
目的：{purpose}

新闻稿结构：
1. 标题（5个备选：新闻点+吸引力）
2. 导语（5W1H，100字内）
3. 正文（倒金字塔、背景、引用、数据、细节）
4. 结尾（公司介绍、联系方式、相关链接）
5. 发布策略（媒体名单、时机、embargo、跟进）
6. 多版本（通稿、社交媒体、内部）`
  },
  {
    id: 'seo-8', title: 'E-E-A-T优化', description: '生成网站E-E-A-T优化方案',
    category: 'SEO', tags: ['SEO', 'E-E-A-T', '信任'], variables: ['website', 'industry', 'content_type'],
    aiModels: ['gpt-4', 'claude', 'deepseek'], usage: 445,
    content: `请为以下网站生成E-E-A-T优化方案：

网站：{website}
行业：{industry}
内容类型：{content_type}

优化方案：
1. Experience（经验：作者资质、第一手经验、UGC、时间戳）
2. Expertise（专业：内容深度、权威引用、更新频率、专业认证）
3. Authoritativeness（权威：品牌背书、专家撰稿、被引用、社交证明）
4. Trustworthiness（信任：安全、联系方式、关于我们、评价、售后）
5. 技术优化（作者Schema、声誉管理、负面信息处理）
6. 监控指标（排名、流量、信任度评分）`
  },
  {
    id: 'ecom-10', title: '跨境电商税务合规', description: '生成跨境电商税务合规指南',
    category: '电商', tags: ['跨境', '税务', '合规'], variables: ['business_model', 'target_markets', 'annual_revenue'],
    aiModels: ['gpt-4', 'claude', 'deepseek'], usage: 223,
    content: `请为以下业务生成税务合规指南：

业务模式：{business_model}
目标市场：{target_markets}
年销售额：{annual_revenue}

合规指南：
1. 增值税（VAT/GST：注册、税率、申报、发票、抵扣）
2. 关税（HS编码、税率、原产地、清关文件）
3. 所得税（居民判定、PE风险、转移定价、税收协定、预提税）
4. 合规流程（登记、账簿、申报、支付）
5. 风险预警（常见违规、处罚）
6. 专业建议（顾问、软件）
7. 各国差异对比（美/欧/东南亚）`
  },
  {
    id: 'code-10', title: '性能优化方案', description: '生成系统性能优化方案',
    category: '代码', tags: ['性能', '优化', '系统'], variables: ['system_type', 'current_performance', 'target_performance', 'tech_stack'],
    aiModels: ['gpt-4', 'claude', 'deepseek', 'github-copilot'], usage: 445,
    content: `请为以下系统生成性能优化方案：

系统类型：{system_type}
当前性能：{current_performance}
目标性能：{target_performance}
技术栈：{tech_stack}

优化方案：
1. 前端优化（加载、代码、缓存、图片、渲染、Core Web Vitals）
2. 后端优化（代码、架构、连接池、批处理、限流熔断）
3. 数据库优化（索引、SQL、分库分表、读写分离、归档）
4. 缓存优化（策略、粒度、更新、穿透/击穿/雪崩防护）
5. 网络优化（CDN、压缩、HTTP/2/3、连接复用）
6. 监控体系（APM、日志、告警）
7. 压测方案（工具、场景、指标）
8. 优化前后对比（数据预期）`
  },
  {
    id: 'office-10', title: '新员工入职手册', description: '生成新员工入职手册',
    category: '办公', tags: ['入职', '手册', '员工'], variables: ['company', 'industry', 'size', 'position'],
    aiModels: ['gpt-4', 'claude', 'kimi'], usage: 556,
    content: `请为以下公司生成新员工入职手册：

公司：{company}
行业：{industry}
规模：{size}
岗位：{position}

手册内容：
1. 欢迎致辞
2. 公司介绍（历程、架构、业务、文化）
3. 入职流程（第一天、第一周、第一个月、试用期）
4. 规章制度（考勤、薪酬、报销、保密、信息安全）
5. 工作指南（工具、审批、会议、文档、代码规范）
6. 团队介绍（关键联系人）
7. 福利清单
8. FAQ
9. 反馈渠道`
  },
  {
    id: 'marketing-10', title: '品牌年轻化方案', description: '生成品牌年轻化营销策略',
    category: '营销', tags: ['品牌', '年轻化', '营销'], variables: ['brand', 'current_positioning', 'target_age'],
    aiModels: ['gpt-4', 'claude', 'kimi', 'doubao'], usage: 445,
    content: `请为以下品牌生成年轻化方案：

品牌：{brand}
当前定位：{current_positioning}
目标年龄：{target_age}

方案结构：
1. 年轻化诊断（老化信号、脱节点、竞品案例）
2. 视觉年轻化（Logo、色彩、包装、视觉语言）
3. 内容年轻化（语言风格、形式、话题、价值观）
4. 渠道年轻化（平台、KOL、线下、私域）
5. 产品年轻化（联名、限量、定制、体验）
6. 效果评估（品牌年轻化指数）
7. 风险管控（翻车案例、舆情）`
  },
  {
    id: 'learn-9', title: '概念对比分析', description: '生成两个概念的对比分析',
    category: '学习', tags: ['对比', '分析', '学习'], variables: ['concept_a', 'concept_b', 'depth'],
    aiModels: ['gpt-4', 'claude', 'kimi', 'deepseek'], usage: 1234,
    content: `请对以下两个概念进行对比分析：

概念A：{concept_a}
概念B：{concept_b}
分析深度：{depth}

分析结构：
1. 概念定义（简明定义、核心关键词）
2. 相同点（3-5个维度）
3. 不同点（对比表格：定义、核心、适用、优势、劣势）
4. 关系辨析（包含/并列/递进/替代/互补、演化、混淆点）
5. 适用场景（何时选A、何时选B、何时结合、案例）
6. 记忆技巧
7. 延伸学习`
  },
  {
    id: 'ops-9', title: '库存周转优化', description: '生成库存周转优化方案',
    category: '运营', tags: ['库存', '周转', '优化'], variables: ['business_type', 'sku_count', 'current_turnover', 'target_turnover'],
    aiModels: ['gpt-4', 'claude', 'deepseek', 'kimi'], usage: 334,
    content: `请为以下业务生成库存周转优化方案：

业务类型：{business_type}
SKU数：{sku_count}
当前周转天数：{current_turnover}
目标周转天数：{target_turnover}

优化方案：
1. 需求预测优化（模型、数据、准确率监控、安全库存）
2. 补货策略（ROP、EOQ、周期、供应商协同）
3. 库存分类管理（ABC、XYZ、组合策略、新品/尾货）
4. 清仓策略（滞销识别、渠道、定价、节奏）
5. 呆滞处理（标准、追溯、报废、预防）
6. 数据监控（周转率、缺货率、呆滞率、库存成本）
7. 组织保障（KPI、激励、流程）`
  },
  {
    id: 'write-10', title: '产品发布会主持稿', description: '生成产品发布会主持稿',
    category: '写作', tags: ['主持', '发布会', '稿件'], variables: ['product', 'theme', 'duration', 'guests'],
    aiModels: ['gpt-4', 'claude', 'kimi'], usage: 556,
    content: `请为以下发布会生成主持稿：

产品：{product}
发布会主题：{theme}
时长：{duration}分钟
嘉宾：{guests}

主持稿结构：
1. 开场（暖场、开场白、主题引入、嘉宾介绍）
2. 串场（上一个总结、过渡、下一个预告、时间控制）
3. 互动设计（抽奖、问答、投票、体验）
4. 高潮环节（倒计时、产品亮相、价格公布、情绪调动）
5. 结尾（总结、感谢、行动号召、品牌Slogan）
6. 应急预案（设备故障、超时、冷场）
7. 主持提示（语速、停顿、走位、表情）`
  },
];

export function getTemplatesByCategory(category: string): PromptTemplate[] {
  if (category === '全部') return TEMPLATES;
  return TEMPLATES.filter(t => t.category === category);
}

export function getHotTemplates(): PromptTemplate[] {
  return TEMPLATES.filter(t => t.isHot).sort((a, b) => (b.usage || 0) - (a.usage || 0));
}

export function searchTemplates(query: string): PromptTemplate[] {
  const q = query.toLowerCase();
  return TEMPLATES.filter(t =>
    t.title.toLowerCase().includes(q) ||
    t.description.toLowerCase().includes(q) ||
    t.tags.some(tag => tag.toLowerCase().includes(q)) ||
    t.category.toLowerCase().includes(q)
  );
}

export function getTemplateById(id: string): PromptTemplate | undefined {
  return TEMPLATES.find(t => t.id === id);
}

export function getCategories(): string[] {
  return TEMPLATE_CATEGORIES;
}

export function getAllTags(): string[] {
  const tags = new Set<string>();
  TEMPLATES.forEach(t => t.tags.forEach(tag => tags.add(tag)));
  return Array.from(tags).sort();
}

export function getAllModels(): string[] {
  const models = new Set<string>();
  TEMPLATES.forEach(t => t.aiModels.forEach(m => models.add(m)));
  return Array.from(models).sort();
}
