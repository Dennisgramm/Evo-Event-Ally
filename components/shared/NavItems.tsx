'use client';

import { headerlinks } from '@/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavItems = () => {
  const pathname = usePathname();

  return (
    <ul className="flex flex-col md:flex-row items-start md:items-center gap-5">
      {headerlinks.map((link) => {
        const isActive = pathname === link.route;

        return (
          <li
            key={link.route}
            className={`flex-center p-medium-16 whitespace-nowrap ${
              isActive ? 'text-primary-500 font-semibold' : 'text-gray-700'
            }`}
          >
            <Link href={link.route} className="hover:text-black transition">
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;
