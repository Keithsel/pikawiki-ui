<!-- src/views/PokemonView.vue -->
<template>
  <div>
    <HeaderComponent />
    <div class="container mx-auto px-6 py-8">
      <h1 class="text-3xl font-bold mb-4 text-center">Pokemon</h1>
      <div class="mb-4 flex flex-col items-center">
        <div class="text-left inline-block">
          <span>Have a look at your favorite Pokemon along with their main stats.</span><br>
          <span class="text-center">The table is sortable by clicking a column header, and searchable by using the controls above it.</span>
        </div>
      </div>
      <div class="mb-4 flex justify-center">
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Search by name..."
          class="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div class="relative inline-block ml-4">
          <select
            v-model="selectedType"
            class="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All types</option>
            <option v-for="type in types" :key="type" :value="type">
              {{ type }}
            </option>
          </select>
        </div>
      </div>
      <PokemonBoard :pokemons="filteredPokemons" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import PokemonBoard from '@/components/PokemonBoard.vue';
import pokemonData from '@/utils/pokemon-board.json';
import types from '@/utils/types.json';

const searchQuery = ref('');
const selectedType = ref('');

const filteredPokemons = computed(() => {
  return pokemonData.filter((pokemon) => {
    const nameMatch = pokemon.name
      .toLowerCase()
      .includes(searchQuery.value.toLowerCase());
    const typeMatch =
      selectedType.value === '' ||
      pokemon.types.includes(selectedType.value);
    return nameMatch && typeMatch;
  });
});
</script>