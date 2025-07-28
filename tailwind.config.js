export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
          colors: {
              "primary-0": "#fff",
              "primary-200": "rgba(186, 200, 255, 1)",
              "primary-500": "#546FFF",
              "secondary-100": '#F5F5F7',
              "secondary-300": "#8E92BC",
              "secondary-400": '#54577A',
              "secnodary-500": "#141522"
          },
          fontSize: {
              "text-2xl": '36px',
              "text-3xl": '40px',
              "text-4xl": '72px'
          }
        },
      },
    plugins: [],
  }
  