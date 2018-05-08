# Instructions

<details><summary>1. Create empty HTML page with simplest Vue.js "Hello World"</summary><p>

```html
<!doctype html>
<html>
<body>
    <div id="app">
        <h1>{{ title }}</h1>
    </div>

    <script src='https://unpkg.com/vue'></script>
    <script>
        new Vue({
            el: '#app',
            data: {
                title: 'Hello Vue.js'
            },
        })
    </script>
</body>
</html>
```
</p></details>

<details><summary>2. Initialize NPM project</summary><p>

```sh
$ npm init -y
# We only need [ name, version, license ] in package.json
```

- Add [live-server](https://www.npmjs.com/package/live-server) to ease development

```sh
$ npm i live-server
```

- Add .gitignore

```
node_modules/
```
</p></details>

<details><summary>3. Add <code>start</code> / <code>next</code> / <code>prev</code> commands</summary><p>

```json
...
"scripts": {
    "start": "live-server",
    "next": "git next",
    "prev": "git prev"
}
...
```

In ~/.gitconfig

```txt
[alias]
    next   = "!git checkout -f $(git rev-list --topo-order HEAD..master | tail -1)"
    prev   = checkout -f HEAD~
```

</p></details>