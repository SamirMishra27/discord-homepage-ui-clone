/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.js",
    "./**/*.html"
  ],
  theme: {
    extend: {
        screens: {
            'xs': '440px'
        },
        fontFamily: {
            'primary': ['Noto Sans', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
            'headline': ['Noka Black', 'Noto Sans', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif']
        },
        colors: {
            'gray': '#f6f6f6',
            'blurple': '#5865f2',
            'deep-blurple': '#404eed',
            'not-quite-black-900': '#23272a',
            'not-quite-black-800': '#36393f',
            'bright-blurple': '#7983f5'
        },
        boxShadow: {
            'btn-hover': '0 8px 15px rgba(0, 0, 0, 0.2)'
        },
        keyframes: {
            'fade-in-scroll-anim': {
                '0%': { opacity: 0, transform: 'translateY(25px)' },
                '100%': { opacity: 1, transform: 'translateY(0px)' }
            }
        },
        animation: {
            'fade-in-scroll': 'fade-in-scroll-anim 0.6s ease-in-out 50ms 1 normal forwards'
        }
    },
  },
  plugins: [],
}
