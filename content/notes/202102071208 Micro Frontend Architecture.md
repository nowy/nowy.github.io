---
tags: [literature-note, architecture]
---

# Micro Frontend Architecture

Micro frontends can be implemented a number of ways ranging linking pages to delivering unified universal SPAs. Different approaches often depend on what is required, and are defined by the approaches chosen to route and compose the application.

The way each micro frontend needs to be [[202102071605 Micro Frontend Composition|composed]], in conjunction with how we need to [[202102062241 Micro Frontend Routing|route to and from micro front ends]] helps indicate the best way to architect each one.

There are six main architectural approaches that can be used (each higher in complexity than the one before):
1. **[[202102062241 Micro Frontend Routing#Routing using links|Linked Pages]]**
2. **[[202102062241 Micro Frontend Routing#Routing on the server|Server Routing]]**
3. **Linked SPAs** (Hard navigation between multiple SPAs).
4. **Linked Universal SPAs** (Hard navigation between multiple SPAs with universal rendering).
5. **[[202102071240 Routing Using an App Shell|Unified SPA]]** (One SPA (app shell) composed of multiple SPAs).
6. **Unified Universal SPA** (One SPA (app shell) composed of multiple SPAs with universal rendering).

To help decide which is the best approach, we can use the [Documents-to-Application Continuum](https://www.manning.com/books/micro-frontends-in-action) to decide if we need server-side, client-side, or universal rendering. This [linked decision tree](https://freecontent.manning.com/wp-content/uploads/which-techniquearchitecture-is-right-for-my-project_06.jpg) can be used in combination with the continuum to make a decision on what each micro frontend needs from a user's perspective.

## Links
- [[202102071605 Micro Frontend Composition]]
- [[202102062241 Micro Frontend Routing]]

## References
- [[Micro Frontends in Action]] (pages 160-161)