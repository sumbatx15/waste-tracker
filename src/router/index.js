import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Categories from '../views/Categories';
import CategoryView from '../views/Categories/views/CategoryView.vue';
import DefaultView from '@/views/DefaultView';
import { HomeIcon, GridIcon } from 'vue-feather-icons';

Vue.use(VueRouter);

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home,
    meta: {
      iconCmp: HomeIcon
    }
  },
  {
    path: '/categories',
    component: Categories,
    meta: {
      iconCmp: GridIcon
    }
  },
  {
    name: 'Category View',
    path: '/category-view/:id',
    component: CategoryView
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
