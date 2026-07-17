import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'icon';
  showText?: boolean;
  theme?: 'light' | 'dark';
}

export default function Logo({ 
  className = "h-12 w-12", 
  variant = 'full', 
  showText = true,
  theme = 'light'
}: LogoProps) {
  const isDark = theme === 'dark';

  if (variant === 'icon') {
    return (
      <svg
        viewBox="0 0 100 100"
        className={`${className} select-none`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background circle */}
        <circle cx="50" cy="50" r="45" fill="#FFFFFF" />
        
        {/* Outer Circular Arch */}
        <path
          d="M 20 50 A 30 30 0 1 0 80 50"
          stroke="url(#blueGradient)"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />
        
        {/* Stylized 'A' representation inside circular icon */}
        <path
          d="M 38 70 L 50 35 L 62 70"
          stroke="#0b214d"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 42 62 C 48 56, 56 56, 64 62"
          stroke="#00a2b1"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        
        {/* 4-pointed sparkle star */}
        <path
          d="M 50 16 Q 50 24 53 24 Q 50 24 50 32 Q 50 24 47 24 Q 50 24 50 16"
          fill="#f59e0b"
        />

        <defs>
          <linearGradient id="blueGradient" x1="20" y1="50" x2="80" y2="50" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0b214d" />
            <stop offset="100%" stopColor="#00a2b1" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        viewBox="0 0 400 400"
        className="h-full w-auto select-none flex-shrink-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Inner Circle Glow background */}
        <circle cx="200" cy="200" r="185" fill="#FFFFFF" />

        {/* Outer Circular Arch */}
        <path
          d="M 80 145 C 90 95, 140 65, 200 65 C 265 65, 315 100, 322 145"
          stroke="#0b214d"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />
        
        <path
          d="M 81 255 C 90 310, 140 345, 200 345 C 265 345, 315 310, 321 255"
          stroke="url(#logoTealGrad)"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />

        {/* Elegant 4-pointed golden-orange star */}
        <path
          d="M 200 68 Q 200 95 212 95 Q 200 95 200 122 Q 200 95 188 95 Q 200 95 200 68"
          fill="#f59e0b"
        />

        {/* Text "DAKI" - Centered perfectly by translating 37px to align A peak with star at 200 */}
        <g id="DAKI-text" transform="translate(37, 0)">
          {/* 'D' */}
          <path
            d="M 75 152 L 98 152 C 112 152, 122 161, 122 177 C 122 193, 112 202, 98 202 L 75 202 Z M 89 164 L 89 190 L 97 190 C 104 190, 108 186, 108 177 C 108 168, 104 164, 97 164 Z"
            fill="#0b214d"
          />
          
          {/* Stylized 'A' */}
          {/* Left leg of A (Gold) */}
          <path
            d="M 158 152 L 165 152 L 141 202 L 131 202 Z"
            fill="#f59e0b"
          />
          {/* Right leg of A (Gold) */}
          <path
            d="M 158 152 L 168 152 L 181 202 L 171 202 Z"
            fill="#f59e0b"
          />
          {/* A peak cap (Gold) */}
          <polygon points="158,152 168,152 163,138" fill="#f59e0b" />
          
          {/* Navy curved arch crossing leg (Swoosh) */}
          <path
            d="M 139 194 C 150 183, 168 183, 178 194 C 182 198, 185 202, 185 202 L 176 202 C 176 202, 172 196, 168 191 C 160 184, 150 185, 142 191 C 140 193, 139 194, 139 194"
            fill="#0b214d"
          />

          {/* 'K' */}
          <path
            d="M 197 152 L 210 152 L 210 173 L 228 152 L 243 152 L 222 175 L 245 202 L 230 202 L 214 182 L 210 187 L 210 202 L 197 202 Z"
            fill="#0b214d"
          />

          {/* 'I' */}
          <path
            d="M 260 152 L 273 152 L 273 202 L 260 202 Z"
            fill="#0b214d"
          />
        </g>

        {/* INSTITUTE with Gold/Orange lines */}
        {/* Left line */}
        <line x1="68" y1="230" x2="98" y2="230" stroke="#f59e0b" strokeWidth="3" />
        
        {/* Text */}
        <text
          x="200"
          y="238"
          fill="#0b214d"
          fontSize="26"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="bold"
          letterSpacing="8"
          textAnchor="middle"
        >
          INSTITUTE
        </text>

        {/* Right line */}
        <line x1="302" y1="230" x2="332" y2="230" stroke="#f59e0b" strokeWidth="3" />

        {/* LEARN • ANALYZE • EMPOWER with multi-colored tspans */}
        <text
          x="200"
          y="285"
          fontSize="14"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="800"
          letterSpacing="1.5"
          textAnchor="middle"
        >
          <tspan fill="#0b214d">LEARN</tspan>
          <tspan fill="#f59e0b">  •  </tspan>
          <tspan fill="#00a2b1">ANALYZE</tspan>
          <tspan fill="#f59e0b">  •  </tspan>
          <tspan fill="#0b214d">EMPOWER</tspan>
        </text>

        <defs>
          <linearGradient id="logoTealGrad" x1="81" y1="300" x2="321" y2="300" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0b214d" />
            <stop offset="60%" stopColor="#00a2b1" />
            <stop offset="100%" stopColor="#00a2b1" />
          </linearGradient>
        </defs>
      </svg>
      {showText && (
        <div className="flex flex-col">
          <span className={`font-display font-extrabold text-xl md:text-2xl tracking-wider leading-none ${
            isDark ? 'text-white' : 'text-indigo-950'
          }`}>
            DAKI
          </span>
          <span className={`font-sans font-semibold text-xs tracking-[0.25em] uppercase leading-none mt-1 ${
            isDark ? 'text-indigo-400' : 'text-indigo-600'
          }`}>
            INSTITUTE
          </span>
        </div>
      )}
    </div>
  );
}
