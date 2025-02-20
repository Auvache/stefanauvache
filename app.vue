<template>
  <div>
    <NuxtLayout>
      <div>
        <NuxtPage />
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import '@/scss/_global.scss'

// meta tags
let title = 'Welcome | Stefan Auvache'
let description = 'This Site Belongs to Stefan Auvache.'
let metaKeywords = 'Stefan, Stefan Auvache, Auvache, articles, technology, tech, books, lifelong learning, food for thought'
useSeoMeta({
  title: title,
  ogTitle: title,
  description: description,
  ogDescription: description,
  keywords: metaKeywords,
  // ogImage: '',
  // twitterCard: 'summary_large_image',
})
</script>