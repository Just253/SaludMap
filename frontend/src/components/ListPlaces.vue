<template>
  <div id="listPlaces">
    <h2 class="text-2xl font-bold mb-4 text-gray-600">Lugares cercanos</h2>
    <ul id="ul-places" class="space-y-4 overflow-auto">
      <li v-for="place in places" :key="place.id" class="flex items-start" @click="selectPlace(place)">
        <div class="bg-gray-200 rounded-lg p-2 mr-4">
          <MapPinIcon class="w-6 h-6 text-gray-600" />
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
import { MapPinIcon } from 'lucide-vue-next'
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'

const base_cords_TEST = {
  lat: -12.1955305,
  lon: -76.9713426
}

const diff = 0.001

const places = ref([
  { id: 1, name: 'Universidad Autonoma del Peru [UA]', address: 'Panamericana Sur Km. 16.3, Villa EL Salvador, Perú', lat: base_cords_TEST.lat - diff * 1, lon: base_cords_TEST.lon - diff * 1 },
  { id: 2, name: 'Universidad Tecnologica del Peru [UTP]', address: 'Ctra. Panamericana Sur km 16, Villa EL Salvador 15842, Perú', lat: -12.193359, lon:  -76.972071 },
  { id: 3, name: 'Makro Villa El Salvador', address: 'Cruce Panamericana Sur con Av. Mateo Pumacahua, (Frente al Parque Zonal Huayna Cápac), Lima 15842, Perú', lat: -12.1930825, lon: -76.9712553 },
  { id: 4, name: 'SISOL Salud Villa el Salvador', address: 'Av. Mariano Pastor Sevilla S/N, Villa EL Salvador 15829, Perú', lat: -12.1964846, lon: -76.9590056 },
  { id: 5, name: 'Mercado Unicachi', address: 'Avenida los algarrobos', lat:-12.2033776 , lon:-76.9652853},
  { id: 6, name: 'Universidad Tecnologica del Peru [UTP]', address: 'Ctra. Panamericana Sur km 16, Villa EL Salvador 15842, Perú', lat: -12.193359, lon:  -76.972071 },
  { id: 7, name: 'Makro Villa El Salvador', address: 'Cruce Panamericana Sur con Av. Mateo Pumacahua, (Frente al Parque Zonal Huayna Cápac), Lima 15842, Perú', lat: -12.1930825, lon: -76.9712553 },
  { id: 8, name: 'SISOL Salud Villa el Salvador', address: 'Av. Mariano Pastor Sevilla S/N, Villa EL Salvador 15829, Perú', lat: -12.1964846, lon: -76.9590056 },
  { id: 9, name: 'Mercado Unicachi', address: 'Avenida los algarrobos', lat:-12.2033776 , lon:-76.9652853},
  { id: 10, name: 'Universidad Tecnologica del Peru [UTP]', address: 'Ctra. Panamericana Sur km 16, Villa EL Salvador 15842, Perú', lat: -12.193359, lon:  -76.972071 },
  { id: 11, name: 'Makro Villa El Salvador', address: 'Cruce Panamericana Sur con Av. Mateo Pumacahua, (Frente al Parque Zonal Huayna Cápac), Lima 15842, Perú', lat: -12.1930825, lon: -76.9712553 },
  { id: 12, name: 'SISOL Salud Villa el Salvador', address: 'Av. Mariano Pastor Sevilla S/N, Villa EL Salvador 15829, Perú', lat: -12.1964846, lon: -76.9590056 },
  { id: 13, name: 'Mercado Unicachi', address: 'Avenida los algarrobos', lat:-12.2033776 , lon:-76.9652853},
  { id: 14, name: 'Universidad Tecnologica del Peru [UTP]', address: 'Ctra. Panamericana Sur km 16, Villa EL Salvador 15842, Perú', lat: -12.193359, lon:  -76.972071 },
  { id: 15, name: 'Makro Villa El Salvador', address: 'Cruce Panamericana Sur con Av. Mateo Pumacahua, (Frente al Parque Zonal Huayna Cápac), Lima 15842, Perú', lat: -12.1930825, lon: -76.9712553 },
  { id: 16, name: 'SISOL Salud Villa el Salvador', address: 'Av. Mariano Pastor Sevilla S/N, Villa EL Salvador 15829, Perú', lat: -12.1964846, lon: -76.9590056 },
  { id: 17, name: 'Mercado Unicachi', address: 'Avenida los algarrobos', lat:-12.2033776 , lon:-76.9652853},
  
])

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
</style>