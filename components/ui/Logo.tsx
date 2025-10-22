"use client";

import { motion } from "framer-motion";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function Logo({ className = "", size = "md" }: LogoProps) {
  const sizes = {
    sm: { text: "text-xl", icon: 24 },
    md: { text: "text-2xl", icon: 32 },
    lg: { text: "text-3xl", icon: 40 },
  };

  const currentSize = sizes[size];

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Icon */}
      <div className="relative flex-shrink-0">
        <svg
          width={currentSize.icon}
          height={currentSize.icon}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Gradient Definition */}
          <defs>
            <linearGradient
              id="logoGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="rgb(23, 67, 116)" />
              <stop offset="100%" stopColor="rgb(59, 130, 246)" />
            </linearGradient>
          </defs>

          {/* Monitor/PC */}
          <rect
            x="20"
            y="20"
            width="60"
            height="45"
            rx="4"
            fill="url(#logoGradient)"
          />

          {/* Screen */}
          <rect
            x="25"
            y="25"
            width="50"
            height="35"
            rx="2"
            fill="#0a0a0a"
          />

          {/* Code Brackets */}
          <path
            d="M35 35 L30 42.5 L35 50"
            stroke="rgb(59, 130, 246)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M55 35 L60 42.5 L55 50"
            stroke="rgb(59, 130, 246)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          {/* Code Slash */}
          <line
            x1="48"
            y1="35"
            x2="42"
            y2="50"
            stroke="rgb(59, 130, 246)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Stand */}
          <rect
            x="45"
            y="65"
            width="10"
            height="8"
            rx="1"
            fill="url(#logoGradient)"
          />

          {/* Base */}
          <ellipse
            cx="50"
            cy="75"
            rx="15"
            ry="3"
            fill="url(#logoGradient)"
          />
        </svg>
      </div>

      {/* Text */}
      <div className={`font-bold ${currentSize.text}`}>
        <span className="gradient-text">Digitals</span>
        <span className="text-white">solutions</span>
      </div>
    </div>
  );
}
