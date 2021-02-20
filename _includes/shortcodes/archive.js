export default eleventyConfig =>
  eleventyConfig.addShortcode('archive', function (_, array) {
    return `<ol reversed class="posts">
      ${array.map(item => `
        <li class="posts__entry${(item.data.highlight !== undefined && item.data.highlight === true) ? ' posts__entry--active' : ''}">
          <time class="posts__entry-date">${this.pageDate(item.data)}</time>
          <a href="${item.data.page.url}">${item.data.title}</a>
        </li>
      `).join('')}
      <li class="posts__entry">
        <time class="posts__entry-date">14 Sep 2018</time>
        <a target="_blank" href="https://medium.com/attest-r-and-d/fully-typed-typescript-api-consuming-grpc-and-graphql-5d5ae6b33bf1">Creating a TypeScript API that consumes gRPC and GraphQL via generated types</a>
      </li>
    </ol>`
  })
