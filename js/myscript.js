const { createApp } = Vue

  createApp({
    data() {
      return {
        welcome: 'Benvenuto su Vue Js!',
        image:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png'
      }
    }
  }).mount('#app');