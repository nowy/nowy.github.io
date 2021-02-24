---
tags: [literature-note, performance]
---

# Micro Frontend Performance

When multiple teams are injecting their code into a page on an application, understanding what the performance for that page should be, or who owns that is difficult. Different pages of an application require different metrics depending their use case.

> Autonomy inherently comes with the cost of accepting redundancy

Teams define performance budgets on their pages and make sure to constantly measure that the page is within those budgets. If a micro frontend breaks that budget, then the team should stop to fix it. Given multiple micro frontends can exist on a page, it's difficult to allocate budgets per micro frontend so it is important that the team that owns the page is responsible for making sure the different micro frontends are within budgets.

Performance benefits of micro frontends include the fact that they naturally invoke granular asset bundles, and their narrow scope and small code surface area enables both architectural and software choices to be centered around their needs, not to mention the fact that developers naturally know everything there is to about the codebase.



## Links
- [[202102121749 App Performance Where We Go Wrong]]
-  [[202102121403 Asset Bundle Granularity]]

## References
- [[Micro Frontends in Action]] (page 191)