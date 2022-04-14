# This module is still under development. Please do not use it yet.

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

## Documentation

Move to the `docs` directory:

```bash
cd docs
```

Install dependencies and start the project in development mode:

```bash
yarn && yarn dev
```

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `npm run dev`

## License

[MIT License](./LICENSE)

Copyright (c) Jonathan <hallo@jonathanschndr.de>

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-adyen-module/latest.svg
[npm-version-href]: https://npmjs.com/package/nuxt-adyen-module

[npm-downloads-src]: https://img.shields.io/npm/dt/nuxt-adyen-module.svg
[npm-downloads-href]: https://npmjs.com/package/nuxt-adyen-module

[github-actions-ci-src]: https://github.com/baroshem/nuxt-adyen-module/workflows/ci/badge.svg
[github-actions-ci-href]: https://github.com/baroshem/nuxt-adyen-module/actions?query=workflow%3Aci

[codecov-src]: https://img.shields.io/codecov/c/github/baroshem/nuxt-adyen-module.svg
[codecov-href]: https://codecov.io/gh/baroshem/nuxt-adyen-module

[license-src]: https://img.shields.io/npm/l/nuxt-adyen-module.svg
[license-href]: https://npmjs.com/package/nuxt-adyen-module
