<template>
  <div class="flex flex-col relative">
    <!-- Mapa -->
    <GoogleMap 
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

<script setup>
import { GoogleMap, AdvancedMarker } from 'vue3-google-map'

const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
const center = { lat: 40.689247, lng: -74.044502 }
const markerOptions = { position: center, title: 'LADY LIBERTY' }
const pinOptions = { background: '#FBBC04' }
</script>

<style scoped>
/* Estilos adicionales si son necesarios */
</style>