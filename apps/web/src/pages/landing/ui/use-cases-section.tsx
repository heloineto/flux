'use client';

import {
  GaugeIcon,
  ShuffleIcon,
  TerminalIcon,
  UsersIcon,
} from '@phosphor-icons/react/dist/ssr';

export function UseCasesSection() {
  return (
    <section
      id="use-cases"
      className="relative overflow-hidden border-t border-white/5 bg-[#050505] py-32 text-white"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-size-[40px_40px] opacity-20"></div>
      <div className="pointer-events-none absolute top-0 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-indigo-500/5 blur-[120px]"></div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="mx-auto mb-24 flex max-w-4xl flex-col items-center text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[10px] font-bold tracking-widest text-white/60 uppercase">
            <ShuffleIcon className="size-3" />
            <span>Use cases</span>
          </div>
          <h2 className="mb-8 text-5xl leading-[0.9] font-bold tracking-tighter text-white md:text-7xl">
            Built for every <br />
            <span className="font-serif font-normal text-white/50 italic">
              role on the team
            </span>
          </h2>
          <p className="max-w-2xl text-xl/relaxed font-medium text-balance text-white/50">
            Developers get code-first control. Non-technical teams get a visual
            editor. Ops teams get a real-time dashboard. Everyone wins.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          <UseCaseCard
            color="cyan"
            icon={<TerminalIcon className="size-6" />}
            title="Developers"
            subtitle="Code-first flows"
            description="Define agents in TypeScript with full type safety. Use the CLI to scaffold, version with git, and deploy to any environment. The visual editor is always in sync."
            visual={<DeveloperVisual />}
          />

          <UseCaseCard
            color="violet"
            icon={<UsersIcon className="size-6" />}
            title="Non-technical teams"
            subtitle="The visual layer"
            description="Product managers, customer success, and ops can edit messages, configure business hours, and adjust flows - all without touching code."
            visual={<TeamVisual />}
          />

          <UseCaseCard
            color="amber"
            icon={<GaugeIcon className="size-6" />}
            title="Operations"
            subtitle="Real-time dashboard"
            description="View conversations, manage contacts in bulk, export to PDF, trigger handoffs, and monitor agent performance - all from a single admin dashboard."
            visual={<OpsVisual />}
          />
        </div>
      </div>
    </section>
  );
}

type CardColor = 'cyan' | 'violet' | 'amber';

interface UseCaseCardProps {
  color: CardColor;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  visual: React.ReactNode;
}

const colorMap: Record<
  CardColor,
  {
    border: string;
    glow: string;
    icon: string;
    subtitle: string;
    hover: string;
  }
> = {
  cyan: {
    border: 'hover:border-cyan-500/30',
    glow: 'hover:shadow-[0_0_50px_-12px_rgba(6,182,212,0.15)]',
    icon: 'bg-cyan-950/30 border-cyan-500/20 text-cyan-400',
    subtitle: 'text-cyan-400',
    hover: 'from-cyan-500/5',
  },
  violet: {
    border: 'hover:border-violet-500/30',
    glow: 'hover:shadow-[0_0_50px_-12px_rgba(139,92,246,0.15)]',
    icon: 'bg-violet-950/30 border-violet-500/20 text-violet-400',
    subtitle: 'text-violet-400',
    hover: 'from-violet-500/5',
  },
  amber: {
    border: 'hover:border-amber-500/30',
    glow: 'hover:shadow-[0_0_50px_-12px_rgba(245,158,11,0.15)]',
    icon: 'bg-amber-950/30 border-amber-500/20 text-amber-400',
    subtitle: 'text-amber-400',
    hover: 'from-amber-500/5',
  },
};

function UseCaseCard({
  color,
  icon,
  title,
  subtitle,
  description,
  visual,
}: UseCaseCardProps) {
  const colors = colorMap[color];

  return (
    <div
      className={`group relative flex flex-col overflow-hidden rounded-4xl border border-white/5 bg-[#0A0A0A] ${colors.border} transition-all duration-500 ${colors.glow}`}
    >
      <div
        className={`absolute inset-0 bg-linear-to-b ${colors.hover} to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
      ></div>

      <div className="relative z-10 flex-1 p-8">
        <div
          className={`size-12 rounded-xl ${colors.icon} mb-6 flex items-center justify-center border transition-transform group-hover:scale-110`}
        >
          {icon}
        </div>
        <h3 className="mb-2 text-2xl font-bold text-white">{title}</h3>
        <p className={`text-sm ${colors.subtitle} mb-4 font-mono`}>
          {subtitle}
        </p>
        <p className="mb-8 text-sm/relaxed text-gray-400">{description}</p>
        {visual}
      </div>
    </div>
  );
}

function DeveloperVisual() {
  return (
    <div className="rounded-xl border border-white/10 bg-[#050505] p-4 font-mono text-[10px] leading-relaxed text-gray-500 shadow-inner">
      <div className="mb-2 flex items-center gap-2 border-b border-white/5 pb-2">
        <div className="size-2 rounded-full bg-red-500/20"></div>
        <div className="size-2 rounded-full bg-yellow-500/20"></div>
        <div className="size-2 rounded-full bg-green-500/20"></div>
        <div className="ml-auto text-white/20">support.flow.ts</div>
      </div>
      <div>
        <span className="text-cyan-300">greeting</span>
      </div>
      <div className="pl-4">
        <span className="text-white/70">-&gt;</span>{' '}
        <span className="text-cyan-300">classify_intent</span>
      </div>
      <div className="pl-4">
        <span className="text-white/70">-&gt;</span>{' '}
        <span className="text-cyan-300">handle_support</span>
      </div>
      <div className="pl-4">
        <span className="text-white/70">-&gt;</span>{' '}
        <span className="text-cyan-300">human_handoff</span>
      </div>
    </div>
  );
}

function TeamVisual() {
  return (
    <div className="relative flex h-[140px] items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-[#1e1e1e]">
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] bg-size-[12px_12px]"></div>

      <div className="relative w-40 transform rounded-sm border border-violet-500/50 bg-[#0A0A0A] p-3 shadow-2xl transition-transform group-hover:-translate-y-1">
        <div className="absolute -top-3 left-0 rounded-sm bg-violet-500 px-1.5 py-0.5 text-[8px] text-white">
          send_message
        </div>
        <div className="mb-1.5 h-1.5 w-full rounded-sm bg-white/20"></div>
        <div className="mb-1.5 h-1.5 w-2/3 rounded-sm bg-white/20"></div>
        <div className="mt-2 flex h-6 w-full items-center rounded-sm border border-violet-500/30 px-2">
          <span className="text-[8px] text-violet-400">Edit message...</span>
        </div>
      </div>
    </div>
  );
}

function OpsVisual() {
  const statuses = [
    { label: 'Active', value: '142', color: 'text-green-400' },
    { label: 'Waiting', value: '23', color: 'text-amber-400' },
    { label: 'Handed off', value: '8', color: 'text-blue-400' },
  ];

  return (
    <div className="relative flex h-[140px] flex-col justify-center overflow-hidden rounded-xl border border-white/10 bg-[#151515] p-4">
      <div className="space-y-2.5">
        {statuses.map((stat) => (
          <div
            key={stat.label}
            className="flex items-center justify-between rounded-sm border border-white/5 bg-white/5 p-2 transition-colors group-hover:border-amber-500/20"
          >
            <div className="font-mono text-[10px] text-white/60">
              {stat.label}
            </div>
            <div className={`font-mono text-[10px] font-bold ${stat.color}`}>
              {stat.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
