'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="border-t py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto w-full px-4 flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/">
          <Image
            src="/assets/images/logo.ico"
            alt="Evo Ally logo"
            width={128}
            height={38}
          />
        </Link>

        <p className="text-sm text-gray-500">
          © 2025 Evo Event Ally. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
