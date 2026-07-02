import { useNavigate } from 'react-router-dom';
import { Star, BookOpen, Clock, Trash2, ArrowRight, Sparkles } from 'lucide-react';
import { useAppStore } from '../store/appStore';
import { formatDate } from '../lib/utils';

export function Favorites() {
  const navigate = useNavigate();
  const { history, toggleFavorite, removeHistory } = useAppStore();
  const favorites = history.filter(h => h.favorite);

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold mb-1 flex items-center gap-2">
          <Star className="w-6 h-6 text-yellow-500" />
          我的收藏
        </h1>
        <p className="text-slate-500 dark:text-slate-400">
          管理你收藏的提示词和模板，共 {favorites.length} 条
        </p>
      </div>

      {favorites.length > 0 ? (
        <div className="space-y-3">
          {favorites.map((item) => (
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
                      <span className={`px-2 py-0.5 text-xs rounded-full ${
                        item.quality >= 80 ? 'bg-green-100 dark:bg-green-900/30 text-green-700' :
                        item.quality >= 60 ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700' :
                        'bg-red-100 dark:bg-red-900/30 text-red-700'
                      }`}>
                        {item.quality}分
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mb-2">
                    {item.content.substring(0, 100)}...
                  </p>
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {formatDate(item.createdAt)}
                    </span>
                    {item.tags && item.tags.map(tag => (
                      <span key={tag} className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-1 flex-shrink-0">
                  <button
                    onClick={() => toggleFavorite(item.id)}
                    className="p-2 rounded-lg hover:bg-yellow-50 dark:hover:bg-yellow-900/20 text-yellow-500 transition-colors"
                    title="取消收藏"
                  >
                    <Star className="w-4 h-4 fill-current" />
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
            <Star className="w-10 h-10 text-slate-300 dark:text-slate-600" />
          </div>
          <h3 className="text-lg font-medium mb-2">暂无收藏</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
            在生成提示词或浏览模板时，点击收藏按钮即可添加到此处
          </p>
          <button
            onClick={() => navigate('/templates')}
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors inline-flex items-center gap-2"
          >
            <BookOpen className="w-4 h-4" />
            浏览模板
          </button>
        </div>
      )}
    </div>
  );
}
