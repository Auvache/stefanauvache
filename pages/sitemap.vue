<template>
  <section class="section-padding">
    <div class="container thinnest-content">
      <div class="d-flex flex-column">
        <h1>Sitemap</h1>
        <ul class="list-unstyled d-inline-block mb-5">
          <li><NuxtLink to="/about">About Stefan Auvache</NuxtLink></li>
          <li><NuxtLink to="/articles">Featured articles</NuxtLink></li>
          <li><NuxtLink to="/categories">Articles by category</NuxtLink></li>
          <li><NuxtLink to="/categories/agile-living">Articles about Agile Living</NuxtLink></li>
          <li><NuxtLink to="/categories/simple-systems">Articles about Simple Systems</NuxtLink></li>
          <li><NuxtLink to="/categories/intentional-action">Articles about Intentional Action</NuxtLink></li>
          <li><NuxtLink to="/categories/meaningful-focus">Articles about Meaningful Focus</NuxtLink></li>
          <li><NuxtLink to="/subscribe">Subscribe to newsletter</NuxtLink></li>
          <li><NuxtLink to="/contact">Reach out</NuxtLink></li>
        </ul>
	      <h2 class="t1">Articles</h2>
	      <ul class="list-unstyled">
		      <li v-for="article in sortedArticles" :key="article.slug" :id="article.slug">
			      <NuxtLink :to="article.articlePath">{{article.title}}</NuxtLink>

		      </li>
	      </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import Articles from "assets/articlesList.json"
import sortByKey from "~/functions/sortByKey.js";

// featured articles
let sortedArticles = []
for (let i in Articles) {
	Articles[i].articlePath = '/articles/' + Articles[i].slug
	if (Articles[i].image) {
		Articles[i].imagePath = Articles[i].image
	}
	sortedArticles.push(Articles[i])
}

sortedArticles = sortByKey(Articles, "title", "atoz")
// meta tags
let metaTitle = 'Stefan Auvache | Sitemap'
let metaDescription = 'Sitemap for Stefan Auvache'
let metaKeywords = 'Stefan, Stefan Auvache, Auvache, sitemap'
let metaCanonical = 'www.stefanauvache.com/sitemap'
useSeoMeta({title: metaTitle, ogTitle: metaTitle, description: metaDescription, ogDescription: metaDescription, keywords: metaKeywords, canonical: metaCanonical})
</script>