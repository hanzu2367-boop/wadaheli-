/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rose: {
          50: '#fef7f7',
          100: '#fde8e8',
          200: '#fbd5d5',
          300: '#f8b4b4',
          400: '#f48b8b',
          500: '#ec6b6b',
          600: '#d94f4f',
        },
        cream: {
          50: '#fffdfb',
          100: '#fef9f3',
          200: '#fdf3e7',
          300: '#fcebd5',
          400: '#f9ddb8',
        },
        lavender: {
          50: '#f9f7fc',
          100: '#f0ebf7',
          200: '#e3d9f0',
          300: '#d1c1e6',
          400: '#b9a3d8',
          500: '#a088ca',
        },
        blush: {
          50: '#fef5f5',
          100: '#fdeaea',
          200: '#fcd5d5',
          300: '#f9b0b0',
          400: '#f58585',
        },
        petal: {
          50: '#fef2f4',
          100: '#fde6ea',
          200: '#fbc8d4',
          300: '#f8a0b5',
          400: '#f47293',
          500: '#eb4570',
        },
      },
      fontFamily: {
        'display': ['"Playfair Display"', 'Georgia', 'serif'],
        'script': ['"Dancing Script"', 'cursive'],
        'body': ['"Quicksand"', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        'twinkle': 'twinkle 2s ease-in-out infinite',
        'twinkle-slow': 'twinkle 3s ease-in-out infinite',
        'flutter': 'flutter 3s ease-in-out infinite',
        'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
        'drift': 'drift 12s linear infinite',
        'drift-reverse': 'driftReverse 15s linear infinite',
        'sparkle': 'sparkle 2s ease-in-out infinite',
        'sway': 'sway 4s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.8s ease-out forwards',
        'slide-in-right': 'slideInRight 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.6s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        flutter: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg) scaleX(1)' },
          '25%': { transform: 'translateY(-15px) rotate(5deg) scaleX(0.9)' },
          '50%': { transform: 'translateY(-5px) rotate(-3deg) scaleX(1)' },
          '75%': { transform: 'translateY(-20px) rotate(8deg) scaleX(0.9)' },
        },
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '15%': { transform: 'scale(1.15)' },
          '30%': { transform: 'scale(1)' },
          '45%': { transform: 'scale(1.1)' },
        },
        drift: {
          '0%': { transform: 'translateX(-10%) translateY(0)' },
          '25%': { transform: 'translateX(5%) translateY(-30px)' },
          '50%': { transform: 'translateX(10%) translateY(-10px)' },
          '75%': { transform: 'translateX(5%) translateY(-40px)' },
          '100%': { transform: 'translateX(-10%) translateY(0)' },
        },
        driftReverse: {
          '0%': { transform: 'translateX(10%) translateY(0) scaleX(-1)' },
          '25%': { transform: 'translateX(-5%) translateY(-25px) scaleX(-1)' },
          '50%': { transform: 'translateX(-10%) translateY(-15px) scaleX(-1)' },
          '75%': { transform: 'translateX(-5%) translateY(-35px) scaleX(-1)' },
          '100%': { transform: 'translateX(10%) translateY(0) scaleX(-1)' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0', transform: 'scale(0) rotate(0deg)' },
          '50%': { opacity: '1', transform: 'scale(1) rotate(180deg)' },
        },
        sway: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        glow: {
          '0%, 100%': { filter: 'drop-shadow(0 0 8px rgba(244, 139, 184, 0.4))' },
          '50%': { filter: 'drop-shadow(0 0 20px rgba(244, 139, 184, 0.8))' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-60px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(60px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      backgroundImage: {
        'romantic-gradient': 'linear-gradient(135deg, #fef7f7 0%, #f0ebf7 50%, #fef9f3 100%)',
        'dreamy-gradient': 'linear-gradient(180deg, #fde8e8 0%, #f0ebf7 30%, #fef9f3 60%, #fde6ea 100%)',
        'hero-gradient': 'linear-gradient(135deg, #fbc8d4 0%, #e3d9f0 50%, #fdf3e7 100%)',
      },
      boxShadow: {
        'romantic': '0 4px 30px rgba(244, 139, 184, 0.15)',
        'romantic-lg': '0 8px 40px rgba(244, 139, 184, 0.25)',
        'dreamy': '0 0 60px rgba(185, 163, 216, 0.15)',
        'glow-rose': '0 0 40px rgba(244, 114, 147, 0.3)',
        'glow-lavender': '0 0 40px rgba(176, 139, 202, 0.3)',
      },
    },
  },
  plugins: [],
}
