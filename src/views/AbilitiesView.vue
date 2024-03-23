<!-- src/views/AbilitiesView.vue -->
<template>
  <div>
    <HeaderComponent />
    <div class="container mx-auto px-6 py-8">
      <h1 class="text-3xl font-bold mb-4 text-center">Pokemon Ability List</h1>
      <div class="flex justify-center mb-8">
        <div class="w-3/5 bg-white p-6 rounded-lg shadow-md">
          <p class="text-left">
            Each ability from the database is listed below, along with a short description and how many Pokemon can have that ability. Click an ability name to see the Pokemon that can learn it.
          </p>
        </div>
      </div>
      <div class="mb-4 flex justify-center">
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Search by ability name..."
          class="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div class="flex justify-center">
        <div class="w-3/5">
          <AbilitiesBoard :abilities="filteredAbilities" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import AbilitiesBoard from '@/components/AbilitiesBoard.vue';
import abilitiesData from '@/utils/ability-board.json';

const searchQuery = ref('');

const filteredAbilities = computed(() => {
  return abilitiesData.filter((ability) => {
    return ability.name.toLowerCase().includes(searchQuery.value.toLowerCase());
  });
});
</script>