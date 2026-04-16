<template>
  <div class="trust-bar">
    <div v-for="item in items" :key="item.title" class="trust-item">
      <div class="icon" v-html="item.icon" />
      <div class="text">
        <strong>{{ item.title }}</strong>
        <span>{{ item.desc }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const items = [
  {
    title: 'Şeffaf Mali Yönetim',
    desc: 'Aylık gelir-gider raporu, her ay sakinlerle paylaşılır.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
    </svg>`,
  },
  {
    title: '7/24 Teknik Destek',
    desc: 'Arıza ve acil durumlarda her saat ulaşılabilir ekip.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.88 1.18 2 2 0 012.86 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
    </svg>`,
  },
  {
    title: 'Yasal Uyum Güvencesi',
    desc: 'Kat mülkiyeti kanununa tam uygun, eksiksiz yönetim.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>`,
  },
  {
    title: 'Dijital Aidat Takibi',
    desc: 'Özel yazılımla gecikme sıfır, takip her an elinizde.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
      <rect x="2" y="5" width="20" height="14" rx="2"/>
      <line x1="2" y1="10" x2="22" y2="10"/>
    </svg>`,
  },
]
</script>

<style scoped>
.trust-bar {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background: #0d4a35;
}
.trust-item {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 28px 24px;
  border-right: 1px solid rgba(255, 255, 255, 0.08);
}
.trust-item:last-child { border-right: none; }

.icon {
  width: 42px;
  height: 42px;
  flex-shrink: 0;
  background: rgba(255, 255, 255, 0.07);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #7de0b8;
}
.icon :deep(svg) {
  width: 20px;
  height: 20px;
}

.text {
  display: flex;
  flex-direction: column;
  gap: 3px;
}
strong {
  font-size: 13px;
  font-weight: 700;
  color: #fff;
  line-height: 1.2;
}
span {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.45);
  line-height: 1.4;
}

@media (max-width: 900px) {
  .trust-bar { grid-template-columns: repeat(2, 1fr); }
  .trust-item:nth-child(2) { border-right: none; }
  .trust-item:nth-child(1),
  .trust-item:nth-child(2) { border-bottom: 1px solid rgba(255,255,255,0.08); }
}
@media (max-width: 480px) {
  .trust-bar { grid-template-columns: 1fr; }
  .trust-item { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.08); }
  .trust-item:last-child { border-bottom: none; }
}
</style>
