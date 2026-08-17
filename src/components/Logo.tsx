import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'icon';
  showText?: boolean;
  theme?: 'light' | 'dark';
}

export default function Logo({
  className = 'h-12 w-auto',
  variant = 'full',
  showText = true,
  theme = 'light',
}: LogoProps) {
  const isDark = theme === 'dark';

  const LogoIcon = () => (
    <svg
      viewBox="0 0 100 100"
      className="h-12 w-12 shrink-0"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="50"
        cy="50"
        r="44"
        fill="white"
        stroke="#0b214d"
        strokeWidth="4"
      />

      {/* Stylized A */}
      <path
        d="M27 68L43 30L50 47L57 30L73 68"
        stroke="#0b214d"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Gold accent */}
      <path
        d="M50 47L57 30"
        stroke="#f5a900"
        strokeWidth="7"
        strokeLinecap="round"
      />

      {/* Cyan accent */}
      <path
        d="M39 59H61"
        stroke="#00a8c7"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Accent dot */}
      <circle
        cx="50"
        cy="20"
        r="3"
        fill="#f5a900"
      />
    </svg>
  );

  if (variant === 'icon' || !showText) {
    return (
      <div className={className}>
        <LogoIcon />
      </div>
    );
  }

  return (
    <div
      className={`flex items-center gap-4 whitespace-nowrap ${className} ${
        isDark ? 'text-white' : 'text-[#0b214d]'
      }`}
    >
      <LogoIcon />

      <span
  className="text-4xl font-bold tracking-tight leading-none"
  style={{
    fontFamily: 'Arial, Helvetica, sans-serif',
    textTransform: 'none',
  }}
>
  <span
    className="text-[#0b214d]"
    style={{ textTransform: 'none' }}
  >
    Daki
  </span>
  <span
    className="text-[#4f46e5]"
    style={{ textTransform: 'none' }}
  >
    .ai
  </span>
</span>
    </div>
  );
}
