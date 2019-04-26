# Minimal Useful React PWA

_The right way to do a React PWA in 2019, but with less of someone else's code smell_

Want to get going really quick, but don't want to mess with a metric ton of opinion and weird configs for stuff you don't want?

Then this is your answer. Goes straight for standardized, common and fairly vanilla ways of doing React right, in 2019. Also does not get shitty because of that, so you get all of the features available, but less of someone else's code stink.

This is adapted from the in-house boilerplate we use at [Humblebee](https://www.humblebee.se). Feel free to get in touch if you like what we do!

![Google Chrome: Lighthouse ratings on Netlify with "Applied Fast 3G"](/lighthouse.png 'Google Chrome: Lighthouse ratings on Netlify with "Applied Fast 3G"')

NOTE: There is an unfortunate minor point deduction on Best practices because of Lighthouse's HTTP2 bug. This should be 100.

## Features

- Complete Progressive Web App experience: Installable, splash screens on load, Service Worker caching with automatic checks for updates...
- Uses babel-preset-env and browserslist to target more modern browers, cutting down bundle size a lot
- 100% Lighthouse scores (minus a few points on Best practices because of Lighthouse's HTTP2 bug)
- Extremely small: 49.9kb gzipped in Chrome (first load; then 0 bytes refresh)
- Route splitting
- No opinions on state management: Add whatever you want if you don't want regular local state or Context
- Structured around presentational components and containers
- Includes strong headers (with long-term caching etc.) and SPA redirects for Netlify
- Secure: Gets an A rating on [Security Headers](https://securityheaders.com/) and B+ on [Mozilla Observatory](https://observatory.mozilla.org/), since I've opened a bit with 'unsafe-inline' on script-src (not recommended, but is pretty much inevitable)

## Stack

- Preact X (beta) aliased on top of React 16.8
- Webpack 4.30
- Styled Components 4.2
- Babel 7
- Workbox (for Service Worker generation)

## Configs

- Browserslist
- Babel
- Editorconfig
- Eslint

## Installation

- Clone the repo
- Run `yarn` or `npm install`
- Run `yarn dev` or `npm run dev`
- Do your thing!

## Building

- Run `yarn build` or `npm run build`
- NOTE: I am using the `cp` command from Mac/Linux, so you may need to replace the copying of _\_headers_ and _\_redirects_ somehow, on a non-Bash Windows setup (the files should normally be copied with the CopyWebpackPlugin, but this breaks the Service Worker!)

## So, what doesn't it have?

It doesn't have a whole lot of content. That's your part! But seriously, one big part would be to add state persistence when unloading and reloading the app (which is needed for it to feel like a true, native application). Since that kind of implementation is way to project-based, I'll leave that to you.
