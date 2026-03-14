'use client';

export function MarkerIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 20L7 17M7 17L16 8L19 5C19.5523 4.44772 19.5523 3.55228 19 3C18.4477 2.44772 17.5523 2.44772 17 3L14 6L5 15M7 17L5 15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 6L16 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
