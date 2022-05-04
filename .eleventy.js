const sass = require("sass");

module.exports = function (eleventyConfig) {
  // Copy images
  eleventyConfig.addPassthroughCopy("src/img");
  // Copy Fontawesome
  eleventyConfig.addPassthroughCopy({
    "node_modules/@fortawesome/fontawesome-free/webfonts": "webfonts",
  });

  //Stars
  eleventyConfig.addFilter("stars", function (value) {
    let output = "";
    for (i = 0; i < Math.floor(value); i++) output += "⭐";
    return output;
  });

  // Compile Sass
  eleventyConfig.addTemplateFormats("scss");

  eleventyConfig.addExtension("scss", {
    outputFileExtension: "css",
    compile: function (contents, inputPath) {
      let includesPaths = [this.config.dir.includes, "./node_modules/"];
      return (data) => {
        let ret = sass.compile(inputPath, {
          loadPaths: includesPaths,
          style: "compressed",
        });
        return ret.css.toString("utf8");
      };
    },
  });

  return {
    dir: {
      input: "src",
    },
  };
};
