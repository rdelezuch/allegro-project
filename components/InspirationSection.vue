<template>
  <section class="bg-[#222222] text-white py-6 px-4">
    <div class="max-w-screen-xl mx-auto">
      <h2 class="text-xl font-semibold mb-4">Znajdź inspiracje <span class="text-sm text-gray-400">w kategorii Moda</span></h2>

      <!-- Lista inspiracji -->
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <div
            v-for="(item, index) in items"
            :key="index"
            class="relative"
        >
          <img
              :src="item.image"
              :alt="item.title"
              class="w-full h-40 object-cover"
          />
          <div class="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-center py-1 text-sm">
            {{ item.title }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
<!-- Propsy dla inspiracji-->
  defineProps<{
    items: {
      image: string
      title: string
    }[]
  }>()
</script>