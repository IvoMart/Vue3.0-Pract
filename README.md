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

In this opportunity we use one single method call modCount to do what was made by two different methods in the [03_Count] Branch : 

> `discount(){ this.count = count -= 1 }` to decrement 'count' data value;
and the `addcount(){ this.count = count += 1 }` this is the one to increment 'count' data value.


Which in this occasion will be made by `modCount( interact = "add" ){}` method that has a parameter named ***"interact"*** and its value is to "add" by default, and an other parameter named ***"step"*** that indicates the size for increment or decrement "count" data value.

Then to make the subtraction we will tell `modCount()` method that the parameter ***"interact"*** value is "disc"; and after that checking on the method parameter's value we'd be able to change procedure.

In the same way we can now send a second parameter value to indicate and overwrite the ***'step'*** default value number.


> - modCount( interact = "add" , ***`step`*** = 1) {
>  - -  if (interact === "disc") this.count -= ***`step`***;
>  - -  else this.count += ***`step`***;
  },


> <div>
    <button v-on:click='modCount("disc",100)'>--1</button>  /*Decrements by 100 un.*/
    <button @click='modCount(" ",20)'>++1</button>          /*Increments by 20 un.*/
  </div>

