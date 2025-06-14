<template>
  <section class="bg-[#111111] text-white py-6 px-4">
    <div class="max-w-screen-xl mx-auto">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div v-for="(column, i) in sections" :key="i">
          <h3 class="font-semibold mb-2">{{ column.title }}</h3>
          <ul class="text-sm text-teal-400 space-y-1">
            <li v-for="(item, j) in column.links" :key="j">
              <a href="#" class="hover:underline">{{ item }}</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="text-center mt-6 text-gray-400 text-sm">
        <button class="hover:underline">POKAŻ WIĘCEJ</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const sections = [
  {
    title: 'Rankingi',
    links: [
      'Najlepsza folia na telefon',
      'Najlepsze krzesła gamingowe',
      'Najlepsze głośniki bluetooth',
      'Grill elektryczny ranking',
      'Ranking klimatyzatorów',
      'Najlepszy konwerter',
    ],
  },
  {
    title: 'Ostatnio dodane',
    links: [
      'Najlepsze gadżety i akcesoria do samochodu – co warto mieć w aucie?',
      'Tuning kokpitu auta – jak zrobić tuning wnętrzny auta?',
      'Poduszka ortopedyczna – jaką wybrać poduszkę ortopedyczną i dlaczego warto korzystać? Top najlepszych poduszek ortopedycznych',
      'Trening siłowy w domu - jak się przygotować i jak ćwiczyć?',
      'Jak udekorować stół na Wielkanoc?',
      'Najlepsze prezenty dla taty na Dzień Ojca',
    ],
  },
  {
    title: 'Najczęściej czytane',
    links: [
      'Regeneracja belki skrętnej – objawy usterki, regeneracja, koszty',
      'Przyprawy i mieszanki indyjskie, które warto stosować w kuchni',
      'Piłka do koszykówki – jaką wybrać?',
      'Gadżety na rower – top akcesoriów, które uatrakcyjnią Twoją jazdę',
      'Noże survivalowe – na co zwrócić uwagę przy ich wyborze?',
      'Siemię lniane na wątrobę – fakty i mity',
    ],
  },
  {
    title: 'Wyjątkowe okazje',
    links: [
      'Allegro Days',
      'Prezent na Dzień Ojca 2025',
      'Air fryer ranking',
      'Prezent dla nauczyciela na koniec roku',
      'Najlepsze kosmetyki do opalania',
      'Najlepsze grille gazowe',
    ],
  },
]
</script>