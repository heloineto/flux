'use client';

import { useEffect, useState } from 'react';
import {
  CheckIcon,
  CopyIcon,
  GitBranchIcon,
  PlayIcon,
  TerminalIcon,
} from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';

const ROTATING_WORDS = ['designs', 'deploys', 'manages', 'ships'];

function useRotatingWord(words: string[], intervalMs = 3000) {
  const [index, setIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsExiting(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setIsExiting(false);
      }, 500);
    }, intervalMs);

    return () => clearInterval(timer);
  }, [words.length, intervalMs]);

  return { word: words[index], isExiting };
}

function CopyCommand() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    void navigator.clipboard.writeText('npm create flux-app');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="group mx-auto w-fit max-w-full cursor-pointer"
      onClick={handleCopy}
    >
      <div className="relative flex items-center justify-between gap-2 rounded-xl border border-gray-200/60 bg-white/60 px-4 py-3 shadow-sm ring-1 ring-transparent backdrop-blur-sm transition-all hover:border-indigo-200 hover:ring-indigo-100 md:justify-center">
        <span className="truncate font-mono text-xs text-gray-500 select-all md:text-sm">
          npm create flux-app
        </span>
        <div className="hidden h-4 w-px bg-gray-300/40 md:block"></div>
        {copied ? (
          <CheckIcon className="size-3.5 shrink-0 text-green-500" />
        ) : (
          <CopyIcon className="size-3.5 shrink-0 text-gray-400 transition-colors hover:text-indigo-600" />
        )}
      </div>
      <div className="mt-4 flex items-center justify-center gap-3 font-mono text-[10px] tracking-widest text-gray-400 uppercase opacity-60">
        <span>MIT License</span>
        <span className="size-1 rounded-full bg-gray-400/30"></span>
        <span>Multi-channel</span>
        <span className="size-1 rounded-full bg-gray-400/30"></span>
        <span>Visual editor</span>
      </div>
    </div>
  );
}

export function HeroSection() {
  const { word, isExiting } = useRotatingWord(ROTATING_WORDS);

  return (
    <section className="relative overflow-hidden bg-gray-50 pt-24 pb-12 select-none md:pt-36 md:pb-24">
      <div className="pointer-events-none absolute inset-0 mask-[linear-gradient(to_bottom,black_0%,black_20%,rgba(0,0,0,0.8)_40%,rgba(0,0,0,0.4)_70%,transparent_100%)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-size-[40px_40px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808004_1px,transparent_1px),linear-gradient(to_bottom,#80808004_1px,transparent_1px)] bg-size-[10px_10px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#8080800C_1px,transparent_1px)] bg-size-[40px_40px] bg-position-[center_center]"></div>
        <div className="absolute top-[-20%] left-[-10%] h-[70vw] w-[70vw] rounded-full bg-indigo-500/1.5 blur-[120px]"></div>
        <div className="absolute right-[-10%] bottom-[-10%] h-[60vw] w-[60vw] rounded-full bg-purple-500/1.5 blur-[120px]"></div>
      </div>

      <div className="relative z-10 container mx-auto flex flex-col items-center px-4 text-center md:px-6">
        <div className="mb-6 inline-flex animate-[slide-up_0.6s_ease-out_forwards] items-center gap-2 rounded-full border border-indigo-600/10 bg-indigo-600/5 px-3 py-1 font-mono text-[10px] font-bold tracking-widest text-indigo-600/60 uppercase opacity-0 ring-1 ring-indigo-600/5 [animation-delay:0ms]">
          <TerminalIcon className="size-3" />
          <span>Now in beta</span>
        </div>

        <h1 className="mx-auto mb-6 max-w-5xl text-5xl leading-[1.1] font-bold tracking-[-0.04em] text-balance text-gray-900 sm:text-6xl md:mb-8 md:text-[88px]">
          Your team{' '}
          <span className="inline-flex items-center gap-[0.2em] font-serif font-normal text-indigo-600 italic">
            builds,{' '}
            <span
              key={word}
              className={`inline-block ${
                isExiting
                  ? 'animate-[text-exit_0.5s_ease-in_forwards]'
                  : 'animate-[text-reveal_0.5s_ease-out_forwards]'
              }`}
            >
              {word}
            </span>
          </span>{' '}
          AI agents
        </h1>

        <p className="mx-auto mb-8 max-w-2xl px-4 text-lg/relaxed font-medium tracking-tight text-balance text-gray-500 md:mb-10 md:text-xl">
          Design, deploy, and manage conversational AI agents across WhatsApp,
          Telegram, Instagram, and more - with a visual workflow editor anyone
          on your team can use.
        </p>

        <div className="mb-12 flex w-full flex-col items-center justify-center gap-4 px-6 sm:w-auto sm:flex-row">
          <Link
            href="/login"
            className="flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-10 text-[15px] font-semibold text-white shadow-lg shadow-indigo-600/20 transition-all hover:-translate-y-0.5 hover:bg-indigo-700 active:scale-95 sm:w-auto"
          >
            <PlayIcon weight="fill" className="size-4" />
            Get Started Free
          </Link>
          <a
            href="/docs"
            className="flex h-14 w-full items-center justify-center gap-2 rounded-2xl border border-gray-200 bg-white px-10 text-[15px] font-semibold text-gray-700 shadow-sm transition-all hover:-translate-y-0.5 hover:bg-gray-50 active:scale-95 sm:w-auto"
          >
            <GitBranchIcon className="size-4" />
            View Docs
          </a>
        </div>

        <CopyCommand />
      </div>
    </section>
  );
}
