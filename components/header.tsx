

"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Palette } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Resources", href: "/resources" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-opacity-10 shadow-sm">
      <div className="container-centered">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-12 h-12 rounded-lg overflow-hidden">
              <Image
                src="/sst-logo.png"
                alt="Seek, Strive & Thrive Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-lg" style={{ color: 'var(--color-primary)' }}>
                Seek, Strive & Thrive
              </div>
              <div className="text-sm text-gray-600">Licensed Professional Counselor</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation?.map((item) => (
              <Link
                key={item?.name}
                href={item?.href ?? '/'}
                className={`text-sm font-medium transition-colors hover:text-opacity-80 ${
                  pathname === item?.href
                    ? 'font-semibold'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
                style={{
                  color: pathname === item?.href ? 'var(--color-primary)' : undefined
                }}
              >
                {item?.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Theme Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-10 w-10"
                  aria-label="Switch theme"
                  onClick={(e) => {
                    // Explicitly handle click for dropdown trigger
                    e.stopPropagation();
                  }}
                >
                  <Palette className="h-5 w-5" />
                  <span className="sr-only">Switch theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem 
                  onClick={(e) => {
                    e.preventDefault();
                    setTheme('growth');
                  }}
                  className={`cursor-pointer ${theme === 'growth' ? 'bg-gray-100 font-semibold' : ''}`}
                >
                  <span className="flex items-center justify-between w-full">
                    Growth & Renewal
                    {theme === 'growth' && <span className="ml-2">✓</span>}
                  </span>
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={(e) => {
                    e.preventDefault();
                    setTheme('serene');
                  }}
                  className={`cursor-pointer ${theme === 'serene' ? 'bg-gray-100 font-semibold' : ''}`}
                >
                  <span className="flex items-center justify-between w-full">
                    Serene Confidence
                    {theme === 'serene' && <span className="ml-2">✓</span>}
                  </span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Contact Button - Desktop */}
            <div className="hidden md:block">
              <Link href="tel:(804) 207-8414">
                <Button className="btn-primary flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>(804) 207-8414</span>
                </Button>
              </Link>
            </div>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col h-full">
                  {/* Mobile Logo */}
                  <div className="flex items-center space-x-3 mb-8">
                    <div className="relative w-12 h-12 rounded-lg overflow-hidden">
                      <Image
                        src="/sst-logo.png"
                        alt="Seek, Strive & Thrive Logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <div className="font-bold text-lg" style={{ color: 'var(--color-primary)' }}>
                        Seek, Strive & Thrive
                      </div>
                      <div className="text-sm text-gray-600">Licensed Professional Counselor</div>
                    </div>
                  </div>

                  {/* Mobile Navigation */}
                  <nav className="flex flex-col space-y-4 mb-8">
                    {navigation?.map((item) => (
                      <Link
                        key={item?.name}
                        href={item?.href ?? '/'}
                        onClick={() => setIsOpen(false)}
                        className={`text-lg font-medium transition-colors py-2 px-4 rounded-lg ${
                          pathname === item?.href
                            ? 'theme-secondary font-semibold'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        {item?.name}
                      </Link>
                    ))}
                  </nav>

                  {/* Mobile Contact */}
                  <div className="mt-auto space-y-4">
                    <Link href="tel:(804) 207-8414" onClick={() => setIsOpen(false)}>
                      <Button className="btn-primary w-full flex items-center justify-center space-x-2">
                        <Phone className="h-4 w-4" />
                        <span>(804) 207-8414</span>
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

