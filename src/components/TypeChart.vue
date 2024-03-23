<!-- src/components/TypeChart.vue -->
<template>
  <div class="flex justify-center">
    <div class="w-4/5">
      <h2 class="text-xl font-bold mb-4">Type Chart</h2>
      <p class="mt-4 text-left">
        This comprehensive type chart illustrates the resistances and vulnerabilities of each type. To determine the attacking type's effectiveness, refer to the left column and then proceed horizontally to assess its impact on each Pokémon type.
      </p>
      <div class="mt-8 flex justify-center">
        <div class="w-3/5">
          <h3 class="text-lg font-bold mb-4 text-center">Chart Key</h3>
          <div class="grid grid-cols-2 gap-4 mb-8">
            <div class="flex items-center justify-center">
              <div class="w-12 h-12 bg-gray-800 text-white flex items-center justify-center mr-2">0</div>
              <span>No effect (0%)</span>
            </div>
            <div class="flex items-center justify-center">
              <div class="w-12 h-12 bg-red-800 text-white flex items-center justify-center mr-2">1/2</div>
              <span>Not very effective (50%)</span>
            </div>
            <div class="flex items-center justify-center">
              <div class="w-12 h-12 bg-white border border-gray-300 mr-2"></div>
              <span>Normal (100%)</span>
            </div>
            <div class="flex items-center justify-center">
              <div class="w-12 h-12 bg-green-500 text-white flex items-center justify-center mr-2">2</div>
              <span>Super-effective (200%)</span>
            </div>
          </div>
        </div>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" style="width: 100px;">
                <span>Defense →</span>
                <span>Attack ↴</span>
              </th>
              <th
                v-for="type in Object.keys(typesAlias)"
                :key="type"
                class="px-6 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                <TypeButton :type="type" :label="typesAlias[type].toUpperCase()" class="w-8 h-8" />
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="(row, rowIndex) in typeChart" :key="rowIndex">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500">
                <TypeButton :type="Object.keys(typesAlias)[rowIndex]" :label="typesAlias[Object.keys(typesAlias)[rowIndex]].toUpperCase()" />
              </td>
              <td
                v-for="(cell, cellIndex) in row"
                :key="cellIndex"
                class="px-6 py-4 whitespace-nowrap text-center"
                :class="getCellClass(cell)"
              >
                <div class="flex items-center justify-center h-full">
                  <span class="text-xs">{{ getCellText(cell) }}</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import TypeButton from '@/components/TypeButton.vue';
import typesAlias from '@/utils/types-alias.json';
import typeChart from '@/utils/type-chart.json';

const getCellClass = (cell) => {
  if (cell === 0) {
    return 'bg-gray-800 text-white';
  } else if (cell === 0.5) {
    return 'bg-red-800 text-white';
  } else if (cell === 2) {
    return 'bg-green-500 text-white';
  } else {
    return 'bg-white border border-gray-300';
  }
};

const getCellText = (cell) => {
  if (cell === 0) {
    return '0';
  } else if (cell === 0.5) {
    return '1/2';
  } else if (cell === 2) {
    return '2';
  } else {
    return '';
  }
};
</script>

<style scoped>
table {
  table-layout: fixed;
}

th,
td {
  width: 40px;
  height: 40px;
}

th:first-child {
  width: 100px;
}
</style>