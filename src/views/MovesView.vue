<!-- src/views/MovesView.vue -->
<template>
  <div>
    <HeaderComponent />
    <div class="container mx-auto px-6 py-8">
      <h1 class="text-3xl font-bold mb-4 text-center">Pokemon Move List</h1>
      <div class="flex justify-center mb-8">
        <div class="w-3/5 bg-white p-6 rounded-lg shadow-md">
          <p class="text-left">
            This is a full list of moves of the Pokemon in the database. The power, accuracy, and PP are listed along with any additional effects.
            <br><br>
            Click a move name to see even more detailed information, including which Pokémon can learn that move. You can click a column heading to instantly sort by that column, or filter on move name, type and category using the options provided.
            <br><br>
            Category key: <img src="@/assets/moves/move-physical.png" alt="Physical" class="inline-block h-4 w-4"> Physical <img src="@/assets/moves/move-special.png" alt="Special" class="inline-block h-4 w-4"> Special <img src="@/assets/moves/move-status.png" alt="Status" class="inline-block h-4 w-4"> Status
          </p>
        </div>
      </div>
      <div class="mb-4 flex justify-center">
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Search by move name..."
          class="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div class="relative inline-block ml-4">
          <select
            v-model="selectedType"
            class="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Types</option>
            <option v-for="type in types" :key="type" :value="type">
              {{ type }}
            </option>
          </select>
        </div>
        <div class="relative inline-block ml-4">
          <select
            v-model="selectedCategory"
            class="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Categories</option>
            <option value="physical">Physical</option>
            <option value="special">Special</option>
            <option value="status">Status</option>
          </select>
        </div>
      </div>
      <div class="flex justify-center">
        <div class="w-4/5">
          <MovesBoard :moves="filteredMoves" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import MovesBoard from '@/components/MovesBoard.vue';
import movesData from '@/utils/moves-board.json';
import types from '@/utils/types.json';

const searchQuery = ref('');
const selectedType = ref('');
const selectedCategory = ref('');

const filteredMoves = computed(() => {
  return movesData.filter((move) => {
    const nameMatch = move.name
      .toLowerCase()
      .includes(searchQuery.value.toLowerCase());
    const typeMatch = selectedType.value === '' || move.type === selectedType.value;
    const categoryMatch = selectedCategory.value === '' || move.category === selectedCategory.value;
    return nameMatch && typeMatch && categoryMatch;
  });
});
</script>