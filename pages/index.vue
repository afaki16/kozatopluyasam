<template>
  <div>
    <TheNavbar />
    <main>
      <HeroSection />
     
      <ServicesSection />
     
       <IncludedSection />
       <WhyUsSection />
     
      <CtaSection />
    </main>
    <TheFooter />
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Koza Toplu Yaşam – Profesyonel Site ve Apartman Yönetimi',
  description:
    'Bursa\'da profesyonel bina, site ve apartman yönetimi. Yönetim, temizlik, güvenlik ve ortak alanlarla ilgili tüm takipleri bize bırakın.',
      keywords:
    'site yönetimi, apartman yönetimi, bina yönetimi, Bursa site yönetimi, Bursa apartman yönetimi, profesyonel site yönetimi, toplu yaşam yönetimi, apartman aidat takibi, site aidat takibi, bina temizlik yönetimi, site güvenlik yönetimi, Koza Toplu Yaşam',
  ogTitle: 'Koza Toplu Yaşam – Profesyonel Site ve Apartman Yönetimi',
  ogDescription:
    'Bursa\'da profesyonel bina, site ve apartman yönetimi hizmetleri. Siz rahat edin.',
})
</script>

<style>
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  background: #fff;
  color: #1a1a1a;
  -webkit-font-smoothing: antialiased;
}
</style>
