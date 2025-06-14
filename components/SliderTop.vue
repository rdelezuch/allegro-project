<template>
  <!-- Sekcja główna -->
  <section class="bg-black text-white">
    <!-- Sekcja zawartości kontenera -->
    <div class="max-w-7xl mx-auto px-4 py-10">
      <!-- Pomarańczowa zawartość kontenera -->
      <div class="bg-orange-500 rounded-xl flex flex-col md:flex-row items-center justify-between overflow-hidden">

        <!-- Lewa kolumna -->
        <div class="p-8 md:w-1/2">
          <!-- Czarny box jako flex-row, aby tekst i zdjęcie były w jednej linii -->
          <div class="bg-black text-white p-4 inline-block rounded-lg items-center justify-between">
            <!-- Tekst -->
            <div class="text-3xl md:text-4xl font-bold leading-snug pr-4">
              Jak niskie ceny, <br>
              to czas na wiosenne zakupy
            </div>
          </div>
        </div>

        <!-- Prawa kolumna -->
        <div class="p-8 md:w-1/2 flex justify-center items-center">
          <!-- Sekcja ze zdjęciem osoby -->
          <div class="w-45 h-45">
            <!-- Obrazek pobrany z Unsplash (stockowe zdjęcie) -->
            <img
                src="/usmiechnieta_osoba.avif"
                alt="Zadowolony klient"
                class="rounded-full object-cover w-full h-full"
            />
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
