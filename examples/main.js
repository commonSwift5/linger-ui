import Vue from 'vue'
import App from './App.vue'
// import '../components/css/demo.scss'
// import '../components/css/card.scss'
import Button from '../components/lib/button/index.js'

// import Demo from '../components/lib/demo/index.js'
// import Card from '../components/lib/card/index.js'
import ZZUI from 'linger-ui'
// import 'linger-ui/dist/css/index.css'
import '../components/css/index.scss'

Vue.use(ZZUI)
Vue.use(Button)

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App)
}).$mount('#app')
