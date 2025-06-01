import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Button } from '../ui/button';
import NavItems from './NavItems'; 
import MobileNav from './MobileNav';

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="w-36">
          <Image
            src="/assets/images/logo.ico"
            width={128}
            height={38}
            alt="Evo Ally logo"
          />
        </Link>

        
        <SignedIn>
          <nav className="md:flex hidden items-center gap-6">
            <NavItems />
          </nav>
        </SignedIn>

        {/* Right side: Auth buttons / MobileNav */}
        <div className="flex items-center gap-3">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <MobileNav />
          </SignedIn>

          <SignedOut>
            <Button asChild className="rounded-full" size="lg">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Header;
