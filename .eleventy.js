module.exports = function (eleventyConfig) {
  // Copy images
  eleventyConfig.addPassthroughCopy("src/img");

  return {
    dir: {
      input: "src",
    },
  };
};
