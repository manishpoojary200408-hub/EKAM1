import React from 'react';

interface EkamLeafProps {
  className?: string;
  strokeWidth?: number;
}

export const EkamLeaf: React.FC<EkamLeafProps> = ({
  className = "w-full h-full",
  strokeWidth = 2.4,
}) => {
  return (
    <svg
      viewBox="0 0 120 144"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Outer Leaf Silhouette with Pointed Apex and Flared Serifs */}
      <path
        d="M 60 4
           C 60.8 14, 63 26, 74 38
           C 87 52, 98 64, 98 80
           C 98 94, 88 102, 74 104
           C 84 105, 96 106, 107 109
           C 95 109, 78 107, 68 103
           C 62 101, 60 98, 60 95
           C 60 98, 58 101, 52 103
           C 42 107, 25 109, 13 109
           C 24 106, 36 105, 46 104
           C 32 102, 22 94, 22 80
           C 22 64, 33 52, 46 38
           C 57 26, 59.2 14, 60 4 Z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Central Stem / Petiole */}
      <path
        d="M 60 14 L 60 96 C 60 106, 59.5 116, 58.5 124"
        stroke="currentColor"
        strokeWidth={strokeWidth * 0.9}
        strokeLinecap="round"
      />

      {/* Symmetrical Lateral Leaf Veins */}
      {/* Pair 1 - Top */}
      <path
        d="M 60 28 C 65 29, 69 31, 72 34"
        stroke="currentColor"
        strokeWidth={strokeWidth * 0.65}
        strokeLinecap="round"
      />
      <path
        d="M 60 28 C 55 29, 51 31, 48 34"
        stroke="currentColor"
        strokeWidth={strokeWidth * 0.65}
        strokeLinecap="round"
      />

      {/* Pair 2 */}
      <path
        d="M 60 40 C 68 42, 76 46, 82 51"
        stroke="currentColor"
        strokeWidth={strokeWidth * 0.65}
        strokeLinecap="round"
      />
      <path
        d="M 60 40 C 52 42, 44 46, 38 51"
        stroke="currentColor"
        strokeWidth={strokeWidth * 0.65}
        strokeLinecap="round"
      />

      {/* Pair 3 */}
      <path
        d="M 60 52 C 72 54, 82 60, 90 68"
        stroke="currentColor"
        strokeWidth={strokeWidth * 0.65}
        strokeLinecap="round"
      />
      <path
        d="M 60 52 C 48 54, 38 60, 30 68"
        stroke="currentColor"
        strokeWidth={strokeWidth * 0.65}
        strokeLinecap="round"
      />

      {/* Pair 4 */}
      <path
        d="M 60 64 C 72 67, 82 74, 91 83"
        stroke="currentColor"
        strokeWidth={strokeWidth * 0.65}
        strokeLinecap="round"
      />
      <path
        d="M 60 64 C 48 67, 38 74, 29 83"
        stroke="currentColor"
        strokeWidth={strokeWidth * 0.65}
        strokeLinecap="round"
      />

      {/* Pair 5 */}
      <path
        d="M 60 76 C 70 79, 78 86, 86 94"
        stroke="currentColor"
        strokeWidth={strokeWidth * 0.65}
        strokeLinecap="round"
      />
      <path
        d="M 60 76 C 50 79, 42 86, 34 94"
        stroke="currentColor"
        strokeWidth={strokeWidth * 0.65}
        strokeLinecap="round"
      />

      {/* Pair 6 - Low Base */}
      <path
        d="M 60 88 C 66 90, 72 95, 76 100"
        stroke="currentColor"
        strokeWidth={strokeWidth * 0.65}
        strokeLinecap="round"
      />
      <path
        d="M 60 88 C 54 90, 48 95, 44 100"
        stroke="currentColor"
        strokeWidth={strokeWidth * 0.65}
        strokeLinecap="round"
      />
    </svg>
  );
};

