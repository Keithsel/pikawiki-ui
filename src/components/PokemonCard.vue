<!-- src/components/PokemonCard.vue -->
<template>
  <router-link :to="`/pokemon/${pokemonName}`" class="block bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
    <img :src="getPokemonImageUrl" :alt="pokemonName" class="w-full h-48 object-cover rounded-t-lg">
    <div class="p-4">
      <h3 class="text-xl font-semibold mb-2">{{ pokemonName }}</h3>
    </div>
  </router-link>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  pokemonName: {
    type: String,
    required: true,
  },
});

const getPokemonImageUrl = computed(() => {
  return `/src/assets/pokemon-images/${props.pokemonName}.png`;
});
</script>