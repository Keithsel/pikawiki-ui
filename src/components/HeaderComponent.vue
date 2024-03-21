<!-- src/components/HeaderComponent.vue -->
<template>
  <header class="bg-white shadow">
    <nav class="container mx-auto px-6 py-3">
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <img src="@/assets/logo.svg" alt="Logo" class="h-8 w-8 mr-2">
          <span class="font-semibold text-gray-500 text-lg">Pikawiki</span>
        </div>
        <div class="flex space-x-4">
          <router-link to="/" class="text-gray-500 hover:text-gray-700">Home</router-link>
          <router-link to="/pokemon" class="text-gray-500 hover:text-gray-700">Pokemon</router-link>
          <router-link to="/about" class="text-gray-500 hover:text-gray-700">About</router-link>
        </div>
        <div class="relative">
          <button @click="toggleSearch" class="text-gray-500 hover:text-gray-700 focus:outline-none">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <div v-if="showSearch" class="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div class="py-1">
              <input type="text" placeholder="Search..." class="w-full px-4 py-2 text-gray-700 focus:outline-none">
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const showSearch = ref(false);

const toggleSearch = () => {
  showSearch.value = !showSearch.value;
};
</script>