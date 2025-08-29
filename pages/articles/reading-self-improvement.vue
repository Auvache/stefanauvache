<template>
	<section class="section-padding">
		<div class="container thinnest-content">
			<div>
				<h1 class="text-sm-center mb-4">{{pageCategory}}</h1>
				<p>No habit has changed my life more than reading.</p>
				<p>Check out the articles to see the books that I find most important and how reading can help you become a better person.</p>

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

const pageCategory = "What should I read to better myself?";
const articlesList = ref([]);
articlesList.value = Articles.filter(article => {
	return Array.isArray(article.categories)
			&& article.categories.some(c => c.trim().toLowerCase() === pageCategory.trim().toLowerCase());
});

// meta tags
let metaTitle = 'What to Read for Self-Improvement | Stefan Auvache'
let metaDescription = 'Recommended reading lists and book insights on business, philosophy, literature, and self-improvement.'
let metaKeywords = 'self improvement books, best books to read, personal development reading, philosophy books, productivity books, book recommendations'
let metaCanonical = 'www.stefanauvache.com/articles/reading-self-improvement'

useSeoMeta({title: metaTitle, ogTitle: metaTitle, description: metaDescription, ogDescription: metaDescription, keywords: metaKeywords, canonical: metaCanonical})
</script>