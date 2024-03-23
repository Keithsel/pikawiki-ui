<template>
  <router-link
    :to="'/type/' + type"
    class="block px-2 py-1 rounded text-xs font-semibold text-white w-16 flex items-center justify-center border border-black relative overflow-hidden"
    :class="{ 'brightness-110': isHovered }"
    :style="{ backgroundColor: getTypeColor(type) }"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(192, 192, 192, 0.1);"></div>
    <span style="position: relative;">{{ capitalizeFirstLetter(type) }}</span>
  </router-link>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  type: {
    type: String,
    required: true,
  },
});

const isHovered = ref(false);

const typeColors = {
  bug: '#AABB22',
  dark: '#775544',
  dragon: '#7766EE',
  electric: '#FFCC33',
  fairy: '#EE99EE',
  fighting: '#BB5544',
  fire: '#FF4422',
  flying: '#8899FF',
  ghost: '#6666BB',
  grass: '#77CC55',
  ground: '#DDBB55',
  ice: '#66CCFF',
  normal: '#AAAA99',
  poison: '#AA5599',
  psychic: '#FF5599',
  rock: '#BBAA66',
  steel: '#AAAABB',
  water: '#3399FF',
};

const getTypeColor = computed(() => (type) => {
  return typeColors[type] || '#333333';
});

const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
</script>