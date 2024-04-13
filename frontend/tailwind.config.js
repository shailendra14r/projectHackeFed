const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx,js,html}"],
  theme: {
    extend: {
      fontSize: {
        '1.4rem':'1.4rem',
      },
    },
  },
  plugins: [],
});