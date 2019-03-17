import '@babel/polyfill';
import Vue from 'vue';
import { mapActions } from 'vuex';
import VueRouter from 'vue-router';

import store from '../../vuex/store.js';
import './index.scss';

const pageHome = () => import(/* webpackChunkName: "pageIndex" */ '../../components/page/home/home.vue');

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [{
    path: '/home',
    component: pageHome
  }, {
    path: '*',
    redirect: '/home'
  }]
});

new Vue({
  store,
  router,
  mounted() {
    const loadingEl = document.querySelector('#pageLoading');
    loadingEl.classList.add('page_loading--hide');
  }
}).$mount('#app');
