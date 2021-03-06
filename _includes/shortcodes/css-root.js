export default eleventyConfig =>
  eleventyConfig.addShortcode('cssRoot', () =>
    `:root {
      --background: #fff;
      --background-meta: #f3f3f3;
      --text-primary: #111111;
      --text-secondary: #494949;
      --text-tertiary: #717171;
      --link: #29769c;
      --link-hover: #1d5069;
      --link-focus-bg: #fd0;
      --highlight-bg: #69d8bc;
      --red: #C5004A;
    
      --font-size-s: 1.2rem;
      --font-size-m: 1.5rem;
      --font-size-l: 1.8rem;
      --font-size-xl: 3rem;
    }`)
