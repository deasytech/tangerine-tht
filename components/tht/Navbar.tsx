"use client"

import { NAV_LINKS } from "@/constants/tht";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();
  const [ openMobileNav, setOpenMobileNav ] = useState(false)
  const [ activeMenu, setActiveMenu ] = useState<string | null>(null);

  const hiddenPaths = [
    "/find-provider",
    "/join-provider-network",
    "/login",
    "/register",
    "/policy-holder",
    "/service-provider",
    "/corporate",
    "/broker",
    "/get-quote",
    "/book-session",
    "/buy-now",
  ];

  if (hiddenPaths.includes(pathname)) {
    return null;
  }

  const handleMenuClick = (key: string) => {
    setActiveMenu((prevMenu) => (prevMenu === key ? null : key));
  };

  const handleSubMenuClick = () => {
    setActiveMenu(null);
    setOpenMobileNav(false);
  };

  const handleMobileNav = () => {
    setOpenMobileNav(!openMobileNav);
  }

  return (
    <header className="w-full z-30 py-5 fixed top-0 left-0 right-0 bg-white shadow-md">
      <nav className="flexBetween max-container padding-container">
        <Link href="/">
          <Image
            src="/images/tht/logo.svg"
            alt="Tangerine Africa"
            width={94}
            height={67}
          />
        </Link>

        <ul className="hidden items-center h-full gap-4 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.key} className="relative">
              {link.subMenu ? (
                <button
                  onClick={() => handleMenuClick(link.key)}
                  className="regular-12 text-blue-base flexCenter cursor-pointer transition-all hover:bg-orange-50 p-1 px-4 hover:rounded-full"
                >
                  {link.label}
                  <ChevronDown className="ml-2" size={16} />
                </button>
              ) : (
                <Link
                  href={link.href}
                  key={link.key}
                  onClick={handleSubMenuClick}
                  className={`regular-12 text-blue-base flexCenter cursor-pointer transition-all hover:bg-orange-50 p-1 px-4 hover:rounded-full ${pathname === link.href ? 'bg-orange-base rounded-full text-white hover:text-blue-base' : ''}`}
                >
                  {link.label}
                </Link>
              )}
              {link.subMenu && activeMenu === link.key && (
                <div className="absolute left-0 top-full mt-2 w-[333px] bg-white shadow-lg rounded-xl p-4">
                  <ul className="flex gap-8">
                    <div className="w-full flex flex-col gap-2">
                      {link.subMenu.map((subLink) => (
                        <li key={subLink.key} className="mb-2 p-2 last:mb-0 hover:bg-orange-50">
                          <Link href={subLink.href} className="regular-12 text-generic-700" onClick={handleSubMenuClick}>
                            {subLink.label}
                          </Link>
                          <p className="regular-10 text-generic-700">
                            <Link href={subLink.href} onClick={handleSubMenuClick}>{subLink.desc}</Link>
                          </p>
                        </li>
                      ))}
                    </div>
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="lg:flexCenter hidden gap-4">
          <Link href="/login" className="btn_dark_orange rounded-lg">
            Login
          </Link>
        </div>

        <Menu size={32} onClick={handleMobileNav} className="lg:hidden cursor-pointer" />
      </nav>
      {openMobileNav && (
        <nav className="fixed inset-0 flex items-center justify-center bg-white/95 z-40 lg:hidden">
          <div className="absolute top-5 right-5">
            <X size={32} onClick={handleMobileNav} className="cursor-pointer" aria-label="Close mobile menu" />
          </div>
          <ul className="flex flex-col items-center gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.key} className="relative">
                {link.subMenu ? (
                  <button
                    onClick={() => handleMenuClick(link.key)}
                    className="regular-16 text-blue-base flex items-center cursor-pointer transition-all hover:bg-orange-50 p-1 px-4 rounded-full"
                    aria-haspopup="true"
                    aria-expanded={activeMenu === link.key}
                  >
                    {link.label}
                    <ChevronDown className="ml-2" size={16} />
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    onClick={handleSubMenuClick}
                    className={`regular-16 text-blue-base flex items-center cursor-pointer transition-all hover:bg-orange-50 p-1 px-4 rounded-full ${pathname === link.href ? 'bg-orange-base text-white hover:text-blue-base' : ''}`}
                  >
                    {link.label}
                  </Link>
                )}
                {link.subMenu && activeMenu === link.key && (
                  <div className="mt-2 w-full bg-white shadow-lg rounded-lg p-4">
                    <ul className="flex flex-col gap-2">
                      {link.subMenu.map((subLink) => (
                        <li key={subLink.key} className="mb-2 p-2 last:mb-0 hover:bg-orange-50">
                          <Link href={subLink.href} className="regular-12 text-generic-700" onClick={handleSubMenuClick}>
                            {subLink.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
