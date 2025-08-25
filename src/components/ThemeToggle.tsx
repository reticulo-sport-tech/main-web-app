import { useEffect, useState } from "react";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Determine initial theme on mount based on existing class/localStorage/media
    const root = document.documentElement;
    const stored = window.localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial: 'light' | 'dark' = root.classList.contains('dark')
      ? 'dark'
      : stored === 'dark' || stored === 'light'
        ? (stored as 'light' | 'dark')
        : prefersDark ? 'dark' : 'light';
    setTheme(initial);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
    window.localStorage.setItem('theme', theme);
  }, [theme, mounted]);

  const label = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      title={label}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-lg border border-slate-300 hover:border-slate-400 text-slate-600 hover:text-slate-900 dark:text-slate-200 dark:border-slate-700 dark:hover:border-slate-600"
    >
      {mounted ? (
        theme === 'dark' ? <IoSunnyOutline size={18} /> : <IoMoonOutline size={18} />
      ) : (
        <span className="block w-[18px] h-[18px]" />
      )}
    </button>
  );
}
