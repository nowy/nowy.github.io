---
tags: [reference-notes, caching, assets]
---

# Micro Frontends Asset Loading

Loading asset bundles from multiple micro frontends can be a challenging task. Ensuring different micro frontends can deploy independently, deprecated cached assets are cache busted on user's machines, and asset synchronization during deployments are all accounted for, micro frontends need to version manifests alongside their code.

### Considerations
Two main considerations need to accounted for when loading assets; cache-busting to ensure the user always sees the latest version, and synchronization to assert that rolled deployments do not cause 404 errors.

#### Cache-busting and independent deployments
Most browsers (and applications) are optimised to cache static assets (images, CSS files, JavaScript, etc.) on a user's machine. This is a verified way to increase performance, however causes difficulties providing files when continuous deployment is a business requirement. For example exposing a file called `fragment.css` will no longer suffice as it will be cached on a user's machine, and updates to `fragment.css` will not reflect on that user's machine. In order to assert that a file gets cached, a technique called "cache busting" is used where a fingerprint is added to the end of the URL (E.g. `fragment.72.js`). Each subsequent deployment will add a new fingerprint.

#### Synchronization
In order to deal with high amounts of traffic, applications usually run multiple instances, and a load balancer is then used to distribute requests evenly across these instances. As new versions of an application are deployed, their instances are replaced with new instances, one-by-one to assert most instances are running at once.

The downside to replacing instances one-by-one is that whilst deploying new versions, the resources provided by each instance could differ. For example if a deployment is undergoing and one instance has been replaced, but the rest haven't, then one instance might serve `fragment.74.js`, whilst the others can serve `fragment.73.js`. A user could make a request to an application which has a dependency on `fragment.74.js` but when it makes the request to fetch this resource, the load balancer could redirect it to an instance only containing `fragment.73.js`, causing a 404 on this resource.

### Solving for caching and synchronization
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
- [[202101301828 Micro Frontends]]
- [[202102121403 Asset Bundle Granularity]]

## References
- [[Micro Frontends in Action]]