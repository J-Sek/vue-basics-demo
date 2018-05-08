# Instructions

<details><summary>1. Install Chrome DevTools extension for Vue.js</summary><p>

- Download from WebStore: [Vue.js devtools](https://chrome.google.com/webstore/detail/nhdogjmejiglipccpnnnanhbledajbpd)
- Be aware: It needs to be enabled when you are using minified production version of Vue.js

```js
Vue.config.devtools = true;
```
</p></details>

<details><summary>2. Use <code>v-cloak</code> to prevent displaying <code>{{ title }}</code></summary><p>

```html
<style>
    [v-cloak] { display: none }
</style>
<div id="app" v-cloak>
    <h1>{{ title }}</h1>
</div>
```
</p></details>