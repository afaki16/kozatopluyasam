<template>
  <section id="dahil" class="included">

    <!-- Arka plan fotoğraf + overlay -->
    <div class="bg-photo">
      <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&q=80" alt="" />
      <div class="bg-overlay" />
    </div>

    <div class="container">

      <!-- Sol: Metin + istatistikler -->
      <div class="left">
        <div class="section-tag">Pakete Dahil</div>
        <h2>Yönetim ücretimize<br><span>dahil hizmetler</span></h2>
        <p>Ekstra ücret yok. Sürpriz fatura yok.<br>Her şey tek pakette, tam şeffaflıkla.</p>

        <div class="stats">
          <div class="stat">
            <strong>500+</strong>
            <span>Yönetilen Konut</span>
          </div>
          <div class="stat-divider" />
          <div class="stat">
            <strong>%98</strong>
            <span>Memnuniyet</span>
          </div>
          <div class="stat-divider" />
          <div class="stat">
            <strong>7/24</strong>
            <span>Destek</span>
          </div>
        </div>
      </div>

      <!-- Sağ: Hizmet kartları -->
      <div class="right">
        <div v-for="item in included" :key="item.title" class="item">
          <div class="item-icon" v-html="item.icon" />
          <div class="item-text">
            <strong>{{ item.title }}</strong>
            <span>{{ item.desc }}</span>
          </div>
          <div class="item-check">
            <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2.5">
              <polyline points="2 6 5 9 10 3" />
            </svg>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
const included = [
  {
    title: 'Aidat Takibi ve Yönetimi',
    desc: 'Otomatik hatırlatmalar ve anlık ödeme takibi.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
      <rect x="2" y="5" width="20" height="14" rx="2"/>
      <line x1="2" y1="10" x2="22" y2="10"/>
    </svg>`,
  },
  {
    title: 'Mali Hizmetler ve Muhasebe',
    desc: 'Şeffaf gelir-gider raporu, bütçe planlaması.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
    </svg>`,
  },
  {
    title: 'Hukuki Danışmanlık ve Takip',
    desc: 'Kat mülkiyeti hukuku ve icra süreçleri.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>`,
  },
  {
    title: 'Özel Aidat Takip Programı',
    desc: 'Dijital platform ile gecikme ve kayıp sıfır.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
      <rect x="5" y="2" width="14" height="20" rx="2"/>
      <line x1="12" y1="18" x2="12.01" y2="18" stroke-width="3"/>
    </svg>`,
  },
  {
    title: 'Kat Mülkiyeti Kanunu Uyumu',
    desc: 'Tüm süreçler mevzuata tam uygun yürütülür.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
      <polyline points="14 2 14 8 20 8"/>
      <line x1="16" y1="13" x2="8" y2="13"/>
      <line x1="16" y1="17" x2="8" y2="17"/>
    </svg>`,
  },
  {
    title: 'Resmi Evrak ve Yazışma Takibi',
    desc: 'İdari belgeler eksiksiz arşivlenir ve yönetilir.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
    </svg>`,
  },
]
</script>

<style scoped>
.included {
  position: relative;
  padding: 100px 24px;
  overflow: hidden;
}

/* Arka plan fotoğraf */
.bg-photo {
  position: absolute;
  inset: 0;
  z-index: 0;
}
.bg-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
.bg-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(13, 74, 53, 0.96) 0%,
    rgba(23, 122, 94, 0.90) 50%,
    rgba(10, 55, 40, 0.95) 100%
  );
}

.container {
  position: relative;
  z-index: 1;
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 80px;
  align-items: center;
}

/* SOL */
.section-tag {
  font-size: 11px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #7de0b8;
  font-weight: 700;
  margin-bottom: 18px;
  display: flex;
  align-items: center;
  gap: 10px;
}
.section-tag::before {
  content: '';
  width: 28px;
  height: 1px;
  background: #7de0b8;
}

h2 {
  font-size: 36px;
  font-weight: 900;
  color: #fff;
  line-height: 1.18;
  margin-bottom: 18px;
  letter-spacing: -0.3px;
}
h2 span {
  color: #7de0b8;
}

.left > p {
  font-size: 15px;
  color: rgba(255, 255, 255, 0.62);
  line-height: 1.75;
  margin-bottom: 44px;
}

.stats {
  display: flex;
  align-items: center;
  gap: 0;
  background: rgba(255,255,255,0.07);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 14px;
  padding: 24px 28px;
  backdrop-filter: blur(8px);
}
.stat {
  flex: 1;
  text-align: center;
}
.stat strong {
  display: block;
  font-size: 28px;
  font-weight: 900;
  color: #7de0b8;
  line-height: 1;
  margin-bottom: 5px;
  letter-spacing: -0.5px;
}
.stat span {
  font-size: 10.5px;
  color: rgba(255,255,255,0.5);
  text-transform: uppercase;
  letter-spacing: 0.8px;
  font-weight: 500;
}
.stat-divider {
  width: 1px;
  height: 40px;
  background: rgba(255,255,255,0.15);
}

/* SAĞ: kartlar */
.right {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.item {
  display: flex;
  align-items: center;
  gap: 16px;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 16px 20px;
  backdrop-filter: blur(6px);
  transition: background 0.2s, border-color 0.2s, transform 0.2s;
  cursor: default;
}
.item:hover {
  background: rgba(255, 255, 255, 0.13);
  border-color: rgba(125, 224, 184, 0.35);
  transform: translateX(4px);
}

.item-icon {
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  background: rgba(125, 224, 184, 0.15);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #7de0b8;
}
.item-icon :deep(svg) {
  width: 18px;
  height: 18px;
}

.item-text {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.item-text strong {
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  line-height: 1.2;
}
.item-text span {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.48);
  line-height: 1.4;
}

.item-check {
  width: 22px;
  height: 22px;
  flex-shrink: 0;
  background: #177a5e;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}
.item-check svg {
  width: 11px;
  height: 11px;
}

@media (max-width: 900px) {
  .container { grid-template-columns: 1fr; gap: 48px; }
  h2 { font-size: 28px; }
}
@media (max-width: 480px) {
  .stats { flex-direction: column; gap: 16px; }
  .stat-divider { width: 40px; height: 1px; }
}
</style>
