<template>
	<section class="section-padding">
		<div class="container thinnest-content">
			<div>
				<h1 class="text-sm-center mb-4">Articles</h1>

				<p>
					The most useful way that I’ve found to approach self-improvement is to step back and ask big questions like:
				</p>

				<ul class="list-unstyled">
					<li>
						<NuxtLink to="/articles/purpose-and-meaning">
							How can I find purpose and meaning?
						</NuxtLink>
					</li>
					<li>
						<NuxtLink to="/articles/live-with-intention">
							How can I act with more intention?
						</NuxtLink>
					</li>
					<li>
						<NuxtLink to="/articles/stay-motivated-productive">
							How can I stay motivated and productive?
						</NuxtLink>
					</li>
					<li>
						<NuxtLink to="/articles/learn-improve-skills">
							How can I learn and improve my skills?
						</NuxtLink>
					</li>
					<li>
						<NuxtLink to="/articles/practical-tools-frameworks">
							What practical tools and frameworks can help me improve?
						</NuxtLink>
					</li>
					<li>
						<NuxtLink to="/articles/reading-self-improvement">
							What should I read to better myself?
						</NuxtLink>
					</li>
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
							<li v-for="article in articles.slice(0,3)">
								<NuxtLink :to="'/articles/' + article.slug">{{article.title}}</NuxtLink>
							</li>
						</ul>
						<NuxtLink :to="`/articles/${categorySlugs[category]}`">See more articles...</NuxtLink>
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
const categorySlugs = {
	"How can I find purpose and meaning?": "purpose-and-meaning",
	"How can I act with more intention?": "live-with-intention",
	"How can I stay motivated and productive?": "stay-motivated-productive",
	"How can I learn and improve skills?": "learn-improve-skills",
	"What practical tools and frameworks can help me improve?": "practical-tools-frameworks",
	"What should I read to better myself?": "reading-self-improvement"
};
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