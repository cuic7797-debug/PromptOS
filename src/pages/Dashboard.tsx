import { useNavigate } from 'react-router-dom';
import {
  Wand2, BrainCircuit, Languages, BookOpen, Star, Clock,
  ArrowRight, Zap, TrendingUp, Sparkles, Target, Layers,
  Flame, BarChart3, Award, BookMarked
} from 'lucide-react';
import { useAppStore } from '../store/appStore';
import { getHotTemplates } from '../data/templates';

const quickActions = [
  {
    title: 'Prompt Generator',
    desc: '结构化生成高质量提示词',
    icon: Wand2,
    path: '/generator',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
  },
  {
    title: 'Prompt Optimizer',
    desc: '优化现有提示词质量',
    icon: BrainCircuit,
    path: '/optimizer',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50 dark:bg-purple-900/20',
  },
  {
    title: 'Prompt Translator',
    desc: '中英互译 + 多语言适配',
    icon: Languages,
    path: '/translator',
    color: 'from-orange-500 to-red-500',
    bgColor: 'bg-orange-50 dark:bg-orange-900/20',
  },
  {
    title: '模板中心',
    desc: '100+ 专业场景模板',
    icon: BookOpen,
    path: '/templates',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50 dark:bg-green-900/20',
  },
];

export function Dashboard() {
  const navigate = useNavigate();
  const { history, getFavorites } = useAppStore();
  const hotTemplates = getHotTemplates().slice(0, 6);
  const favorites = getFavorites().slice(0, 5);
  const recentHistory = history.slice(0, 5);

  const totalGenerated = history.length;
  const todayGenerated = history.filter(h => {
    const today = new Date();
    const itemDate = new Date(h.createdAt);
    return today.toDateString() === itemDate.toDateString();
  }).length;
  const totalFavorites = getFavorites().length;
  const avgQuality = history.length > 0
    ? Math.round(history.reduce((sum, h) => sum + (h.quality || 0), 0) / history.length)
    : 0;

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-800 dark:via-slate-900 dark:to-black p-6 md:p-8">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl" />

        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-5 h-5 text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">PromptOS v2.0 AI生产系统</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
            欢迎来到 PromptOS
          </h1>
          <p className="text-slate-400 max-w-xl">
            免费 AI 创业助手，帮助你从想法分析、商业方案到 AI 工作流执行。
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
            <button
              onClick={() => navigate('/generator')}
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors flex items-center gap-2"
            >
              <Wand2 className="w-4 h-4" />
              开始生成
            </button>
            <button
              onClick={() => navigate('/templates')}
              className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl font-medium transition-colors flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4" />
              浏览模板
            </button>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: '今日生成', value: todayGenerated.toString(), icon: Zap, trend: '+0%', color: 'text-yellow-500' },
          { label: '总提示词', value: totalGenerated.toString(), icon: Layers, trend: '累计', color: 'text-blue-500' },
          { label: '收藏模板', value: totalFavorites.toString(), icon: Star, trend: '已收藏', color: 'text-purple-500' },
          { label: '平均质量', value: avgQuality > 0 ? `${avgQuality}分` : '-', icon: Target, trend: '五维评分', color: 'text-green-500' },
        ].map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="glass-card rounded-xl p-4 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <Icon className={`w-5 h-5 ${stat.color}`} />
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  {stat.trend}
                </span>
              </div>
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">{stat.label}</p>
            </div>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Zap className="w-5 h-5 text-yellow-500" />
          快速入口
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <button
                key={action.path}
                onClick={() => navigate(action.path)}
                className="group relative overflow-hidden rounded-xl p-5 text-left transition-all hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
              >
                <div className={`absolute inset-0 ${action.bgColor}`} />
                <div className="relative z-10">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${action.color} flex items-center justify-center mb-3`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">
                    {action.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">
                    {action.desc}
                  </p>
                  <div className="flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:gap-2 transition-all">
                    进入 <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Hot Templates */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <Flame className="w-5 h-5 text-red-500" />
            热门模板
          </h2>
          <button
            onClick={() => navigate('/templates')}
            className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
          >
            查看全部
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {hotTemplates.map((template) => (
            <button
              key={template.id}
              onClick={() => navigate(`/templates?id=${template.id}`)}
              className="glass-card rounded-xl p-4 text-left hover:shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 text-xs rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300">
                    {template.category}
                  </span>
                  {template.isHot && (
                    <Flame className="w-3 h-3 text-red-500" />
                  )}
                </div>
                <span className="text-xs text-slate-400">{template.usage}次使用</span>
              </div>
              <h3 className="font-medium text-sm mb-1">{template.title}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">{template.description}</p>
              <div className="flex flex-wrap gap-1 mt-2">
                {template.tags.slice(0, 3).map(tag => (
                  <span key={tag} className="px-1.5 py-0.5 text-[10px] rounded bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Recent Activity & Favorites */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-card rounded-xl p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold flex items-center gap-2">
              <Clock className="w-5 h-5 text-slate-400" />
              最近使用
            </h3>
            <button
              onClick={() => navigate('/history')}
              className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
            >
              查看全部
            </button>
          </div>
          {recentHistory.length > 0 ? (
            <div className="space-y-3">
              {recentHistory.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                  onClick={() => navigate('/history')}
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm truncate">{item.title}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {item.model} · {new Date(item.createdAt).toLocaleDateString('zh-CN')}
                    </p>
                  </div>
                  {item.quality && (
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      item.quality >= 80 ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300' :
                      item.quality >= 60 ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300' :
                      'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300'
                    }`}>
                      {item.quality}分
                    </span>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-3">
                <Clock className="w-8 h-8 text-slate-300 dark:text-slate-600" />
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                暂无使用记录
              </p>
              <p className="text-xs text-slate-400 mt-1">
                在 Generator 页面开始生成你的第一个提示词
              </p>
            </div>
          )}
        </div>

        <div className="glass-card rounded-xl p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-500" />
              我的收藏
            </h3>
            <button
              onClick={() => navigate('/favorites')}
              className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
            >
              查看全部
            </button>
          </div>
          {favorites.length > 0 ? (
            <div className="space-y-3">
              {favorites.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                  onClick={() => navigate('/history')}
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-500/20 to-orange-500/20 flex items-center justify-center flex-shrink-0">
                    <BookMarked className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm truncate">{item.title}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {item.model}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-3">
                <Star className="w-8 h-8 text-slate-300 dark:text-slate-600" />
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                暂无收藏内容
              </p>
              <p className="text-xs text-slate-400 mt-1">
                在模板中心或生成页面点击收藏按钮添加
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Achievements Preview */}
      <div className="glass-card rounded-xl p-5">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500/20 to-yellow-500/20 flex items-center justify-center">
            <Award className="w-5 h-5 text-amber-600 dark:text-amber-400" />
          </div>
          <div>
            <h3 className="font-semibold">成就中心</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">完成目标解锁成就徽章</p>
          </div>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
          {[
            { name: '初出茅庐', desc: '生成第1个提示词', unlocked: totalGenerated >= 1 },
            { name: '熟能生巧', desc: '生成10个提示词', unlocked: totalGenerated >= 10 },
            { name: '百炼成钢', desc: '生成100个提示词', unlocked: totalGenerated >= 100 },
            { name: '收藏达人', desc: '收藏5个模板', unlocked: totalFavorites >= 5 },
            { name: '质量大师', desc: '获得S级评分', unlocked: history.some(h => h.quality && h.quality >= 90) },
            { name: '探索者', desc: '使用5个不同模板', unlocked: new Set(history.map(h => h.tags?.[0])).size >= 5 },
          ].map((achievement) => (
            <div
              key={achievement.name}
              className={`flex flex-col items-center p-3 rounded-xl transition-all ${
                achievement.unlocked
                  ? 'bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 border border-amber-200 dark:border-amber-800'
                  : 'bg-slate-100 dark:bg-slate-800 opacity-50'
              }`}
            >
              <Award className={`w-6 h-6 mb-1 ${achievement.unlocked ? 'text-amber-500' : 'text-slate-400'}`} />
              <span className="text-xs font-medium text-center">{achievement.name}</span>
              <span className="text-[10px] text-slate-400 text-center mt-0.5">{achievement.desc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Version Info */}
      <div className="glass-card rounded-xl p-4">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <div className="flex-1">
            <p className="text-sm font-medium">PromptOS v2.0 AI生产系统已就绪</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              100+专业模板 · Prompt Engine · 质量评分 · 优化翻译 · 零API成本
            </p>
          </div>
          <span className="text-xs px-2 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300">
            运行中
          </span>
        </div>
      </div>
    </div>
  );
}
