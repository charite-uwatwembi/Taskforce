/** @type {import('tailwindcss').Config} */


module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.grayscale-on-hover': {
          '&:hover': {
            filter: 'grayscale(100%)',
          },
        },
      };
      addUtilities(newUtilities, ['responsive']);
    },
  ],
};


