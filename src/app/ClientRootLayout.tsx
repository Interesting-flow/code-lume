'use client';

import { useEffect } from 'react';
import useThemeStore from '@/stores/theme';
import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('@/components/Navbar'), { ssr: false });

export default function ClientRootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { theme } = useThemeStore();

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = () => useThemeStore.getState().setSystemTheme();
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return (
    <html lang="en" className={theme === 'dark' ? 'dark' : ''}>
      <body className="antialiased">
        <Navbar>
          {children}
        </Navbar>
      </body>
    </html>
  );
}