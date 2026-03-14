'use client';

import { useEffect, useState } from 'react';
import {
  CaretRight,
  GithubLogo,
  List,
  MagicWand,
  X,
} from '@phosphor-icons/react';
import Link from 'next/link';
import { GITHUB_URL } from '@/shared/config/constants';

const navLinks = [
  { name: 'Features', href: '#features' },
  { name: 'Use Cases', href: '#use-cases' },
  { name: 'Pricing', href: '#pricing' },
];

function handleNavClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  e.preventDefault();
  const id = href.replace('#', '');
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

function NavLinks({ onClick }: { onClick?: () => void }) {
  return (
    <>
      {navLinks.map((item) => (
        <a
          key={item.name}
          href={item.href}
          onClick={(e) => {
            onClick?.();
            handleNavClick(e, item.href);
          }}
          className="text-[13px] font-medium tracking-wide text-gray-500 transition-colors hover:text-indigo-600"
        >
          {item.name}
        </a>
      ))}
    </>
  );
}

interface NavbarProps {
  isScrolled: boolean;
}

export function Navbar({ isScrolled }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
  }, [isMobileMenuOpen]);

  const navContainerClass = isMobileMenuOpen
    ? 'bg-white border-transparent shadow-none ring-0'
    : isScrolled
      ? 'bg-white/85 backdrop-blur-xl shadow-lg shadow-black/[0.03] border-gray-200/80 ring-1 ring-black/5'
      : 'bg-white/50 backdrop-blur-md border-gray-200/60 shadow-sm shadow-black/[0.02] ring-1 ring-white/50';

  const mobileMenuClass = isMobileMenuOpen
    ? 'opacity-100 pointer-events-auto translate-y-0'
    : 'opacity-0 pointer-events-none -translate-y-4';

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-60 flex justify-center px-4 pt-4 transition-all duration-300 md:pt-6">
        <nav
          className={`w-full max-w-5xl rounded-full border transition-all duration-500 ${navContainerClass} relative flex items-center justify-between px-4 py-2.5 md:px-5`}
        >
          <Link
            href="/"
            className="group flex items-center gap-2.5 select-none"
          >
            <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-indigo-600 text-white shadow-lg ring-1 shadow-indigo-600/20 ring-white/20 transition-transform duration-500 group-hover:scale-105 group-hover:rotate-12">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 3L4 7V12C4 16.418 7.582 20.5 12 21C16.418 20.5 20 16.418 20 12V7L12 3Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 12L11 14L15 10"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="font-sans text-lg font-bold tracking-tight whitespace-nowrap text-indigo-600 transition-opacity group-hover:opacity-80">
              Flux
            </span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <NavLinks />
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/heloineto/flux"
              target="_blank"
              rel="noreferrer"
              className="hidden h-9 items-center gap-2 rounded-full border border-gray-200 bg-white px-4 text-sm font-medium text-gray-700 transition-all hover:bg-gray-50 md:flex"
            >
              <GithubLogo weight="fill" className="size-4" />
              <span>GitHub</span>
            </a>

            <Link
              href="/login"
              className="hidden h-9 items-center gap-2 rounded-full bg-indigo-600 px-5 text-[13px] font-medium text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-indigo-700 md:flex"
            >
              Get Started
            </Link>

            <button
              type="button"
              className="rounded-full p-2 text-indigo-600 transition-colors hover:bg-black/5 active:scale-90 md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="size-5" />
              ) : (
                <List className="size-5" />
              )}
            </button>
          </div>
        </nav>
      </div>

      <div
        className={`fixed inset-0 z-55 flex flex-col overflow-y-auto bg-white px-6 pt-24 transition-all duration-500 md:hidden ${mobileMenuClass}`}
      >
        <div className="flex flex-col gap-2">
          {navLinks.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                setIsMobileMenuOpen(false);
                handleNavClick(e, item.href);
              }}
              className="group flex items-center justify-between border-b border-gray-100 py-4 text-3xl font-bold text-indigo-600"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {item.name}
              <CaretRight className="size-6 -translate-x-4 text-gray-400 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
            </a>
          ))}
          <div className="mt-12 space-y-4">
            <Link
              href="/login"
              className="flex h-14 w-full items-center justify-between rounded-2xl bg-indigo-600 px-6 text-base font-semibold text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span>Get Started</span>
              <MagicWand className="size-4" />
            </Link>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="flex h-14 w-full items-center justify-center gap-2 rounded-2xl border border-gray-200 bg-gray-50 text-base font-semibold text-gray-700"
            >
              <GithubLogo weight="fill" className="size-5" />
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
