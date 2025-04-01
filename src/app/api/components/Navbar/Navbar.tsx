'use client';

import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <nav className="border-b background sticky top-0 z-50">
      <div
        className="container flex items-center
        h-16 
        mx-auto
        px-4
        justify-between"
      >
        <Link className="font-bold text-3xl text-pink-500" href={'/'}>
          ELF
        </Link>
        {/* Deskopt navbar*/}
        <div className="hidden md:flex space-x-6">
          <Link href={'/'}>Ana Sayfa</Link>
          <Link href={'/hakkinda'}>Hakkında</Link>
          <Link href={'/urunler'}>Ürünler</Link>
        </div>
        {/* Deskopt navbar*/}
        {/* mobil navbar button*/}
        <div
          className={
            'fixed inset-0 top-16 bg-background z-50 ' +
            (isMobileMenuOpen ? 'flex flex-col' : 'hidden')
          }
        >
          <div className=" hidden:md flex flex-col space-y-4 p-6">
            <Link href={'/'}>Ana Sayfa</Link>
            <Link href={'/hakkinda'}>Hakkında</Link>
            <Link href={'/urunler'}>Ürünler</Link>
          </div>
        </div>
        <div className="md:hidden">
          <Button
            className="cursor-pointer"
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        {/* mobil navbar button*/}
        {/* mobile navbar*/}

        {/* mobile navbar*/}

        <div className="hidden md:flex">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="cursor-pointer">Dil</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Dil Seçiniz</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Türkçe</DropdownMenuItem>
              <DropdownMenuItem>İngilizce</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}
