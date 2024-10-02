<!-- frontend/src/views/NotificationsView.vue -->
<template>
  <div id="notificationsView" class="p-6">
    <h1 class="text-2xl font-bold mb-4">Notificaciones</h1>
    <ul class="space-y-4">
      <li v-for="notification in notifications" :key="notification.id" class="p-4 bg-white shadow rounded-lg">
        <h2 class="text-lg font-semibold">{{ notification.title }}</h2>
        <p class="text-gray-600">{{ notification.message }}</p>
        <span class="text-sm text-gray-400">{{ notification.date }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notifications: [
        { id: 1, title: 'Notificación 1', message: 'Mensaje de la notificación 1', date: '2023-10-01' },
        { id: 2, title: 'Notificación 2', message: 'Mensaje de la notificación 2', date: '2023-10-02' },
        // Añade más notificaciones aquí
      ]
    };
  }
};
</script>

<style scoped>
#notificationsView {
  background-color: #f9fafb;
  height: 100vh;
}
</style>