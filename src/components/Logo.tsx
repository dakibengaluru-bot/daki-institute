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
      viewBox="0 0 120 120"
      className="h-14 w-14 shrink-0"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Daki.ai logo"
    >
      <defs>
        {/* Main orbit gradient */}
        <linearGradient
          id="dakiOrbit"
          x1="15"
          y1="15"
          x2="105"
          y2="105"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#071a3d" />
          <stop offset="48%" stopColor="#123b78" />
          <stop offset="75%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#6d4aff" />
        </linearGradient>

        {/* Main D gradient */}
        <linearGradient
          id="dakiDGradient"
          x1="38"
          y1="30"
          x2="88"
          y2="92"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#071a3d" />
          <stop offset="55%" stopColor="#102d61" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>

        {/* Digital ribbon */}
        <linearGradient
          id="dakiRibbon"
          x1="35"
          y1="85"
          x2="94"
          y2="42"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#08a9d6" />
          <stop offset="45%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#7148ff" />
        </linearGradient>

        {/* Soft blue glow */}
        <filter
          id="dakiGlow"
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
        >
          <feGaussianBlur
            stdDeviation="2.5"
            result="blur"
          />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Shadow */}
        <filter
          id="dakiShadow"
          x="-30%"
          y="-30%"
          width="160%"
          height="160%"
        >
          <feDropShadow
            dx="0"
            dy="2"
            stdDeviation="2"
            floodColor="#071a3d"
            floodOpacity="0.18"
          />
        </filter>
      </defs>

      {/* White base */}
      <circle
        cx="60"
        cy="60"
        r="57"
        fill="white"
      />

      {/* Complete outer orbit */}
      <circle
        cx="60"
        cy="60"
        r="50"
        stroke="url(#dakiOrbit)"
        strokeWidth="4"
      />

      {/* Small secondary orbit accent */}
      <path
        d="M22 42C29 23 47 11 68 11C89 11 106 24 113 43"
        stroke="#4f46e5"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.5"
      />

      {/* Main futuristic D */}

      {/* Vertical spine */}
      <path
        d="M37 31V88"
        stroke="url(#dakiDGradient)"
        strokeWidth="10"
        strokeLinecap="round"
      />

      {/* Upper D arm */}
      <path
        d="M38 31H61"
        stroke="url(#dakiDGradient)"
        strokeWidth="10"
        strokeLinecap="round"
      />

      {/* Outer D curve */}
      <path
        d="M61 31C78 31 88 42 88 59.5C88 77 78 88 61 88H38"
        stroke="url(#dakiDGradient)"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Futuristic cut-out inside D */}
      <path
        d="M58 43C67 43 73 49 73 59.5C73 70 67 76 58 76"
        stroke="white"
        strokeWidth="5"
        strokeLinecap="round"
      />

      {/* Digital flowing ribbon across lower D */}
      <path
        d="M38 79C48 87 62 89 75 82C83 78 88 71 91 63"
        stroke="url(#dakiRibbon)"
        strokeWidth="5"
        strokeLinecap="round"
        filter="url(#dakiGlow)"
      />

      {/* Digital data nodes */}

      <circle
        cx="29"
        cy="46"
        r="4"
        fill="#2563eb"
      />

      <circle
        cx="29"
        cy="58"
        r="3"
        fill="#4f46e5"
      />

      <circle
        cx="29"
        cy="69"
        r="2.5"
        fill="#08a9d6"
      />

      {/* Connecting digital line */}
      <path
        d="M29 46V69"
        stroke="#2563eb"
        strokeWidth="1.5"
        strokeDasharray="2 3"
        opacity="0.7"
      />

      {/* Gold AI sparkle */}
      <g filter="url(#dakiShadow)">
        <path
          d="M88 23
             L91 30
             L98 33
             L91 36
             L88 43
             L85 36
             L78 33
             L85 30
             Z"
          fill="#f5a900"
        />

        <circle
          cx="88"
          cy="33"
          r="2"
          fill="#fff4c2"
        />
      </g>

      {/* Tiny orbit nodes */}
      <circle
        cx="104"
        cy="79"
        r="2.5"
        fill="#4f46e5"
      />

      <circle
        cx="24"
        cy="83"
        r="2"
        fill="#08a9d6"
      />

      {/* Bottom blue accent */}
      <path
        d="M43 98C50 101 58 102 66 101"
        stroke="#2563eb"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.7"
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
