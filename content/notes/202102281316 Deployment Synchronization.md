---
tags: [literature-note]
---

# Deployment Synchronization

In order to deal with high amounts of traffic, applications usually run multiple instances, and a load balancer is then used to distribute requests evenly across these instances. As new versions of an application are deployed, their instances are replaced with new instances, one-by-one to assert most instances are running at once.

The downside to replacing instances one-by-one is that whilst deploying new versions, the resources provided by each instance could differ. For example if a deployment is undergoing and one instance has been replaced, but the rest haven't, then one instance might serve `fragment.74.js`, whilst the others can serve `fragment.73.js`. A user could make a request to an application which has a dependency on `fragment.74.js` but when it makes the request to fetch this resource, the load balancer could redirect it to an instance only containing `fragment.73.js`, causing a 404 on this resource.

## References
- [[Micro Frontends in Action]] (pages 178, 182)
