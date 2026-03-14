'use client';

import { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle, Copy } from '@phosphor-icons/react';
import Link from 'next/link';
import { GITHUB_URL } from '@/shared/config/constants';

function useTerminalSteps(totalSteps: number, intervalMs = 2000) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % totalSteps);
    }, intervalMs);
    return () => clearInterval(interval);
  }, [totalSteps, intervalMs]);

  return step;
}

export function FinalCTASection() {
  const [copied, setCopied] = useState(false);
  const terminalStep = useTerminalSteps(4);

  const handleCopy = () => {
    void navigator.clipboard.writeText('npm create flux-app');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative overflow-hidden border-t border-gray-200 bg-white py-32">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] mask-[radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)] bg-size-[64px_64px]"></div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <div className="mb-10">
            <div className="flex items-center gap-3 rounded-full border border-gray-100 bg-white px-6 py-2 text-gray-900 shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,1),0px_10px_20px_-5px_rgba(0,0,0,0.05)]">
              <div className="size-2 animate-pulse rounded-full bg-green-500"></div>
              <span className="font-mono text-xs tracking-widest text-gray-500 uppercase">
                Ready to use
              </span>
            </div>
          </div>

          <h2 className="mb-8 text-6xl leading-[0.9] font-bold tracking-tighter text-balance text-gray-900 md:text-8xl">
            Build agents that <br />
            <span className="font-serif font-light text-indigo-600 italic">
              actually work
            </span>
          </h2>

          <p className="mx-auto mb-10 max-w-xl text-xl/relaxed text-gray-500">
            Join teams already using Flux to build and ship conversational AI
            agents faster than ever.
          </p>

          <div className="mb-12">
            <Link
              href="/login"
              className="inline-flex h-16 items-center gap-2 rounded-2xl bg-indigo-600 px-12 text-lg font-semibold text-white transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-600/20 active:scale-95"
            >
              Get Started Now
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </div>

          <div className="group relative w-full max-w-2xl">
            <div className="absolute -inset-1 rounded-xl bg-linear-to-r from-indigo-600 via-purple-500 to-pink-500 opacity-10 blur-lg transition-opacity duration-1000 group-hover:opacity-30"></div>

            <div className="relative rounded-xl border border-black/5 bg-[#1E1E1E] p-2 shadow-2xl ring-1 ring-black/5">
              <div className="flex items-center border-b border-white/5 bg-white/2 px-4 py-2">
                <div className="flex gap-2">
                  <div className="size-3 rounded-full bg-[#FF5F57]"></div>
                  <div className="size-3 rounded-full bg-[#FEBC2E]"></div>
                  <div className="size-3 rounded-full bg-[#28C840]"></div>
                </div>
                <div className="mx-auto font-mono text-[10px] text-white/30">
                  bash - 80x24
                </div>
              </div>

              <div className="flex h-[140px] flex-col justify-center p-6 text-left font-mono text-sm md:text-base">
                <div className="flex items-center gap-3 text-white/90">
                  <span className="text-green-400">-&gt;</span>
                  <span className="text-blue-400">~</span>
                  <span>npm create flux-app</span>
                </div>

                <div className="mt-4 space-y-1 text-xs text-white/50 md:text-sm">
                  <div
                    className={`transition-opacity duration-300 ${terminalStep >= 1 ? 'opacity-100' : 'opacity-0'}`}
                  >
                    <span className="text-gray-500">checkmark</span> Creating
                    Flux project...
                  </div>
                  <div
                    className={`transition-opacity duration-300 ${terminalStep >= 2 ? 'opacity-100' : 'opacity-0'}`}
                  >
                    <span className="text-gray-500">checkmark</span> Installing
                    dependencies...
                  </div>
                  <div
                    className={`transition-opacity duration-300 ${terminalStep >= 3 ? 'opacity-100' : 'opacity-0'} text-green-400`}
                  >
                    <span className="text-green-500">checkmark</span> Ready.
                    Run: bun dev
                  </div>
                </div>
              </div>

              <div className="absolute right-6 bottom-6">
                <button
                  type="button"
                  onClick={handleCopy}
                  className="flex items-center gap-2 font-mono text-xs text-white/40 transition-colors hover:text-white"
                >
                  {copied ? (
                    <CheckCircle className="size-4 text-green-400" />
                  ) : (
                    <Copy className="size-4" />
                  )}
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </div>
          </div>

          <div className="mt-12 flex items-center gap-6 text-sm text-gray-500">
            <a href="/docs" className="transition-colors hover:text-indigo-600">
              Documentation
            </a>
            <span className="opacity-30">-</span>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-indigo-600"
            >
              GitHub
            </a>
            <span className="opacity-30">-</span>
            <a
              href="/docs/roadmap"
              className="transition-colors hover:text-indigo-600"
            >
              Roadmap
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
