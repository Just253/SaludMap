<template>
  <div class="flex flex-col relative">
    <!-- Mapa -->
    <GoogleMap
      ref="mapRef" 
      class="relative flex-grow transition-all duration-300 ease-in-out"
      mapId="DEMO_MAP_ID"
      style="height: 100vh;" 
      :api-key="apiKey"
      :center="center"
      :zoom="15"
    >
      <AdvancedMarker :options="markerOptions" :pin-options="pinOptions"/>
    </GoogleMap>
    
  </div>
</template>

<script setup lang="ts">
import { GoogleMap, AdvancedMarker } from 'vue3-google-map'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
const center = { lat: -12.1955305, lng: -76.9713426 }
const markerOptions = { position: center, title: 'LADY LIBERTY' }
const pinOptions = { background: '#FBBC04' }
const mapRef =  ref<InstanceType<typeof GoogleMap> | null>(null)

const route = useRoute()
watch(() => route.query, (newQuery) => {
  const lat = newQuery.lat
  const lon = newQuery.lon
  if (typeof lat === 'string' && typeof lon === 'string' && mapRef.value) {
    mapRef?.value?.map?.panTo({ lat: parseFloat(lat), lng: parseFloat(lon) })
    mapRef?.value?.map?.setZoom(18)
  }
}, { immediate: true })

</script>

<style scoped>
/* Estilos adicionales si son necesarios */
</style>