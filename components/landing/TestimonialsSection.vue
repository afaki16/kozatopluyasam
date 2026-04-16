<script setup lang="ts">
import type { PropType } from 'vue'

type Testimonial = {
  initials: string
  name: string
  role: string
  text: string
}

defineProps({
  items: {
    type: Array as PropType<Testimonial[]>,
    required: true
  }
})
</script>

<template>
  <section class="section testimonial-section" id="referanslar">
    <div class="testimonial-inner">
      <div>
        <div class="label reveal" style="color: #7de0b8">Referanslar</div>

        <h2 class="testimonial-title reveal delay-1">
          Sakinlerimiz<br />
          ne <em style="font-style: italic; color: #a8edcc">diyor?</em>
        </h2>

        <p
          class="reveal delay-2"
          style="color: rgba(255,255,255,0.45); font-size: 15px; margin-top: 20px; line-height: 1.78; font-weight: 300;"
        >
          500'den fazla memnun sakin ve 15 yıllık başarı hikayemiz.
        </p>
      </div>

      <div class="testimonial-cards reveal delay-1">
        <div v-for="item in items" :key="item.name" class="t-card">
          <div class="stars">★★★★★</div>
          <div class="t-quote">"</div>
          <div class="t-text">{{ item.text }}</div>

          <div class="t-author">
            <div class="t-avatar">{{ item.initials }}</div>

            <div>
              <div class="t-name">{{ item.name }}</div>
              <div class="t-role">{{ item.role }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>