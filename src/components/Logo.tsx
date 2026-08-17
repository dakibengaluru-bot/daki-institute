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
      <defs>
        <linearGradient
          id="dakiCircleGradient"
          x1="15"
          y1="15"
          x2="85"
          y2="85"
        >
          <stop offset="0%" stopColor="#0b214d" />
          <stop offset="70%" stopColor="#0b214d" />
          <stop offset="100%" stopColor="#4f46e5" />
        </linearGradient>

        <linearGradient
          id="dakiBlueAccent"
          x1="35"
          y1="70"
          x2="65"
          y2="40"
        >
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#4f46e5" />
        </linearGradient>
      </defs>

      {/* White circular background */}
      <circle
        cx="50"
        cy="50"
        r="46"
        fill="white"
      />

      {/* COMPLETE CIRCLE */}
      <circle
        cx="50"
        cy="50"
        r="43"
        stroke="url(#dakiCircleGradient)"
        strokeWidth="4"
      />

      {/* Stylized D */}
      <path
        d="M30 30V70"
        stroke="#0b214d"
        strokeWidth="8"
        strokeLinecap="round"
      />

      <path
        d="M30 30H47C60 30 69 38 69 50C69 62 60 70 47 70H30"
        stroke="#0b214d"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Blue AI accent */}
      <path
        d="M38 62L47 48L55 59"
        stroke="url(#dakiBlueAccent)"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Small orange sparkle */}
      <path
        d="M62 20L64 25L69 27L64 29L62 34L60 29L55 27L60 25L62 20Z"
        fill="#f5a900"
      />
    </svg>
  );

  /* Icon-only version */
  if (variant === 'icon' || !showText) {
    return (
      <div className={className}>
        <LogoIcon />
      </div>
    );
  }

  /* Full Daki.ai logo */
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
