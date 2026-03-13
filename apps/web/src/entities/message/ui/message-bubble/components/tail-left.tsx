import type { ComponentProps } from 'react';

export function TailLeft(props: ComponentProps<'svg'>) {
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
        d="M1.533,2.568L8,11.193V0L2.812,0C1.042,0,0.474,1.156,1.533,2.568z"
      />
      <path
        d="M7.99918 1V0H2.81118C1.77949 0 1.15618 0.392741 1.02539 1H7.99918Z"
        fill="white"
        fillOpacity="0.08"
      />
    </svg>
  );
}
