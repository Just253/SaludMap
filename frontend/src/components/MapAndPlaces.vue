<template>
  <div class="flex flex-col relative">
    <!-- TODO: FIX CUSTOM MARKER  -->
    <GoogleMap 
      ref="mapRef" 
      class="relative flex-grow transition-all duration-300 ease-in-out" 
      mapId="bc66a77ddf9efcd5"
      style="height: 90vh;" 
      :api-key="apiKey" 
      :center="center" 
      :zoom="15" 
    >
      <AdvancedMarker 
        v-for="place in placesStore.places" 
        :key="place.id" 
        :options="{ position: { lat: place.lat, lng: place.lng }}" 
        :pin-options="{ background: getColor(place) }"
      >
        <p>{{ place.type }}</p>
      </AdvancedMarker>
    </GoogleMap>

  </div>
</template>

<script setup lang="ts">
import { GoogleMap, AdvancedMarker } from 'vue3-google-map'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { usePlacesStore } from '@/stores/places'

const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
const center = { lat: -12.1955305, lng: -76.9713426 }
const mapRef =  ref<InstanceType<typeof GoogleMap> | null>(null)
const placesStore = usePlacesStore()

const colors = {
  animal: '#FFA500',
  human: '#00BFFF',
  default: '#ff0000'
}

const getColor = (place: Place) => {
  console.log(place.type)
  return place.type && colors[place.type] ? colors[place.type] : colors.default
}

const route = useRoute()
watch(() => route.query, (newQuery) => {
  const lat = newQuery.lat
  const lng = newQuery.lng
  if (typeof lat === 'string' && typeof lng === 'string' && mapRef.value) {
    mapRef?.value?.map?.panTo({ lat: parseFloat(lat), lng: parseFloat(lng) })
    mapRef?.value?.map?.setZoom(18)
  }
}, { immediate: true })

</script>

<style scoped>
</style>