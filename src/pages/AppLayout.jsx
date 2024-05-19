import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import DarkButton from '../ui/DarkButton';
import Footer from '../ui/Footer';
import Main from '../ui/Main';
import Navbar from '../ui/Navbar';

function AppLayout() {
  // Could be provided via context
  const [isDark, setIsDark] = useState(false);

  return (
    <div
      className={`grid h-screen grid-rows-[52px_1fr_64px] bg-stone-200 text-stone-800 transition duration-300 dark:bg-slate-800 dark:text-slate-300 ${isDark ? 'dark' : ''}`}
    >
      <Navbar isDark={isDark} setIsDark={setIsDark} />

      <Main>
        <Outlet />
      </Main>

      <Footer />

      {/* <DarkButton isDark={isDark} setIsDark={setIsDark} /> */}
    </div>
  );
}

export default AppLayout;
