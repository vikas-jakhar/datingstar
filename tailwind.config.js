/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'form-layer': "url('./assets/images/webp/form-layer.png')",
        'section-layer': "url('./assets/images/webp/section-layer.png')",
      },
      fontFamily: {
        'raleway': "'Raleway', sans-serif",
        'inter': "'Inter', sans-serif",
      },
      colors: {
        'off-yellow': "#F7B103",
        'off-white': "#FFFFFF1A",
        'light-gray': "#FFFFFF4D",
        'off-gray': "#828282",
        'dark-gray': "#FFFFFF33",
        'light-white': "#FFFFFF30",
      },
      container: {
        center: true,
        padding: "20px",
        screens: {
          'sm': "640px",
          'md': "768px",
          'lg': "1024px",
          'xl': "1180px",
        }
      },
      lineHeight: {
        'custom-xl': "48px"
      },
      backgroundSize: {
        '100': "100% 100%"
      }
    },
  },
  plugins: [],
}

