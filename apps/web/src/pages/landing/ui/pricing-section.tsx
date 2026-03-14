'use client';

import {
  ArrowRightIcon,
  CheckIcon,
  CodeIcon,
  HeartIcon,
} from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';

const FEATURES = [
  'Unlimited flows and agents',
  'Multi-channel deployment',
  'Visual workflow editor',
  'AI response nodes',
  'Real-time admin dashboard',
  'Human handoff support',
  'Analytics and tracking',
  'Static analysis (dead code, loops)',
];

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-white py-24 md:py-32"
    >
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-5xl leading-[0.9] font-bold tracking-tighter text-gray-900 md:text-7xl">
              Simple pricing
              <br />
              <span className="font-serif font-normal text-indigo-600 italic">
                no surprises
              </span>
            </h2>
            <p className="mx-auto max-w-xl text-xl font-medium text-gray-500">
              Start building for free. Scale when you need to.
            </p>
          </div>

          <div className="group relative">
            <div className="absolute -inset-px rounded-[2.1rem] bg-linear-to-r from-indigo-500/30 via-purple-500/30 to-pink-500/30 opacity-30 blur-xl transition-opacity duration-1000 group-hover:opacity-50"></div>

            <div className="relative overflow-hidden rounded-4xl border border-gray-200/80 bg-white shadow-2xl ring-1 ring-black/5">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <FreePlanCard />
                <FeatureListCard />
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://github.com/fluxapp/flux"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 transition-colors hover:text-indigo-600"
            >
              <HeartIcon weight="fill" className="size-4 text-pink-500" />
              Support Flux development on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function FreePlanCard() {
  return (
    <div className="relative flex flex-col justify-between overflow-hidden border-b border-gray-200 bg-gray-50 p-8 md:border-r md:border-b-0 md:p-14">
      <div className="absolute inset-0 bg-[radial-gradient(#00000008_1px,transparent_1px)] bg-size-[16px_16px]"></div>

      <div className="relative z-10">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-black px-3 py-1 text-[11px] font-bold tracking-wider text-white uppercase ring-1 ring-white/20">
          <CodeIcon className="size-3" />
          MIT License
        </div>
        <h3 className="mb-2 text-2xl font-bold text-gray-900">Free</h3>
        <p className="mb-8 text-sm/relaxed text-gray-500">
          Full access to the platform.
          <br />
          Self-host or use our cloud.
        </p>
      </div>

      <div className="relative z-10">
        <div className="mb-2 flex items-baseline gap-2">
          <span className="text-7xl font-bold tracking-tighter text-gray-900">
            $0
          </span>
        </div>
        <p className="mb-8 font-mono text-xs tracking-wider text-gray-400 uppercase">
          Unlimited usage
        </p>

        <Link
          href="/login"
          className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 text-sm font-semibold text-white transition-colors hover:bg-indigo-700"
        >
          <span>Get Started</span>
          <ArrowRightIcon className="size-4 opacity-50 transition-transform group-hover:translate-x-1" />
        </Link>
        <p className="mt-4 text-center text-[10px] text-gray-400">
          No credit card required
        </p>
      </div>
    </div>
  );
}

function FeatureListCard() {
  return (
    <div className="flex flex-col justify-center bg-white p-8 md:p-14">
      <h4 className="mb-8 text-sm font-bold tracking-widest text-gray-900 uppercase">
        Everything included
      </h4>
      <ul className="space-y-5">
        {FEATURES.map((feature) => (
          <li key={feature} className="group flex items-center gap-3">
            <div className="flex size-5 shrink-0 items-center justify-center rounded-full border border-green-100 bg-green-50 shadow-sm transition-transform group-hover:scale-110">
              <CheckIcon className="size-3 text-green-600" weight="bold" />
            </div>
            <span className="text-[15px] font-medium text-gray-500 transition-colors group-hover:text-indigo-600">
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
