import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

import { Layout } from './components/Layout';

import { Dashboard } from './pages/Dashboard';
import { Generator } from './pages/Generator';
import { Optimizer } from './pages/Optimizer';
import { Translator } from './pages/Translator';
import { Templates } from './pages/Templates';
import { Favorites } from './pages/Favorites';
import { History } from './pages/History';
import { Settings } from './pages/Settings';

import { Studio } from './pages/Studio';
import { Agent } from './pages/Agent';
import { Business } from './pages/Business';

import { useAppStore } from './store/appStore';


function ThemeProvider({ children }: { children: React.ReactNode }) {

  const { settings } = useAppStore();


  useEffect(() => {

    const root = document.documentElement;
    const theme = settings.theme;


    if (theme === 'system') {

      const prefersDark =
        window.matchMedia('(prefers-color-scheme: dark)').matches;

      root.classList.toggle('dark', prefersDark);

    } else {

      root.classList.toggle('dark', theme === 'dark');

    }


  }, [settings.theme]);


  return <>{children}</>;

}



function App() {


  return (

    <BrowserRouter>

      <ThemeProvider>

        <Routes>


          <Route element={<Layout />}>


            {/* 原有功能 */}

            <Route path="/" element={<Dashboard />} />

            <Route path="/generator" element={<Generator />} />

            <Route path="/optimizer" element={<Optimizer />} />

            <Route path="/translator" element={<Translator />} />

            <Route path="/templates" element={<Templates />} />

            <Route path="/favorites" element={<Favorites />} />

            <Route path="/history" element={<History />} />

            <Route path="/settings" element={<Settings />} />


            {/* PromptOS V2 新增功能 */}

            <Route 
              path="/studio" 
              element={<Studio />} 
            />


            <Route 
              path="/agent" 
              element={<Agent />} 
            />


            <Route 
              path="/business" 
              element={<Business />} 
            />


          </Route>


        </Routes>


      </ThemeProvider>


    </BrowserRouter>

  );

}


export default App;