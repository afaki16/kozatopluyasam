<script setup lang="ts">
import { onMounted, nextTick } from 'vue'
import {
  slides,
  stats,
  services,
  processSteps,
  team,
  testimonials
} from '../data/landing'
import { useHead } from 'nuxt/app'

useHead({
  title: 'Koza Toplu Yaşam — Bursa Site & Bina Yönetimi',
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Outfit:wght@300;400;500;600&display=swap'
    }
  ]
})

onMounted(async () => {
  await nextTick()

  const revealEls = document.querySelectorAll('.reveal')

  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    },
    { threshold: 0.1 }
  )

  revealEls.forEach((el) => obs.observe(el))
})
</script>

<template>
  <div>
    <LandingNavbar />
    <LandingHeroSlider :items="slides" />
    <LandingStatsBar :items="stats" />
    <LandingAboutSection />
    <LandingServicesSection :items="services" />
    <LandingProcessSection :items="processSteps" />
    <LandingTeamSection :items="team" />
    <LandingTestimonialsSection :items="testimonials" />
    <LandingCtaBanner />
    <LandingSiteFooter />
  </div>
</template>