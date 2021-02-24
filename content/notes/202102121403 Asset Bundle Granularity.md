---
tags: [literature-note, performance, assets]
---

# Asset Bundle Granularity

Bundle granularity referrers to how big or small static assets served to a user should be. Front end chapters can choose to serve assets by sections or fragments, or anywhere in between, but performance should be considered when doing so. 

Picking the right granularity is essential as it allows teams to understand how they need to use their code. Picking a single shared bundle might make setup costs easier and concepts like tree-shaking easier to achieve, however come at the cost of tight coupling. On the flip-side, having granular bundles may incur more files to download for the user, but techniques such as on-demand loading can help mitigate these

## Links
- [[202102072253 Micro Frontends Asset Loading]]

## References
- [[Micro Frontends in Action]] (pages 186-189)