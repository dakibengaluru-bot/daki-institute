import React from 'react';
import dakiAiLogo from '../WhatsApp Image 2026-08-17 at 4.38.13 PM.jpeg';

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

  // Daki.ai AI/Data logo
  const LogoIcon = () => (
    <img
      src={dakiAiLogo}
      alt="Daki.ai logo"
      className="h-14 w-14 shrink-0 object-contain"
    />
  );

  // Icon-only version
  if (variant === 'icon' || !showText) {
    return (
      <div className={className}>
        <LogoIcon />
      </div>
    );
  }

  // Full Daki.ai branding
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
        <span className="text-[#071A3D]">
          Daki
        </span>

        <span className="text-[#4F46E5]">
          .ai
        </span>
      </span>
    </div>
  );
}
