/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
  User,
} from '@nextui-org/react';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar
      className={`duration-2000 fixed z-50 h-[80px] bg-white p-5 transition-shadow ${isScrolled ? 'shadow-xl' : ''}`}
      onMenuOpenChange={(isOpen) => setIsMenuOpen(isOpen)}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Image
            alt="Logo"
            width="50"
            height="50"
            src="https://rclimaticas-fileupload.s3.sa-east-1.amazonaws.com/logoLC-DRqUmzjb.png"
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden gap-4 font-bold text-black-300 sm:flex"
        justify="center"
      >
        <Link color="foreground" href="#">
          <NavbarItem className="rounded-lg p-2 motion-duration-200 hover:motion-preset-blur-right hover:bg-orange hover:text-white">
            Biblioteca
          </NavbarItem>
        </Link>
        <NavbarItem className="rounded-lg p-2 motion-duration-200 hover:motion-preset-blur-right hover:bg-orange hover:text-white">
          <Link color="foreground" href="/ondefoi">
            Registros OndeFoi
          </Link>
          {/* emoji para colocar -> hover:after:content-['•'] hover:after:ml-2 */}
        </NavbarItem>
        <NavbarItem className="rounded-lg p-2 motion-duration-200 hover:motion-preset-blur-right hover:bg-orange hover:text-white">
          <Link color="foreground" href="https://www.espiralds.com/sofia">
            Assessoria Sofia
          </Link>
        </NavbarItem>
        <NavbarItem className="rounded-lg p-2 motion-duration-200 hover:motion-preset-blur-right hover:bg-orange hover:text-white">
          <Link color="foreground" href="/ligacolaborativa">
            Sobre Nós
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" className="font-bold text-black-300">
        <Link href="/login">
          <NavbarItem className="flex w-full items-center justify-center rounded-lg border-2 bg-orange px-5 py-2">
            Entrar
          </NavbarItem>
        </Link>
        <Link href="/register">
          <NavbarItem className="flex w-full items-center justify-center rounded-lg bg-white px-5 py-2">
            Cadastrar
          </NavbarItem>
        </Link>
      </NavbarContent>
    </Navbar>
  );
}
