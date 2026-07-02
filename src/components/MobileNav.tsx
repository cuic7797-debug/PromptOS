import { useNavigate, useLocation } from 'react-router-dom';
import { LayoutDashboard, Wand2, BookOpen, Star, Settings } from 'lucide-react';
import { useAppStore } from '../store/appStore';

const mobileNavItems = [
  { path: '/', label: '工作台', icon: LayoutDashboard },
  { path: '/generator', label: '生成', icon: Wand2 },
  { path: '/templates', label: '模板', icon: BookOpen },
  { path: '/favorites', label: '收藏', icon: Star },
  { path: '/settings', label: '设置', icon: Settings },
];

export function MobileNav() {
  const navigate = useNavigate();
  const location = useLocation();
  const { setCurrentPage } = useAppStore();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-t border-slate-200 dark:border-slate-700 md:hidden pb-safe">
      <div className="flex items-center justify-around h-16">
        {mobileNavItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <button
              key={item.path}
              onClick={() => {
                navigate(item.path);
                setCurrentPage(item.path);
              }}
              className={`
                flex flex-col items-center gap-1 px-3 py-1 rounded-lg transition-all relative
                ${isActive ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400 dark:text-slate-500'}
              `}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'scale-110' : ''} transition-transform`} />
              <span className="text-[10px] font-medium">{item.label}</span>
              {isActive && (
                <span className="absolute -bottom-1 w-1 h-1 rounded-full bg-blue-500" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
