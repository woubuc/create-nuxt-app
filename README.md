# Create Nuxt App
A simple [Nuxt](https://nuxtjs.org) scaffolding script that sets up:

- A Nuxt project configured for a static generated site
- Typescript support through [`nuxt/typescript`](https://typescript.nuxtjs.org/) and [`nuxt-property-decorator`](https://github.com/nuxt-community/nuxt-property-decorator)
- [Tailwind CSS](https://tailwindcss.com/) v2 support (incl. JIT) through [`nuxt/tailwind`](https://tailwindcss.nuxtjs.org/)
- Internationalisation support through [`nuxt/i18n`](https://i18n.nuxtjs.org/)

Based on a project created by the official `create-nuxt-app` tool, then 
adjusted to my own taste so I can get up and running faster.

- Tab-based indentation
- Includes a [.swpfile](https://github.com/woubuc/sweep)
- Ready to use types & tsconfig
- Tailwind config & css file already created
- Basically empty default layout & index page, without default Nuxt content

## Usage
```
yarn create @woubuc/nuxt-app <name>
```

Note: if you have used `yarn create nuxt-app` in the past, Yarn will try to run
that instead of this one. You will have to uninstall the global package first
with `yarn global remove create-nuxt-app`.
