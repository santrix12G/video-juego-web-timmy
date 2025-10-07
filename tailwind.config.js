/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        secondary: '#FACC15',
        accent: '#10B981',
        error: '#EF4444',
        lightBg: '#F9FAFB',
        textPrimary: '#1F2937',
        textSecondary: '#6B7280',
        darkPanel: '#111827'
      },
      fontFamily: {
        'fredoka': ['Fredoka', 'sans-serif'],
      },
      animation: {
        'bounce-gentle': 'bounceGentle 3s ease-in-out infinite',
        'coin-bounce': 'coinBounce 2s ease-in-out infinite',
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'confetti-fall': 'confettiFall 3s linear forwards',
        'sparkle': 'sparkle 1.5s ease-out forwards',
        'timmy-bounce': 'bounce 2s ease-in-out infinite',
        'timmy-shake': 'shake 0.5s ease-in-out infinite',
        'pulse-glow': 'pulse 2s ease-in-out infinite',
      },
      keyframes: {
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        coinBounce: {
          '0%, 100%': { transform: 'rotate(0deg) scale(1)' },
          '50%': { transform: 'rotate(10deg) scale(1.1)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(50px) scale(0.9)',
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0) scale(1)',
          },
        },
        confettiFall: {
          '0%': {
            transform: 'translateY(-100vh) rotate(0deg)',
            opacity: '1',
          },
          '100%': {
            transform: 'translateY(100vh) rotate(720deg)',
            opacity: '0',
          },
        },
        sparkle: {
          '0%': {
            transform: 'scale(0) rotate(0deg)',
            opacity: '1',
          },
          '50%': {
            transform: 'scale(1) rotate(180deg)',
            opacity: '1',
          },
          '100%': {
            transform: 'scale(0) rotate(360deg)',
            opacity: '0',
          },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0px)' },
          '25%': { transform: 'translateX(-2px)' },
          '75%': { transform: 'translateX(2px)' },
        },
      },
    },
  },
  plugins: [],
}
