<script setup lang="ts">
import type { PropType } from 'vue'

type TeamMember = {
  initials: string
  name: string
  role: string
}

defineProps({
  items: {
    type: Array as PropType<TeamMember[]>,
    required: true
  }
})
</script>

<template>
  <section class="section" id="ekip">
    <div class="reveal">
      <div class="label">Ekibimiz</div>
      <h2 class="title">
        Uzman <em>kadromuzla</em><br />
        hizmetinizdeyiz
      </h2>
    </div>

    <div class="team-grid">
      <div
        v-for="(member, index) in items"
        :key="member.initials"
        class="team-card reveal"
        :class="{
          'delay-1': index === 1,
          'delay-2': index === 2,
          'delay-3': index === 3
        }"
      >
        <div class="team-avatar">
          <div class="team-avatar-bg"></div>
          <div class="team-initials">{{ member.initials }}</div>

          <div class="team-overlay">
            <div class="team-social">
              <a href="#">
                <svg viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div class="team-info">
          <div class="team-name">{{ member.name }}</div>
          <div class="team-role">{{ member.role }}</div>
          <div class="team-divider"></div>
        </div>
      </div>
    </div>
  </section>
</template>