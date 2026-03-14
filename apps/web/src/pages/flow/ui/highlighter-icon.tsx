'use client';

export function HighlighterIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="6"
        y="4"
        width="8"
        height="16"
        rx="1"
        fill="#F9A8D4"
        stroke="#F9A8D4"
        strokeWidth="1"
      />
      <rect
        x="6"
        y="16"
        width="8"
        height="4"
        rx="1"
        fill="#9CA3AF"
        stroke="#9CA3AF"
        strokeWidth="1"
      />
    </svg>
  );
}
