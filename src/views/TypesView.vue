<!-- src/views/TypesView.vue -->
<template>
  <div>
    <HeaderComponent />
    <div class="container mx-auto px-6 py-8">
      <h1 class="text-3xl font-bold mb-4 text-center">Pokemon Types & Type Chart</h1>
      <div class="flex justify-center mb-8">
        <div class="w-4/5 bg-white p-6 rounded-lg shadow-md">
          <h2 class="text-xl font-bold mb-4">Type Quick List</h2>
          <div class="flex flex-wrap">
            <TypeButton
              v-for="type in types"
              :key="type"
              :type="type"
              class="m-1"
            />
          </div>
          <p class="mt-4 text-left">
            In the Pokemon universe, each creature and their respective moves are categorized by types, which come with inherent strengths and weaknesses that affect both offensive and defensive strategies. During combat, selecting Pokémon and moves that exploit your adversary's type vulnerabilities will inflict significantly more damage than usual.
            <!-- ... -->
          </p>
        </div>
      </div>
      <TypeChart />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import TypeButton from '@/components/TypeButton.vue';
import TypeChart from '@/components/TypeChart.vue';
import types from '@/utils/types.json';
</script>