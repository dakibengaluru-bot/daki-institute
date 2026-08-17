import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'icon';
  showText?: boolean;
  theme?: 'light' | 'dark';
}

export default function Logo({
  className = 'h-12 w-12',
  variant = 'full',
  showText = true,
  theme = 'light',
}: LogoProps) {
  const isDark = theme === 'dark';

  if (variant === 'icon' || !showText) {
    return (
      <svg
        viewBox="0 0 100 100"
        className={`${className} select-none`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="dakiLogoGradient" x1="10" y1="10" x2="90" y2="90">
            <stop offset="0%" stopColor="#0b214d" />
            <stop offset="55%" stopColor="#0b214d" />
            <stop offset="100%" stopColor="#00a8c7" />
          </linearGradient>
        </defs>

        <circle
          cx="50"
          cy="50"
          r="44"
          fill="white"
          stroke="url(#dakiLogoGradient)"
          strokeWidth="4"
        />

        <path
          d="M24 66L42 29L50 45L58 29L76 66"
          stroke="#0b214d"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M50 45L58 29"
          stroke="#f5a900"
          strokeWidth="7"
          strokeLinecap="round"
        />

        <path
          d="M39 58H61"
          stroke="#00a8c7"
          strokeWidth="4"
          strokeLinecap="round"
        />

        <circle cx="50" cy="20" r="3" fill="#f5a900" />
      </svg>
    );
  }

  return (
    <div
      className={`flex items-center gap-3 whitespace-nowrap ${
        isDark ? 'text-white' : 'text-[#0b214d]'
      } ${className}`}
    >
      <svg
        viewBox="0 0 100 100"
        className="h-12 w-12 shrink-0 select-none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="dakiFullGradient" x1="10" y1="10" x2="90" y2="90">
            <stop offset="0%" stopColor="#0b214d" />
            <stop offset="55%" stopColor="#0b214d" />
            <stop offset="100%" stopColor="#00a8c7" />
          </linearGradient>
        </defs>

        <circle
          cx="50"
          cy="50"
          r="44"
          fill="white"
          stroke="url(#dakiFullGradient)"
          strokeWidth="4"
        />

        <path
          d="M24 66L42 29L50 45L58 29L76 66"
          stroke="#0b214d"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M50 45L58 29"
          stroke="#f5a900"
          strokeWidth="7"
          strokeLinecap="round"
        />

        <path
          d="M39 58H61"
          stroke="#00a8c7"
          strokeWidth="4"
          strokeLinecap="round"
        />

        <circle cx="50" cy="20" r="3" fill="#f5a900" />
      </svg>

      <span className="font-bold tracking-tight text-3xl leading-none">
        DAKI <span className="text-[#4f46e5]">AI</span>
      </span>
    </div>
  );
}
