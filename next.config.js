
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['s4zPFvurfLYb9uEX38B2iT'] // An array of project ids.
});
module.exports = withPlasmic({
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
  // Your NextJS config.
});
  