<template>
  <section class="hero">
    <div
      v-for="(slide, i) in slides"
      :key="i"
      class="slide"
      :class="{ active: current === i }"
    >
      <div class="slide-bg" :style="{ backgroundImage: `url('${slide.img}')` }" />
      <div class="slide-content">
        <div class="slide-tag">{{ slide.tag }}</div>
        <h1 v-html="slide.title" />
        <p>{{ slide.desc }}</p>
      </div>
    </div>

   

    <div class="slider-arrows">
      <button class="arrow-btn" @click="goTo(current - 1)">
        <svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>
      </button>
      <button class="arrow-btn" @click="goTo(current + 1)">
        <svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>
      </button>
    </div>

    <div class="slider-dots">
      <button
        v-for="(_, i) in slides"
        :key="i"
        class="dot"
        :class="{ active: current === i }"
        @click="goTo(i)"
      />
    </div>

  </section>
</template>

<script setup>
const slides = [
  {
    tag: "Bursa'nın Güvenilir Adresi",
    title: 'Yaşam alanınızı<br><em>profesyonelce</em><br>yönetiyoruz.',
    desc: '15 yılı aşkın deneyimimizle Bursa\'da site ve bina yönetiminde standartları belirliyoruz.',
    img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600&q=80',
  },
  {
    tag: 'Modern Yönetim Anlayışı',
    title: 'Şeffaf, güvenilir<br>ve <em>verimli</em><br>yönetim.',
    desc: 'Dijital altyapımız ve uzman ekibimizle her süreç şeffaf ve kontrol altında.',
    img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&q=80',
  },
  {
    tag: '500+ Memnun Sakin',
    title: 'Her ayrıntıyı<br><em>titizlikle</em><br>yönetiyoruz.',
    desc: 'Teknik bakımdan güvenliğe, temizlikten mali yönetime — tek çatı altında tam hizmet.',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80',
  },
]

const current = ref(0)
let timer = null

function goTo(idx) {
  current.value = ((idx % slides.length) + slides.length) % slides.length
  restartTimer()
}

function restartTimer() {
  clearInterval(timer)
  timer = setInterval(() => {
    current.value = (current.value + 1) % slides.length
  }, 4000)
}

onMounted(() => {
  restartTimer()
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>

<style scoped>
.hero {
  height: 100vh;
  min-height: 620px;
  position: relative;
  overflow: hidden;
}

.slide {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 1.2s ease;
  display: flex;
  align-items: flex-end;
}
.slide.active { opacity: 1; }

.slide-bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
}
.slide-bg::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(105deg, rgba(8,38,28,0.82) 0%, rgba(8,38,28,0.45) 55%, rgba(8,38,28,0.12) 100%);
}

.slide-content {
  position: relative;
  z-index: 1;
  padding: 0 60px 96px;
  max-width: 740px;
}

.slide-tag {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #7de0b8;
  margin-bottom: 22px;
}
.slide-tag::before {
  content: '';
  width: 28px;
  height: 1px;
  background: #7de0b8;
}

h1 {
  font-size: clamp(40px, 6.5vw, 80px);
  font-weight: 900;
  line-height: 1.06;
  color: #fff;
  margin-bottom: 22px;
  letter-spacing: -0.02em;
}
h1 :deep(em) {
  font-style: italic;
  color: #a8edcc;
}

p {
  font-size: 16px;
  color: rgba(255,255,255,0.68);
  line-height: 1.8;
  max-width: 480px;
  margin-bottom: 38px;
  font-weight: 300;
}

.slide-actions {
  display: flex;
  gap: 14px;
  align-items: center;
}

.btn-primary {
  background: #177a5e;
  color: #fff;
  padding: 14px 32px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  transition: background 0.3s;
}
.btn-primary:hover { background: #0b5242; }

.btn-ghost {
  color: rgba(255,255,255,0.75);
  font-size: 13px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 400;
  transition: color 0.3s;
}
.btn-ghost:hover { color: #fff; }
.btn-ghost svg {
  width: 14px;
  height: 14px;
  stroke: currentColor;
  fill: none;
  stroke-width: 2;
}

.slider-arrows {
  position: absolute;
  bottom: 32px;
  left: 60px;
  z-index: 10;
  display: flex;
  gap: 8px;
}

.arrow-btn {
  width: 46px;
  height: 46px;
  border: 1px solid rgba(255,255,255,0.25);
  background: rgba(255,255,255,0.07);
  backdrop-filter: blur(8px);
  border-radius: 50%;
  cursor: pointer;
  display: grid;
  place-items: center;
  transition: background 0.3s, border-color 0.3s;
}
.arrow-btn:hover {
  background: rgba(255,255,255,0.16);
  border-color: rgba(255,255,255,0.55);
}
.arrow-btn svg {
  width: 16px;
  height: 16px;
  stroke: #fff;
  fill: none;
  stroke-width: 2;
}

.slider-dots {
  position: absolute;
  bottom: 44px;
  right: 60px;
  z-index: 10;
  display: flex;
  gap: 8px;
}

.dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(255,255,255,0.3);
  border: none;
  cursor: pointer;
  transition: background 0.3s, transform 0.3s;
}
.dot.active {
  background: #7de0b8;
  transform: scale(1.5);
}


/* ── HERO SEAL ── */
.hero-seal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -58%);
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  pointer-events: none;
  animation: seal-in 1.2s ease both;
}
@keyframes seal-in {
  from { opacity: 0; transform: translate(-50%, -62%) scale(0.92); }
  to   { opacity: 1; transform: translate(-50%, -58%) scale(1); }
}
.seal-img {
  height: 150px;
  width: auto;
  filter: drop-shadow(0 6px 32px rgba(0,0,0,0.35)) brightness(1.08);
  margin-bottom: 50px;
}
.seal-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
}
.seal-text strong {
  font-size: 30px;
  font-weight: 900;
  color: #fff;
  letter-spacing: 6px;
  line-height: 1;
  text-shadow: 0 2px 16px rgba(0,0,0,0.4);
}
.seal-text span {
  font-size: 11px;
  color: #7de0b8;
  letter-spacing: 5px;
  text-transform: uppercase;
  font-weight: 600;
}
.seal-text em {
  font-size: 10px;
  color: rgba(255,255,255,0.4);
  letter-spacing: 3px;
  text-transform: uppercase;
  font-style: normal;
  margin-top: 2px;
}

@media (max-width: 768px) {
  .slide-content { padding: 0 24px 80px; }
  .slider-arrows { left: 24px; }
  .slider-dots { right: 24px; }
  h1 { font-size: clamp(32px, 8vw, 52px); }
  .seal-img { height: 80px; }
  .seal-text strong { font-size: 22px; letter-spacing: 4px; }
}
</style>
