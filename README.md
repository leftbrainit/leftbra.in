# LeftBrain Website 3.0

## Site Admin/Editing

To modify the site content, make blog posts, etc visit https://leftbra.in/admin/

## Tech Stack

### Vite

The site is built on [Vue 3](https://v3.vuejs.org/) (using the [SFC `<script setup>`](https://v3.vuejs.org/api/sfc-script-setup.html) tag where possible) and [Vite](https://vitejs.dev/) which provides a local dev server, and builds for production. All Vite config is in `/vite.config.js`. We use [vite-plugin-pages](https://github.com/hannoeru/vite-plugin-pages) to transform the markdown files in `/src/pages` into Vue routes, and [vite-plugin-md](https://github.com/antfu/vite-plugin-md), extended to render custom components.

### Tailwind CSS & Tailwind UI

[Tailwind CSS](https://tailwindcss.com/) is a CSS framework that allows sites to be built using css classes, instead of sprawling stylesheets with semantic names. As such, stylesheet usage should be be kept to a bare minimum, if any.

[Tailwind UI](https://tailwindui.com/) is a (paid) set of reactive components, made by the Tailwind creator. When adding new content, these components should always be used as a starting point, to ensure a consistent look and feel.

### Netlify & Netlify CMS

The site is deployed by and hosted on [Netlify](https://www.netlify.com/). To modify deployment settings, domain, SSL etc, log in to the [Netlify Admin](https://app.netlify.com/teams/leftbrain/overview) page: authentication is via Github, but you must be [invited](https://app.netlify.com/teams/leftbrain/members/new) as an admin separately.

We use [Netlify CMS](https://www.netlifycms.org/) to edit and create content, which outputs markdown files into `/src/pages`, and json files for collections in `/src/collections` and `/src/site.config.json`. Creating a page in Netlify CMS automatically Authorisation is done via a Github account, which must be a member of the LeftBrain org (see below). The config for Netlify CMS itself lives in `/admin/config.yml`

#### CMS Components

Netlify CMS has been extended to bring in Vue components from `/src/components`, with the meat of the code happening in `/src/admin`. We read a list of the Vue components, extract their props, and render them as editor components in Netlify CMS. The rendered editor components present the props as [widgets](https://www.netlifycms.org/docs/widgets/) which in turn renders content back to markdown files `/src/pages`

### Github

The site source code is hosted on Github (`leftbrainit/leftbra.in`), and any member of the LeftBrain Github org has access to read and write.

### Google Tag Manager

To embed and control additional javascript tags (such as Google Analytics and Intercom), [Google Tag Manager](https://tagmanager.google.com/) is configured. You need to be added to the account by an existing member to adminster.

## Local Development

Clone from the Github repo ([Github Desktop](https://desktop.github.com/) is nice), then:

```bash
# install dependencies
$ yarn

# serve with hot reload at localhost:3000
$ yarn dev

# build for production
$ yarn build

# preview your built files
$ yarn serve
```

To improve the experience of using Netlify CMS locally, you can also run `yarn proxy`. Without this, updating a page at http://localhost:3000/admin will publish changes directly to Github, which then need to be pulled down to your machine. When the netlify proxy is running, changes are published to your local copy of the repo, which can then be committed. 