# nuxt-fullpage

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions CI][github-actions-ci-src]][github-actions-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

> X Module for Nuxt.js

[📖 **Release Notes**](./CHANGELOG.md)

## Setup

1. Add `nuxt-fullpage` dependency to your project

```bash
yarn add nuxt-fullpage # or npm install nuxt-fullpage
```

2. Add `nuxt-fullpage` to the `modules` section of `nuxt.config.js`

```js
/// nuxt.config.js
{
  modules: [
    // Simple usage
    'nuxt-fullpage',

    // With options
    ['nuxt-fullpage', { /* module options */ }]
  ]
}
```

Or a separate section `nuxt-fullpage` for module options:

```js
// nuxt.config.js
{
  modules: [
    // Simple usage
    'nuxt-fullpage',
  ],
  'nuxt-fullpage': {
    /* all other options */
  }
}
```

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@fullpage/nuxt-fullpage/latest.svg
[npm-version-href]: https://www.npmjs.com/package/@fullpage/nuxt-fullpage
[npm-downloads-src]: https://img.shields.io/npm/dm/@fullpage/nuxt-fullpage.svg
[npm-downloads-href]: https://npmjs.com/package/@fullpage/nuxt-fullpage
[license-src]: https://img.shields.io/github/license/alvarotrigo/nuxt-fullpage


# Resources

- [Wordpress theme](https://alvarotrigo.com/fullPage/utils/wordpress.html)
- [fullpage.js Extensions](https://alvarotrigo.com/fullPage/extensions/)
- [WordPress Plugin for Elementor](https://alvarotrigo.com/fullPage/wordpress-plugin-elementor/)
- [WordPress Plugin for Gutenberg](https://alvarotrigo.com/fullPage/wordpress-plugin-gutenberg/)
- [CSS Easing Animation Tool - Matthew Lein](http://matthewlein.com/ceaser/) (useful to define the `easingcss3` value)
- [fullPage.js cdnJS CDN](https://cdnjs.com/libraries/fullPage.js)