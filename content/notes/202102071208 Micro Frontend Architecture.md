---
tags: [literature-note, architecture]
---

# Micro Frontend Architecture

Micro frontends can be implemented a number of ways ranging linking pages to delivering unified universal SPAs. Different approaches often depend on what is required, and are defined by the approaches chosen to route and compose the application.

There are six main architectural approaches that can be used (each higher in complexity than the one before):
1. **[[202102062241 Micro Frontend Routing#Routing using links|Linked Pages]]**
2. **[[202102062241 Micro Frontend Routing#Routing on the server|Server Routing]]**
3. **Linked SPAs** (Hard navigation between different SPAs).
4. **Linked Universal SPAs** (Hard navigation between different SPAs with universal rendering).
5. **[[202102071240 Routing Using an App Shell|Unified SPA]]** (One SPA (app shell) composed of multiple SPAs).
6. **Unified Universal SPA** (One SPA (app shell) composed of multiple SPAs with universal rendering).

### Deciding which approach
![](https://freecontent.manning.com/wp-content/uploads/which-techniquearchitecture-is-right-for-my-project_04.png)
To help decide which is the best approach, we can use the Documents-to-Application Continuum to decide if we need server-side, client-side, or universal rendering.

We can use this in combination with the following decision tree to help us decide: ![](https://freecontent.manning.com/wp-content/uploads/which-techniquearchitecture-is-right-for-my-project_06.jpg)

## Links
- [[202102062241 Micro Frontend Routing]]
- [[202102071605 Micro Frontend Composition]]
- [[202102071117 Universal Rendering]]

## References
- [[Micro Frontends in Action]] (pages 160-161)