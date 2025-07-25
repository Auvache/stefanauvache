<template>
  <section id="subscribe" class="section-padding bg-black-denim">
    <div class="container thinnest-content text-center text-white fst-italic">
	    <h1 class="mb-4">Thanks for subscribing!</h1>
	    <p>You should receive a welcome email shortly.</p>
	    <p>If you don't see it in your inbox, please check your spam or promotions folder and mark it as "Not Spam" so you don't miss future updates.</p>
	    <NuxtLink class="btn btn-white mt-4" to="/articles">Start reading now</NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'no-footer'
})

// meta tags
let metaTitle = 'Stefan Auvache | Thank You'
let metaDescription = 'Thank you for subscribing to my Food For Thought newsletter for the latest updates, exclusive content, and special offers delivered straight to your inbox. Stay informed and never miss out. Join the community today'
let metaKeywords = 'Stefan, Stefan Auvache, Auvache, , thank you, subscribe, newsletter, email list, Food For Thought, articles, business, technology, literature, philosophy, music, lifelong learning'
let metaCanonical = 'www.stefanauvache.com/subscribe'
useSeoMeta({title: metaTitle, ogTitle: metaTitle, description: metaDescription, ogDescription: metaDescription, keywords: metaKeywords, canonical: metaCanonical})
</script>

<style lang="scss" scoped>
#subscribe {
  min-height: calc(100vh - 120px);

  h1 {
    margin-bottom: -1rem;
  }
}
</style>