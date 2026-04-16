<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import type { PropType } from 'vue'

type Slide = {
  tag: string
  titleTop: string
  titleEm: string
  titleBottom: string
  desc: string
  primaryText: string
  primaryHref: string
  secondaryText: string
  secondaryHref: string
  bg: string
}

const props = defineProps({
  items: {
    type: Array as PropType<Slide[]>,
    required: true
  }
})

const current = ref(0)
const progress = ref(0)
const paused = ref(false)

let rafId: number | null = null
let lastTs = 0

const progressStyle = computed(() => ({
  width: `${progress.value}%`
}))

function goTo(idx: number) {
  current.value = (idx + props.items.length) % props.items.length
  progress.value = 0
  lastTs = 0
}

function nextSlide() {
  goTo(current.value + 1)
}

function prevSlide() {
  goTo(current.value - 1)
}

function animateProgress(ts: number) {
  const DURATION = 5000

  if (!lastTs) lastTs = ts

  const delta = ts - lastTs
  lastTs = ts

  if (!paused.value) {
    progress.value = Math.min(progress.value + (delta / DURATION) * 100, 100)
  }

  if (progress.value >= 100) {
    nextSlide()
  }

  rafId = requestAnimationFrame(animateProgress)
}

onMounted(() => {
  rafId = requestAnimationFrame(animateProgress)
})

onUnmounted(() => {
  if (rafId) cancelAnimationFrame(rafId)
})
</script>

<template>
  <section
    class="hero"
    id="hero"
    @mouseenter="paused = true"
    @mouseleave="paused = false"
  >
    <div
      v-for="(slide, index) in items"
      :key="index"
      class="slide"
      :class="{ active: index === current }"
    >
      <div
        class="slide-bg"
        :style="{ backgroundImage: `url('${slide.bg}')` }"
      ></div>

      <div class="slide-content">
        <div class="slide-tag">{{ slide.tag }}</div>

        <h1 class="slide-title">
          {{ slide.titleTop }}<br />
          <em>{{ slide.titleEm }}</em><br />
          {{ slide.titleBottom }}
        </h1>

        <p class="slide-desc">{{ slide.desc }}</p>

        <div class="slide-actions">
          <a :href="slide.primaryHref" class="hero-btn-primary">
            {{ slide.primaryText }}
          </a>

          <a :href="slide.secondaryHref" class="hero-btn-ghost">
            {{ slide.secondaryText }}
            <svg viewBox="0 0 24 24">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </a>
        </div>
      </div>
    </div>

    <div class="slider-arrows">
      <button type="button" class="arrow-btn" @click="prevSlide">
        <svg viewBox="0 0 24 24">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <button type="button" class="arrow-btn" @click="nextSlide">
        <svg viewBox="0 0 24 24">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </div>

    <div class="slider-nav">
      <button
        v-for="(_, index) in items"
        :key="index"
        type="button"
        class="slider-dot"
        :class="{ active: index === current }"
        @click="goTo(index)"
      ></button>
    </div>

    <div class="hero-progress">
      <div class="hero-progress-bar" :style="progressStyle"></div>
    </div>
  </section>
</template>