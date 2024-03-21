// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import PokemonView from '@/views/PokemonView.vue';
import PokemonDetailsView from '@/views/PokemonDetailsView.vue';
import AboutView from '@/views/AboutView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/pokemon',
      name: 'Pokemon',
      component: PokemonView,
    },
    {
      path: '/pokemon/:pokemonName',
      name: 'PokemonDetails',
      component: PokemonDetailsView,
    },
    {
      path: '/about',
      name: 'About',
      component: AboutView,
    },
  ],
});

export default router;