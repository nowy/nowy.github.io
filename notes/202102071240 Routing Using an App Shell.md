---
aliases: [Stitching Layer]
tags: [literature-note]
---

# Routing Using an App Shell
Leveraging an app shell can be a powerful tool to make navigating between micro frontends seemless

### Single-level routing
In a single-level routing model, the app shell will load the code for each of the micro frontends, as well as host configuration for all of the routes of an application. The configuration can be something as simple as a key/value store mapping URLs to component names (this example uses custom elements):

``` ts
const routes = {
  '/checkout/payments': 'custom-element-from-first-micro-fe',
  '/checkout/shipping': 'another-element-from-first-micro-fe',
  '/survey/creator': 'ace-element-from-second-micro-fe',
  '/survey/results': 'king-element-from-second-micro-fe'
}
```

Routing logic is then inserted (using for example the native history API or a library) where page links are intercepted and using the configuration above the app shell will fetch the appropriate code (in this example; custom element) for the route.

The main issue with this way of routing is the fact that anytime micro frontend needs to add routes, they need to add to the app shell. Any routing logic also needs to reside in the app shell, which when micro frontend-specific can mean that business logic is leaking into the supposedly feature-agnostic layer.

### Two-level routing
Two level routing divides routing into app shell-, and micro fronted-level routing. The app shell level router, or top level router, houses simple sections.

``` ts
const routes = {
  '/checkout': 'custom-element-first-micro-fe',
  '/survey': ''custom-element-second-micro-fe'
}
```

Once this is done, then different micro frontends can implement their section-level routes using the different technologies they desire (e.g. vue-router on `/checkout` and react-router on `/survey`).

When using an app shell to route, it is always important to remember to cleanup any listeners once tfhe micro frontend has been disconnected in order to avoid memory leaks.

### Libraries
- [single-spa](https://single-spa.js.org/) acts as an app shell out of the box. Different micro frontends expose their code using a common interface, and register their base route on on the app shell. Single-spa also handles topics such as error handling or lazy loading. #fe-library 

### Important topics to consider
- Shared HTML document and meta data.
- Memory management and clean up.
- App shell is a single point of failure, so heavy testing and good architecture are vital.
- Boot time of different micro frontends.

## Links
- [[202102062241 Micro Frontend Routing]]
- [[202102062302 App Shells]]

## References
