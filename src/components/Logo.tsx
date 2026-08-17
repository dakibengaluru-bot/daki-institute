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
          id="dakiRingGradient"
          x1="15"
          y1="15"
          x2="85"
          y2="85"
        >
          <stop offset="0%" stopColor="#0b214d" />
          <stop offset="55%" stopColor="#0b214d" />
          <stop offset="100%" stopColor="#4f46e5" />
        </linearGradient>

        <linearGradient
          id="dakiAccentGradient"
          x1="35"
          y1="65"
          x2="65"
          y2="35"
        >
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#4f46e5" />
        </linearGradient>
      </defs>

      {/* White logo background */}
      <circle
        cx="50"
        cy="50"
        r="43"
        fill="white"
      />

      {/* Upper circular arc */}
      <path
        d="M18 43 A35 35 0 0 1 78 20"
        stroke="#0b214d"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Lower circular arc */}
      <path
        d="M78 20 A35 35 0 0 1 25 80"
        stroke="url(#dakiRingGradient)"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Stylized D */}
      <path
        d="M31 31V69"
        stroke="#0b214d"
        strokeWidth="8"
        strokeLinecap="round"
      />

      <path
        d="M31 31H48C61 31 69 39 69 50C69 61 61 69 48 69H31"
        stroke="#0b214d"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* AI-inspired accent */}
      <path
        d="M39 62L48 48L55 58"
        stroke="url(#dakiAccentGradient)"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Orange sparkle */}
      <path
        d="M62 23L64 28L69 30L64 32L62 37L60 32L55 30L60 28L62 23Z"
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
