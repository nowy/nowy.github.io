---
aliases: [Server-side Rendering, Isomorphic Rendering]
tags: [literature-note]
---

# Universal Rendering

Universal rendering combines both client- and server-side rendering to leverage the advantages giving the user the quick load times of server-side composition, and the interactive app-feel of client-side composition.

Universal rendering requires micro frontends to be able to be rendered on both the server, and the client. This is difficult when using native elements such as iframes or Web components as these don't render on the server, but can be mitigated by using a combination of Web components on the client side and SSI on the server-side, or using front end frameworks such as Reach which provide this functionality out of the box.

## Links
- [[202102042224 Server-side Composition]]
- [[202102042232 Client-side Composition]]

## References
- [[Micro Frontends in Action]] (pages 145-155)