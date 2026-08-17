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
        {/* Main navy to violet gradient */}
        <linearGradient
          id="dakiMain"
          x1="18"
          y1="18"
          x2="102"
          y2="102"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#071A3D" />
          <stop offset="55%" stopColor="#123B78" />
          <stop offset="100%" stopColor="#4F46E5" />
        </linearGradient>

        {/* Data blue gradient */}
        <linearGradient
          id="dakiData"
          x1="30"
          y1="90"
          x2="92"
          y2="35"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#06B6D4" />
          <stop offset="50%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#6366F1" />
        </linearGradient>

        {/* Gold AI gradient */}
        <linearGradient
          id="dakiGold"
          x1="70"
          y1="20"
          x2="90"
          y2="40"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#FFD34E" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>

        {/* Soft shadow */}
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
            floodColor="#071A3D"
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

      {/* Complete outer circle */}
      <circle
        cx="60"
        cy="60"
        r="49"
        stroke="url(#dakiMain)"
        strokeWidth="4"
      />

      {/* Inner subtle orbit */}
      <circle
        cx="60"
        cy="60"
        r="42"
        stroke="#2563EB"
        strokeWidth="1"
        opacity="0.18"
      />

      {/* ========================= */}
      {/* DATA-BASED D MONOGRAM     */}
      {/* ========================= */}

      {/* Vertical spine of D */}
      <path
        d="M34 32V87"
        stroke="#071A3D"
        strokeWidth="9"
        strokeLinecap="round"
      />

      {/* Top D connection */}
      <path
        d="M35 32H57"
        stroke="#071A3D"
        strokeWidth="9"
        strokeLinecap="round"
      />

      {/* D outer curve */}
      <path
        d="M57 32C74 32 84 42 84 59.5C84 77 74 87 57 87H35"
        stroke="#071A3D"
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* ========================= */}
      {/* DATA VISUALIZATION INSIDE */}
      {/* ========================= */}

      {/* Rising analytics line */}
      <path
        d="M39 76L48 68L55 72L65 56L73 61L82 45"
        stroke="url(#dakiData)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Data nodes */}
      <circle
        cx="39"
        cy="76"
        r="3"
        fill="#06B6D4"
      />

      <circle
        cx="48"
        cy="68"
        r="3"
        fill="#2563EB"
      />

      <circle
        cx="55"
        cy="72"
        r="3"
        fill="#2563EB"
      />

      <circle
        cx="65"
        cy="56"
        r="3"
        fill="#4F46E5"
      />

      <circle
        cx="73"
        cy="61"
        r="3"
        fill="#4F46E5"
      />

      <circle
        cx="82"
        cy="45"
        r="3.5"
        fill="#6366F1"
      />

      {/* Small connecting data lines */}
      <path
        d="M39 76L39 84"
        stroke="#06B6D4"
        strokeWidth="1.5"
        opacity="0.6"
      />

      <path
        d="M48 68L48 82"
        stroke="#2563EB"
        strokeWidth="1.5"
        opacity="0.45"
      />

      <path
        d="M65 56L65 45"
        stroke="#4F46E5"
        strokeWidth="1.5"
        opacity="0.4"
      />

      {/* ========================= */}
      {/* AI SPARK                   */}
      {/* ========================= */}

      <g filter="url(#dakiShadow)">
        <path
          d="
            M91 20
            L94 27
            L101 30
            L94 33
            L91 40
            L88 33
            L81 30
            L88 27
            Z
          "
          fill="url(#dakiGold)"
        />

        <circle
          cx="91"
          cy="30"
          r="2"
          fill="#FFF7D6"
        />
      </g>

      {/* ========================= */}
      {/* DIGITAL PIXELS             */}
      {/* ========================= */}

      <rect
        x="22"
        y="45"
        width="5"
        height="5"
        rx="1"
        fill="#06B6D4"
      />

      <rect
        x="22"
        y="54"
        width="4"
        height="4"
        rx="1"
        fill="#2563EB"
      />

      <rect
        x="22"
        y="62"
        width="3"
        height="3"
        rx="1"
        fill="#4F46E5"
      />

      {/* ========================= */}
      {/* SMALL ORBIT POINTS         */}
      {/* ========================= */}

      <circle
        cx="103"
        cy="72"
        r="2.5"
        fill="#4F46E5"
      />

      <circle
        cx="27"
        cy="86"
        r="2"
        fill="#06B6D4"
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
        isDark ? 'text-white' : 'text-[#071A3D]'
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
          className="text-[#071A3D]"
          style={{ textTransform: 'none' }}
        >
          Daki
        </span>

        <span
          className="text-[#4F46E5]"
          style={{ textTransform: 'none' }}
        >
          .ai
        </span>
      </span>
    </div>
  );
}
