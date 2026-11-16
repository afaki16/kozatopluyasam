<template>
  <nav class="navbar" :class="{ scrolled: isScrolled }">
    <div class="container">

      <a href="#" class="logo">
        <img src="/logo.png" alt="Koza Toplu Yaşam" class="logo-img" />
      </a>

      <ul class="nav-links">
        <li><a href="#neden-biz" @click.prevent="goToSection('neden-biz')">Neden Koza?</a></li>
        <li><a href="#hizmetler" @click.prevent="goToSection('hizmetler')">Hizmetlerimiz</a></li>
        <li><a href="#dahil" @click.prevent="goToSection('dahil')">Paket İçeriği</a></li>
        <li><a href="#iletisim" @click.prevent="goToSection('iletisim')">Bize Ulaşın</a></li>
      </ul>

      <div class="nav-right">
        <a href="tel:+905302264033" class="call-link" aria-label="0530 226 40 33 numarasını ara">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          <span>0530 226 40 33</span>
        </a>
        <a href="#iletisim" class="btn-cta">Hemen Teklif Alın</a>
        <a href="https://wa.me/905302264033?text=Merhaba%20profesyonel%20site%20yönetimi%20hakkında%20bilgi%20almak%20istiyorum." target="_blank" rel="noopener noreferrer" class="phone-link">
          0530 226 40 33
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
        </a>
      </div>

    </div>
  </nav>
</template>

<script setup>
const isScrolled = ref(false)

function goToSection(id) {
  const el = document.getElementById(id)
  if (!el) return

  const nav = document.querySelector('.navbar')
  const navbarOffset = nav ? nav.offsetHeight : 100
  const extraGap = 10
  const top = el.getBoundingClientRect().top + window.pageYOffset - navbarOffset - extraGap

  window.scrollTo({
    top,
    behavior: 'smooth'
  })
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 40
}

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* ── NAVBAR ── */
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  background: transparent;
  border-bottom: 1px solid transparent;
  overflow: visible;
  transition: background 0.35s, box-shadow 0.35s, border-color 0.35s;
}
.navbar.scrolled {
  background: rgba(255,255,255,0.97);
  backdrop-filter: blur(14px);
  border-bottom-color: #d4ece3;
  box-shadow: 0 2px 18px rgba(23,122,94,0.1);
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
  height: 100px;
  display: flex;
  align-items: center;
  gap: 48px;
}

/* logo */
.logo { display: flex; align-items: center; gap: 14px; text-decoration: none; flex-shrink: 0; }
.logo-img { height: 160px; width: auto; object-fit: contain; transition: height 0.3s; filter: drop-shadow(0 4px 20px rgba(0,0,0,0.3)); }
.navbar.scrolled .logo-img { height: 160px; filter: drop-shadow(0 2px 12px rgba(0,0,0,0.15)); }

/* nav links */
.nav-links { display: flex; list-style: none; gap: 4px; flex: 1; }
.nav-links a { font-size: 15px; color: rgba(255,255,255,0.9); text-decoration: none; padding: 8px 16px; border-radius: 7px; transition: color 0.35s, background 0.2s; font-weight: 500; }
.nav-links a:hover { color: #fff; background: rgba(255,255,255,0.14); }
.navbar.scrolled .nav-links a { color: #333; }
.navbar.scrolled .nav-links a:hover { color: #177a5e; background: #eaf5f1; }

/* right */
.nav-right { display: flex; align-items: center; gap: 20px; flex-shrink: 0; }
.btn-cta { background: #177a5e; color: #fff; padding: 9px 20px; border-radius: 7px; font-size: 13px; font-weight: 700; text-decoration: none; white-space: nowrap; transition: background 0.2s, transform 0.15s; }
.btn-cta:hover { background: #0e5941; transform: translateY(-1px); }
.phone-link { display: flex; align-items: center; gap: 5px; font-size: 15px; color: rgba(255,255,255,0.9); text-decoration: none; font-weight: 500; white-space: nowrap; transition: color 0.35s; }
.phone-link svg { width: 14px; height: 14px; opacity: 0.7; }
.phone-link:hover { color: #fff; }
.navbar.scrolled .phone-link { color: #333; }
.navbar.scrolled .phone-link:hover { color: #177a5e; }

/* mobil arama linki (masaüstünde gizli) */
.call-link { display: none; align-items: center; gap: 6px; font-size: 13px; font-weight: 600; color: #fff; text-decoration: none; white-space: nowrap; transition: color 0.35s; }
.call-link svg { width: 16px; height: 16px; flex-shrink: 0; }
.navbar.scrolled .call-link { color: #177a5e; }

@media (max-width: 900px) {
  .container {
    padding: 10px 16px 0;
    height: auto;
    flex-wrap: wrap;
    gap: 0;
    justify-content: space-between;
  }
  .logo { order: 1; }
  .logo-img { height: 64px; filter: drop-shadow(0 2px 10px rgba(0,0,0,0.32)); }
  .navbar.scrolled .logo-img { height: 56px; filter: drop-shadow(0 1px 6px rgba(0,0,0,0.15)); }

  .nav-right { order: 2; gap: 10px; }
  .phone-link { display: none; }
  .call-link { display: flex; }
  .btn-cta { padding: 8px 14px; font-size: 12px; }

  /* linkler logonun altında, sabit ve yatay kaydırılabilir */
  .nav-links {
    order: 3;
    flex: 0 0 100%;
    gap: 2px;
    margin: 6px -16px 0;
    padding: 0 12px 8px;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    justify-content: space-between;
  }
  .nav-links::-webkit-scrollbar { display: none; }
  .nav-links li { flex-shrink: 0; }
  .nav-links a { display: block; font-size: 13px; padding: 7px 10px; white-space: nowrap; }
}

@media (max-width: 380px) {
  .nav-links a { font-size: 12px; padding: 7px 8px; }
  .call-link { font-size: 12px; }
  .btn-cta { padding: 7px 10px; font-size: 11px; }
}

@media (max-width: 340px) {
  .call-link span { display: none; }
  .call-link svg { width: 20px; height: 20px; }
}
</style>
