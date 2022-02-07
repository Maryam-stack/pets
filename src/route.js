import { createRouter } from 'vue-router';
// COMPONENTS
import petSearch from './components/searchpets.vue'
import addNew from './components/add.vue';
import appGet from './components/get.vue';

const routes = createRouter({
    routes:[
        { path:'/', component: appGet},
        { path:'/search', component: petSearch },
        { path:'/add', component: addNew },
    
    ]
});
export default routes;