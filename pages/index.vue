<template>
	<h1 class="ada-hide">Articles by Stefan Auvache</h1>
	<SubscribeBar />
	<section class="section-padding">
		<div class="container thin-content">
			<h1 class="t2 text-center text-black mt-3 mb-5">
				The Most Useful Articles
				<span class="text-nowrap">For You Right Now</span>
			</h1>
			<div id="featuredArticles">
				<div class="article-card" v-for="article in sortedArticles" :key="article.slug" :id="article.slug">
					<NuxtLink :to="article.articlePath" class="text-decoration-none" >
						<img :src="`/img/articles/${article.imagePath}`" alt="">
						<h2 class="intro-heading">{{article.title}}</h2>
					</NuxtLink>
					<hr>
					<p>{{article.summary}}</p>
				</div>
			</div>
			<div class="d-flex flex-column justify-content-center mt-5 thinnest-content">
				<NuxtLink class="btn mb-3" to="/subscribe">Subscribe for weekly updates</NuxtLink>
				<NuxtLink class="btn" to="/articles">Browse more articles</NuxtLink>
			</div>

		</div>
	</section>
	<About />
</template>

<script setup lang="ts">
import Articles from "assets/articlesList.json"
import sortByKey from "~/functions/sortByKey.js";

// featured articles
let sortedArticles = []
for (let i in Articles) {
	if (Articles[i].featured) {
		Articles[i].articlePath = '/articles/' + Articles[i].slug
		if (Articles[i].image) {
			Articles[i].imagePath = Articles[i].image
		}
		sortedArticles.push(Articles[i])
	}
}

// latest articles
// let sortedArticles = sortByKey(Articles, "datePublished", "ztoa")

// sortedArticles = sortedArticles.slice(0,5)
definePageMeta({
	layout: 'no-footer'
})

// meta tags
let metaTitle = 'Stefan Auvache | Newsletter, Articles, and More'
let metaDescription = 'Stay up to date with the Food For Thought newsletter, exclusive content, and special offers delivered straight to your inbox. Stay informed and never miss out. Join the community today'
let metaKeywords = 'Stefan, Stefan Auvache, Auvache, subscribe, newsletter, email list, Food For Thought, articles, business, technology, literature, philosophy, music, lifelong learning'
let metaCanonical = 'www.stefanauvache.com'
useSeoMeta({title: metaTitle, ogTitle: metaTitle, description: metaDescription, ogDescription: metaDescription, keywords: metaKeywords, canonical: metaCanonical})
</script>

<style lang="scss" scoped>
h1 {
	margin-bottom: -1rem;
}
</style>