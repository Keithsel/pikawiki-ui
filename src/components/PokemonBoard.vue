<!-- src/components/PokemonBoard.vue -->
<template>
  <div class="overflow-x-auto">
    <table class="min-w-full divide-y divide-gray-200">
      <thead>
        <tr>
          <th
            v-for="column in columns"
            :key="column.key"
            @click="sortBy(column.key)"
            class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
          >
            {{ column.label }}
            <span v-if="sortKey === column.key" class="ml-2">
              {{ sortOrder === 1 ? '▲' : '▼' }}
            </span>
          </th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        <tr v-for="pokemon in paginatedPokemons" :key="pokemon.name">
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="flex items-center">
              <div class="flex-shrink-0 h-10 w-10">
                <img
                  :src="getPokemonImage(pokemon.name)"
                  :alt="pokemon.name"
                  class="h-10 w-10 rounded-full"
                />
              </div>
              <div class="ml-4">
                <div class="text-sm font-medium text-gray-900">
                  {{ getPokemonIndex(pokemon.name) }}
                </div>
              </div>
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <router-link
              :to="'/pokemon/' + pokemon.name"
              class="text-sm text-blue-500 hover:text-blue-700"
            >
              {{ getPokemonName(pokemon.name) }}
            </router-link>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div v-for="type in pokemon.types" :key="type">
              <router-link
                :to="'/types/' + type"
                class="text-sm text-gray-500 hover:text-gray-700"
              >
                {{ type }}
              </router-link>
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {{ pokemon.base_total }}
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {{ pokemon.hp }}
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {{ pokemon.attack }}
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {{ pokemon.defense }}
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {{ pokemon.sp_atk }}
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {{ pokemon.sp_def }}
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {{ pokemon.speed }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import pokemonNames from '@/utils/pokemons.json';

const props = defineProps({
  pokemons: {
    type: Array,
    required: true,
  },
});

const columns = [
  { label: '#', key: 'index' },
  { label: 'Name', key: 'name' },
  { label: 'Type', key: 'types' },
  { label: 'Total', key: 'base_total' },
  { label: 'HP', key: 'hp' },
  { label: 'Attack', key: 'attack' },
  { label: 'Defense', key: 'defense' },
  { label: 'Sp. Atk', key: 'sp_atk' },
  { label: 'Sp. Def', key: 'sp_def' },
  { label: 'Speed', key: 'speed' },
];

const sortKey = ref('index');
const sortOrder = ref(1);

const pokemonIndexMap = computed(() => {
  return pokemonNames.reduce((map, name, index) => {
    map[name] = index + 1;
    return map;
  }, {});
});

const sortedPokemons = computed(() => {
  return props.pokemons.sort((a, b) => {
    const indexA = pokemonIndexMap.value[a.name];
    const indexB = pokemonIndexMap.value[b.name];

    if (sortKey.value === 'index') {
      return (indexA - indexB) * sortOrder.value;
    } else {
      if (a[sortKey.value] < b[sortKey.value]) return -1 * sortOrder.value;
      if (a[sortKey.value] > b[sortKey.value]) return 1 * sortOrder.value;
      return 0;
    }
  });
});

const paginatedPokemons = computed(() => {
  return sortedPokemons.value;
});

const sortBy = (key) => {
  if (sortKey.value === key) {
    sortOrder.value *= -1;
  } else {
    sortKey.value = key;
    sortOrder.value = 1;
  }
};

const getPokemonImage = (name) => {
  return new URL(`../assets/pokemon-images/small/${name}.png`, import.meta.url)
    .href;
};

const getPokemonIndex = (name) => {
  return pokemonIndexMap.value[name].toString().padStart(3, '0');
};

const getPokemonName = (name) => {
  return name
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('-');
};
</script>