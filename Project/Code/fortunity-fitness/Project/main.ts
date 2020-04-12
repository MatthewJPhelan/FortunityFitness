import 'bootstrap/dist/css/bootstrap.css';
import Vue from 'vue'
import App from './App.vue'
import router from './Router'
import Components from './Components/index'
import './Styles/index.scss';

Vue.config.productionTip = false

new Vue({
  router,
  components: {
    ...Components
  },
  render: h => h(App)
}).$mount('#app')