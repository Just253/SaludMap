<script setup lang="ts">
import { RouterView } from 'vue-router'
import BottomMenu from './components/BottomMenu/BottomMenu.vue'
</script>

<template>
  <div class="bg-white" style="height: 100vh;">
    <RouterView/>
  </div>
  <BottomMenu />
</template>

<style scoped>

</style>