<script setup lang="ts">
import type { ProductsResponse } from '~/types/products'

// Pobieranie danych z backendu z poprawnym typem:
const { data, pending, error } = await useFetch<ProductsResponse>('/api/products')

// Reaktywne zmienne do przechowywania fragmentów danych
const categories = computed(() => data.value?.categories || [])
const elektronika = computed(() => data.value?.elektronika || [])
const domiOgrod = computed(() => data.value?.domiOgrod || [])
const moda = computed(() => data.value?.moda || [])
const sport = computed(() => data.value?.sport || [])
const motoryzacja = computed(() => data.value?.motoryzacja || [])
const inspiracje = computed(() => data.value?.inspiracje || [])
</script>

<template>
  <SliderTop/>
  <CategoryScroller :categories="categories" />

  <!-- Sekcje z produktami 1/2 -->
  <ProductSection title="Elektronika - hity sprzedaży" :products="elektronika" />
  <ProductSection title="Dom i Ogród - bestsellery" :products="domiOgrod" />
  <ProductSection title="Moda - najnowsze trendy" :products="moda" />

  <!-- Inspiracje -->
  <InspirationSection :items="inspiracje" />

  <!-- Sekcje z produktami 2/2 -->
  <ProductSection title="Sport - aktywnie na świeżym powietrzu" :products="sport" />
  <ProductSection title="Motoryzacja - wszystko dla Twojego auta" :products="motoryzacja" />
</template>
