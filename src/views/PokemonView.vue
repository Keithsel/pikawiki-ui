<!-- src/views/PokemonView.vue -->
<template>
  <div>
    <HeaderComponent />
    <div class="container mx-auto px-6 py-8">
      <h1 class="text-3xl font-bold mb-4 text-center">Pokemon List</h1>
      <div class="flex justify-center mb-8">
        <div class="w-3/5 bg-white p-6 rounded-lg shadow-md">
          <p class="text-left">
            This is a full list of Pokemon in the database. The base total, HP, attack, defense, special attack, special defense, and speed are listed along with any additional information.
            <br><br>
            Click a Pokemon name to see even more detailed information, including its types. You can click a column heading to instantly sort by that column, or filter on Pokemon name and type using the options provided.
          </p>
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
      <div class="flex justify-center">
        <div class="w-4/5">
          <PokemonBoard :pokemons="filteredPokemons" />
        </div>
      </div>
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