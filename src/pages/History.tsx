import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Clock, Star, Trash2, Copy, Check, Search, Filter,
  ArrowRight, Sparkles, BarChart3
} from 'lucide-react';
import { useAppStore } from '../store/appStore';
import { copyToClipboard, formatDate, getGradeColor } from '../lib/utils';

export function History() {
  const navigate = useNavigate();
  const { history, toggleFavorite, removeHistory, clearHistory } = useAppStore();
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredHistory = history.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.model.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCopy = async (id: string, content: string) => {
    await copyToClipboard(content);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const avgQuality = history.length > 0
    ? Math.round(history.reduce((sum, h) => sum + (h.quality || 0), 0) / history.length)
    : 0;

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold mb-1 flex items-center gap-2">
          <Clock className="w-6 h-6 text-slate-500" />
          历史记录
        </h1>
        <p className="text-slate-500 dark:text-slate-400">
          查看和管理所有生成的提示词，共 {history.length} 条
        </p>
      </div>

      {/* Stats */}
      {history.length > 0 && (
        <div className="grid grid-cols-3 gap-4">
          <div className="glass-card rounded-xl p-4 text-center">
            <p className="text-2xl font-bold">{history.length}</p>
            <p className="text-xs text-slate-500">总生成数</p>
          </div>
          <div className="glass-card rounded-xl p-4 text-center">
            <p className="text-2xl font-bold">{history.filter(h => h.favorite).length}</p>
            <p className="text-xs text-slate-500">收藏数</p>
          </div>
          <div className="glass-card rounded-xl p-4 text-center">
            <p className="text-2xl font-bold">{avgQuality || '-'}</p>
            <p className="text-xs text-slate-500">平均质量</p>
          </div>
        </div>
      )}

      {/* Search & Actions */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="搜索历史记录..."
            className="w-full pl-9 pr-4 py-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 border-0 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        {history.length > 0 && (
          <button
            onClick={() => {
              if (confirm('确定要清空所有历史记录吗？此操作不可恢复。')) {
                clearHistory();
              }
            }}
            className="px-4 py-2.5 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl font-medium transition-colors flex items-center gap-2"
          >
            <Trash2 className="w-4 h-4" />
            清空历史
          </button>
        )}
      </div>

      {/* History List */}
      {filteredHistory.length > 0 ? (
        <div className="space-y-3">
          {filteredHistory.map((item) => (
            <div
              key={item.id}
              className="glass-card rounded-xl p-4 hover:shadow-lg transition-all"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-medium truncate">{item.title}</h3>
                    <span className="px-2 py-0.5 text-xs rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500">
                      {item.model}
                    </span>
                    {item.quality && (
                      <span className={`px-2 py-0.5 text-xs rounded-full font-medium ${getGradeColor(
                        item.quality >= 90 ? 'S' : item.quality >= 80 ? 'A' : item.quality >= 70 ? 'B' : item.quality >= 60 ? 'C' : 'D'
                      )}`}>
                        {item.quality >= 90 ? 'S' : item.quality >= 80 ? 'A' : item.quality >= 70 ? 'B' : item.quality >= 60 ? 'C' : 'D'}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mb-2">
                    {item.content.substring(0, 150)}...
                  </p>
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {formatDate(item.createdAt)}
                    </span>
                    {item.tags?.map(tag => (
                      <span key={tag} className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-1 flex-shrink-0">
                  <button
                    onClick={() => handleCopy(item.id, item.content)}
                    className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    title="复制"
                  >
                    {copiedId === item.id ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={() => toggleFavorite(item.id)}
                    className={`p-2 rounded-lg transition-colors ${
                      item.favorite ? 'text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20' : 'hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                    title={item.favorite ? '取消收藏' : '收藏'}
                  >
                    <Star className={`w-4 h-4 ${item.favorite ? 'fill-current' : ''}`} />
                  </button>
                  <button
                    onClick={() => removeHistory(item.id)}
                    className="p-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 text-red-500 transition-colors"
                    title="删除"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="glass-card rounded-xl p-12 text-center">
          <div className="w-20 h-20 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mx-auto mb-4">
            <Clock className="w-10 h-10 text-slate-300 dark:text-slate-600" />
          </div>
          <h3 className="text-lg font-medium mb-2">
            {searchQuery ? '未找到匹配记录' : '暂无历史记录'}
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
            {searchQuery ? '尝试其他关键词' : '在 Generator 页面开始生成你的第一个提示词'}
          </p>
          {!searchQuery && (
            <button
              onClick={() => navigate('/generator')}
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors inline-flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              去生成
            </button>
          )}
        </div>
      )}
    </div>
  );
}
