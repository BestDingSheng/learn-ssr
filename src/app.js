import Vue from 'vue'
import App from './App.vue';


// new Vue({
//     render: h=>h(App)
// }).$mount('#app');



export default () => {
    const app = new Vue({
      render: (h) => h(App),
    });
    return {app}
}