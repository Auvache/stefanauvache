<template>
  <section class="section-padding bg-black-denim vh-100 d-flex align-items-center">
    <div class="container thin-content">
      <h1 class="text-center text-white mt-3 mb-4">Stefan Auvache</h1>
	    <div class="d-flex flex-wrap justify-content-center mb-4 button-bar gap-3">
		    <NuxtLink
				    v-for="tab in tabs"
				    :key="tab.id"
				    :to="tab.route"
				    class="btn btn-outline-primary text-center"
		    >
			    {{ tab.label }}
		    </NuxtLink>
	    </div>
    </div>
  </section>
</template>

<script setup>
definePageMeta({
	layout: 'main'
})

import { useRoute } from 'vue-router'

const route = useRoute()

const tabs = [
	{ id: 'section1', label: 'I Want to Be Yours and Other Songs', route: '/music' },
	{ id: 'section2', label: 'Featured Articles', route: '/articles' },
]

// meta tags
let metaTitle = 'Stefan Auvache'
let metaDescription = 'Stefan Auvache is a musician and writer'
let metaKeywords = 'Stefan, Stefan Auvache, Auvache, articles, songs, technology, tech, books, lifelong learning, food for thought, music, I Want to Be Yours and Other Songs, I Want to Be Yours, Stefan Auvache artist'
let metaCanonical = 'www.stefanauvache.com'
useSeoMeta({title: metaTitle, ogTitle: metaTitle, description: metaDescription, ogDescription: metaDescription, keywords: metaKeywords, canonical: metaCanonical})
</script>

<style scoped lang="scss">
body,html {
	margin: 0;
	padding: 0;
	border: none;
	scroll-padding-top: 0;
	background-color: #000;
}
.button-bar .btn {
	background: transparent;
	color: #fff;
	border: 1px solid white;
	border-radius: 0.5rem;

	&:hover {
		text-decoration: none;
		background: #fff;
		color: #000;
	}
}
</style>