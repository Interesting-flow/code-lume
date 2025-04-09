'use client';

import Link from 'next/link';
import useThemeStore from '@/stores/theme';

export default function Navbar({
  children,
}: {
  children: React.ReactNode
}) {
  const { theme, toggleTheme } = useThemeStore();

  const navItems = [
    { name: '主页', path: '/' },
    { name: '教程', path: '/tutorial' },
    { name: '下载', path: '/download' },
    { name: '关于', path: '/about' },
  ];

  return (
    <div className={`flex flex-col min-h-screen ${theme === 'dark' ? 'dark' : ''}`}>
      <nav className="flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-800">
        {/* 左侧 */}
        <div className="flex items-center justify-center space-x-4">
          <img src="/favicon.svg" className="h-8 w-8" alt="CodeLume Logo" />
        </div>

        {/* 中间 */}
        <div className="hidden md:flex flex-grow justify-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* 右侧 */}
        <div className="flex items-center justify-center space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
          >
            {theme === 'dark' ? '🌞' : '🌙'}
          </button>
          <a
            href="https://www.baidu.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors"
          >
            GitHub
          </a>
        </div>
      </nav>

      {/* 动态内容区域 */}
      <main className="flex-1 container mx-auto p-4">
        {children}
      </main>
    </div>
  );
}