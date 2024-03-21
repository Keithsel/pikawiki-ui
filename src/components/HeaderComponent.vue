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
          <div>
            <button class="bg-blue-500 text-white px-4 py-2 rounded">Search</button>
          </div>
        </div>
      </nav>
    </header>
  </template>