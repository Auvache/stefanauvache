<template>
	<section class="section-padding">
		<div class="container thin-content">
			<h1 class="t2 text-center text-black mt-3 mb-5">Featured Articles</h1>
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
			<div class="d-flex flex-column flex-sm-row justify-content-center mt-5">
				<NuxtLink to="/categories">Keep reading...</NuxtLink>
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

// meta tags
let metaTitle = 'Articles by Stefan Auvache'
let metaDescription = 'Education, both formal and personal, always changes lives for the better. Universal, practical life lessons lie waiting to be discovered in literature, business, technology, and even music.'
let metaKeywords = 'Stefan, Stefan Auvache, Auvache, articles, technology, tech, books, lifelong learning, food for thought'
let metaCanonical = 'www.stefanauvache.com/articles'
useSeoMeta({title: metaTitle, ogTitle: metaTitle, description: metaDescription, ogDescription: metaDescription, keywords: metaKeywords, canonical: metaCanonical})
</script>