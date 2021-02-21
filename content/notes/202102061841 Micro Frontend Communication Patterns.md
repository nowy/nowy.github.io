---
tags: [literature-notes]
---

# Micro Frontend Communication Patterns

Clearly defined communication paths and boundaries are necessary to assure state is consistent and loosely coupled across micro frontends. Fragments need to be able to communicate to their parents, and each other, and global context needs to persist across all fragments. Rules surrounding events, boundaries, loading times, and state should be considered in communication. 

Events should be seen as notifications, and avoid being used to transfer data. The more data we transfer in an event, the more dependency we have on external events to make our micro frontend work. So simple nudges are best suited.

Micro frontends are supposed to be well contained, so too much communication to other micro frontends could be indicative of poorly defined boundaries. It is therefore extremely important to define the boundaries of micro frontends before starting to build them.

Asynchronous loading of fragments means not all fragments might have loaded when an event is sent. Standard events could therefore not suffice to update different micro frontends if one has not loaded in time. For example if micro frontend #1 updates, and micro frontend #2 needs to react to this change but has not yet loaded this could cause inconsistency.

Lastly, as tempting as it may be to use stores and API calls that persist across micro frontends, it is important to keep these separate as sharing state and stores causes for tight coupling. For example if micro frontend #1 wanted to change the structure of their store but micro frontend #2 was also using this, then there would need to be unnecessary communication and accord to do so. A small duplication is sometimes better than the wrong abstraction. #potential-fleet

### Parent to child / child to parent
Parent to fragment communication can be done using the "props down, events up" technique, where a parent communicates to fragments via their attributes, and the vice-versa is done using native events.

### Sibling to Sibling
Communication between siblings is sometimes necessary when one part of the app needs to talk to the other but the logic does not make sense to reside in a parent.

Direct communication (E.g. traversing a DOM tree) causes tight coupling, meaning if one of the siblings changes then the other will break too. Using an event-bus/broadcasting model allows siblings to publish and subscribe to actions without knowing about what other siblings may be using them, allowing fragments to communicate to each other without coupling. The **Broadcast API** is a native browser feature that allows this, and persists across pages/tabs.

### Global context
Managing global context such as **authentication** can be done leveraging proxies which inject context into HTTP response headers when information comes from server, or a global JavaScript API if the information is on the UI. An app shell is a common place to house this sort of information.

## Links
- [[202102062302 App Shells]]

## References
- [[Micro Frontends in Action]] (pages 99-117)