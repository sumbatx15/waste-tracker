import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Categories from '../views/Categories';
import CategoryView from '../views/Categories/views/CategoryView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    // component: Home
    // component: Categories
    component: CategoryView
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
