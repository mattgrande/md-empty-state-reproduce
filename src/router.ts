import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import SignIn from './views/SignIn.vue';
import AssetManagement from './views/AssetManagement.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/assets',
      name: 'assets',
      component: AssetManagement /*,
      meta: {
        requiresAuth: true
      }*/
    },
  ],
});
