<!-- src/views/PokemonView.vue -->
<template>
    <div>
      <HeaderComponent />
      <main class="container mx-auto py-8">
        <h1 class="text-3xl font-bold mb-8">Find your favorite Pokemon here</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PokemonCard v-for="pokemonName in pokemons" :key="pokemonName" :pokemon-name="pokemonName" />
        </div>
      </main>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import HeaderComponent from '@/components/HeaderComponent.vue';
  import PokemonCard from '@/components/PokemonCard.vue';
  import pokemonNames from '@/utils/pokemons.json';
  
  const pokemons = ref([]);
  
  onMounted(() => {
    pokemons.value = pokemonNames;
  });
  </script>