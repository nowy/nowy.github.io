---
aliases: [routing]
tags: [literature-note]
---

# Micro Frontend Routing

Routing navigation and transitions is one of the main considerations when integrating multiple micro frontends into a single application. It can be accomplished in simple but limiting ways by using links, or more complex but user-rich experiences by using app shells.

### Routing using links
At its simplest form routing between micro front ends can be implemented by hosting two different Web pages to serve different applications.

### Routing on the server
A proxy layer, using for instance NGINX, can be used to unify URLs under one domain. This comes with various limitations such as micro frontends being restricted to pages, duplication of common sections (e.g. navbars), and hard navigation (pages fetched from server) between pages.

### Routing using an app shell
The three aforementioned problems can be solved by using an app shell - a parent application for all micro frontends.

## Links
- [[202102071208 Micro Frontend Architecture]]
- [[202102071240 Routing Using an App Shell]]

## References
- [[Micro Frontends in Action]] (pages 26, 51-63, and 118-145)