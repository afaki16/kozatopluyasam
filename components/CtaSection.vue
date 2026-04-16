<template>
  <section id="iletisim" class="cta">

    <div class="bg">
      <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80" alt="" />
      <div class="bg-overlay" />
    </div>

    <div class="container">

      <!-- Üst: başlık bloğu -->
      <div class="top">
        <div class="badge">
          <span class="badge-dot" />
          Ücretsiz Keşif &amp; Fiyat Teklifi
        </div>
        <h2>Profesyonel yönetim için<br><em>bizimle iletişime geçin</em></h2>
        <p>Bursa'da site ve apartman yönetiminde uzman ekibimiz her sorunuza yanıt vermeye hazır.</p>
      </div>

      <!-- Orta: iletişim bilgileri -->
      <div class="contacts">
        <a href="tel:05302264033" class="contact-card">
          <div class="cc-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.88 1.18 2 2 0 012.86 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
            </svg>
          </div>
          <div class="cc-text">
            <span>Telefon</span>
            <strong>0530 226 40 33</strong>
          </div>
        </a>

        <a href="mailto:info@kozatopluyasam.com.tr" class="contact-card">
          <div class="cc-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          </div>
          <div class="cc-text">
            <span>E-posta</span>
            <strong>info@kozatopluyasam.com.tr</strong>
          </div>
        </a>

        <div class="contact-card static">
          <div class="cc-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
          </div>
          <div class="cc-text">
            <span>Konum</span>
            <strong>Bursa / Türkiye</strong>
          </div>
        </div>
      </div>

      <!-- Alt: aksiyon butonları -->
     

    </div>
  </section>
</template>

<style scoped>
.cta {
  position: relative;
  padding: 110px 24px;
  overflow: hidden;
}

/* ARKA PLAN */
.bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}
.bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 50%;
}
.bg-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    160deg,
    rgba(5, 25, 18, 0.97) 0%,
    rgba(13, 74, 53, 0.88) 50%,
    rgba(5, 25, 18, 0.97) 100%
  );
}

/* CONTAINER */
.container {
  position: relative;
  z-index: 1;
  max-width: 860px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 52px;
  text-align: center;
}

/* ÜST BAŞLIK */
.top { display: flex; flex-direction: column; align-items: center; }

.badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(125, 224, 184, 0.12);
  border: 1px solid rgba(125, 224, 184, 0.28);
  color: #7de0b8;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.8px;
  padding: 6px 16px;
  border-radius: 20px;
  margin-bottom: 28px;
}
.badge-dot {
  width: 6px;
  height: 6px;
  background: #7de0b8;
  border-radius: 50%;
  animation: pulse-dot 1.8s infinite;
}
@keyframes pulse-dot {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(0.65); }
}

h2 {
  font-size: 42px;
  font-weight: 900;
  color: #fff;
  line-height: 1.12;
  margin-bottom: 18px;
  letter-spacing: -0.5px;
}
h2 em {
  font-style: italic;
  color: #7de0b8;
}
.top > p {
  font-size: 16px;
  color: rgba(255,255,255,0.5);
  line-height: 1.75;
  max-width: 520px;
}

/* İLETİŞİM KARTLARI */
.contacts {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
  width: 100%;
}

.contact-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  padding: 28px 20px;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.09);
  border-radius: 16px;
  text-decoration: none;
  transition: background 0.25s, border-color 0.25s, transform 0.25s;
}
a.contact-card:hover {
  background: rgba(255,255,255,0.1);
  border-color: rgba(125,224,184,0.3);
  transform: translateY(-4px);
}
.contact-card.static { cursor: default; }

.cc-icon {
  width: 48px;
  height: 48px;
  background: rgba(125,224,184,0.12);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #7de0b8;
  flex-shrink: 0;
}
.cc-icon svg { width: 20px; height: 20px; }

.cc-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}
.cc-text span {
  font-size: 10px;
  color: rgba(255,255,255,0.35);
  text-transform: uppercase;
  letter-spacing: 1.2px;
  font-weight: 600;
}
.cc-text strong {
  font-size: 14px;
  color: #fff;
  font-weight: 600;
  text-align: center;
  line-height: 1.3;
}

/* AKSİYON BUTONLARI */
.actions {
  display: flex;
  gap: 12px;
}
.btn-primary, .btn-secondary {
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 15px 32px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.2s;
}
.btn-primary svg, .btn-secondary svg { width: 16px; height: 16px; flex-shrink: 0; }
.btn-primary {
  background: #177a5e;
  color: #fff;
}
.btn-primary:hover { background: #1e9470; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(23,122,94,0.4); }
.btn-secondary {
  background: rgba(255,255,255,0.07);
  color: rgba(255,255,255,0.85);
  border: 1px solid rgba(255,255,255,0.14);
}
.btn-secondary:hover { background: rgba(255,255,255,0.13); color: #fff; transform: translateY(-2px); }

@media (max-width: 720px) {
  .contacts { grid-template-columns: 1fr; }
  h2 { font-size: 28px; }
  .actions { flex-direction: column; width: 100%; }
  .btn-primary, .btn-secondary { justify-content: center; }
}
</style>
