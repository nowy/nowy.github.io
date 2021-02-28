---
tags: [literature-note, performance]
---

# Micro Frontend Performance

When multiple teams are injecting their code into a page on an application, understanding what the performance for that page should be, or who owns that is difficult. Different pages of an application require different metrics depending their use case.

> Autonomy inherently comes with the cost of accepting redundancy

Teams define performance budgets on their pages and make sure to constantly measure that the page is within those budgets. If a micro frontend within that page breaks that budget, then the team owning the page should stop to fix it. Given multiple micro frontends can exist on a page, it's difficult to allocate budgets per micro frontend so it is important that the team that owns the page is responsible for making sure the different micro frontends are within budgets.

Performance benefits of micro frontends include the fact that they naturally invoke granular asset bundles, and their narrow scope and small code surface area enables both architectural and software choices to be centered around their needs, not to mention the fact that developers naturally know everything there is to about the codebase.

The amount of code each team has can also affect performance. Performance can be improved by extracting shared dependencies from micro frontends and housing them in one central place, for example a shared framework. It is important to measure the cost of performance vs the cost of autonomy when doing this however as forcing teams to share frameworks and versions can be a massive deficit on autonomy. For example, if one team wants to use Vue 2, but the other Vue 3 this should be allowed as otherwise if both (or more) teams have to share the same version of Vue, then upgrading to Vue 3 will require a lot of communication and coordination between teams which will slow them down. 

> [Webpack's D11Plugin](https://webpack.js.org/plugins/dll-plugin/) is a useful plugin to help extract shared dependencies across bundles. #fe-library 


## Links
- [[202102121403 Asset Bundle Granularity]]
- [[202102121749 App Performance Where We Go Wrong]]

## References
- [[Micro Frontends in Action]] (page 191-212)