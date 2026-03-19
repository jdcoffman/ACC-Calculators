export default function(eleventyConfig) {
  // Pass through static assets
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("calculators");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("_headers");

  // Ignore calculator HTML from template processing (they are standalone)
  eleventyConfig.ignores.add("calculators/**");

  // Add a year shortcode for copyright
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["njk", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
