'use client';

import Link from 'next/link';

const SECTIONS = [
  {
    title: 'Getting Started',
    description: 'Create your account, configure your profile, and run your first AI analysis.',
    href: '/docs/getting-started/overview',
    icon: '🚀',
    color: 'from-amber-500/10 to-amber-500/5',
    border: 'hover:border-amber-500/30',
  },
  {
    title: 'Charts',
    description: '21 timeframes, drawing tools, indicators, infinite history, and real-time data.',
    href: '/docs/charts/overview',
    icon: '📊',
    color: 'from-blue-500/10 to-blue-500/5',
    border: 'hover:border-blue-500/30',
  },
  {
    title: 'AI Analysis',
    description: '6 trading strategies, adaptive indicators, and AI-powered market structure analysis.',
    href: '/docs/analysis/overview',
    icon: '🔬',
    color: 'from-purple-500/10 to-purple-500/5',
    border: 'hover:border-purple-500/30',
  },
  {
    title: 'Trading',
    description: 'Demo and live trading, position management, trade history, and AI Coach reviews.',
    href: '/docs/trading/overview',
    icon: '📈',
    color: 'from-emerald-500/10 to-emerald-500/5',
    border: 'hover:border-emerald-500/30',
  },
  {
    title: 'Alerts & Scheduler',
    description: 'Price alerts, push notifications, Telegram, and scheduled automated analyses.',
    href: '/docs/alerts/overview',
    icon: '🔔',
    color: 'from-orange-500/10 to-orange-500/5',
    border: 'hover:border-orange-500/30',
  },
  {
    title: 'MT5 Bridge',
    description: 'Connect MetaTrader 5 for live data feeds and direct trade execution.',
    href: '/docs/bridge/overview',
    icon: '🔗',
    color: 'from-cyan-500/10 to-cyan-500/5',
    border: 'hover:border-cyan-500/30',
  },
  {
    title: 'AI Assistant',
    description: 'Chat with Edge AI about any market, strategy, or trading setup.',
    href: '/docs/assistant/overview',
    icon: '💬',
    color: 'from-pink-500/10 to-pink-500/5',
    border: 'hover:border-pink-500/30',
  },
];

export function DocsHome() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      {/* Hero */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6">
          <span className="text-amber-500 text-sm font-mono font-semibold">tedge.ai</span>
          <span className="text-neutral-400 text-sm">Documentation</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Learn to trade smarter
        </h1>
        <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
          Everything you need to get the most out of the tedge.ai trading platform.
          From first steps to advanced strategies.
        </p>
      </div>

      {/* Quick links */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        <QuickLink href="/docs/getting-started/first-analysis" label="Quick Start" />
        <QuickLink href="/docs/analysis/strategies" label="Strategies" />
        <QuickLink href="/docs/getting-started/subscription" label="Plans & Pricing" />
        <QuickLink href="/docs/bridge/installation" label="Install EdgeBridge" />
      </div>

      {/* Section cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {SECTIONS.map((section) => (
          <Link
            key={section.title}
            href={section.href}
            className={`group relative flex flex-col p-6 rounded-xl border border-neutral-800 bg-gradient-to-br ${section.color} ${section.border} transition-all duration-200 hover:shadow-lg hover:shadow-black/20 hover:-translate-y-0.5`}
          >
            <span className="text-3xl mb-3">{section.icon}</span>
            <h2 className="text-lg font-semibold mb-2 group-hover:text-amber-400 transition-colors">
              {section.title}
            </h2>
            <p className="text-sm text-neutral-400 leading-relaxed">
              {section.description}
            </p>
            <span className="mt-4 text-xs text-neutral-500 group-hover:text-amber-500/70 transition-colors">
              Read more →
            </span>
          </Link>
        ))}
      </div>

      {/* Footer links */}
      <div className="mt-16 pt-8 border-t border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-neutral-500">
          Can&apos;t find what you need?{' '}
          <a href="mailto:support@tedge.ai" className="text-amber-500 hover:text-amber-400">
            Contact support
          </a>
        </p>
        <div className="flex items-center gap-4">
          <a href="https://app.tedge.ai" className="text-sm text-neutral-400 hover:text-white transition-colors">
            Open Platform
          </a>
          <a href="https://www.tedge.ai" className="text-sm text-neutral-400 hover:text-white transition-colors">
            Website
          </a>
        </div>
      </div>
    </div>
  );
}

function QuickLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="px-4 py-2 rounded-lg bg-neutral-800/50 border border-neutral-700 text-sm text-neutral-300 hover:text-amber-400 hover:border-amber-500/30 hover:bg-amber-500/5 transition-all"
    >
      {label}
    </Link>
  );
}
