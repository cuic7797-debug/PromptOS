import { FileText, PenTool, ShoppingBag, Video, type LucideIcon } from 'lucide-react';

export interface CreativeTemplate {
  color: string;
  id: string;
  title: string;
  description: string;
  category: string;
  icon: LucideIcon;
  template: {
    role: string;
    goal: string;
    context: string;
    task: string;
    constraint: string;
    outputFormat: string;
  };
}

export const CREATIVE_TEMPLATES: CreativeTemplate[] = [
  {
    id: 'short-video',
    title: '短视频脚本生成',
    description: '生成抖音、短视频爆款脚本，包含黄金3秒、剧情、转场、成交引导',
    category: '内容创作',
    color: 'text-purple-500',
    icon: Video,
    template: {
      role: '你是一名资深短视频运营专家',
      goal: '帮助用户制作高转化短视频',
      context: '平台为抖音，目标用户为消费者',
      task: '生成一个20秒短视频脚本',
      constraint: '符合平台规则，避免夸大宣传',
      outputFormat: '按照时间轴输出：镜头、画面、旁白、字幕'
    }
  },
  {
    id: 'ecommerce',
    title: '电商营销方案',
    description: '生成商品详情页、卖点分析、广告文案',
    category: '电商',
    color: 'text-orange-500',
    icon: ShoppingBag,
    template: {
      role: '你是一名资深电商运营专家',
      goal: '提升商品销售转化率',
      context: '线上电商销售场景',
      task: '制定完整商品营销方案',
      constraint: '真实描述产品，不虚假宣传',
      outputFormat: '输出商品卖点、详情页结构、营销策略'
    }
  },
  {
    id: 'xiaohongshu',
    title: '小红书爆款笔记',
    description: '生成种草笔记、标题、关键词',
    category: '内容营销',
    color: 'text-pink-500',
    icon: PenTool,
    template: {
      role: '你是一名小红书运营专家',
      goal: '制作高互动内容',
      context: '面向年轻消费群体',
      task: '生成小红书爆款笔记',
      constraint: '自然真实，有用户体验感',
      outputFormat: '输出标题、正文、标签、互动话术'
    }
  },
  {
    id: 'office',
    title: 'AI办公助手',
    description: '生成工作总结、邮件、方案、PPT',
    category: '办公',
    color: 'text-blue-500',
    icon: FileText,
    template: {
      role: '你是一名专业AI办公助手',
      goal: '提高办公效率',
      context: '企业办公场景',
      task: '生成办公文档',
      constraint: '逻辑清晰，结构完整',
      outputFormat: '使用Markdown结构输出'
    }
  }
];