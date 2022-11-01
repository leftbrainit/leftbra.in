---
title: When did you last change your office WiFi password?
isSubPage: true
publishDate: 21st May 2018
dark: false
tags:
  - wifi
  - security
  - server
wrap: true
excerpt: The age old proverb, “*A chain is only as strong as its weakest link*”,
  certainly applies to network security. With so much attention spent on
  encryption, securing user endpoints, anti-phising software, can you remember
  the last time you changed your office WiFi password? And come to think of it,
  how many staff members have joined and left since then, not to mention your
  various guests and clients that might have joined your network during meetings
  and visits etc.
authorName: Michael Jin
---
::: component BlogPostHeader
~~~
{}
~~~

:::

# …(and how RADIUS can help)

The age old proverb, “*A chain is only as strong as its weakest link*”, certainly applies to network security. With so much attention spent on encryption, securing user endpoints, anti-phising software, can you remember the last time you changed your office WiFi password? And come to think of it, how many staff members have joined and left since then, not to mention your various guests and clients that might have joined your network during meetings and visits etc.

Ideally, one would change the password on a regular basis; and especially after a member of staff leaves the company. However, the reality is that is this far to impractical and labour intensive. And here at LeftBrain, we prefer to work smarter, not harder.

This is where **RADIUS** comes in (As industry acronyms go, this one isn’t bad). **[Wikipedia defines it](https://en.wikipedia.org/wiki/RADIUS)** as: *Remote Authentication Dial-in User Service*. Put simply, it’s a protocol designed to provide centralised network authentication of your users.

## How does this help network security?

Let’s imagine every staff member has their own unique WiFi password to join the company network. Now, not only can you account for when (and where) a user joins your network (this is useful for auditing and a host of all other benefits), when they leave, you can deauthenticate their specific credentials without affecting the rest of the office. RADIUS allows you to do this. Since most companies already create user accounts to access an on-premise server, or cloud storage accounts (Microsoft’s ActiveDirectory being one of the most popular), RADIUS can automagically use these accounts for authentication to the network.

## This sounds complicated and expensive.

It can be, but it also doesn’t have to be. We’ve helped our clients roll out RAIDUS authentication with very little additional investment, more often than not, the equipment and software required is already built into the existing network infrastructure (one of the perks of having your IT support partners handle everything). Once setup, everything works like normal WiFi. In fact, it’s completely transparent to the end user as all macOS and iOS devices support RADIUS and will auto join the network.

![Screen Shot 2018-05-21 at 12.08.22](https://leftbrain.it/assets/Screen%20Shot%202018-05-21%20at%2012.08.22.png)*Within the UniFi controller, enabling RADIUS is as simple as turning it on and defining an authentication server.*

For a typical office, we’ll normally deploy three wireless networks:

1. The main company WiFi. This can only be logged on via RADIUS authentication. Access to company data is only available via this network.
2. Infrastructure WiFi. Can be a hidden SSID, but protected by WPA2 Passcode. This is reserved for WiFi devices used in and around the office, such as the office Sonos or wireless printer. Only administrators or senior management should know this password.
3. Guest WiFi. A segregated, restricted network.

Now when a staff member is off-boarded, their user account is normally archived and disabled. With RADIUS implemented, their WiFi access will also be revoked at the same time, this closing off the loop.

For more information and to see how we can implement RADIUS (and tighten up your network security), **[get in touch](http://leftbrain.it/get-in-touch/)**.