<template>
  <section class="section-padding">
    <div class="container thinnest-content">
      <div class="d-flex flex-column align-items-center">
        <h1 class="text-sm-center mb-4">Sitemap</h1>
        <ul class="list-unstyled d-inline-block">
          <li><NuxtLink to="/about">About Stefan Auvache</NuxtLink></li>
          <li><NuxtLink to="/all-articles">All articles</NuxtLink></li>
          <li><NuxtLink to="/articles">Featured articles</NuxtLink></li>
          <li><NuxtLink to="/music">Music</NuxtLink></li>
          <li><NuxtLink to="/subscribe">Subscribe</NuxtLink></li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
// meta tags
let metaTitle = 'Stefan Auvache | Sitemap'
let metaDescription = 'Sitemap for Stefan Auvache'
let metaKeywords = 'Stefan, Stefan Auvache, Auvache, sitemap'
let metaCanonical = 'www.stefanauvache.com/sitemap'
useSeoMeta({title: metaTitle, ogTitle: metaTitle, description: metaDescription, ogDescription: metaDescription, keywords: metaKeywords, canonical: metaCanonical})
</script>