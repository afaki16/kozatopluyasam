<script setup lang="ts">
import { onMounted } from 'vue'
import type { PropType } from 'vue'

type Stat = {
  target: number
  suffix: string
  label: string
}

defineProps({
  items: {
    type: Array as PropType<Stat[]>,
    required: true
  }
})

function animateCounter(el: HTMLElement) {
  const target = Number(el.dataset.target || 0)
  const suffix = el.dataset.suffix || ''
  let currentValue = 0
  const step = target / 55

  const interval = setInterval(() => {
    currentValue = Math.min(currentValue + step, target)
    el.textContent =
      Math.floor(currentValue) + (currentValue >= target ? suffix : '')

    if (currentValue >= target) {
      clearInterval(interval)
    }
  }, 18)
}

onMounted(() => {
  const counterEls = document.querySelectorAll('.stat-num[data-target]')

  const obs = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target as HTMLElement)
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.5 }
  )

  counterEls.forEach((el) => obs.observe(el))
})
</script>

<template>
  <div class="stats-bar">
    <div v-for="(item, index) in items" :key="index" class="stat-item">
      <span
        class="stat-num"
        :data-target="item.target"
        :data-suffix="item.suffix"
      >
        0
      </span>
      <span class="stat-lbl">{{ item.label }}</span>
    </div>
  </div>
</template>