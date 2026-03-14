'use client';

import {
  BinocularsIcon,
  ChartBarIcon,
  GraphIcon,
  MagicWandIcon,
  ShieldCheckIcon,
  StackIcon,
} from '@phosphor-icons/react/dist/ssr';

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative overflow-hidden border-b border-gray-200/60 bg-gray-50 py-32"
    >
      <div className="pointer-events-none absolute top-0 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-indigo-500/5 blur-[120px]"></div>

      <div className="relative z-10 container mx-auto mb-24 px-6">
        <div className="max-w-4xl">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-indigo-600/10 bg-indigo-600/5 px-3 py-1 font-mono text-[10px] font-bold tracking-widest text-indigo-600/60 uppercase">
            <StackIcon className="size-3" />
            Features
          </div>
          <h2 className="mb-8 text-5xl leading-[1.1] font-bold tracking-tighter text-gray-900 md:text-7xl">
            Everything you need <br />
            <span className="font-serif font-normal text-indigo-600 italic">
              to ship agents
            </span>
          </h2>
          <p className="max-w-2xl text-xl/relaxed font-medium text-balance text-gray-500">
            From visual flow design to production monitoring - Flux handles the
            full lifecycle of conversational AI agents.
          </p>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid auto-rows-[minmax(340px,auto)] grid-cols-1 gap-6 md:grid-cols-12">
          <VisualEditorCard />
          <AINodesCard />
          <MultiChannelCard />
          <SmartInputCard />
          <AnalyticsCard />
        </div>
      </div>
    </section>
  );
}

function VisualEditorCard() {
  return (
    <div className="group relative flex flex-col justify-between overflow-hidden rounded-[2.5rem] border border-gray-200 bg-white p-8 transition-all duration-700 hover:shadow-2xl hover:shadow-indigo-500/5 md:col-span-7 md:p-12">
      <div className="pointer-events-none absolute top-0 right-0 h-full w-[60%] bg-linear-to-l from-gray-50 to-transparent"></div>

      <div className="relative z-10 max-w-[50%]">
        <div className="mb-6 flex size-12 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-lg shadow-indigo-600/20">
          <GraphIcon className="size-6" />
        </div>
        <h3 className="mb-4 text-3xl font-bold tracking-tight text-gray-900">
          Visual Workflow Editor
        </h3>
        <p className="text-lg/relaxed text-gray-500">
          Drag-and-drop flow builder with multi-file support, auto layout, fuzzy
          search, and a Figma-inspired sidebar - fully interchangeable with
          code.
        </p>
      </div>

      <div className="absolute top-[10%] right-[-20px] bottom-[10%] flex w-[45%] flex-col justify-center transition-transform duration-700 group-hover:-translate-x-4">
        <div className="relative z-20 rotate-2 transform rounded-xl border border-gray-800 bg-[#1e1e1e] p-4 shadow-2xl transition-transform duration-500 group-hover:rotate-0">
          <div className="mb-3 flex gap-1.5 border-b border-white/10 pb-2">
            <div className="size-2 rounded-full bg-red-500/80"></div>
            <div className="size-2 rounded-full bg-yellow-500/80"></div>
            <div className="size-2 rounded-full bg-green-500/80"></div>
          </div>
          <div className="space-y-1.5 font-mono text-[10px]">
            <div className="text-gray-400">{'// greeting.flow.ts'}</div>
            <div>
              <span className="text-purple-400">const</span>{' '}
              <span className="text-blue-300">start</span> ={' '}
              <span className="text-yellow-200">State</span>();
            </div>
            <div>
              <span className="text-purple-400">const</span>{' '}
              <span className="text-blue-300">menu</span> ={' '}
              <span className="text-yellow-200">State</span>();
            </div>
            <div>
              <span className="text-blue-300">start</span>.
              <span className="text-green-300">on</span>(
              <span className="text-orange-300">&apos;reply&apos;</span>,{' '}
              <span className="text-blue-300">menu</span>);
            </div>
          </div>
        </div>

        <div className="relative z-10 my-2 flex h-8 items-center justify-center">
          <div className="h-full w-0.5 bg-gray-200 transition-colors group-hover:bg-indigo-500"></div>
          <div className="absolute bottom-0 size-2 translate-y-[-4px] rotate-45 transform border-r border-b border-gray-200 transition-colors group-hover:border-indigo-500"></div>
        </div>

        <div className="z-10 flex -rotate-1 transform flex-col items-center gap-2 rounded-xl border border-gray-200 bg-white p-3 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] transition-transform duration-500 group-hover:rotate-0">
          <div className="flex h-8 w-28 items-center justify-center rounded-sm border border-gray-200 bg-gray-50 text-[8px] font-bold text-indigo-600">
            Greet Contact
          </div>
          <div className="h-4 w-px bg-gray-200"></div>
          <div className="flex h-8 w-28 items-center justify-center rounded-sm border border-gray-200 bg-gray-50 text-[8px] font-bold text-indigo-600">
            Show Menu
          </div>
        </div>
      </div>
    </div>
  );
}

