'use client';

import { BracketsAngle, UsersThree, Warning } from '@phosphor-icons/react';

export function ProblemSection() {
  return (
    <section className="py-32 bg-[#111111] text-white relative overflow-hidden select-none">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-size-[40px_40px] opacity-[0.07]"></div>
      <div className="absolute top-0 left-0 w-full h-40 bg-linear-to-b from-[#111111] to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-40 bg-linear-to-t from-[#111111] to-transparent z-10"></div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="mb-24 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 mb-8 font-mono text-[10px] uppercase tracking-widest font-bold">
            <Warning className="size-3" />
            <span>The problem</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-[0.9] tracking-tighter text-white">
            Building agents is{' '}
            <br />
            <span className="font-serif italic text-white/50 font-normal">
              harder than it should be
            </span>
          </h2>
          <p className="text-xl/relaxed text-white/50 max-w-2xl font-medium">
            Every team hits the same walls: fragile state, channel sprawl, and a
            wall between developers and the rest of the team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProblemCard
            icon={<BracketsAngle className="size-6 text-red-400" />}
            visual={<StateManagementVisual />}
            title="State management hell"
            description="Tracking where a user is in a conversation, what they've answered, and how to recover from errors requires massive boilerplate and fragile logic."
          />

          <ProblemCard
            icon={<Warning className="size-6 text-red-400" />}
            visual={<ChannelFragmentationVisual />}
            title="Channel fragmentation"
            description="WhatsApp, Telegram, Instagram - each has its own API quirks, message formats, and delivery rules. You end up with five separate codebases."
          />

          <ProblemCard
            icon={<UsersThree className="size-6 text-red-400" />}
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
    <div className="group relative bg-[#1A1A1A] rounded-2xl p-8 hover:bg-[#222] transition-colors duration-500 overflow-hidden min-h-[360px] flex flex-col border border-white/5 hover:border-white/10">
      <div className="flex-1 relative w-full flex items-center justify-center">
        {visual}
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
        <p className="text-sm/relaxed text-white/40 font-medium">
          {description}
        </p>
      </div>
    </div>
  );
}

function StateManagementVisual() {
  return (
    <div className="relative w-40 h-32">
      <div className="absolute top-0 left-4 size-24 border border-white/20 rounded-lg bg-white/5 flex items-center justify-center">
        <span className="font-mono text-[10px] text-white/30">step 1</span>
      </div>
      <div className="absolute top-6 left-20 size-24 border border-red-500/50 rounded-lg bg-red-500/10 flex items-center justify-center animate-[pulse_4s_infinite]">
        <span className="font-mono text-[10px] text-red-400">step 3?</span>
        <div className="absolute -top-3 left-0 w-full flex justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="bg-red-500 text-white text-[9px] px-1 rounded-sm font-mono shadow-lg">
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
    <div className="relative w-full h-32 flex items-center justify-center">
      <div className="grid grid-cols-2 gap-2">
        {channels.map((channel) => (
          <div
            key={channel}
            className="w-14 h-10 rounded-sm bg-white/5 border border-red-500/20 flex items-center justify-center"
          >
            <span className="font-mono text-[10px] text-red-400">{channel}</span>
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
        <div className="bg-black/80 backdrop-blur-md border border-red-500/30 px-4 py-2 rounded-lg flex items-center gap-2 shadow-xl">
          <div className="size-2 rounded-full bg-red-500 animate-pulse"></div>
          <span className="text-xs font-mono text-red-400 font-bold">
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
      <div className="relative group/dev">
        <div className="size-16 rounded-full bg-indigo-600/20 flex items-center justify-center border border-indigo-500/30">
          <span className="font-mono text-[10px] text-indigo-400">DEV</span>
        </div>
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[9px] font-mono text-white/30 uppercase tracking-wider opacity-0 group-hover/dev:opacity-100 transition-opacity whitespace-nowrap">
          ticket required
        </div>
      </div>
      <div className="flex flex-col gap-2 opacity-30 blur-[1px] group-hover:blur-none group-hover:opacity-50 transition-all">
        <div className="size-8 rounded-full bg-green-500/50 border border-white/10 flex items-center justify-center">
          <span className="text-[8px] text-white">PM</span>
        </div>
        <div className="size-8 rounded-full bg-yellow-500/50 border border-white/10 flex items-center justify-center">
          <span className="text-[8px] text-white">CS</span>
        </div>
      </div>
    </div>
  );
}
