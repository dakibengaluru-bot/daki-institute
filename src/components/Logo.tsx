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
      {/* White background */}
      <circle
        cx="50"
        cy="50"
        r="47"
        fill="white"
      />

      {/* Complete circular border */}
      <circle
        cx="50"
        cy="50"
        r="43"
        stroke="#0b214d"
        strokeWidth="4"
      />

      {/* Simple geometric D */}
      <path
        d="M31 28V72"
        stroke="#0b214d"
        strokeWidth="9"
        strokeLinecap="round"
      />

      <path
        d="M31 28H48C63 28 72 37 72 50C72 63 63 72 48 72H31"
        stroke="#0b214d"
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Small gold sparkle above the D */}
      <path
        d="M66 18L68 23L73 25L68 27L66 32L64 27L59 25L64 23L66 18Z"
        fill="#f5a900"
      />

      {/* Small blue accent dot */}
      <circle
        cx="76"
        cy="69"
        r="3"
        fill="#4f46e5"
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
