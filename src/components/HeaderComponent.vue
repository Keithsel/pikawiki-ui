<!-- src/components/HeaderComponent.vue -->
<template>
  <header class="bg-white shadow" @mouseleave="handleHeaderMouseLeave">
    <nav class="container mx-auto px-6 py-3">
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <router-link to="/" class="flex items-center mr-8">
            <img src="@/assets/logo.svg" alt="Logo" class="h-8 w-8 mr-2">
            <span class="font-semibold text-gray-500 text-lg">Pikawiki</span>
          </router-link>
          <div class="flex space-x-4">
            <router-link to="/" class="text-gray-500 hover:text-gray-700">Home</router-link>
            <div
              class="relative"
              @mouseover="showDropdown = true"
              @mouseleave="handleMouseLeave"
              @click="toggleDropdown"
            >
              <div class="flex items-center text-gray-500 hover:text-gray-700 cursor-pointer">
                <span>Pokemon Data</span>
                <svg class="h-5 w-5 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </div>
              <div
                v-if="showDropdown"
                class="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                @mouseover="showDropdown = true"
                @mouseleave="showDropdown = false"
              >
                <div class="py-1">
                  <router-link to="/pokemon" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Pokemon</router-link>
                  <router-link to="/moves" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Moves</router-link>
                  <router-link to="/types" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Types</router-link>
                  <router-link to="/abilities" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Abilities</router-link>
                </div>
              </div>
            </div>
            <router-link to="/about" class="text-gray-500 hover:text-gray-700">About</router-link>
          </div>
        </div>
        <div class="relative">
          <input
            type="text"
            placeholder="Search..."
            class="w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const showDropdown = ref(false);

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
};

const handleMouseLeave = () => {
  setTimeout(() => {
    if (!showDropdown.value) {
      showDropdown.value = false;
    }
  }, 100);
};

const handleHeaderMouseLeave = () => {
  showDropdown.value = false;
};
</script>