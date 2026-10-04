'use client';

import { removeToken } from '@/lib/auth';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const navItems = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Profile', href: '/profile' },
];

const Navbar = () => {
  const router = useRouter();

  const handleLogout = () => {
    const hasTokenRemoved = removeToken();
    if (!hasTokenRemoved) {
      alert('Logout failed');
      return;
    }
    router.replace('/login');
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">
          <Link href="/">MyApp</Link>
        </div>
        <div>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              {item.name}
            </Link>
          ))}
          <button
            type="button"
            onClick={handleLogout}
            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
