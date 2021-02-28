---
tags: [literature-note]
---

# Sharing Knowledge

When implementing [[202101301828 Micro Frontends|micro frontends]], if teams are truly autonomous and have been given [[202102281039 Teams and Boundaries|clear boundaries]], then their lines of communication are minimal. This proves one major difficulty which is sharing knowledge across teams. If team and guaranteeing teams are helping to educate each other; how do we guarantee teams aren't solving the same problems (from a technical standpoint)?

This is where the concept of *guilds* comes into play; guilds are a rooms for people across teams to share knowledge about cross-cutting concerns (for example accessibility, or performance). Some tougher, real-life examples such as infrastructure can be solved a few ways; either you have a central infrastrcuture team, or each team is responsible for their own infrastructure, or each product team owns a "part" of the infrastructure and it is managed through federation.

Even though with micro frontends, technology should be diverse it is always good to have a "toolbox" and defaults for consistency across teams. This toolbox can include frontend blueprints; setting up technical aspects such as directory structure, testing, linting, API communication. Alternatively it can include bundlers, or liniting tools too. These are all optional and at teams' disposal.

It is necessary for teams to have sufficient autonomy so that they can change direction if they like, but also keep as close to a "way of the organisation" as possible; there is value in similarity.

## Links
- [[202101301828 Micro Frontends]]
- [[202102281039 Teams and Boundaries]]

## References
- [[Micro Frontends in Action]] (pages 236-250)