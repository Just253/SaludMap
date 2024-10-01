<template>
  <div 
    class="bg-white rounded-t-3xl shadow-lg ease-in-out overflow-hidden fixed bottom-0 left-0 right-0"
    :style="{ height: listHeight + 'px' }"
  >
    <div class="p-4">
      <div 
        id="idk" 
        class="w-64 h-3 bg-gray-300 rounded-full mx-auto mb-4 cursor-pointer"
        @mousedown="startDrag"
        @touchstart="startDrag"
      ></div>
      <ListPlaces />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import ListPlaces from './ListPlaces.vue';

const listHeight = ref(300) // Altura inicial del contenedor
const isDragging = ref(false)
const startY = ref(0)
const startHeight = ref(0)

const startDrag = (event) => {
  isDragging.value = true
  startY.value = event.type.includes('mouse') ? event.clientY : event.touches[0].clientY
  startHeight.value = listHeight.value
  document.addEventListener('mousemove', onDrag)
  document.addEventListener('mouseup', endDrag)
  document.addEventListener('touchmove', onDrag)
  document.addEventListener('touchend', endDrag)
}

const onDrag = (event) => {
  if (!isDragging.value) return
  const currentY = event.type.includes('mouse') ? event.clientY : event.touches[0].clientY
  const deltaY = startY.value - currentY
  const minHeight = window.innerHeight * 0.2 // 10% de la altura de la ventana
  const maxHeight = window.innerHeight * 0.9 // 30% de la altura de la ventana
  listHeight.value = Math.max(minHeight, Math.min(maxHeight, startHeight.value + deltaY))
}

const endDrag = () => {
  isDragging.value = false
  document.removeEventListener('mousemove', onDrag)
  document.removeEventListener('mouseup', endDrag)
  document.removeEventListener('touchmove', onDrag)
  document.removeEventListener('touchend', endDrag)
}

onMounted(() => {
  document.addEventListener('mouseup', endDrag)
  document.addEventListener('touchend', endDrag)
})

onUnmounted(() => {
  document.removeEventListener('mouseup', endDrag)
  document.removeEventListener('touchend', endDrag)
})
</script>

<style scoped>
/* Puedes añadir estilos adicionales aquí si es necesario */
</style>