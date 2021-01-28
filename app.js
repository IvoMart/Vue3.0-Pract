'use estrict'

const app = Vue.createApp({
  data() {
    return {
      // CSS Style classes for all document
      classCont: "contenedor",
      classSty: "styling",
      // Create an JSON object 'user'
      user: {
        nombre: "Juancho",
        edad: 20,
        peso: 90,
        tvChannels: [
          "TM",
          "A25",
          "SNC",
        ],
        pic1: "https://cdn.pixabay.com/photo/2021/01/17/15/50/baby-5925559_960_720.jpg",
        urlG: "https://google.com",
        // User style classes
        classTit:"titulo",
        classParr: "parrafo",
        classPass: "bueno",
        classWrong:"malo",
        classVbind:"",
      }
    }
  },
})