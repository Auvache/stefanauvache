<template>
	<section class="section-padding">
		<div class="container thinnest-content">
			<div>
				<h1 class="text-sm-center mb-4">{{pageCategory}}</h1>
				<p>Skill development is a key element of competence. Becoming more competent is a path that leads to productivity, enjoyment, and fulfillment. This goes not just in your work, but in your life.</p>
				<p>In this section, I look at questions like:</p>
				<ul>
					<li><em>How do I know which skills to improve?</em></li>
					<li><em>How do I handle criticism and feedback?</em></li>
					<li><em>How can I improve my problem-solving abilities?</em></li>
					<li><em>How can I measure my progress in learning or skill development?</em></li>
				</ul>
				<p>Check out the articles below for insights into how to learn and improve your skills.</p>
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

const pageCategory = "How can I learn and improve skills?";
const articlesList = ref([]);
articlesList.value = Articles.filter(article => {
	return Array.isArray(article.categories)
			&& article.categories.some(c => c.trim().toLowerCase() === pageCategory.trim().toLowerCase());
});

// meta tags
let metaTitle = 'Learn and Improve Your Skills | Stefan Auvache'
let metaDescription = 'Guides and insights on continuous learning, skill development, and mastering new abilities through small steps.'
let metaKeywords = 'learn new skills, self improvement, skill development, continuous learning, mastery, growth mindset, lifelong learning'
let metaCanonical = 'www.stefanauvache.com/articles/learn-improve-skills'

useSeoMeta({title: metaTitle, ogTitle: metaTitle, description: metaDescription, ogDescription: metaDescription, keywords: metaKeywords, canonical: metaCanonical})
</script>