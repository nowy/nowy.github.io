---
tags: [literature-note, caching, assets]
---

# Micro Frontends Asset Loading

Loading asset bundles from multiple micro frontends can be a challenging task. We need to ensure [[202102121403 Asset Bundle Granularity|assets are granular]] to cater for [[202102241823 Micro Frontend Performance|user performance]] and team autonomy. However ensuring different micro frontends can deploy independently, deprecated cached assets need to be cache-busted on user's machines, and asset synchronization during deployments are all accounted for.

Two main considerations need to accounted for when loading assets; cache-busting to ensure the user always sees the latest version, and synchronization to assert that rolled deployments do not cause 404 errors.
- [[202102281315 Cache Busting|Cache Busting]]
- [[202102281316 Deployment Synchronization| Deployment Synchronization]]

In order to guarantee the user's resources are cache busted, and synchronization is accounted when deploying, each micro frontend can provide a `manifest.json`. This manifest should contain links to the static resources, as well as the version it is providing.
```
{
  version: 1,
  css: 'my-css.123.css',
  js: 'my-js.123.js',
}
```

When the HTML content is fetched, a `version` is returned in the header, when we look at our cached `manifest.json`, we compare its version to the one returned in the HTML response. If they don't match then we request a new `manifest.json` and update it. 

> [Podium](https://podium-lib.io/) provides out-of-the-box functionality for creating versioned manifests. #fe-library

## Links
- [[202102241823 Micro Frontend Performance]]
- [[202102121403 Asset Bundle Granularity]]
- [[202102281315 Cache Busting]]
- [[202102281316 Deployment Synchronization]]

## References
- [[Micro Frontends in Action]]