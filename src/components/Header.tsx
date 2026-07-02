import { Menu, Search, Bell, Sparkles } from 'lucide-react';
import { useAppStore } from '../store/appStore';
import { useIsMobile } from '../hooks/useMediaQuery';

export function Header() {
  const { toggleSidebar } = useAppStore();
  const isMobile = useIsMobile();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-14 glass border-b border-slate-200/50 dark:border-slate-700/50">
      <div className="flex items-center justify-between h-full px-4 max-w-screen-2xl mx-auto">
        <div className="flex items-center gap-3">
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors md:hidden"
            aria-label="打开菜单"
          >
            <Menu className="w-5 h-5 text-slate-700 dark:text-slate-300" />
          </button>

          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              PromptOS
            </span>
            <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
              v1.0
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {!isMobile && (
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="搜索模板、提示词..."
                className="pl-9 pr-4 py-2 w-64 rounded-lg bg-slate-100 dark:bg-slate-800 border-0 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
              />
            </div>
          )}

          <button className="relative p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <Bell className="w-5 h-5 text-slate-600 dark:text-slate-400" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
          </button>
        </div>
      </div>
    </header>
  );
}
