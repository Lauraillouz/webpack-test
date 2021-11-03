const tailwindcss = require("tailwindcss");

module.exports = {
  plugins: [require("postcss-preset-env")],
};
// Postcss by default looks at the root for a config file. So we don't really need anything else than this in this file

// Postcss will add a fallback for sass variables in main.css
// Example: it added a "normal" purple background before the sass variable to make sure it's readable by any browser

// Adding a .browserslistrc will make main.css add the required webkit and necessary amendments for css working on all chosen versions of browsers
