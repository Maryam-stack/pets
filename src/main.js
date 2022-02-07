/*enlist-disable*/
import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
//import router from './route'

// COMPONENTS
import petSearch from './components/searchpets.vue'
import addNew from './components/add.vue';
import appGet from './components/get.vue';

Vue.config.productionTip = false
//Vue.use(router)

const routes = [
  { path:'/', component: appGet},
  { path:'/search', component: petSearch },
  { path:'/add', component: addNew }
]
const router = new VueRouter({
  routes 
})

Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
