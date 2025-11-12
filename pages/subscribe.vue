<template>
  <section id="subscribe" class="section-padding bg-black-denim">
	  <div class="container thin-content text-center fade-in">
		  <div>
			  <div class="text-white text-balanced" style="margin-bottom: -2.5rem;">
				  <h1 class="my-2 huge">One Email, One Idea, Every Week</h1>
				  <p class="h2 fw-lighter">Learn how to apply the tools and strategies used by top professionals to boost your productivity, live with more intention, and be more fulfilled.</p>
			  </div>
			  <div>
				  <div class="subscribe d-flex flex-column flex-sm-row justify-content-center align-items-center text-white" style="min-height: 200px;">
					  <component is="script" data-variant="light" async data-uid="0396ab84d5" src="https://stefan-bradley.ck.page/0396ab84d5/index.js"></component>
				  </div>
			  </div>
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