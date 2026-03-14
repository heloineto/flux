'use client';

import { useEffect, useState } from 'react';
import { Check, Copy, GitBranch, Play, Terminal } from '@phosphor-icons/react';
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
      className="group cursor-pointer w-fit max-w-full mx-auto"
      onClick={handleCopy}
    >
      <div className="relative flex items-center justify-between md:justify-center gap-2 px-4 py-3 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200/60 hover:border-indigo-200 transition-all shadow-sm ring-1 ring-transparent hover:ring-indigo-100">
        <span className="font-mono text-xs md:text-sm text-gray-500 select-all truncate">
          npm create flux-app
        </span>
        <div className="hidden md:block w-px h-4 bg-gray-300/40"></div>
        {copied ? (
          <Check className="size-3.5 text-green-500 shrink-0" />
        ) : (
          <Copy className="size-3.5 text-gray-400 hover:text-indigo-600 transition-colors shrink-0" />
        )}
      </div>
      <div className="mt-4 text-[10px] font-mono text-gray-400 uppercase tracking-widest opacity-60 flex items-center justify-center gap-3">
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
    <section className="relative pt-24 pb-12 md:pt-36 md:pb-24 overflow-hidden select-none bg-gray-50">
      <div className="absolute inset-0 pointer-events-none mask-[linear-gradient(to_bottom,black_0%,black_20%,rgba(0,0,0,0.8)_40%,rgba(0,0,0,0.4)_70%,transparent_100%)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-size-[40px_40px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808004_1px,transparent_1px),linear-gradient(to_bottom,#80808004_1px,transparent_1px)] bg-size-[10px_10px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#8080800C_1px,transparent_1px)] bg-size-[40px_40px] bg-position-[center_center]"></div>
        <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-indigo-500/1.5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-purple-500/1.5 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center text-center">
        <div className="animate-[slide-up_0.6s_ease-out_forwards] opacity-0 [animation-delay:0ms] inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-600/5 border border-indigo-600/10 text-indigo-600/60 mb-6 font-mono text-[10px] uppercase tracking-widest font-bold ring-1 ring-indigo-600/5">
          <Terminal className="size-3" />
          <span>Now in beta</span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-[88px] font-bold tracking-[-0.04em] text-gray-900 mb-6 md:mb-8 max-w-5xl mx-auto leading-[1.1] text-balance">
          Your team{' '}
          <span className="font-serif italic font-normal text-indigo-600 inline-flex items-center gap-[0.2em]">
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

        <p className="text-lg/relaxed md:text-xl text-gray-500 mb-8 md:mb-10 max-w-2xl mx-auto text-balance font-medium tracking-tight px-4">
          Design, deploy, and manage conversational AI agents across WhatsApp,
          Telegram, Instagram, and more - with a visual workflow editor anyone
          on your team can use.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-12 px-6">
          <Link
            href="/login"
            className="w-full sm:w-auto flex items-center justify-center gap-2 h-14 px-10 text-[15px] font-semibold text-white bg-indigo-600 rounded-2xl hover:bg-indigo-700 hover:-translate-y-0.5 transition-all shadow-lg shadow-indigo-600/20 active:scale-95"
          >
            <Play weight="fill" className="size-4" />
            Get Started Free
          </Link>
          <a
            href="/docs"
            className="w-full sm:w-auto flex items-center justify-center gap-2 h-14 px-10 text-[15px] font-semibold text-gray-700 bg-white border border-gray-200 rounded-2xl hover:bg-gray-50 hover:-translate-y-0.5 transition-all shadow-sm active:scale-95"
          >
            <GitBranch className="size-4" />
            View Docs
          </a>
        </div>

        <CopyCommand />
      </div>
    </section>
  );
}
