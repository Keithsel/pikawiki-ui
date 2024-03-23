<!-- src/components/AbilitiesBoard.vue -->
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
        <tr v-for="ability in paginatedAbilities" :key="ability.name">
          <td class="px-6 py-4 whitespace-nowrap">
            <router-link
              :to="'/ability/' + ability.name"
              class="text-sm font-medium text-blue-500 hover:text-blue-700"
            >
              {{ getAbilityLiteralName(ability.name) }}
            </router-link>
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {{ ability.count }}
          </td>
          <td class="px-6 py-4 text-sm text-gray-500">
            {{ ability.description }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import abilityLiteral from '@/utils/ability-literal.json';

const props = defineProps({
  abilities: {
    type: Array,
    required: true,
  },
});

const columns = [
  { label: 'Name', key: 'name' },
  { label: 'Pokemon', key: 'count' },
  { label: 'Description', key: 'description' },
];

const sortKey = ref('name');
const sortOrder = ref(1);

const getAbilityLiteralName = (name) => {
  return abilityLiteral[name] || name;
};

const sortedAbilities = computed(() => {
  return props.abilities.sort((a, b) => {
    if (sortKey.value === 'name') {
      return getAbilityLiteralName(a.name).localeCompare(getAbilityLiteralName(b.name)) * sortOrder.value;
    } else if (sortKey.value === 'count') {
      return (a.count - b.count) * sortOrder.value;
    } else {
      return a.description.localeCompare(b.description) * sortOrder.value;
    }
  });
});

const paginatedAbilities = computed(() => {
  return sortedAbilities.value;
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