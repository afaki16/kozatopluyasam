<template>
  <nav class="navbar" :class="{ scrolled: isScrolled }">
    <div class="container">

      <a href="#" class="logo">
        <img src="/logo.png" alt="Koza Toplu Yaşam" class="logo-img" />
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
  </nav>

  <Teleport to="body">
    <div v-if="menuOpen" class="mo" @click.self="menuOpen = false">
      <div class="mo-panel">

        <div class="mo-head">
          <img src="/logo.png" class="mo-logo" alt="" />
          <button class="mo-x" @click="menuOpen = false">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        <nav class="mo-nav">
          <a href="#hizmetler" @click="menuOpen = false"><span>01</span>Hizmetlerimiz</a>
          <a href="#neden-biz"  @click="menuOpen = false"><span>02</span>Neden Koza?</a>
          <a href="#dahil"      @click="menuOpen = false"><span>03</span>Paket İçeriği</a>
          <a href="#iletisim"   @click="menuOpen = false"><span>04</span>Bize Ulaşın</a>
        </nav>


      </div>
    </div>
  </Teleport>
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

/* hamburger */
.menu-toggle { display: none; flex-direction: column; justify-content: center; align-items: center; gap: 5px; background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.2); border-radius: 10px; cursor: pointer; width: 44px; height: 44px; flex-shrink: 0; padding: 0; transition: background 0.2s; }
.navbar.scrolled .menu-toggle { background: #eaf5f1; border-color: #c8e8da; }
.menu-toggle span { display: block; height: 2px; border-radius: 2px; background: #fff; transition: transform 0.3s, opacity 0.2s, background 0.35s; }
.menu-toggle span:nth-child(1) { width: 18px; }
.menu-toggle span:nth-child(2) { width: 12px; }
.menu-toggle span:nth-child(3) { width: 18px; }
.navbar.scrolled .menu-toggle span { background: #177a5e; }
.menu-toggle.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.menu-toggle.open span:nth-child(2) { opacity: 0; }
.menu-toggle.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* ── MOBİL OVERLAY ── */
.mo {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0,0,0,0.5);
}
.mo-panel {
  position: absolute;
  top: 0; right: 0; bottom: 0;
  width: 100%;
  background: #061811;
  padding: 24px 28px 40px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 0;
}

.mo-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 24px;
  border-bottom: 1px solid rgba(255,255,255,0.08);
  margin-bottom: 8px;
}
.mo-logo { height: 50px; width: auto; }
.mo-x { background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.12); border-radius: 10px; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; cursor: pointer; color: #fff; flex-shrink: 0; }
.mo-x svg { width: 18px; height: 18px; }

.mo-nav { display: flex; flex-direction: column; margin-bottom: 32px; }
.mo-nav a { display: flex; align-items: center; gap: 16px; padding: 20px 0; border-bottom: 1px solid rgba(255,255,255,0.06); text-decoration: none; }
.mo-nav a span { font-size: 11px; font-weight: 700; color: #7de0b8; letter-spacing: 1px; min-width: 24px; }
.mo-nav a { font-size: 22px; font-weight: 700; color: #fff; }
.mo-nav a:hover { padding-left: 6px; }


@media (max-width: 900px) {
  .container { padding: 0 24px; height: 90px; gap: 0; justify-content: space-between; }
  .nav-links { display: none; }
  .nav-right { display: none; }
  .menu-toggle { display: flex; }
  .logo-img { height: 82px; filter: drop-shadow(0 2px 10px rgba(0,0,0,0.32)); }
  .navbar.scrolled .logo-img { height: 74px; filter: drop-shadow(0 1px 6px rgba(0,0,0,0.15)); }
}
</style>
