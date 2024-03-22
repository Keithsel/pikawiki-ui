<!-- src/components/HeroSection.vue -->
<template>
  <section class="bg-gray-100 py-20">
    <div class="container mx-auto px-6">
      <div class="flex flex-col items-center">
        <img src="@/assets/logo.svg" alt="Logo" class="h-32 w-32 mb-6">
        <h1 class="text-4xl font-bold mb-4">Welcome to Pikawiki</h1>
        <p class="text-xl text-gray-600 mb-8">Discover and learn about your favorite Pokemon!</p>
        <div class="w-full md:w-1/2">
          <input
            type="text"
            placeholder="Search Pokemon..."
            class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
        </div>
      </div>
    </div>
  </section>
</template>
