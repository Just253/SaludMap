<template>
  <div class="flex flex-col relative">
    <!-- TODO: FIX CUSTOM MARKER  -->
    <GoogleMap ref="mapRef" class="relative flex-grow transition-all duration-300 ease-in-out" mapId="DEMO_MAP_ID"
      style="height: 100vh;" :api-key="apiKey" :center="center" :zoom="15" @zoom_changed="">
      <CustomMarker v-for="place in placesStore.places" :key="place.id" :options="{ position: { lat: place.lat, lng: place.lon }, anchorPoint: 'BOTTOM_CENTER' }">
        <div style="text-align: center">
          <div style="font-size: 1.125rem">{{ place.name }}</div>
          <img :src="place.image" 
            width="50" height="50" style="margin-top: 8px" />
        </div>
      </CustomMarker>
    </GoogleMap>

  </div>
</template>

<script setup lang="ts">
import { GoogleMap, CustomMarker } from 'vue3-google-map'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { usePlacesStore } from '@/stores/places'

const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
const center = { lat: -12.1955305, lng: -76.9713426 }
const markerOptions = { position: center}
const mapRef =  ref<InstanceType<typeof GoogleMap> | null>(null)
const placesStore = usePlacesStore()


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