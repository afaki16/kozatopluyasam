<template>
  <section id="neden-biz" class="why">
    <div class="container">
      <div class="header">
        <div class="section-tag">Neden Koza?</div>
        <h2>Çözüm için doğru seçim</h2>
        <p class="section-sub">Profesyonel yönetimin size kattığı farklar.</p>
      </div>

      <div class="grid">
        <div v-for="item in items" :key="item.num" class="card">
          <div class="card-img">
            <img :src="item.img" :alt="item.title" />
            <div class="card-num">{{ item.num }}</div>
          </div>
          <div class="card-body">
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const items = [
  {
    num: '01',
    title: 'Kat Mülkiyeti Kanunu Uyumu',
    desc: 'Tüm süreçler yasal mevzuata uygun, eksiksiz biçimde yürütülür.',
    img: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=600&q=80',
  },
  {
    num: '02',
    title: 'Şeffaf Mali Raporlama',
    desc: 'Aylık gelir-gider raporları düzenli olarak sakinlerle paylaşılır.',
    img: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=80',
  },
  {
    num: '03',
    title: 'Özel Aidat Takip Sistemi',
    desc: 'Dijital takip programıyla gecikme ve kayıp sıfırlanır.',
    img: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&q=80',
  },
  {
    num: '04',
    title: 'Deneyimli Ekip',
    desc: 'Alanında uzman, sertifikalı ve deneyimli yönetim kadrosu.',
    img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80',
  },
  {
    num: '05',
    title: 'Hızlı Müdahale',
    desc: 'Arıza ve acil durumlarda 7/24 ulaşılabilir ekip garantisi.',
    img: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80',
  },
  {
    num: '06',
    title: 'Tek Noktadan Yönetim',
    desc: 'Tüm hizmetler tek çatı altında, tek muhatap ile sorunsuz yürür.',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80',
  },
]
</script>

<style scoped>
.why {
  padding: 96px 24px;
  background: #fff;
}
.container {
  max-width: 1100px;
  margin: 0 auto;
}
.header {
  text-align: center;
  margin-bottom: 56px;
}
.section-tag {
  font-size: 11px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #1e9470;
  font-weight: 700;
  margin-bottom: 10px;
}
h2 {
  font-size: 34px;
  font-weight: 900;
  color: #0d4a35;
  margin-bottom: 10px;
  line-height: 1.2;
}
.section-sub {
  font-size: 16px;
  color: #777;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.card {
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid #c8e8d8;
  background: #fff;
  transition: transform 0.2s, box-shadow 0.2s;
}
.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 40px rgba(23, 122, 94, 0.12);
}

.card-img {
  position: relative;
  height: 200px;
  overflow: hidden;
}
.card-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}
.card:hover .card-img img {
  transform: scale(1.06);
}
.card-img::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, transparent 40%, rgba(13, 74, 53, 0.55) 100%);
}

.card-num {
  position: absolute;
  top: 14px;
  left: 16px;
  z-index: 1;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1px;
  color: #fff;
  background: #177a5e;
  padding: 4px 10px;
  border-radius: 20px;
}

.card-body {
  padding: 20px 22px 24px;
}
h3 {
  font-size: 15px;
  font-weight: 700;
  color: #0d4a35;
  margin-bottom: 8px;
  line-height: 1.3;
}
p {
  font-size: 13px;
  color: #777;
  line-height: 1.65;
}

@media (max-width: 900px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
  h2 { font-size: 28px; }
}
@media (max-width: 520px) {
  .grid { grid-template-columns: 1fr; }
}
</style>
