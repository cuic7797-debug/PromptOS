import { useNavigate, useLocation } from 'react-router-dom';
import {
  LayoutDashboard, Wand2, BrainCircuit, Languages,
  BookOpen, Star, Clock, Settings, X, ChevronRight,
} from 'lucide-react';
import { useAppStore } from '../store/appStore';
import { useIsMobile } from '../hooks/useMediaQuery';
import type { NavItem } from '../types';

const navItems: NavItem[] = [
  { path: '/', label: '工作台', icon: 'LayoutDashboard' },
  { path: '/generator', label: 'Prompt Generator', icon: 'Wand2' },
  { path: '/optimizer', label: 'Prompt Optimizer', icon: 'BrainCircuit' },
  { path: '/translator', label: 'Prompt Translator', icon: 'Languages' },
  { path: '/templates', label: '模板中心', icon: 'BookOpen', badge: 100 },
  { path: '/favorites', label: '收藏', icon: 'Star' },
  { path: '/history', label: '历史', icon: 'Clock' },
  { path: '/settings', label: '设置', icon: 'Settings' },
];

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  LayoutDashboard, Wand2, BrainCircuit, Languages,
  BookOpen, Star, Clock, Settings,
};

export function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { sidebarOpen, toggleSidebar, setCurrentPage } = useAppStore();
  const isMobile = useIsMobile();

  const handleNav = (path: string) => {
    navigate(path);
    setCurrentPage(path);
    if (isMobile) toggleSidebar();
  };

  const sidebarContent = (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between p-4 md:hidden">
        <span className="font-bold text-lg">菜单</span>
        <button onClick={toggleSidebar} className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
          <X className="w-5 h-5" />
        </button>
      </div>

      <nav className="flex-1 px-3 py-2 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const Icon = iconMap[item.icon];
          const isActive = location.pathname === item.path;

          return (
            <button
              key={item.path}
              onClick={() => handleNav(item.path)}
              className={`
                w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group
                ${isActive
                  ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-200'
                }
              `}
            >
              <Icon className={`
                w-5 h-5 transition-colors
                ${isActive ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-300'}
              `} />
              <span className="flex-1 text-left">{item.label}</span>
              {item.badge && (
                <span className="px-2 py-0.5 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                  {item.badge}+
                </span>
              )}
              {isActive && <ChevronRight className="w-4 h-4 text-blue-500" />}
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-slate-200 dark:border-slate-700">
        <div className="glass-card rounded-xl p-3">
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">当前版本</p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-sm font-medium">PromptOS v1.0</span>
          </div>
          <p className="text-xs text-slate-400 mt-1">完整商业版 · 100+模板</p>
        </div>
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <>
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm transition-opacity"
            onClick={toggleSidebar}
          />
        )}
        <aside
          className={`
            fixed top-0 left-0 bottom-0 w-72 z-50 bg-white dark:bg-slate-900 shadow-2xl
            transform transition-transform duration-300 ease-in-out
            ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          `}
        >
          {sidebarContent}
        </aside>
      </>
    );
  }

  return (
    <aside className="fixed left-0 top-14 bottom-0 w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-700 z-30 hidden md:block">
      {sidebarContent}
    </aside>
  );
}
