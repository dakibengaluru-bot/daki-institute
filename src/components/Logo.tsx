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
      aria-label="Daki.ai logo"
    >
      <defs>
        {/* Navy → blue → violet circular gradient */}
        <linearGradient
          id="dakiLogoRing"
          x1="15"
          y1="15"
          x2="88"
          y2="88"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#0b214d" />
          <stop offset="55%" stopColor="#0b214d" />
          <stop offset="82%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#4f46e5" />
        </linearGradient>

        {/* Blue-violet D accent */}
        <linearGradient
          id="dakiDAccent"
          x1="32"
          y1="72"
          x2="72"
          y2="35"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#4f46e5" />
        </linearGradient>
      </defs>

      {/* White circular background */}
      <circle
        cx="50"
        cy="50"
        r="47"
        fill="white"
      />

      {/* Complete outer ring */}
      <circle
        cx="50"
        cy="50"
        r="43"
        stroke="url(#dakiLogoRing)"
        strokeWidth="4"
      />

      {/* Main stylized D */}
      <path
        d="M32 30V70"
        stroke="#0b214d"
        strokeWidth="8"
        strokeLinecap="round"
      />

      <path
        d="M32 30H48"
        stroke="#0b214d"
        strokeWidth="8"
        strokeLinecap="round"
      />

      <path
        d="M48 30C61 30 69 38 69 50C69 62 61 70 48 70H32"
        stroke="#0b214d"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Blue/violet lower sweep */}
      <path
        d="M34 69H49C58 69 65 65 69 58"
        stroke="url(#dakiDAccent)"
        strokeWidth="5"
        strokeLinecap="round"
      />

      {/* Digital pixels */}
      <rect
        x="24"
        y="45"
        width="7"
        height="7"
        rx="1"
        fill="#2563eb"
      />

      <rect
        x="30"
        y="53"
        width="7"
        height="7"
        rx="1"
        fill="#2563eb"
      />

      <rect
        x="36"
        y="61"
        width="7"
        height="7"
        rx="1"
        fill="#0b214d"
      />

      {/* Gold sparkle */}
      <path
        d="M69 20L71 25L76 27L71 29L69 34L67 29L62 27L67 25L69 20Z"
        fill="#f5a900"
      />
    </svg>
  );

  /* ICON ONLY */
  if (variant === 'icon' || !showText) {
    return (
      <div className={className}>
        <LogoIcon />
      </div>
    );
  }

  /* FULL Daki.ai LOGO */
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
