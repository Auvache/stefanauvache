<template>
	<section class="section-padding">
		<div class="container thinnest-content">
			<div>
				<h1 class="text-sm-center mb-4">{{pageCategory}}</h1>
				<p>Questions about finding fulfillment, purpose, and meaning in the various parts of your life can be daunting to ask.</p>

				<ul>
					<li><em>How can I find a fulfilling career?</em></li>
					<li><em>How can I find a sense of purpose in my relationships or in my work?</em></li>
					<li><em>How can I live a meaningful life?</em></li>
				</ul>

				<p>These may be some of the most important questions you will ever ask yourself. It is difficult to define success without first defining meaning and fulfillment.</p>

				<p>Here are some articles I have written to try to gain some insight into these big questions.</p>
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

const pageCategory = "How can I find purpose and meaning?";
const articlesList = ref([]);
articlesList.value = Articles.filter(article => {
	return Array.isArray(article.categories)
			&& article.categories.some(c => c.trim().toLowerCase() === pageCategory.trim().toLowerCase());
});

// meta tags
let metaTitle = 'Find Purpose and Meaning | Stefan Auvache'
let metaDescription = 'Discover practical insights and timeless wisdom on finding purpose, meaning, and direction in life.'
let metaKeywords = 'purpose in life, finding meaning, life direction, fulfillment, meaningful living, self discovery, philosophy of purpose'
let metaCanonical = 'https://www.stefanauvache.com/articles/find-purpose-meaning'
useSeoMeta({title: metaTitle, ogTitle: metaTitle, description: metaDescription, ogDescription: metaDescription, keywords: metaKeywords, canonical: metaCanonical, robots: 'index, follow'})
</script>