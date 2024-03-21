<!-- src/views/PokemonDetailsView.vue -->
<template>
    <div>
      <HeaderComponent />
      <main class="container mx-auto py-8">
        <div v-if="pokemon" class="flex flex-col md:flex-row">
          <div class="md:w-1/2">
            <img :src="getPokemonImageUrl" :alt="pokemon.name" class="w-full h-auto rounded-lg shadow-md">
          </div>
          <div class="md:w-1/2 md:pl-8 mt-8 md:mt-0">
            <h1 class="text-4xl font-bold mb-4">{{ pokemon.name }}</h1>
            <p class="text-gray-700 mb-4">Height: {{ pokemon.height }}</p>
            <p class="text-gray-700 mb-4">Weight: {{ pokemon.weight }}</p>
            <p class="text-gray-700 mb-4">Types: {{ pokemon.types.join(', ') }}</p>
            <p class="text-gray-700">Abilities: {{ pokemon.abilities.join(', ') }}</p>
          </div>
        </div>
        <div v-else class="text-center">
          <p>Loading Pokemon details...</p>
        </div>
      </main>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, computed } from 'vue';
  import { useRoute } from 'vue-router';
  import HeaderComponent from '@/components/HeaderComponent.vue';
  import pokemonData from '@/utils/mockdata.json';
  
  const route = useRoute();
  const pokemonName = route.params.pokemonName;
  const pokemon = ref(null);
  
  onMounted(() => {
    const foundPokemon = pokemonData.find(p => p.name === pokemonName);
    if (foundPokemon) {
      pokemon.value = foundPokemon;
    }
  });
  
  const getPokemonImageUrl = computed(() => {
    return `/src/assets/pokemon-images/${pokemonName}.png`;
  });
  </script>