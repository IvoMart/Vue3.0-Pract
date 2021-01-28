# Vue3 - Installing & Initilizing

We start by adding Vue 3 file on the `<head>` of our page.

By doing that on dev mode and running our page we have returning on the inspection console this message:
>You are running a development build of Vue.
Make sure to use the production build (*.prod.js) when deploying for production.

This opportunity we make the 'Vue app construction' over an external file 'app.js'.

>> `const app = Vue.createApp();`

is the app constructor.

Over an other `<script>` tag, at the end of our page,

>> `const loadApp = app.mount(#id);`

reffers to where we'll print and use the Vue App created on the HTML page.

Now we started to use Vue binding propieties to make it work for us and show different info in our page, such us:
Messages according `user.age`, style classes by `:class`, conditional programming by `v-if || v-else-if || v-else` (this is use to select an according message whether the condition "user.age >= 18" is true or false), and loop programming by `v-for( item in items)` (this is used to show the info contained in a array list "user.tvChannels").