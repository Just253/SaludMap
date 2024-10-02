<template>
  <div id="userView" class="text-gray-600">
    <div class="grid grid-cols-[auto,auto] gap-6">
      <div class="col-start-1 col-end-2 flex justify-center items-center">
        <div class="relative w-96 h-96">
          <img
            :src="user.photo"
            :alt="user.name"
            class="object-cover rounded-lg shadow-md w-96 h-96"
          />
          <label
            for="photo-upload"
            class="absolute bottom-2 right-2 bg-blue-600 text-white p-2 rounded-full cursor-pointer hover:bg-blue-700 transition duration-300"
          >
            <UserIcon class="text-lg" />
            <input
              id="photo-upload"
              type="file"
              accept="image/*"
              class="hidden"
              @change="handlePhotoUpload"
            />
          </label>
        </div>
      </div>
      <div class="col-start-2 col-end-3 md:pl-6 p-8">
        <h2 class="text-3xl font-bold mb-4">{{ user.name }}</h2>
        <div class="grid grid-rows-2 gap-4 mb-6">
          <div class="flex items-center">
            <CalendarIcon class="text-gray-600 mr-2" />
            <span class="text-lg">{{ user.age }} years old</span>
          </div>
          <div class="flex items-center">
            <IdCardIcon class="text-gray-600 mr-2" />
            <span class="text-lg">DNI: {{ user.dni }}</span>
          </div>
          <div class="flex items-center">
            <PhoneIncoming class="text-gray-600 mr-2" />
            <span class="text-lg">Phone: {{ user.phone }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="mb-6 mt-8">
      <h3 class="text-xl font-semibold mb-2">Recent Reunions</h3>
      <ul class="space-y-2">
        <li
          v-for="reunion in user.reunions"
          :key="reunion.id"
          class="bg-gray-100 p-3 rounded-md hover:bg-gray-200 transition duration-300"
        >
          <span class="font-medium">{{ reunion.title }}</span>
          <span class="text-sm text-gray-600 ml-2">{{ reunion.date }}</span>
        </li>
      </ul>
    </div>
    <div class="mt-8">
      <h3 class="text-xl font-semibold mb-4">
        <SyringeIcon class="inline-block mr-2 text-blue-600" />
        Health Vaccination Data
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div
          v-for="data in user.healthData"
          :key="data.id"
          class="bg-blue-50 p-4 rounded-lg shadow hover:shadow-md transition duration-300"
        >
          <h4 class="font-medium text-lg mb-2">{{ data.vaccine }}</h4>
          <p class="text-sm text-gray-600">Date: {{ data.date }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { UserIcon, CalendarIcon, IdCardIcon, SyringeIcon, PhoneIncoming } from 'lucide-vue-next'

const user = ref({
  name: "John Doe",
  age: 30,
  dni: "123456789",
  phone: "555-1234",
  photo: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80",
  reunions: [
    { id: 1, title: "Team Meeting", date: "2023-06-15" },
    { id: 2, title: "Project Review", date: "2023-06-20" },
    { id: 3, title: "Client Presentation", date: "2023-06-25" },
  ],
  healthData: [
    { id: 1, vaccine: "COVID-19", date: "2023-01-15" },
    { id: 2, vaccine: "Flu Shot", date: "2023-03-20" },
    { id: 3, vaccine: "Tetanus", date: "2022-11-10" },
  ],
})

const handlePhotoUpload = (e) => {
  const file = e.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onloadend = () => {
      user.value.photo = reader.result
    }
    reader.readAsDataURL(file)
  }
}
</script>

<style scoped>
#userView {
  padding: 1rem;
  height: 100vh;
}
</style>