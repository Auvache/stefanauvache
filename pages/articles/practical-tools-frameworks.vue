<template>
	<section class="section-padding">
		<div class="container thinnest-content">
			<div>
				<h1 class="text-sm-center mb-4">{{pageCategory}}</h1>
				<p>Every productive professional—from software engineers and project managers to entrepreneurs and authors—has a set of tools and systems they use to operate efficiently. Professional-grade tools like Agile development, postmortems, feedback loops, and deep work can all be used to enrich and improve your personal life.</p>
				<p>Check out the articles below for insights into practical, professional tools and how you can use them in your own personal growth.</p>

				<hr>

				<div>
					<div>
						<ul class="list-unstyled">
							<li v-for="article in articlesList" :key="article.slug">
								<NuxtLink :to="'/articles/' + article.slug">{{ article.title }}</NuxtLink>
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

const pageCategory = "What practical tools and frameworks can help me improve?";
const articlesList = ref([]);
articlesList.value = Articles.filter(article => {
	return Array.isArray(article.categories)
			&& article.categories.some(c => c.trim().toLowerCase() === pageCategory.trim().toLowerCase());
});

// meta tags
let metaTitle = 'Practical Tools and Frameworks | Stefan Auvache'
let metaDescription = 'Explore practical tools, systems, and frameworks from business, technology, and philosophy that improve everyday life.'
let metaKeywords = 'practical tools, productivity frameworks, self improvement systems, agile methods, life frameworks, personal development tools'
let metaCanonical = 'https://www.stefanauvache.com/articles/practical-tools-frameworks'

useSeoMeta({title: metaTitle, ogTitle: metaTitle, description: metaDescription, ogDescription: metaDescription, keywords: metaKeywords, canonical: metaCanonical, robots: 'index, follow'})
</script>