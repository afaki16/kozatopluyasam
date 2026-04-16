<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const navScrolled = ref(false)

function handleScroll() {
  navScrolled.value = window.scrollY > 60
}

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav id="mainNav" :class="{ scrolled: navScrolled }">
    <a href="#" class="nav-logo">
      <LandingAppLogo />
    </a>

    <div class="nav-center">
      <a href="#hizmetler">Hizmetler</a>
      <a href="#hakkimizda">Hakkımızda</a>
      <a href="#ekip">Ekibimiz</a>
      <a href="#referanslar">Referanslar</a>
      <a href="#iletisim">İletişim</a>
    </div>

    <a href="#iletisim" class="nav-btn">Teklif Al</a>
  </nav>
</template>