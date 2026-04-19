const slugify = (str) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "public/favicon.ico": "favicon.ico" });
  eleventyConfig.addPassthroughCopy({ "src/style.css": "style.css" });

  eleventyConfig.addFilter("slugify", slugify);

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
  };
};
