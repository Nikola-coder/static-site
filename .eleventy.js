module.exports = function (eleventyConfig) {
  // Copy images
  eleventyConfig.addPassthroughCopy("src/img");
  // Coyp css-file
  eleventyConfig.addPassthroughCopy("src/main.css");

  return {
    dir: {
      input: "src",
    },
  };
};
