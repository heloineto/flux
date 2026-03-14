import { GITHUB_URL } from '@/shared/config/constants';
import { GithubLogoIcon } from '@phosphor-icons/react/dist/ssr';

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-12 select-none">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div className="flex items-center gap-2.5">
          <div className="flex size-6 items-center justify-center rounded-sm bg-indigo-600 text-white shadow-sm">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 3L4 7V12C4 16.418 7.582 20.5 12 21C16.418 20.5 20 16.418 20 12V7L12 3Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M9 12L11 14L15 10"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="text-sm font-bold tracking-tight text-indigo-600">
            Flux
          </span>
          <span className="mx-2 text-gray-200">/</span>
          <span className="text-xs font-medium text-gray-400">
            MIT Licensed
          </span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="group text-gray-400 transition-colors hover:text-indigo-600"
            aria-label="GitHub"
          >
            <GithubLogoIcon
              weight="fill"
              className="size-4 transition-transform group-hover:scale-110"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
