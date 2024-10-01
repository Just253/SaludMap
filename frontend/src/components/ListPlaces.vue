<template>
  <div id="listPlaces">
    <h2 class="text-2xl font-bold mb-4 text-gray-600">Lugares cercanos</h2>
    <ul class="space-y-4">
      <li v-for="place in places" :key="place.id" class="flex items-start">
        <div class="bg-gray-200 rounded-lg p-2 mr-4">
          <MapPinIcon class="w-6 h-6 text-gray-600" />
        </div>
        <div>
          <h3 class="font-semibold text-gray-600">{{ place.name }}</h3>
          <p class="text-gray-600">{{ place.address }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { MapPinIcon } from 'lucide-vue-next'
import { ref } from 'vue'
const places = ref([
  { id: 1, name: 'Café Central', address: 'Calle Principal 123' },
  { id: 2, name: 'Parque Municipal', address: 'Avenida Verde 456' },
  { id: 3, name: 'Museo de Arte', address: 'Plaza Cultural 789' },
  { id: 4, name: 'Restaurante El Gourmet', address: 'Calle Sabores 321' },
  { id: 5, name: 'Centro Comercial', address: 'Avenida Compras 654' },
])
</script>

<style scoped>
#listPlaces {
  overflow-y: auto;
  padding: 1rem 1rem;
  height: max-content;
}
</style>