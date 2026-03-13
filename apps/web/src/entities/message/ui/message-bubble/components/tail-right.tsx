import type { ComponentProps } from 'react';

export function TailRight(props: ComponentProps<'svg'>) {
  return (
    <svg
      viewBox="0 0 8 13"
      height="13"
      width="8"
      preserveAspectRatio="xMidYMid meet"
      className=""
      version="1.1"
      x="0px"
      y="0px"
      enableBackground="new 0 0 8 13"
      {...props}
    >
      <path
        fill="currentColor"
        d="M5.188,0H0v11.193l6.467-8.625C7.526,1.156,6.958,0,5.188,0z"
      />
      <path
        d="M0 0H5.188C6.21969 0 6.843 0.392741 6.97379 1H0V0Z"
        fill="white"
        fillOpacity="0.08"
      />
    </svg>
  );
}
