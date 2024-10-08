<template>
  <div id="listPlaces">
    <h2 class="text-2xl font-bold mb-4 text-gray-600">Lugares cercanos</h2>
    <ul id="ul-places" class="space-y-4 overflow-auto">
      <li v-for="place in placesStore.places" :key="place.id" class="flex items-start" @click="selectPlace(place)">
        <div class="bg-gray-200 rounded-lg p-2 mr-2">
          <img :src="place.image" alt="Imagen del lugar" class="place-image" />
        </div>
        <div>
          <h3 class="font-semibold text-gray-600">{{ place.id + " | " + place.name }}</h3>
          <p class="text-gray-600">{{ place.address }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import { usePlacesStore } from '@/stores/places'

const placesStore = usePlacesStore()
const router = useRouter()

const selectPlace = (place) => {
  router.push({ name: 'home', query: { lat: place.lat, lon: place.lon } })
}


const adjustUlPlacesHeight = () => {
  const listPlaces = document.getElementById('listPlaces')
  const ulPlaces = document.getElementById('ul-places')
  if (listPlaces && ulPlaces) {
    ulPlaces.style.height = `${listPlaces.style.height }px`
  }
}


onMounted(() => {
  adjustUlPlacesHeight()
  window.addEventListener('resize', adjustUlPlacesHeight)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', adjustUlPlacesHeight)
})

</script>

<style scoped>
/* TODO: Arreglar porque el ul-places no muestra todos los elementos */
#listPlaces {
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem;
  max-height: 90vh;
  overflow: hidden;
}

#ul-places {
  flex-grow: 1;
  overflow-y: auto;
}

.place-image {
  width: 50px;
  height: 40px;
  object-fit: cover;
  margin-right: 0.5rem;
}

</style>