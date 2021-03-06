---
tags: [permanent-note, performance, article]
---

# App Performance: Where We Go Wrong

Everybody, consciously or not, loves performant applications, and as a consequence engineers spend a lot of time trying to assert visual stability, interactivity, fast loading times, amongst other aspects of performance when delivering features. There are a number of great resources out there telling us *why* performance is important, or *how* to make our applications performant, which I will link at the end of this post, but this post focuses on how we can improve performance without code.

Application performance does not start in code, it starts when an idea is conceived, and its expectations are set. We have a lot of useful metrics, auditors, strategies, debuggers, and tools that help us build highly performant applications. But what does it mean for an application to be "performant"?

A _behaviour-centric_ page such as a dashboard with a lot of graphs may not need the most performant load time, but needs to be highly responsive. On the flip-side, a _content-centric_ blog might not need every embedded video to be immediately interactive, but it needs page loads with the vital information to be shown speedily. Or if a user is told that a generated report will take up to 10 minutes to create - a relatively slow request time - it could be perceived as "fast" if it is done in 2 minutes.

Automating or ensuring "performant" apps at a code level is difficult as the definition of "performant" might not mean the same for every UI slice of an application; the way we measure a slice's performance is completely relative to what that slice needs or does. What this in turn means though is that standard performance auditors might not always paint a full picture. For example, a high score on page load speed using [Lighthouse](https://developers.google.com/web/tools/lighthouse) can be insignificant if that isn't what the user needs to have an enjoyable experience.

By slicing our application into small slices from a user's perspective, we are able to understand how performant different parts of an application should be, and allocating useful metrics becomes easier.  Deciding on how to slice an application is entirely on a company's needs/wants, and isn't to be confused with the way we slice [bounded context in Domain-driven design](https://martinfowler.com/bliki/BoundedContext.html), or how we slice micro-frontends, but could be similar.

Anytime we add functionality we can ask "what performance does this slice of UI need to provide an acceptable user experience?" and write these down somewhere company-visible. The solution to good performance could be a simple design, a fast API, or instant user response, it depends on what the user needs. The important part is that we are thinking and writing these up when the idea is conceived so that performance is centered around the *user* not the *function*. Performance is, and should be a cross-functional concern.

As we write more and more expectations of performance, the boundaries around slices of our application start to become more clear and we start to be able to be able to accurately justify what it means for our application to be "performant".

As a consequence of defining performance at a user level, it becomes easier to define and automate telemetry systems in code, or per service. We also now know what we should and shouldn't log, or should look out for in code reviews. So not only does centering performance at the idea inception stage help the *user*, we in turn make it easier to automate and assert it at a *function* level.

## Links
- [[202102241823 Micro Frontend Performance]]
