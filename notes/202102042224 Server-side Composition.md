---
aliases: [server-side rendering]
tags: [literature-note]
---

# Server-side Composition

Server-side composition is the idea of composing markup from a number of micro frontends on the server. This technique can be used to improve user experience by bringing faster load times for the user. 

Leveraging server-side composition means that requests made to different servers to fetch micro frontend fragments of markup aren't limited by the client's bandwidth, which in turn can mean better load times for users. More techniques such as parallel loading, and streaming responses can further boost these low loading times.

On the flip side multiple resources being fetched on the server also mean more points of failure therefore when composing markup. In order to avoid entire pages slowing down, or failing to load due to a flaky fragment, timeouts are used to give fragments time limits to load, and fallbacks are used to populate the markup in case the fragment doesn't load at all.

When deciding on a server side composition architecture, teams must chose between a centralised approach or a distributed approach, where composition is nested in micro-frontends (see more on Podium).

A few ways that server-side composition can be achieved include:
	- [[202102071141 NGINX Server-side Includes]]
	- [Tailor](https://github.com/zalando/tailor) #fe-library
	- [Podium](https://podium-lib.io/) #fe-library 

## Links
- [[202102042246 Server Markup Assembly Performance]]

## References
- [[Micro Frontends in Action]] (pages 59-69)
