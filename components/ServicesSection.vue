<template>
  <section id="hizmetler" class="services">
    <div class="container">

      <div class="header">
        <div class="section-tag">Hizmetlerimiz</div>
        <h2>Profesyonel yönetim<br><span>size neler sunar?</span></h2>
        <p>Tek çatı altında eksiksiz site ve apartman yönetimi hizmetleri.</p>
      </div>

      <div class="grid">
        <div v-for="(s, i) in services" :key="s.title" class="card">

          <div class="card-top">
            <div class="card-icon" v-html="s.icon" />
            <span class="card-num">{{ String(i + 1).padStart(2, '0') }}</span>
          </div>

          <div class="card-body">
            <h3>{{ s.title }}</h3>
            <p>{{ s.detail }}</p>
            <div class="tags">
              <span v-for="t in s.tags" :key="t">{{ t }}</span>
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
const services = [
  {
    title: 'Site & Apartman Yönetimi',
    detail: 'Aidat takibinden genel kurul organizasyonuna, kat mülkiyeti kanunu uyumundan sakin ilişkileri yönetimine kadar her adım profesyonel ekibimizle yürütülür. Aylık raporlarla tam şeffaflık sağlanır.',
    tags: ['İdari Yönetim', 'Genel Kurul', 'Sakin İlişkileri'],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M15 3v18M3 9h18M3 15h18"/></svg>`,
  },
  {
    title: 'Mali Yönetim & Muhasebe',
    detail: 'Online ödeme altyapısı, otomatik gecikme bildirimleri ve anlık finansal raporlarla aidat süreçleri tamamen dijitalleşiyor. Bütçe planlaması titizlikle yapılır, sakinlerle paylaşılır.',
    tags: ['Dijital Aidat', 'Bütçe Planı', 'Finansal Rapor'],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`,
  },
  {
    title: 'Teknik Bakım & İşletme',
    detail: 'Asansör, jeneratör, hidrofor ve ısıtma sistemleri için periyodik bakım takvimi oluşturulur. Arıza anında 30 dakika içinde müdahale garantisiyle sakinlerin konforu kesintisiz sürdürülür.',
    tags: ['7/24 Destek', 'Periyodik Bakım', 'Acil Müdahale'],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>`,
  },
  {
    title: 'Güvenlik & Personel',
    detail: 'Profesyonel güvenlik personeli, 7/24 CCTV izleme ve akıllı erişim kontrol sistemleriyle sitenizin güvenliği eksiksiz sağlanır. Kamera arşivleme ve periyodik güvenlik raporları standart hizmetlerimizdir.',
    tags: ['7/24 Güvenlik', 'CCTV', 'Erişim Kontrol'],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  },
  {
    title: 'Temizlik & Çevre Düzeni',
    detail: 'Giriş, merdiven, otopark ve ortak alanların günlük temizliği; bahçe ve peyzaj bakımı mevsimsel olarak planlanır. Hijyen standartlarının devamlılığı için düzenli denetim ve raporlama yapılır.',
    tags: ['Günlük Temizlik', 'Peyzaj', 'Hijyen Denetimi'],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  },
  {
    title: 'Hukuki Danışmanlık',
    detail: 'Kat mülkiyeti kanunu kapsamında tüm hukuki süreçler, aidat icra takibi ve genel kurul kararlarının yasal uygunluğu için uzman hukuk danışmanlarıyla çalışıyoruz. Hukuki anlaşmazlıklarda tam destek.',
    tags: ['İcra Takibi', 'Hukuki Danışma', 'Kanun Uyumu'],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>`,
  },
  {
    title: 'Resmi Evrak & Yazışma',
    detail: 'Belediye, vergi dairesi ve resmi kurumlarla yazışmalar, kat malikleri kararlarının noter onayı ve tüm yasal belgelerin dijital arşivlenmesi ile yetkili makamlara zamanında iletimi sağlanır.',
    tags: ['Dijital Arşiv', 'Resmi Yazışma', 'Belge Takibi'],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
  },
  {
    title: 'Havuz Bakım & İşletme',
    detail: 'Haftalık su analizi ve kimyasal dengeleme, filtre ve pompa bakımı, havuz yüzey temizliği ve tüm teknik ekipman kontrolü yapılır. Sezon boyunca standartlara uygun, kesintisiz havuz işletmesi sağlanır.',
    tags: ['Su Analizi', 'Ekipman Bakımı', 'Sezonluk İşletme'],
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M2 12h20M2 17c1.5 0 2.5-1 4-1s2.5 1 4 1 2.5-1 4-1 2.5 1 4 1"/><path d="M6 12V7a6 6 0 0112 0v5"/></svg>`,
  },
]
</script>

<style scoped>
.services {
  background: #f7faf9;
  padding: 100px 24px;
}
.container {
  max-width: 1160px;
  margin: 0 auto;
}

/* ── HEADER ── */
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
  font-size: 40px;
  font-weight: 900;
  color: #0d4a35;
  line-height: 1.12;
  margin-bottom: 12px;
  letter-spacing: -0.5px;
}
h2 span { color: #177a5e; }
.header > p {
  font-size: 16px;
  color: #999;
  max-width: 400px;
  margin: 0 auto;
}

/* ── GRID ── */
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
}

/* ── CARD ── */
.card {
  position: relative;
  border-radius: 18px;
  padding: 26px 22px 24px;
  background: linear-gradient(145deg, #0d4a35 0%, #177a5e 100%);
  border: 1px solid transparent;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  cursor: default;
}

/* ── TOP: ikon + numara ── */
.card-top {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 16px;
}
.card-icon {
  width: 44px;
  height: 44px;
  background: rgba(255,255,255,0.15);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #7de0b8;
  flex-shrink: 0;
}
.card-icon :deep(svg) { width: 20px; height: 20px; }

.card-num {
  font-size: 36px;
  font-weight: 900;
  line-height: 1;
  letter-spacing: -2px;
  color: rgba(255,255,255,0.15);
  user-select: none;
}

/* ── BODY: her zaman görünür, renk hover'da değişir ── */
.card-body {
  position: relative;
  z-index: 1;
  flex: 1;
  display: flex;
  flex-direction: column;
}
.card-body h3 {
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 8px;
  line-height: 1.3;
}
.card-body p {
  font-size: 11.5px;
  color: rgba(255,255,255,0.65);
  line-height: 1.65;
  margin-bottom: 14px;
  flex: 1;
}

/* ── TAGS ── */
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}
.tags span {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.2px;
  color: #7de0b8;
  background: rgba(125,224,184,0.12);
  border: 1px solid rgba(125,224,184,0.28);
  padding: 3px 9px;
  border-radius: 20px;
}

/* ── RESPONSIVE ── */
@media (max-width: 1024px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
  h2 { font-size: 32px; }
}
@media (max-width: 560px) {
  .grid { grid-template-columns: 1fr; }
  h2 { font-size: 26px; }
}
</style>
