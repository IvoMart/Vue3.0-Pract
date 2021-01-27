# Vue3 - Installing & Initilizing

We start by adding CDN Vue 3 on the `<head>` of our page.

By doing that on dev mode and running our page we have returning on the inspection console this message:
>You are running a development build of Vue.
Make sure to use the production build (*.prod.js) when deploying for production.

This opportunity we make the 'Vue app construction' over the same page within a `<script>` embeded tag.
Further ocations we'd be using an external .js file to make all Vue3 interactions.

>> `const app = Vue.createApp();`

is the app constructor.

Over an other `<script>` tag, at the end of our page,

>> `const loadApp = app.mount(#id);`

reffers to where we'll print and use the Vue App created on the HTML page.
