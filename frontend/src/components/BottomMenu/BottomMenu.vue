<template>
  <div class="fixed bottom-0 left-0 right-0 bg-white shadow-lg">
    <div class="max-w-screen-sm mx-auto px-4 py-2 flex items-center justify-between">
      <MenuItem to="/user" :icon="UserIcon" label="Usuario" />
      <MenuItem to="/list" :icon="ListIcon" label="Lista" />
      
      <router-link to="/" class="flex flex-col items-center justify-center p-4 bg-blue-500 hover:bg-blue-600 rounded-full w-24 h-24 -mt-12 shadow-lg transition-colors duration-200">
        <MapIcon class="w-12 h-12 text-white" />
      </router-link>
      
      <MenuItem to="/list" :icon="ListIcon" label="Lista" />
      <MenuItem to="/settings" :icon="SettingsIcon" label="Config" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { UserIcon, ListIcon, MapIcon, SettingsIcon } from 'lucide-vue-next'
import MenuItem from './MenuItem.vue'
</script>

<style scoped>
/* Estilos adicionales si son necesarios */
</style>