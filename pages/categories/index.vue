<template>
	<section class="section-padding">
		<div class="container thinnest-content">
			<div>
				<h1 class="text-sm-center mb-4">Articles</h1>

				<p>
					Here’s a curated collection of my best writing, organized by theme. Want to learn how to
					<NuxtLink to="/categories/agile-living">apply principles of Agile Living</NuxtLink>,
					<NuxtLink to="/categories/simple-systems">build simple systems for productivity and fulfillment</NuxtLink>,
					<NuxtLink to="/categories/intentional-action">act with intention</NuxtLink>, or
					<NuxtLink to="/categories/meaningful-focus">focus on what matters most</NuxtLink>?
				</p>
				<p>You’ll find something here worth exploring.</p>

				<hr>

				<div>
					<div v-for="(articles, category) in articlesList">
						<h2 class="text-black">{{category}}</h2>
						<ul :id="`${category.toLowerCase().replaceAll(' ','-')}-list`" class="list-unstyled">
							<li v-for="article in articles">
								<NuxtLink :to="'/articles/' + article.slug">{{article.title}}</NuxtLink>
							</li>
						</ul>
					</div>
				</div>

			</div>
		</div>
	</section>
</template>

<script setup>
import {ref} from "vue";
import Articles from "assets/articlesList.json"

const categories = [
	"Agile Living & Iterative Development",
	"Systems & Habits",
	"Intentional Action",
	"Meaningful Focus"
]
const articlesList = ref({})
categories.forEach(category => {
	articlesList.value[category] = []
})

categories.forEach(category => {
	for (let article in Articles) {
		if (Articles[article].categories.includes(category)) {
			articlesList.value[category].push(Articles[article])
		}
	}
})

// meta tags
let metaTitle = 'Stefan Auvache | Articles'
let metaDescription = 'Read articles with insights on business, technology, literature, philosophy, music, and life.'
let metaKeywords = 'Stefan, Stefan Auvache, Auvache, articles, agile living, agile, simple systems, intentional action, meaningful focus, Stefan Auvache articles'
let metaCanonical = 'www.stefanauvache.com/articles'
useSeoMeta({title: metaTitle, ogTitle: metaTitle, description: metaDescription, ogDescription: metaDescription, keywords: metaKeywords, canonical: metaCanonical})
</script>