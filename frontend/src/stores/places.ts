import { ref } from 'vue'
import { defineStore } from 'pinia'

interface Place {
  id: number,
  image?: string,
  name: string,
  address: string,
  lat: number,
  lon: number
}

export const usePlacesStore = defineStore('places', () => {
  const places = ref<Place[]>([
    { id: 1, image: 'https://upload.wikimedia.org/wikipedia/commons/7/70/UA_logo_de_la_universidad_aut%C3%B3noma.png', name: 'Universidad Autonoma del Peru [UA]', address: 'Panamericana Sur Km. 16.3, Villa EL Salvador, Perú', lat: -12.1930825, lon: -76.9712553 },
    { id: 2, image: "https://th.bing.com/th/id/R.b235fb02436278912a1a0ca2a59410e3?rik=Hwfher3MKwCvCg&pid=ImgRaw&r=0", name: 'Universidad Tecnologica del Peru [UTP]', address: 'Ctra. Panamericana Sur km 16, Villa EL Salvador 15842, Perú', lat: -12.193359, lon:  -76.972071 },
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

  function addPlace(place: Place) {
    places.value.push(place)
  }

  function removePlace(id: number) {
    places.value = places.value.filter(place => place.id !== id)
  }

  return { places, addPlace, removePlace }
})