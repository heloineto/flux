'use client';

import {
  BracketsAngleIcon,
  UsersThreeIcon,
  WarningIcon,
} from '@phosphor-icons/react/dist/ssr';

export function ProblemSection() {
  return (
    <section className="relative overflow-hidden bg-[#111111] py-32 text-white select-none">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-size-[40px_40px] opacity-[0.07]"></div>
      <div className="absolute top-0 left-0 z-10 h-40 w-full bg-linear-to-b from-[#111111] to-transparent"></div>
      <div className="absolute bottom-0 left-0 z-10 h-40 w-full bg-linear-to-t from-[#111111] to-transparent"></div>

      <div className="relative z-20 container mx-auto px-6">
        <div className="mb-24 max-w-3xl">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1 font-mono text-[10px] font-bold tracking-widest text-red-400 uppercase">
            <WarningIcon className="size-3" />
            <span>The problem</span>
          </div>
          <h2 className="mb-8 text-5xl leading-[0.9] font-bold tracking-tighter text-white md:text-7xl">
            Building agents is <br />
            <span className="font-serif font-normal text-white/50 italic">
              harder than it should be
            </span>
          </h2>
          <p className="max-w-2xl text-xl/relaxed font-medium text-white/50">
            Every team hits the same walls: fragile state, channel sprawl, and a
            wall between developers and the rest of the team.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <ProblemCard
            icon={<BracketsAngleIcon className="size-6 text-red-400" />}
            visual={<StateManagementVisual />}
            title="State management hell"
            description="Tracking where a user is in a conversation, what they've answered, and how to recover from errors requires massive boilerplate and fragile logic."
          />

          <ProblemCard
            icon={<WarningIcon className="size-6 text-red-400" />}
            visual={<ChannelFragmentationVisual />}
            title="Channel fragmentation"
            description="WhatsApp, Telegram, Instagram - each has its own API quirks, message formats, and delivery rules. You end up with five separate codebases."
          />

          <ProblemCard
            icon={<UsersThreeIcon className="size-6 text-red-400" />}
            visual={<TeamGapVisual />}
            title="The code-content gap"
            description="Non-technical team members can't make simple copy changes without filing tickets. Developers become bottlenecks for business logic."
          />
        </div>
      </div>
    </section>
  );
}

interface ProblemCardProps {
  icon: React.ReactNode;
  visual: React.ReactNode;
  title: string;
  description: string;
}

function ProblemCard({ visual, title, description }: ProblemCardProps) {
  return (
    <div className="group relative flex min-h-[360px] flex-col overflow-hidden rounded-2xl border border-white/5 bg-[#1A1A1A] p-8 transition-colors duration-500 hover:border-white/10 hover:bg-[#222]">
      <div className="relative flex w-full flex-1 items-center justify-center">
        {visual}
      </div>
      <div className="mt-8">
        <h3 className="mb-3 text-xl font-bold text-white">{title}</h3>
        <p className="text-sm/relaxed font-medium text-white/40">
          {description}
        </p>
      </div>
    </div>
  );
}

function StateManagementVisual() {
  return (
    <div className="relative h-32 w-40">
      <div className="absolute top-0 left-4 flex size-24 items-center justify-center rounded-lg border border-white/20 bg-white/5">
        <span className="font-mono text-[10px] text-white/30">step 1</span>
      </div>
      <div className="absolute top-6 left-20 flex size-24 animate-[pulse_4s_infinite] items-center justify-center rounded-lg border border-red-500/50 bg-red-500/10">
        <span className="font-mono text-[10px] text-red-400">step 3?</span>
        <div className="absolute -top-3 left-0 flex w-full justify-center opacity-0 transition-opacity group-hover:opacity-100">
          <span className="rounded-sm bg-red-500 px-1 font-mono text-[9px] text-white shadow-lg">
            lost state
          </span>
        </div>
      </div>
    </div>
  );
}

function ChannelFragmentationVisual() {
  const channels = ['WA', 'TG', 'IG', 'FB'];
  return (
    <div className="relative flex h-32 w-full items-center justify-center">
      <div className="grid grid-cols-2 gap-2">
        {channels.map((channel) => (
          <div
            key={channel}
            className="flex h-10 w-14 items-center justify-center rounded-sm border border-red-500/20 bg-white/5"
          >
            <span className="font-mono text-[10px] text-red-400">
              {channel}
            </span>
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
        <div className="flex items-center gap-2 rounded-lg border border-red-500/30 bg-black/80 px-4 py-2 shadow-xl backdrop-blur-md">
          <div className="size-2 animate-pulse rounded-full bg-red-500"></div>
          <span className="font-mono text-xs font-bold text-red-400">
            4x CODEBASES
          </span>
        </div>
      </div>
    </div>
  );
}

function TeamGapVisual() {
  return (
    <div className="flex items-center gap-4">
      <div className="group/dev relative">
        <div className="flex size-16 items-center justify-center rounded-full border border-indigo-500/30 bg-indigo-600/20">
          <span className="font-mono text-[10px] text-indigo-400">DEV</span>
        </div>
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 font-mono text-[9px] tracking-wider whitespace-nowrap text-white/30 uppercase opacity-0 transition-opacity group-hover/dev:opacity-100">
          ticket required
        </div>
      </div>
      <div className="flex flex-col gap-2 opacity-30 blur-[1px] transition-all group-hover:opacity-50 group-hover:blur-none">
        <div className="flex size-8 items-center justify-center rounded-full border border-white/10 bg-green-500/50">
          <span className="text-[8px] text-white">PM</span>
        </div>
        <div className="flex size-8 items-center justify-center rounded-full border border-white/10 bg-yellow-500/50">
          <span className="text-[8px] text-white">CS</span>
        </div>
      </div>
    </div>
  );
}
