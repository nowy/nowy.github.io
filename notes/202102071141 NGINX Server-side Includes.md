---
aliases: [SSI]
tags: [literature-note, fe-library]
---

# NGINX Server-side Includes

[NGINX](https://www.nginx.com/) is equipped with SSI (server side includes); placeholders put in code with a URL which when resolved by NGINX will be replaced with the markup outputted.

When adopting SSI, timeouts and fallbacks are used to avoid entire pages failing slowing down, or failing to load due to a flaky fragment.

## Links
- [[202102042224 Server-side Composition]]

## References
- [[Micro Frontends in Action]] (pages 51-58)