'use client';

export function SubmenuIndicator() {
  return (
    <span className="absolute right-1 bottom-1 size-1.5">
      <svg viewBox="0 0 6 6" fill="currentColor" className="size-full">
        <path d="M0 6L6 6L6 0C6 3.31371 3.31371 6 0 6Z" />
      </svg>
    </span>
  );
}
