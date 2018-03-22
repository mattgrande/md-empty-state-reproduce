import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import { Route, RouteRecord } from 'vue-router';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';

Vue.use(VueMaterial);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

router.beforeEach((to: Route, from: Route, next: (url?: string) => void) => {
  const isAuthenticated = store.state.isAuthenticated;

  const requiresAuth = to.matched.some((r: RouteRecord) => r.meta.requiresAuth);

  if (requiresAuth && !isAuthenticated) {
    next('/sign-in');
  }
  else {
    next();
  }
});
