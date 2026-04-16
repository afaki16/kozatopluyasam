<script setup lang="ts">
import type { PropType } from 'vue'

type Step = {
  no: string
  title: string
  desc: string
}

defineProps({
  items: {
    type: Array as PropType<Step[]>,
    required: true
  }
})
</script>

<template>
  <div class="process-wrap section-sm">
    <div style="padding: 0 60px; margin-bottom: 48px" class="reveal">
      <div class="label">Çalışma Sürecimiz</div>
      <h2 class="title">4 adımda <em>profesyonel</em> yönetim</h2>
    </div>

    <div class="process-inner">
      <div
        v-for="(step, index) in items"
        :key="step.no"
        class="process-step reveal"
        :class="{
          'delay-1': index === 1,
          'delay-2': index === 2,
          'delay-3': index === 3
        }"
      >
        <div class="process-step-num">{{ step.no }}</div>
        <div class="process-step-title">{{ step.title }}</div>
        <div class="process-step-desc">{{ step.desc }}</div>
      </div>
    </div>
  </div>
</template>