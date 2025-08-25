<template>
	<section class="section-padding">
		<div class="container thinnest-content">
			<div>
				<h1 class="text-sm-center mb-4">Articles</h1>

				<p>
					Personal growth can be an overwhelming topic to tackle. There are so many books, frameworks, and voices offering advice that it’s hard to know where to begin.
					The most useful way that I’ve found to approach self-improvement is to step back and ask big questions.
				</p>

				<p>
					This page is organized around some of those questions:
				</p>

				<ul>
					<li>How can I find purpose and meaning?</li>
					<li>How can I act with more intention?</li>
					<li>How can I stay motivated and productive?</li>
					<li>How can I learn and improve my skills?</li>
					<li>What practical tools and frameworks can help me improve?</li>
					<li>What should I read to better myself?</li>
				</ul>

				<p>
					Each section below shows a collection of articles that approach these questions from various angles.
					They draw on lessons from software engineering, business, and my personal experiences.
				</p>

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
	"How can I find purpose and meaning?",
	"How can I act with more intention?",
	"How can I stay motivated and productive?",
	"How can I learn and improve skills?",
	"What practical tools and frameworks can help me improve?",
	"What should I read to better myself?"
];
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