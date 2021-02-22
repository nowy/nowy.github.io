export const data = {
  layout: 'layouts/interactive',
  tags: ['home'],
  weight: 1,
  isOpen: true,
  title: 'Notes Archive',
  permalink: '/archive/index.html'
}

export const render = () => `
<section class="content">
  <a href="/" class="content__back" id="page-back">Return back home</a>
  <h1 id="page-title">Notes Archive</h1>
  <div id="page-content">
    <p class="paragraph">
      I recently started a new way of memorizing the things I learn, which is essentially to write them in my own words as soon as I read them.
      I follow the <a href="https://en.wikipedia.org/wiki/Zettelkasten" target="_blank">Zettelkasten</a> method of taking notes. Take a peek at the notes I've kept and how they connect to each other.
    </p>
    <p class="paragraph">
      My hope is that one day, eventually my zettelkasten will be big enough that it can be of use to other people. This is <strong>still very bare</strong>, I plan on adding to it as I read (and note down) more.
    </p>
    <p class="paragraph"></p>
    <h3>How to use it</h3>
    <p class="paragraph">
      Easy. Click on the nodes on the right hand side. Colours represent their "tags", and the links recommend the next node. I plan on adding better visualisation in the future so hang on tight.
    </p>
    <h3>Shout out</h3>
    <p class="paragraph">
      All reference you see right now are from Michael Geers' <a href="https://www.manning.com/books/micro-frontends-in-action" target="_blank">Micro Frontends in Action</a>, so thank you for being my first reference guide.
    </p>
  </div>
</section>
`
