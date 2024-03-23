// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import PokemonView from '@/views/PokemonView.vue';
import PokemonDetailsView from '@/views/PokemonDetailsView.vue';
import MovesView from '@/views/MovesView.vue';
import TypesView from '@/views/TypesView.vue';
import AbilitiesView from '@/views/AbilitiesView.vue';
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
    {
      path: '/move',
      name: 'Moves',
      component: MovesView,
    },
    {
      path: '/type',
      name: 'Types',
      component: TypesView,
    },
    {
      path: '/ability',
      name: 'Abilities',
      component: AbilitiesView,
    },
  ],
});

export default router;