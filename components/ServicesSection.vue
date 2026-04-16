<template>
  <section id="hizmetler" class="services">
    <div class="container">

      <div class="header">
        <div class="section-tag">Hizmetlerimiz</div>
        <h2>Profesyonel yönetim<br><span>size neler sunar?</span></h2>
        <p>Tek çatı altında eksiksiz site ve apartman yönetimi hizmetleri.</p>
      </div>

      <div class="grid">
        <div
          v-for="(service, i) in services"
          :key="service.title"
          class="card"
          :class="{ featured: i === 0 }"
        >
          <div class="card-icon-wrap">
            <div class="card-icon" v-html="service.icon" />
            <span class="card-num">{{ String(i + 1).padStart(2, '0') }}</span>
          </div>
          <h3>{{ service.title }}</h3>
          <p>{{ service.desc }}</p>
          <div class="card-line" />
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
const services = [
  {
    title: 'Site & Apartman Yönetimi',
    desc: 'Aidat takibi, genel kurul organizasyonu ve kat mülkiyeti kanunu uyumu. Tüm idari süreçler şeffaflıkla yürütülür.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M15 3v18M3 9h18M3 15h18"/></svg>`,
  },
  {
    title: 'Mali Yönetim & Muhasebe',
    desc: 'Gelir-gider takibi, bütçe planlaması ve dijital aidat sistemi ile tam şeffaflık.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`,
  },
  {
    title: 'Teknik Bakım & İşletme',
    desc: 'Periyodik bakım planlaması, arıza yönetimi ve 7/24 teknik destek hattı.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>`,
  },
  {
    title: 'Güvenlik & Personel',
    desc: 'CCTV yönetimi, güvenlik personeli ve akıllı erişim kontrol sistemleri.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  },
  {
    title: 'Temizlik & Çevre Düzeni',
    desc: 'Ortak alan temizliği, peyzaj bakımı ve hijyen standartlarının eksiksiz korunması.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  },
  {
    title: 'Hukuki Danışmanlık',
    desc: 'Kat mülkiyeti hukuku, icra takibi ve tüm yasal süreçlerin profesyonel yönetimi.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>`,
  },
  {
    title: 'Resmi Evrak & Yazışma',
    desc: 'İdari belgeler, resmi yazışmalar ve tüm evrakların eksiksiz arşivlenmesi.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
  },
  {
    title: 'Havuz Bakım & İşletme',
    desc: 'Su kalitesi kontrolü, periyodik temizlik ve tüm ekipman bakım takibi.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M2 12h20M2 17c1.5 0 2.5-1 4-1s2.5 1 4 1 2.5-1 4-1 2.5 1 4 1"/><path d="M6 12V7a6 6 0 0112 0v5"/></svg>`,
  },
]
</script>

<style scoped>
.services {
  background: #fff;
  padding: 100px 24px;
}
.container {
  max-width: 1100px;
  margin: 0 auto;
}

/* HEADER */
.header {
  text-align: center;
  margin-bottom: 64px;
}
.section-tag {
  font-size: 11px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #1e9470;
  font-weight: 700;
  margin-bottom: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
.section-tag::before,
.section-tag::after {
  content: '';
  width: 32px;
  height: 1px;
  background: #1e9470;
}
h2 {
  font-size: 38px;
  font-weight: 900;
  color: #0d4a35;
  line-height: 1.15;
  margin-bottom: 14px;
}
h2 span { color: #177a5e; }
.header > p {
  font-size: 16px;
  color: #888;
  max-width: 440px;
  margin: 0 auto;
}

/* GRID */
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  border: 1px solid #d8ede6;
  border-radius: 20px;
  overflow: hidden;
}

.card {
  padding: 32px 28px;
  background: #fff;
  border-right: 1px solid #d8ede6;
  border-bottom: 1px solid #d8ede6;
  position: relative;
  transition: background 0.2s;
  cursor: default;
}
/* 4 sütunlu grid: son sütun border-right yok */
.card:nth-child(4n) { border-right: none; }
/* Son iki sıra border-bottom yok */
.card:nth-last-child(-n+4) { border-bottom: none; }

.card:hover {
  background: #f2fbf7;
}
.card.featured {
  background: #0d4a35;
}
.card.featured:hover {
  background: #0f5540;
}
.card.featured h3 { color: #fff; }
.card.featured p  { color: rgba(255,255,255,0.6); }
.card.featured .card-num { color: rgba(255,255,255,0.15); }
.card.featured .card-line { background: rgba(255,255,255,0.15); }
.card.featured .card-icon {
  background: rgba(125, 224, 184, 0.15);
  color: #7de0b8;
}

.card-icon-wrap {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 20px;
}
.card-icon {
  width: 44px;
  height: 44px;
  background: #e4f5ee;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #177a5e;
  transition: background 0.2s;
}
.card:hover:not(.featured) .card-icon {
  background: #c8eddf;
}
.card-icon :deep(svg) { width: 20px; height: 20px; }

.card-num {
  font-size: 28px;
  font-weight: 900;
  color: #e4f0eb;
  line-height: 1;
  letter-spacing: -1px;
  transition: color 0.2s;
}
.card:hover:not(.featured) .card-num { color: #c8e8d8; }

h3 {
  font-size: 14px;
  font-weight: 700;
  color: #0d4a35;
  margin-bottom: 8px;
  line-height: 1.3;
}
p {
  font-size: 12.5px;
  color: #888;
  line-height: 1.65;
  margin-bottom: 20px;
}

.card-line {
  height: 2px;
  width: 28px;
  background: #c8e8d8;
  border-radius: 2px;
  transition: width 0.3s;
}
.card:hover .card-line { width: 48px; }
.card.featured .card-line { background: rgba(125,224,184,0.4); }
.card.featured:hover .card-line { background: #7de0b8; }

@media (max-width: 960px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
  .card:nth-child(4n) { border-right: 1px solid #d8ede6; }
  .card:nth-child(2n) { border-right: none; }
  .card:nth-last-child(-n+4) { border-bottom: 1px solid #d8ede6; }
  .card:nth-last-child(-n+2) { border-bottom: none; }
  h2 { font-size: 30px; }
}
@media (max-width: 540px) {
  .grid { grid-template-columns: 1fr; }
  .card { border-right: none !important; }
  .card:last-child { border-bottom: none; }
}
</style>
