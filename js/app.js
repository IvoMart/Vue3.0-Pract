'use strict';

const app = {
  data() {
    return {
      title: "Contador App - Vue 3.0",
      count: 0,
    }
  },
  // Definding Methods
  // Actions on Buttons
  methods: {
    modCount( interact = "add") {
      if (interact === "disc") this.count -= 1;
      else this.count += 1;
    },
  },
};



/** Creating a Vue3.0 app and mountting it on page
* Other way to do it is by including the mount.js file in our page,
* that will mount our Vue app into the element that we select.
*/
// @ts-ignore
Vue.createApp(app).mount("#app");