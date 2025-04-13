'use client';

import Link from 'next/link';
import useThemeStore from '@/stores/theme';
import '@/styles.scss/nav.scss';

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
      <nav className={`flex items-center justify-between p-4 backdrop-blur-md ${theme === 'dark' ? 'bg-gradient-to-br from-indigo-900/80 via-purple-900/80 to-blue-900/80' : 'bg-sky-100/30'} custom-nav-shadow`}>
        {/* 左侧 */}
        <div className="flex items-center justify-center space-x-4">
          <img src="/img/icon.png" className="h-10 w-10" alt="CodeLume icon" />
          <img src="/img/logo.png" className="h-8 w-16" alt="CodeLume Logo" />
        </div>

        {/* 中间 */}
        <div className="hidden md:flex flex-grow justify-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`bg-gradient-to-r ${theme === 'dark' ? 'from-white via-red-500 to-yellow-400' : 'from-black-600 via-purple-600 to-blue-500'} bg-clip-text text-transparent text-lg text-[18px] hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium animate-water-flow bg-[length:200%_200%]`}

            // className={`relative overflow-hidden bg-gradient-to-r ${theme === 'dark' ? 'from-blue-400 via-purple-500 to-pink-400' : 'from-black via-purple-600 to-blue-500'} bg-clip-text text-transparent text-lg text-[18px] font-medium px-5 before:absolute before:inset-0 before:bg-[linear-gradient(130deg,#7f00ff_20%,#e100ff_80%)] before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-30`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* 右侧 */}
        <div className="flex items-center justify-center space-x-4">
          <span
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-transparent hover:bg-purple-800/20 transition-all duration-300 hover:shadow-[0_0_15px_rgba(127,0,255,0.3)] cursor-pointer"
          >
            {theme === 'dark' ? '🌞' : '🌙'}
          </span>
          <a
            href="https://www.baidu.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`bg-gradient-to-r ${theme === 'dark' ? 'from-white via-red-500 to-yellow-400' : 'from-black via-purple-600 to-blue-500'} bg-clip-text text-transparent text-lg text-[18px] hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium animate-water-flow bg-[length:200%_200%]`}
          >
            GitHub
          </a>
        </div>
      </nav>

      {/* 动态内容区域 */}
      <main className="flex-1 container mx-auto p-4 bg-gradient-to-br">
        {children}
      </main>

      {/* 添加底部 footer  */}
      <footer className="mt-8 text-center text-gray-600 dark:text-blue-300">
        &copy; 2024 CodeLume. All rights reserved.
      </footer>
    </div>
  );
}