export default function PandaCouple() {
  return (
    <div className="relative inline-block">
      {/* Glow effect behind pandas */}
      <div className="absolute inset-0 bg-petal-200/30 rounded-full blur-3xl scale-125 animate-glow" />
      
      <svg
        viewBox="0 0 320 200"
        className="w-64 sm:w-80 lg:w-96 h-auto relative z-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background heart shape */}
        <path
          d="M160 190 C120 150, 20 120, 20 70 C20 30, 60 10, 100 30 C130 45, 150 65, 160 80 C170 65, 190 45, 220 30 C260 10, 300 30, 300 70 C300 120, 200 150, 160 190Z"
          fill="url(#heartGrad)"
          opacity="0.12"
        />

        {/* Left panda - sitting */}
        <g transform="translate(65, 45)">
          {/* Body */}
          <ellipse cx="45" cy="120" rx="38" ry="42" fill="white" stroke="#e8e0e8" strokeWidth="1" />
          {/* Tummy patch */}
          <ellipse cx="45" cy="125" rx="22" ry="25" fill="#fde6ea" opacity="0.6" />
          
          {/* Head */}
          <circle cx="45" cy="65" r="35" fill="white" stroke="#e8e0e8" strokeWidth="1" />
          
          {/* Ears */}
          <circle cx="18" cy="38" r="14" fill="#3a3a3a" />
          <circle cx="18" cy="38" r="8" fill="#f8a0b5" opacity="0.6" />
          <circle cx="72" cy="38" r="14" fill="#3a3a3a" />
          <circle cx="72" cy="38" r="8" fill="#f8a0b5" opacity="0.6" />
          
          {/* Eye patches */}
          <ellipse cx="32" cy="62" rx="14" ry="12" fill="#3a3a3a" transform="rotate(-10, 32, 62)" />
          <ellipse cx="58" cy="62" rx="14" ry="12" fill="#3a3a3a" transform="rotate(10, 58, 62)" />
          
          {/* Eyes */}
          <circle cx="32" cy="61" r="5" fill="white" />
          <circle cx="33" cy="60" r="2.5" fill="#1a1a1a" />
          <circle cx="34" cy="59" r="1" fill="white" />
          <circle cx="58" cy="61" r="5" fill="white" />
          <circle cx="59" cy="60" r="2.5" fill="#1a1a1a" />
          <circle cx="60" cy="59" r="1" fill="white" />
          
          {/* Nose */}
          <ellipse cx="45" cy="70" rx="4" ry="3" fill="#3a3a3a" />
          
          {/* Blush */}
          <ellipse cx="22" cy="72" rx="8" ry="5" fill="#f8a0b5" opacity="0.35" />
          <ellipse cx="68" cy="72" rx="8" ry="5" fill="#f8a0b5" opacity="0.35" />
          
          {/* Smile */}
          <path d="M38 75 Q45 82 52 75" fill="none" stroke="#3a3a3a" strokeWidth="1.5" strokeLinecap="round" />
          
          {/* Arms */}
          <ellipse cx="10" cy="110" rx="12" ry="18" fill="white" stroke="#e8e0e8" strokeWidth="1" transform="rotate(15, 10, 110)" />
          <ellipse cx="80" cy="105" rx="12" ry="18" fill="white" stroke="#e8e0e8" strokeWidth="1" transform="rotate(-20, 80, 105)" />
          
          {/* Paw pads */}
          <ellipse cx="8" cy="122" rx="6" ry="5" fill="#f8a0b5" opacity="0.4" />
          <ellipse cx="82" cy="118" rx="6" ry="5" fill="#f8a0b5" opacity="0.4" />
          
          {/* Feet */}
          <ellipse cx="30" cy="155" rx="16" ry="10" fill="white" stroke="#e8e0e8" strokeWidth="1" />
          <ellipse cx="60" cy="155" rx="16" ry="10" fill="white" stroke="#e8e0e8" strokeWidth="1" />
          <ellipse cx="30" cy="155" rx="8" ry="5" fill="#f8a0b5" opacity="0.3" />
          <ellipse cx="60" cy="155" rx="8" ry="5" fill="#f8a0b5" opacity="0.3" />

          {/* Crown / flower on head */}
          <g transform="translate(50, 30)">
            <circle cx="0" cy="0" r="4" fill="#f47293" opacity="0.8" />
            <circle cx="-5" cy="-3" r="3" fill="#f8a0b5" opacity="0.6" />
            <circle cx="5" cy="-3" r="3" fill="#f8a0b5" opacity="0.6" />
            <circle cx="-3" cy="-6" r="3" fill="#fbc8d4" opacity="0.5" />
            <circle cx="3" cy="-6" r="3" fill="#fbc8d4" opacity="0.5" />
            <circle cx="0" cy="-8" r="2" fill="#fde6ea" opacity="0.7" />
          </g>
        </g>

        {/* Right panda - leaning toward left */}
        <g transform="translate(170, 50)">
          {/* Body */}
          <ellipse cx="45" cy="118" rx="38" ry="42" fill="white" stroke="#e8e0e8" strokeWidth="1" />
          {/* Tummy patch */}
          <ellipse cx="45" cy="123" rx="22" ry="25" fill="#e3d9f0" opacity="0.5" />
          
          {/* Head - slightly tilted toward left panda */}
          <g transform="rotate(-8, 45, 65)">
            <circle cx="45" cy="65" r="35" fill="white" stroke="#e8e0e8" strokeWidth="1" />
            
            {/* Ears */}
            <circle cx="18" cy="38" r="14" fill="#3a3a3a" />
            <circle cx="18" cy="38" r="8" fill="#b9a3d8" opacity="0.6" />
            <circle cx="72" cy="38" r="14" fill="#3a3a3a" />
            <circle cx="72" cy="38" r="8" fill="#b9a3d8" opacity="0.6" />
            
            {/* Eye patches */}
            <ellipse cx="32" cy="62" rx="14" ry="12" fill="#3a3a3a" transform="rotate(-10, 32, 62)" />
            <ellipse cx="58" cy="62" rx="14" ry="12" fill="#3a3a3a" transform="rotate(10, 58, 62)" />
            
            {/* Eyes - heart shaped pupils for love! */}
            <circle cx="32" cy="61" r="5" fill="white" />
            <path d="M30 61 C30 59, 32 58, 32 60 C32 58, 34 59, 34 61 C34 63, 32 64.5, 32 64.5 C32 64.5, 30 63, 30 61Z" fill="#f47293" />
            <circle cx="58" cy="61" r="5" fill="white" />
            <path d="M56 61 C56 59, 58 58, 58 60 C58 58, 60 59, 60 61 C60 63, 58 64.5, 58 64.5 C58 64.5, 56 63, 56 61Z" fill="#f47293" />
            
            {/* Nose */}
            <ellipse cx="45" cy="70" rx="4" ry="3" fill="#3a3a3a" />
            
            {/* Blush - deeper */}
            <ellipse cx="22" cy="72" rx="8" ry="5" fill="#b9a3d8" opacity="0.35" />
            <ellipse cx="68" cy="72" rx="8" ry="5" fill="#b9a3d8" opacity="0.35" />
            
            {/* Happy smile */}
            <path d="M36 75 Q45 84 54 75" fill="none" stroke="#3a3a3a" strokeWidth="1.5" strokeLinecap="round" />
            
            {/* Bow tie */}
            <g transform="translate(45, 95)">
              <path d="M-10,-5 L0,0 L-10,5 Z" fill="#b9a3d8" opacity="0.8" />
              <path d="M10,-5 L0,0 L10,5 Z" fill="#b9a3d8" opacity="0.8" />
              <circle cx="0" cy="0" r="3" fill="#a088ca" />
            </g>
          </g>
          
          {/* Arms - one reaching toward left panda */}
          <ellipse cx="10" cy="105" rx="12" ry="18" fill="white" stroke="#e8e0e8" strokeWidth="1" transform="rotate(30, 10, 105)" />
          <ellipse cx="80" cy="110" rx="12" ry="18" fill="white" stroke="#e8e0e8" strokeWidth="1" transform="rotate(-15, 80, 110)" />
          
          {/* Paw pads */}
          <ellipse cx="5" cy="118" rx="6" ry="5" fill="#b9a3d8" opacity="0.4" />
          <ellipse cx="83" cy="120" rx="6" ry="5" fill="#b9a3d8" opacity="0.4" />
          
          {/* Feet */}
          <ellipse cx="30" cy="153" rx="16" ry="10" fill="white" stroke="#e8e0e8" strokeWidth="1" />
          <ellipse cx="60" cy="153" rx="16" ry="10" fill="white" stroke="#e8e0e8" strokeWidth="1" />
          <ellipse cx="30" cy="153" rx="8" ry="5" fill="#b9a3d8" opacity="0.3" />
          <ellipse cx="60" cy="153" rx="8" ry="5" fill="#b9a3d8" opacity="0.3" />
        </g>

        {/* Hearts between them */}
        <g className="animate-heartbeat" style={{ transformOrigin: '160px 80px' }}>
          <path d="M152 75 C152 71, 156 69, 158 73 C160 69, 164 71, 164 75 C164 80, 158 84, 158 84 C158 84, 152 80, 152 75Z" fill="#f47293" opacity="0.7" />
        </g>
        <g className="animate-heartbeat" style={{ transformOrigin: '170px 60px', animationDelay: '0.5s' }}>
          <path d="M164 55 C164 52, 167 50, 168.5 53 C170 50, 173 52, 173 55 C173 58, 168.5 61, 168.5 61 C168.5 61, 164 58, 164 55Z" fill="#f8a0b5" opacity="0.5" />
        </g>
        <g className="animate-heartbeat" style={{ transformOrigin: '145px 55px', animationDelay: '1s' }}>
          <path d="M140 51 C140 49, 142 47.5, 143.5 50 C145 47.5, 147 49, 147 51 C147 53, 143.5 55, 143.5 55 C143.5 55, 140 53, 140 51Z" fill="#d1c1e6" opacity="0.5" />
        </g>

        {/* Sparkle particles */}
        <circle cx="130" cy="40" r="2" fill="#fbc8d4" opacity="0.6">
          <animate attributeName="opacity" values="0.2;0.8;0.2" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="190" cy="35" r="1.5" fill="#d1c1e6" opacity="0.6">
          <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2.5s" repeatCount="indefinite" begin="0.5s" />
        </circle>
        <circle cx="155" cy="25" r="2.5" fill="#f8a0b5" opacity="0.5">
          <animate attributeName="opacity" values="0.1;0.7;0.1" dur="3s" repeatCount="indefinite" begin="1s" />
        </circle>

        <defs>
          <linearGradient id="heartGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f8a0b5" />
            <stop offset="50%" stopColor="#b9a3d8" />
            <stop offset="100%" stopColor="#f8a0b5" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
