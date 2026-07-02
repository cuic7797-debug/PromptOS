import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { MobileNav } from './MobileNav';
import { useIsMobile } from '../hooks/useMediaQuery';

export function Layout() {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Header />
      <Sidebar />

      <main className={`
        pt-14 transition-all duration-300
        ${isMobile ? 'pb-20 px-4' : 'md:pl-64 px-6 py-6'}
      `}>
        <div className="max-w-screen-2xl mx-auto">
          <Outlet />
        </div>
      </main>

      {isMobile && <MobileNav />}
    </div>
  );
}
