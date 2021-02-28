---
tags: [literature-note]
---

# Design Systems

Design systems are systems containing *tokens* (fonts, colours, icons, etc.), *components*, and more *advanced patterns* (tooltips, layers, etc.). Their goal is to create consistency across a product (or products) in the way it looks and feels, and speed up development by offering engineers out-of-the-box functionality.

Design systems inevitably cause coupling between teams as they all rely on it to create their part of the product so it is important to architect it right from the beginning as changes down the line can be cumbersome.

They can be implemented at runtime, such as Twitter's Bootstrap, where all teams are forced to use the latest version, or they can be versioned, using the entire library or each component. Versioning leads to slower rollouts and eventual consistency, but allows teams to develop at their own speed and reduces the risk of bugs.

Lastly, components in a design system can be framework-specifc or -agnostic.  The advantage of having framework-specific components is that they're easier to implement, and work both server- and client-side, however they require teams to use the same framework. Framework-agnostic components mean all teams have access to these, however require adapter layers and are limited to client-side rendering. Other alternatives include having multiple framework-specific components, which is more work but means out-of-the-box functionality for all teams, or having a common *templating language* (E.g. JSX). This last one means all teams are compatible however you can't include behavior specific to that component.

The most important aspect to a design system is to acknowledge that there will be change so keeping the system simple, and open to this change is vital. This can be done by keeping components "dumb" is essential, e.g. using only Atoms and Molecules from the Atomic design principles, and making sure components belong in the component library and are not domain-specific.

## Links
- [[202101301828 Micro Frontends]]

## References
- [[Micro Frontends in Action]] (pages 213-235)