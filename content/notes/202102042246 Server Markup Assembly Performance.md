---
tags: [literature-note, performance]
---

# Server Markup Assembly Performance

When composing markup on the server, a number of techniques can be used to mitigate for the effect of misbehaving fragments, which can cause performance or the user's experience to degrade.

### Loading fragments in parallel
By loading all fragments in parallel, the loading time will only be as slow as time taken to load the slowest fragment, as opposed to a sum of all fragments.

### Avoiding nested fragments
Nesting fragments can potentially increase response time as loading in parallel cannot be done for all fragments. Avoiding nested fragments can therefore mean faster response times.

### Deferring loading to client-side
This technique is used to deffer specific fragments to load on the client-side instead of the server. This means we leverage the server for essentials (E.g. what is in the user's viewport), and offload non-essentials to load after the user is able to see the page.

### Streaming responses
This is the concept of sending parts of the response at a time, as they are resolved. Doing so means the first transfer to the browser is made as soon as the first part is resolved, making the Time-to-first-byte very fast for the user. 

## Links
- [[202102042224 Server-side Composition]]

## References
- [[Micro Frontends in Action]] (pages 69-81)
