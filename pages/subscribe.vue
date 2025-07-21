<template>
  <section id="subscribe" class="section-padding bg-black-denim">
    <div class="container thinnest-content text-center">
	    <h1 class="white fst-italic">Get timeless principles for modern life, once a week, directly to your inbox.<br>
		    Subscribe to <span class="fw-bold fst-italic">Food For Thought</span> today.</h1>
      <div class="subscribe d-flex flex-column flex-sm-row justify-content-center align-items-center mb-3">
        <component is="script" async data-uid="0396ab84d5" src="https://stefan-bradley.ck.page/0396ab84d5/index.js"></component>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'no-footer'
})

// meta tags
let metaTitle = 'Stefan Auvache | Subscribe to Food for Thought'
let metaDescription = 'Subscribe to my Food For Thought newsletter for the latest updates, exclusive content, and special offers delivered straight to your inbox. Stay informed and never miss out. Join the community today'
let metaKeywords = 'Stefan, Stefan Auvache, Auvache, subscribe, newsletter, email list, Food For Thought, articles, business, technology, literature, philosophy, music, lifelong learning'
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