<template>
  <footer class="footer">
    <div class="container">
      <div class="brand">
        <div class="logo">
          <img src="/logo.png" alt="Koza Toplu Yaşam" class="logo-img" />
          <div class="logo-text">
            <strong>KOZA</strong>
            <span>Toplu Yaşam</span>
          </div>
        </div>
        <p>Profesyonel bina, site ve apartman yöneticiliğinde doğru adres.</p>
      </div>

      <div class="links-group">
        <div class="link-col">
          <h4>Hizmetler</h4>
          <a href="#hizmetler">Site & Apartman Yönetimi</a>
          <a href="#hizmetler">Mali Yönetim & Muhasebe</a>
          <a href="#hizmetler">Teknik Bakım & İşletme</a>
          <a href="#hizmetler">Güvenlik & Personel</a>
        </div>
        <div class="link-col">
          <h4>Kurumsal</h4>
          <a href="#neden-biz">Neden Koza?</a>
          <a href="#dahil">Dahil Hizmetler</a>
          <a href="#iletisim">İletişim</a>
          <a href="#">KVKK</a>
        </div>
        <div class="link-col">
          <h4>İletişim</h4>
          <a href="tel:05302264033">0530 226 40 33</a>
          <a href="mailto:info@kozatopluyasam.com.tr">info@kozatopluyasam.com.tr</a>
          <a href="https://www.kozatopluyasam.com.tr" target="_blank">kozatopluyasam.com.tr</a>
          <span class="loc">Bursa / Türkiye</span>
        </div>
      </div>
    </div>

    <div class="bottom">
      <div class="container bottom-inner">
        <span>© {{ year }} Koza Toplu Yaşam. Tüm hakları saklıdır.</span>
        <a href="#">Gizlilik Politikası</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>

<style scoped>
.footer {
  background: #0d4a35;
  color: rgba(255, 255, 255, 0.65);
}
.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 56px 24px 40px;
  display: grid;
  grid-template-columns: 1.2fr 2fr;
  gap: 64px;
}
.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
}
.logo-img {
  height: 52px;
  width: auto;
  object-fit: contain;
  filter: brightness(1.1);
}
.logo-text strong {
  font-size: 14px;
  font-weight: 800;
  color: #fff;
  display: block;
  letter-spacing: 0.5px;
  line-height: 1.1;
}
.logo-text span {
  font-size: 10px;
  color: #3aad82;
  letter-spacing: 1px;
  text-transform: uppercase;
}
.brand > p {
  font-size: 13px;
  line-height: 1.6;
  max-width: 240px;
}
.links-group {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}
.link-col h4 {
  font-size: 12px;
  font-weight: 700;
  color: #fff;
  letter-spacing: 0.5px;
  margin-bottom: 14px;
  text-transform: uppercase;
}
.link-col a,
.link-col .loc {
  display: block;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.55);
  text-decoration: none;
  margin-bottom: 9px;
  transition: color 0.15s;
}
.link-col a:hover { color: #7de0b8; }
.bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}
.bottom-inner {
  padding-top: 20px !important;
  padding-bottom: 20px !important;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
}
.bottom-inner a {
  color: rgba(255, 255, 255, 0.45);
  text-decoration: none;
}
.bottom-inner a:hover { color: #7de0b8; }

@media (max-width: 900px) {
  .container { grid-template-columns: 1fr; gap: 32px; }
  .links-group { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 480px) {
  .links-group { grid-template-columns: 1fr; }
}
</style>
