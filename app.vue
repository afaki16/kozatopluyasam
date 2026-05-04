<script setup>
useHead({
  script: [
    {
      async: true,
      src: 'https://www.googletagmanager.com/gtag/js?id=G-NLD655BP4D'
    },
    {
      children: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-NLD655BP4D');
      `
    }
  ]
})
</script>

<template>
  <NuxtPage />
</template>