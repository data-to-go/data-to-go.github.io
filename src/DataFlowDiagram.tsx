import React from 'react';

const SOURCES = [
  { label: 'Websites',       icon: '🌐', y: 20,  color: '#38bdf8' },
  { label: 'Mobile Apps',    icon: '📱', y: 70,  color: '#818cf8' },
  { label: 'Public APIs',    icon: '⚡', y: 120, color: '#34d399' },
  { label: 'IoT Devices',    icon: '🔌', y: 170, color: '#fb923c' },
  { label: 'PDFs & Docs',    icon: '📄', y: 220, color: '#f472b6' },
  { label: 'Scans & Images', icon: '📷', y: 270, color: '#a78bfa' },
  { label: 'Logs',           icon: '📋', y: 320, color: '#4ade80' },
  { label: 'Blockchain',     icon: '⛓️', y: 370, color: '#f59e0b' },
];

// Hub center, radius, path start x
const HX = 450, HY = 195, HR = 46, NX = 132;

const arc = (y: number) =>
  `M ${NX} ${y} C 285 ${y}, 305 ${HY}, ${HX - HR - 2} ${HY}`;

const DataFlowDiagram: React.FC = () => (
  <div className="flow-diagram">
    <svg viewBox="0 0 520 395" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <filter id="hub-glow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="5" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="dot-glow" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="2.5" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {SOURCES.map((src, i) => {
        const d = arc(src.y);
        const t = i * 0.12;
        return (
          <g
            key={src.label}
            className="flow-source"
            style={{ animationDelay: `${t}s` }}
          >
            {/* Source node card */}
            <rect
              x="0" y={src.y - 16} width="130" height="32" rx="8"
              fill="rgba(255,255,255,0.03)"
              stroke={src.color} strokeWidth="1" strokeOpacity="0.22"
            />
            <text x="10" y={src.y + 6} fontSize="16">{src.icon}</text>
            <text
              x="36" y={src.y + 6}
              fill="#94a3b8" fontSize="12"
              fontFamily="Inter, sans-serif" fontWeight="500"
            >
              {src.label}
            </text>

            {/* Dot at path origin */}
            <circle cx={NX} cy={src.y} r="3.5" fill={src.color} />

            {/* Flow line - draws itself in */}
            <path
              d={d} fill="none"
              stroke={src.color} strokeWidth="1.5" strokeOpacity="0.3"
              pathLength="1" strokeDasharray="1" strokeDashoffset="1"
            >
              <animate
                attributeName="strokeDashoffset"
                from="1" to="0"
                dur="1s" begin={`${t + 0.25}s`}
                fill="freeze"
              />
            </path>

            {/* Particles (4 per line, staggered) */}
            {[0, 1, 2, 3].map(j => (
              <circle key={j} r="2.5" fill={src.color} opacity="0" filter="url(#dot-glow)">
                <animateMotion
                  dur="2s"
                  begin={`${t + 0.85 + j * 0.5}s`}
                  repeatCount="indefinite"
                  path={d}
                  calcMode="linear"
                />
                <animate
                  attributeName="opacity"
                  values="0;1;1;0"
                  keyTimes="0;0.06;0.88;1"
                  dur="2s"
                  begin={`${t + 0.85 + j * 0.5}s`}
                  repeatCount="indefinite"
                />
              </circle>
            ))}
          </g>
        );
      })}

      {/* Hub - two staggered pulse rings */}
      {[0, 1].map(i => (
        <circle
          key={i} cx={HX} cy={HY} r={HR}
          fill="none" stroke="#38bdf8" strokeWidth="1" opacity="0"
        >
          <animate
            attributeName="r" values={`${HR};${HR + 22}`}
            dur="2.5s" begin={`${i * 1.25}s`} repeatCount="indefinite"
          />
          <animate
            attributeName="opacity" values="0.3;0"
            dur="2.5s" begin={`${i * 1.25}s`} repeatCount="indefinite"
          />
        </circle>
      ))}

      {/* Hub body */}
      <circle
        cx={HX} cy={HY} r={HR}
        fill="rgba(56,189,248,0.07)"
        stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.75"
        filter="url(#hub-glow)"
      />
      <circle cx={HX} cy={HY} r="30" fill="rgba(56,189,248,0.11)" />

      {/* Hub label */}
      <text
        x={HX} y={HY + 6}
        textAnchor="middle"
        fill="#38bdf8" fontSize="15" fontWeight="700"
        fontFamily="Inter, sans-serif"
      >
        DATA
      </text>
    </svg>
  </div>
);

export default DataFlowDiagram;
