---
title: Powering Awesomeness With Technology
isSubPage: true
publishDate: 8th Feb
dark: true
tags:
  - macos
  - caching
  - ios
wrap: true
excerpt: Content Caching (built into macOS High Sierra) is an oft ignored
  feature that can speed up delivery of Apple software updates, iOS apps, well
  as personal iCloud data for homes, businesses, and institutions by delivering
  content from local computer storage over the LAN, rather than going out to the
  Internet each and every time.
authorName: Michael Jin
---
::: component BlogPostHeader
~~~
{}
~~~

:::

Content Caching (built into macOS High Sierra) is an oft ignored feature that can speed up delivery of Apple software updates, iOS apps, well as personal iCloud data for homes, businesses, and institutions by delivering content from local computer storage over the LAN, rather than going out to the Internet each and every time. Content Caching dramatically speeds up app installs if you are doing multiple app installs. As your devices download apps, the Mac inserts itself as middleman and will save copies of each installed app. Subsequent installs of the same apps are much quicker, since the apps load from the Mac’s hard drive instead of the Internet. This is extremely useful for deploying a large number of devices and will save a lot of external bandwidth!

To enable it on macOS High Sierra (10.13.x), all you need is to go into System Preferences > Sharing and check the Content Caching check box.

![System Preferences > Content Caching](/assets/screen-shot-2018-06-01-at-11.43.50.png "System Preferences > Content Caching")

There are three options for caching:

1. Shared Content - this limits caching to apps, and software updates.
2. iCloud Content - this caches personal iCloud (stored securely) only, such as iCloud Drive, and iCloud Photos.
3. All content - use this to cache both Shared and iCloud content.

We recommend a machine that is permanently in the office with at least 50GB storage and wired into Ethernet to choose as the Content Caching server. It’ll take a small performance hit, but in return, the rest of the office will benefit from the speed increase in app downloads and updates.

Content Caching saves our bacon during our mass event deployments. 🐷📲