import React from 'react';

type Props = {
  className?: string;
  size?: 'small' | 'medium';
  /** rotation in degrees for the badge (positive = clockwise) */
  rotateDeg?: number;
};

const ComingSoonRibbon: React.FC<Props> = ({ className = '', size = 'small', rotateDeg = -12 }) => {
  const font = size === 'small' ? 'text-[7px]' : 'text-xs';
  const pad = size === 'small' ? 'px-1.5 py-0.5' : 'px-3 py-0.5';

  // Outer container keeps the badge inside the parent; small translate to nudge into corner.
  return (
    <div className={`pointer-events-none absolute bottom-0 right-0 ${className}`} aria-hidden>
      <div
        className={`relative inline-flex items-center justify-center ${font} ${pad} bg-white text-black font-semibold rounded-md shadow-sm border border-gray-200 whitespace-nowrap`}
        style={{ boxSizing: 'border-box', transform: `rotate(${rotateDeg}deg)`, transformOrigin: 'center' }}
      >
        <span className="leading-none">Coming Soon</span>
      </div>
    </div>
  );
};

export default ComingSoonRibbon;
