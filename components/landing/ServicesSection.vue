<script setup lang="ts">
import type { PropType } from 'vue'

type Service = {
  no: string
  name: string
  desc: string
}

defineProps({
  items: {
    type: Array as PropType<Service[]>,
    required: true
  }
})
</script>

<template>
  <section class="section" id="hizmetler">
    <div class="services-intro reveal">
      <div>
        <div class="label">Hizmetlerimiz</div>
        <h2 class="title">
          Her ihtiyaç için<br />
          <em>uzman</em> çözüm
        </h2>
      </div>

      <p class="services-desc">
        Eksiksiz site ve bina yönetimi için tüm hizmetleri tek çatı altında sunuyoruz.
      </p>
    </div>

    <div class="services-grid">
      <div
        v-for="(service, index) in items"
        :key="service.no"
        class="service-card reveal"
        :class="{
          'delay-1': index % 3 === 1,
          'delay-2': index % 3 === 2
        }"
      >
        <div class="service-num">{{ service.no }}</div>

        <div class="service-icon-wrap">
          <svg viewBox="0 0 24 24">
            <rect x="4" y="4" width="16" height="16" rx="2" />
          </svg>
        </div>

        <div class="service-name">{{ service.name }}</div>
        <div class="service-desc">{{ service.desc }}</div>

        <a href="#" class="service-link">
          Detaylar
          <svg viewBox="0 0 24 24">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>