# Vue3 - SPA Counter

We start by adding Vue 3.0 CDN on the `<head>` of our page.

By doing that on dev mode and running our page we have returning on the inspection console this message:
>You are running a development build of Vue.
Make sure to use the production build (*.prod.js) when deploying for production.

This opportunity we make the 'Vue app construction' over an external file 'app.js' and mounting it at the same code line into the element with the #app id.

> `const app = data(){}`

> `Vue.createApp(app).mount("#app");`

Style css file gives styling to our page, coloring, resizing and spacing every element in DOM.

## Methods:
This is where magic can be done:
`const app = ➡ methods(){}`
by adding v-bindings `v-on:click` to define what is to happen over the 'click' event on buttons.

In this opportunity we use two different methods: `discount(){ this.count = count -= 1 }` to decrement 'count' data value; and the `addcount(){ this.count = count += 1 }` this is the one to increment 'count' data value.
