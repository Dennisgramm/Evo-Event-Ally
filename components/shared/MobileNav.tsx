'use client';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';

import Image from 'next/image';
import React from 'react';
import { Separator } from '../ui/separator';
import { headerlinks } from '@/constants';
import Link from 'next/link';

const MobileNav = () => {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
          <Image
            src="/assets/images/menu.ico"
            alt="menu"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </SheetTrigger>

        <SheetContent className="flex flex-col gap-6 bg-white">
          {/* Logo */}
          <Image
            src="/assets/images/logo.ico"
            alt="logo"
            width={128}
            height={38}
          />

          <Separator className="border border-gray-200" />

          {/* Header for a11y */}
          <SheetHeader>
            <SheetTitle className="text-lg font-semibold">Menu</SheetTitle>
          </SheetHeader>

          {/* Nav items with SheetClose */}
          <ul className="flex flex-col gap-4 px-2">
            {headerlinks.map((link) => (
              <li key={link.label}>
                <SheetClose asChild>
                  <Link
                    href={link.route}
                    className="text-gray-700 hover:text-black transition"
                  >
                    {link.label}
                  </Link>
                </SheetClose>
              </li>
            ))}
          </ul>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
