---
tags: [literature-note]
---

# Teams and Boundaries

Micro frontends bring a technical benefit, however the biggest benefit they bring is organisational. If boundaries are correctly allocated, then teams should not cross paths too often making them truly autonomous.

Often-times micro frontends are considered to be a technical implementation for the frontend chapter to make. The company's squads don't have bounded context; all teams own all code and parts of the product. This is done so that any product team can feel empowered to change any part of any of our products however this couldn't be further from the truth.

What this actually means is that engineering micro-services and -frontends have not been divided with the squads in mind and engineers are forced to require community, federation, and organisational hierarchy around these... which is a massive slow down.

In order to create fully autonomous teams, micro-frontends need to be created by and for specific teams. Identifying team boundaries can be done by following the principles of Domain-driven design, where by creating a *ubiquitous language* across a company, then identifying the *bounded contexts* becomes fairly obvious. 

Having clear boundaries allows organisations to scale faster by hiring for teams instead of for the company. It enables creativity as teams are able to build what they want, how they want. And it allows for failing fast as teams are able to add hacky code which they can later tare down.

Creating fully autonomous teams can cause difficulties in [[202102281124 Sharing Knowledge|sharing knowledge]] but there are a lot of known ways to mitigate these issues.

## Links
- [[202102281124 Sharing Knowledge]]

## References
- [[Micro Frontends in Action]] (pages 236-150)