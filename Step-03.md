# Instructions

<details><summary>1. Detect runtime environment</summary><p>

```html
<p v-if='isLocal' class="dev">Localhost</p>
<p v-else class="prod">Hostname: {{ hostname }}</p>
```

```css
.dev { color: #fff; font-size: .9em; background: #00bfa5; padding: .4rem .8rem; }
.prod { color: #fff; font-size: .9em; background: #8c30a8; padding: .4rem .8rem; }
```

```js
data: {
    title: 'Hello Vue.js',
    isLocal: false,
    hostname: '',
},
mounted() {
    this.isLocal = /(127\.0\.0\.1)|(localhost)/.test(location.host);
    this.hostname = location.hostname;
},
```
</p></details>

<details><summary>2. Extract component <code>&lt;EnvironmentLabel&gt;</code></summary><p>

```js
Vue.component('environment-label', {
    template: `
        <p v-if='isLocal' class="dev">Localhost</p>
        <p v-else class="prod">Hostname: {{ hostname }}</p>
    `,
    data() {
        return {
            isLocal: false,
            hostname: '',
        }
    },
    mounted() {
        this.isLocal = /(127\.0\.0\.1)|(localhost)/.test(location.host);
        this.hostname = location.hostname;
    },
})
```
</p></details>

<details><summary>3. Extract component into separate <code>*.vue</code> file</summary><p>

```vue
<template>
</template>

<script>
export default {
}
</script>

<style>
</style>
```

```sh
# Webpack will bundle Vue.js so we need to add new dependency
$ npm i vue
# Install Webpack and friends
$ npm i -D webpack-cli
$ npm i -D webpack webpack-dev-server \
        vue-loader vue-template-compiler \
        css-loader file-loader
# and one more for setting environment variables
$ npm i -D cross-env
```

- New commands in package.json

```json
"scripts": {
    ...
    "dev": "cross-env NODE_ENV=development webpack-dev-server --open --hot",
    "build": "cross-env NODE_ENV=production webpack --progress --hide-modules"
}
```

- Exclude bundle from sources (in .gitignore)

```
...
dist/
```

- Adapt Webpack configuration from [webpack-simple](https://github.com/vuejs-templates/webpack-simple/blob/master/template/webpack.config.js) template
  - babel is not essential
  - Uglify needs to be removed
  - Reference VueLoaderPlugin explicitly

- Optional: Understand this webpack configuration: [Demistifying Vue's Webpack Config](https://alligator.io/vuejs/demistifying-vue-webpack/)

</p></details>

<details><summary>4. Try debugging in Visual Studio Code</summary><p>

- Based on the guide [Debugging in VS Code and Chrome](https://vuejs.org/v2/cookbook/debugging-in-vscode.html) from docs
</p></details>