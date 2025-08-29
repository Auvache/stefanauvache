<template>
	<section class="section-padding">
		<div class="container thinnest-content">
			<div>
				<h1 class="text-sm-center mb-4">{{pageCategory}}</h1>
				<p>Motivation and productivity are key to living a fulfilling life. The best software engineers and businesspeople use specific methods and philosophies to get things done efficiently and consistently.</p>

				<p>With these articles, I try to answer questions like:</p>

				<ul>
					<li><em>How can I stay committed to my long-term vision and avoid burnout?</em></li>
					<li><em>How can I stay motivated during hard times?</em></li>
					<li><em>How can I overcome procrastination?</em></li>
					<li><em>How can I set up an environment that boosts motivation and productivity?</em></li>
				</ul>

				<p>Check out the articles below for insights into how to stay motivated and productive.</p>

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

const pageCategory = "How can I stay motivated and productive?";
const articlesList = ref([]);
articlesList.value = Articles.filter(article => {
	return Array.isArray(article.categories)
			&& article.categories.some(c => c.trim().toLowerCase() === pageCategory.trim().toLowerCase());
});

// meta tags
let metaTitle = 'Stay Motivated and Productive | Stefan Auvache'
let metaDescription = 'Practical tools, systems, and ideas to maintain motivation, build discipline, and achieve more with less stress.'
let metaKeywords = 'motivation tips, productivity hacks, stay productive, build discipline, time management, focus, avoid procrastination'
let metaCanonical = 'www.stefanauvache.com/articles/stay-motivated-productive'

useSeoMeta({title: metaTitle, ogTitle: metaTitle, description: metaDescription, ogDescription: metaDescription, keywords: metaKeywords, canonical: metaCanonical})
</script>