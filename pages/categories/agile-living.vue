<template>
	<section class="section-padding">
		<div class="container thinnest-content">
			<div>
				<h1 class="text-sm-center mb-4">{{category}}</h1>
				<p>Life is unpredictable, and the ability to adapt quickly is essential. Agile Living is about embracing change through iterative learning and continuous feedback.</p>
				<p>These articles explore how applying agile principles—common in software and business—can help you become more flexible, resilient, and effective in your personal and professional life.</p>
				<hr>
				<div>
					<div>
						<h2>Articles</h2>
						<ul :id="`${category}-list`" class="list-unstyled">
							<li v-for="article in articlesList">
								<NuxtLink :to="'/articles/' + article.slug">{{article.title}}</NuxtLink>
							</li>
						</ul>
					</div>
				</div>

				<div class="d-flex flex-column flex-sm-row justify-content-center mt-5">
					<NuxtLink class="btn" to="/categories">Browse other categories</NuxtLink>
				</div>

			</div>
		</div>
	</section>
</template>

<script setup>
import {ref} from "vue";
import Articles from "assets/articlesList.json"

const category = ref("Agile Living & Iterative Development")
const articlesList = ref([])

for (let article in Articles) {
	if (Articles[article].categories.includes(category.value)) {
		articlesList.value.push(Articles[article])
	}
}
console.log(articlesList.value)

// meta tags
let metaTitle = 'Stefan Auvache | Articles about Agile Living & Iterative Development'
let metaDescription = 'Read articles with insights on business, technology, literature, philosophy, music, and life.'
let metaKeywords = 'Stefan, Stefan Auvache, Auvache, articles, agile living, agile, simple systems, intentional action, meaningful focus, Stefan Auvache articles'
let metaCanonical = 'www.stefanauvache.com/articles'
useSeoMeta({title: metaTitle, ogTitle: metaTitle, description: metaDescription, ogDescription: metaDescription, keywords: metaKeywords, canonical: metaCanonical})
</script>