function AINodesCard() {
  return (
    <div className="group relative flex min-h-[400px] flex-col overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#0A0A0A] p-8 shadow-2xl md:col-span-5 md:p-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#222_0%,transparent_60%)]"></div>

      <div className="relative z-20 mb-auto">
        <div className="mb-3 flex items-center gap-2 font-mono text-[10px] tracking-widest text-indigo-400 uppercase">
          <MagicWandIcon className="size-3" />
          <span>AI-native</span>
        </div>
        <h3 className="mb-2 text-3xl font-bold tracking-tight text-white">
          LLM Nodes
        </h3>
        <p className="text-base/relaxed text-white/60">
          AI response nodes are first-class citizens. Connect LLMs to your flow,
          map outputs to transitions, and branch on AI decisions.
        </p>
      </div>

      <div className="relative mt-8 w-full">
        <div className="space-y-3">
          <div className="flex justify-end">
            <div className="max-w-[85%] rounded-2xl rounded-tr-sm border border-white/10 bg-[#222] px-4 py-3 text-xs text-white shadow-lg">
              Classify this message and route accordingly
            </div>
          </div>
          <div className="flex justify-start">
            <div className="flex items-center gap-2">
              <div className="flex size-6 items-center justify-center rounded-full border border-indigo-500/30 bg-indigo-500/20">
                <MagicWandIcon className="size-3 animate-pulse text-indigo-400" />
              </div>
              <div className="size-1 animate-bounce rounded-full bg-indigo-400 [animation-delay:0ms]"></div>
              <div className="size-1 animate-bounce rounded-full bg-indigo-400 [animation-delay:150ms]"></div>
              <div className="size-1 animate-bounce rounded-full bg-indigo-400 [animation-delay:300ms]"></div>
            </div>
          </div>
          <div className="flex w-full justify-start">
            <div className="relative w-full max-w-[90%] overflow-hidden rounded-xl border border-green-500/20 bg-[#151515] p-3 shadow-lg transition-colors group-hover:border-green-500/40">
              <div className="absolute top-0 left-0 h-full w-0.5 bg-green-500/50"></div>
              <div className="space-y-1.5 pl-2 font-mono text-[10px] text-gray-400">
                <div className="text-green-400">{'+ intent: "support"'}</div>
                <div className="text-green-400">{'+ confidence: 0.94'}</div>
                <div className="text-green-400">
                  {'+ route: "human_handoff"'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MultiChannelCard() {
  const channels = ['WhatsApp', 'Telegram', 'Instagram', 'Facebook'];
  return (
    <div className="group relative flex min-h-[320px] flex-col justify-between overflow-hidden rounded-[2.5rem] border border-gray-200 bg-white p-8 transition-all hover:border-indigo-200 md:col-span-4 md:p-12">
      <div className="pointer-events-none absolute top-0 right-0 transform p-12 opacity-[0.03] transition-opacity duration-700 group-hover:scale-110 group-hover:opacity-[0.08]">
        <ShieldCheckIcon className="size-3xs" />
      </div>

      <div className="relative z-10 max-w-md">
        <div className="mb-6 flex size-12 items-center justify-center rounded-2xl border border-gray-100 bg-gray-50 text-gray-900 transition-transform group-hover:scale-110">
          <ShieldCheckIcon className="size-6" />
        </div>
        <h3 className="mb-3 text-2xl font-bold text-gray-900">Multi-channel</h3>
        <p className="text-lg/relaxed text-gray-500">
          One agent definition, deployed across all your channels. Flux
          normalizes the differences so you don&apos;t have to.
        </p>
      </div>

      <div className="relative z-10 mt-8 flex flex-wrap gap-2">
        {channels.map((channel) => (
          <div
            key={channel}
            className="flex items-center gap-2 rounded-full border border-gray-100 bg-gray-50 px-3 py-1.5 font-mono text-[11px] font-medium text-gray-600"
          >
            <div className="size-1.5 rounded-full bg-green-500"></div>
            {channel}
          </div>
        ))}
      </div>
    </div>
  );
}

function SmartInputCard() {
  return (
    <div className="group relative flex min-h-[320px] flex-col justify-between overflow-hidden rounded-[2.5rem] border border-gray-200 bg-linear-to-br from-gray-50 via-white to-indigo-50/30 p-8 transition-all hover:border-indigo-200 md:col-span-4 md:p-12">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[20px_20px] opacity-30"></div>
      <div className="size-3xs absolute -top-20 -right-20 rounded-full bg-linear-to-br from-indigo-500/20 to-purple-500/20 opacity-0 blur-[60px] transition-opacity duration-1000 group-hover:opacity-100"></div>

      <div className="relative z-10 max-w-md">
        <div className="mb-6 flex size-12 items-center justify-center rounded-2xl border border-indigo-100/50 bg-indigo-50 text-indigo-600 transition-transform group-hover:scale-110">
          <BinocularsIcon className="size-6" />
        </div>
        <h3 className="mb-3 text-2xl font-bold text-gray-900">
          Smart input handling
        </h3>
        <p className="text-lg/relaxed text-gray-500">
          Built-in normalization, retry limits, timeout detection, and
          contextual reply rewinding - out of the box, for every flow.
        </p>
      </div>

      <div className="relative z-10 mt-8 flex flex-col gap-2">
        {[
          'Accent normalization',
          'Alias matching',
          'Max retry limits',
          'Reply timeout detection',
        ].map((feature) => (
          <div
            key={feature}
            className="flex items-center gap-2 font-mono text-[11px] text-gray-500"
          >
            <div className="size-1.5 rounded-full bg-indigo-500"></div>
            {feature}
          </div>
        ))}
      </div>
    </div>
  );
}

function AnalyticsCard() {
  return (
    <div className="group relative flex min-h-[320px] flex-col justify-between overflow-hidden rounded-[2.5rem] border border-gray-200 bg-white p-8 transition-all hover:border-green-200 md:col-span-4 md:p-12">
      <div className="relative z-10 max-w-md">
        <div className="mb-6 flex size-12 items-center justify-center rounded-2xl border border-green-100/50 bg-green-50 text-green-600 transition-transform group-hover:scale-110">
          <ChartBarIcon className="size-6" />
        </div>
        <h3 className="mb-3 text-2xl font-bold text-gray-900">
          Auto-captured analytics
        </h3>
        <p className="text-lg/relaxed text-gray-500">
          Every branch point automatically records what percentage of contacts
          reach each path. No instrumentation required.
        </p>
      </div>

      <div className="relative z-10 mt-8 flex h-16 items-end gap-2">
        {[40, 65, 55, 80, 70, 90, 75].map((height, barIndex) => (
          <div
            key={barIndex}
            className="flex-1 rounded-t bg-indigo-100 transition-colors group-hover:bg-indigo-200"
            style={{ height: `${height}%` }}
          ></div>
        ))}
      </div>
    </div>
  );
}
