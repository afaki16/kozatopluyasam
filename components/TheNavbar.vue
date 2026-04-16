<template>
  <nav class="navbar" :class="{ scrolled: isScrolled }">
    <div class="container">

      <a href="#" class="logo">
        <img src="/logo.png" alt="Koza Toplu Yaşam" class="logo-img" />
        <div class="logo-text">
          <strong>KOZA</strong>
          <span>Toplu Yaşam</span>
        </div>
      </a>

      <ul class="nav-links">
        <li><a href="#hizmetler">Hizmetlerimiz</a></li>
        <li><a href="#neden-biz">Neden Koza?</a></li>
        <li><a href="#dahil">Paket İçeriği</a></li>
        <li><a href="#iletisim">Bize Ulaşın</a></li>
      </ul>

      <div class="nav-right">
        <a href="#iletisim" class="btn-cta">Hemen Teklif Alın</a>
        <a href="tel:05302264033" class="phone-link">
          0530 226 40 33
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
        </a>
      </div>

      <button class="menu-toggle" @click="menuOpen = !menuOpen" :class="{ open: menuOpen }">
        <span /><span /><span />
      </button>
    </div>

    <div class="mobile-menu" :class="{ open: menuOpen }">
      <a href="#hizmetler" @click="menuOpen = false">Hizmetlerimiz</a>
      <a href="#neden-biz" @click="menuOpen = false">Neden Koza?</a>
      <a href="#dahil" @click="menuOpen = false">Paket İçeriği</a>
      <a href="#iletisim" @click="menuOpen = false">Bize Ulaşın</a>
    </div>
  </nav>
</template>

<script setup>
const isScrolled = ref(false)
const menuOpen = ref(false)

onMounted(() => {
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 40
  })
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: transparent;
  border-bottom: 1px solid transparent;
  transition: background 0.35s, box-shadow 0.35s, border-color 0.35s;
}
.navbar.scrolled {
  background: rgba(255, 255, 255, 0.97);
  backdrop-filter: blur(14px);
  border-bottom-color: #d4ece3;
  box-shadow: 0 2px 18px rgba(23, 122, 94, 0.1);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
  height: 88px;
  display: flex;
  align-items: center;
  gap: 48px;
}

/* LOGO */
.logo {
  display: flex;
  align-items: center;
  gap: 14px;
  text-decoration: none;
  flex-shrink: 0;
}
.logo-img {
  height: 76px;
  width: auto;
  object-fit: contain;
  transition: height 0.3s;
  filter: drop-shadow(0 2px 8px rgba(0,0,0,0.18));
}
.navbar.scrolled .logo-img {
  height: 62px;
  filter: none;
}
.logo-text {
  display: flex;
  flex-direction: column;
  line-height: 1.15;
  border-left: 2px solid rgba(255,255,255,0.3);
  padding-left: 14px;
  transition: border-color 0.35s;
}
.navbar.scrolled .logo-text {
  border-left-color: #d4ece3;
}
.logo-text strong {
  font-size: 22px;
  font-weight: 800;
  color: #fff;
  letter-spacing: 2px;
  transition: color 0.35s;
}
.navbar.scrolled .logo-text strong {
  color: #177a5e;
}
.logo-text span {
  font-size: 10px;
  color: rgba(255, 255, 255, 0.75);
  letter-spacing: 3px;
  text-transform: uppercase;
  font-weight: 500;
  transition: color 0.35s;
}
.navbar.scrolled .logo-text span {
  color: #3a9147;
}

/* NAV LINKS */
.nav-links {
  display: flex;
  list-style: none;
  gap: 4px;
  flex: 1;
}
.nav-links a {
  font-size: 15px;
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 7px;
  transition: color 0.35s, background 0.2s;
  font-weight: 500;
  letter-spacing: 0.2px;
}
.nav-links a:hover {
  color: #fff;
  background: rgba(255, 255, 255, 0.14);
}
.navbar.scrolled .nav-links a {
  color: #333;
}
.navbar.scrolled .nav-links a:hover {
  color: #177a5e;
  background: #eaf5f1;
}

/* RIGHT */
.nav-right {
  display: flex;
  align-items: center;
  gap: 20px;
  flex-shrink: 0;
}
.btn-cta {
  background: #177a5e;
  color: #fff;
  padding: 9px 20px;
  border-radius: 7px;
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;
  white-space: nowrap;
  transition: background 0.2s, transform 0.15s;
}
.btn-cta:hover {
  background: #0e5941;
  transform: translateY(-1px);
}
.phone-link {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 15px;
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  font-weight: 500;
  white-space: nowrap;
  transition: color 0.35s;
}
.phone-link svg {
  width: 14px;
  height: 14px;
  flex-shrink: 0;
  opacity: 0.7;
}
.phone-link:hover { color: #fff; }
.navbar.scrolled .phone-link { color: #333; }
.navbar.scrolled .phone-link:hover { color: #177a5e; }

/* HAMBURGER */
.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
  margin-left: auto;
  width: 38px;
  height: 38px;
}
.menu-toggle span {
  display: block;
  height: 2px;
  background: #fff;
  border-radius: 2px;
  transition: transform 0.3s, opacity 0.3s, background 0.35s;
  width: 24px;
}
.navbar.scrolled .menu-toggle span {
  background: #177a5e;
}
.menu-toggle.open span:nth-child(1) { transform: translateY(8px) rotate(45deg); }
.menu-toggle.open span:nth-child(2) { opacity: 0; }
.menu-toggle.open span:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }

/* MOBILE MENU */
.mobile-menu {
  display: none;
  flex-direction: column;
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.35s ease;
  background: rgba(255, 255, 255, 0.97);
  backdrop-filter: blur(14px);
  border-top: 1px solid transparent;
}
.mobile-menu.open {
  max-height: 300px;
  border-top-color: #d4ece3;
}
.mobile-menu a {
  font-size: 15px;
  color: #333;
  text-decoration: none;
  padding: 15px 28px;
  border-bottom: 1px solid #f0faf5;
  transition: background 0.15s, color 0.15s;
}
.mobile-menu a:hover {
  background: #f0faf5;
  color: #177a5e;
}

@media (max-width: 900px) {
  .nav-links { display: none; }
  .nav-right { display: none; }
  .menu-toggle { display: flex; }
  .mobile-menu { display: flex; }
}
@media (max-width: 480px) {
  .container { padding: 0 20px; height: 70px; }
  .logo-img { height: 54px; }
  .logo-text strong { font-size: 17px; }
}
</style>
