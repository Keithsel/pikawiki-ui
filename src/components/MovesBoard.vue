<!-- src/components/MovesBoard.vue -->
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
        <tr v-for="move in paginatedMoves" :key="move.name">
          <td class="px-6 py-4 whitespace-nowrap">
            <router-link
              :to="'/moves/' + move.name"
              class="text-sm font-medium text-blue-500 hover:text-blue-700"
            >
              {{ getMoveLiteralName(move.name) }}
            </router-link>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <TypeButton :type="move.type" />
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <img
              :src="getCategoryImage(move.category)"
              :alt="move.category"
              class="h-6 w-6"
            />
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {{ formatValue(move.power) }}
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {{ formatValue(move.accuracy) }}
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {{ move.pp }}
          </td>
          <td class="px-6 py-4 text-sm text-gray-500">
            {{ formatEffect(move.effect) }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import TypeButton from '@/components/TypeButton.vue';
import movesLiteral from '@/utils/moves-literal.json';

const props = defineProps({
  moves: {
    type: Array,
    required: true,
  },
});

const columns = [
  { label: 'Name', key: 'name' },
  { label: 'Type', key: 'type' },
  { label: 'Category', key: 'category' },
  { label: 'Power', key: 'power' },
  { label: 'Accuracy', key: 'accuracy' },
  { label: 'PP', key: 'pp' },
  { label: 'Effect', key: 'effect' },
];

const sortKey = ref('name');
const sortOrder = ref(1);

const formatValue = (value) => {
  return value !== null ? value : '-';
};

const formatEffect = (effect) => {
  return effect || '-';
};

const getMoveLiteralName = (name) => {
  return movesLiteral[name] || name;
};

const getCategoryImage = (category) => {
  return new URL(`../assets/moves/move-${category}.png`, import.meta.url).href;
};

const sortedMoves = computed(() => {
  return props.moves.sort((a, b) => {
    const valueA = a[sortKey.value] === null ? '-' : a[sortKey.value];
    const valueB = b[sortKey.value] === null ? '-' : b[sortKey.value];

    if (valueA === '-' && valueB !== '-') return 1;
    if (valueA !== '-' && valueB === '-') return -1;
    if (valueA === '-' && valueB === '-') return 0;

    if (sortKey.value === 'name') {
      return getMoveLiteralName(a.name).localeCompare(getMoveLiteralName(b.name)) * sortOrder.value;
    } else if (sortKey.value === 'effect') {
      return formatEffect(a.effect).localeCompare(formatEffect(b.effect)) * sortOrder.value;
    } else if (sortKey.value === 'category') {
      return a.category.localeCompare(b.category) * sortOrder.value;
    } else {
      if (valueA < valueB) return -1 * sortOrder.value;
      if (valueA > valueB) return 1 * sortOrder.value;
      return 0;
    }
  });
});

const paginatedMoves = computed(() => {
  return sortedMoves.value;
});

const sortBy = (key) => {
  if (sortKey.value === key) {
    sortOrder.value *= -1;
  } else {
    sortKey.value = key;
    sortOrder.value = 1;
  }
};
</script>