import Link from 'next/link';

export default function NavLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="nav-container">
      <nav className="flex space-x-4 p-4 bg-gray-100">
        <Link href="/" className="nav-link">Home</Link>
        <Link href="/about" className="nav-link">About</Link>
        <Link href="/tutorial" className="nav-link">Tutorial</Link>
        <Link href="/userlist" className="nav-link">Users</Link>
      </nav>
      <main>{children}</main>
    </div>
  );
}