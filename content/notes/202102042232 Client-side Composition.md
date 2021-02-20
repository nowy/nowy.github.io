---
tags: [literature-note]
---

# Client-side Composition

Client-side composition is the idea of assembling markup from a number of different micro-frontends on the user's device. Client-side rendered applications permit building rich and reactive user interfaces, so assembling micro frontends on the client leverages this benefit.

Though client-side composition allows us to have an app-like feel, user experience is limited due to the asynchronous loading of fragments, causing a jumping UI. It also incurs an expensive load time due to JavaScript loading and running being dependent on a user's device.

Communication between micro frontends is a major factor to consider when opting for client-side composition as when one micro frontend changes the others may need up react to this change too.

A few ways that client-side composition can be achieved include:

#### Using iframes
In its simplest form, composing different micro frontend fragments can be done using iframes to load in applications from different resources.

#potential-fleet Though iframes are a quick solution, the poor markup produced by iframes leads to issues with accessibility and SEO. Layout constraints also exist due outer layers needing to know the iframe's exact height to avoid scrollbars. Lastly there is a large performance overhead due to eac h iframe running in its own nested browsing context. 

#### Using Ajax
Ajax directly on the client code can be used to inject different micro-frontends into an application.

Using Ajax has its benefits over using, for instance, iframes as it has a natural document flow, meaning its height does not need to be set by the outer container, and the markup is valid meaning better accessibility and SEO. Dealing with errors and failing fragments is also made easier (e.g. showing errors or adding placeholders) as the fragment is part of the outer layer's markup.

However it causes difficulties in scoping, forcing us to require namespacing in CSS, cookies, events, and other browser globals. Furthermore any time something happens on one micro frontend, a server request is required to re-fetch the updated markup of the other micro frontends. Lastly knowing when scripts should be terminated is difficult causing memory management to be difficult.

> #fe-library [h-include](https://github.com/gustafnk/h-include) is a library which helps facilitate some of the setup and pain points caused by Ajax. 

#### Using Web components
Custom elements offer the major advantage of business logic encapsulation, and come equipped with lifecycle methods which can be used to determine whether they have been created, updated, or destroyed. As such they can be leveraged as a technology-neutral interface when implementing a micro frontend. The Shadow DOM can be leveraged to ensure styles do not leak across different parts of an application - avoiding the need for policing of namespaces.

## Links
- [[202102061841 Micro Frontend Communication Patterns]]
- [[202102071605 Micro Frontend Composition]]

## References
- [[Micro Frontends in Action]] (pages 85-99)
