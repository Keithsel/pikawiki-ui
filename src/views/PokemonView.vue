<!-- src/views/PokemonView.vue -->
<template>
  <div>
    <HeaderComponent />
    <main class="container mx-auto py-8">
      <h1 class="text-3xl font-bold mb-8">Find your favorite Pokemon here</h1>
      <div class="mb-8">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search Pokemon..."
          class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <PokemonCard v-for="pokemonName in filteredPokemons" :key="pokemonName" :pokemon-name="pokemonName" />
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import PokemonCard from '@/components/PokemonCard.vue';
import pokemonNames from '@/utils/pokemons.json';
import PokemonBoard from '@/components/PokemonBoard.vue';

const pokemons = ref([]);
const searchQuery = ref('');

onMounted(() => {
  pokemons.value = pokemonNames;
});

const filteredPokemons = computed(() => {
  return pokemons.value.filter(pokemonName =>
    pokemonName.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});
</script>