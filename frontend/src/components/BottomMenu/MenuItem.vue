<template>
  <router-link :to="to" class="flex flex-col items-center justify-center p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200">
    <component :is="icon" class="w-10 h-10 text-gray-600" />
    <span class=" mt-1 text-gray-600">{{ label }}</span>
  </router-link>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true,
      default: '/'
    },
    icon: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    }
  }
}
</script>