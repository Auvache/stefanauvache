<template>
	<section class="section-padding">
		<div class="container thinnest-content">
			<div>
				<h1 class="text-sm-center mb-4">{{pageCategory}}</h1>
				<p>It is easy to find yourself wandering without direction. We get so caught up in our day to day lives that we forget why we do the things we do. Intentional living is at the heart of fulfillment and satisfaction. It requires conscious choices and disciplined habits.</p>

				<p>With the articles on this page, I try to answer questions about intention like:</p>

				<ul>
					<li><em>How can I set clear and achievable goals?</em></li>
					<li><em>How can I make more intentional decisions?</em></li>
					<li><em>How can I build habits that support intentional living?</em></li>
				</ul>

				<p>Studying how professionals answer these questions in their work has helped me find tools to do the same in my life.</p>

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

const pageCategory = "How can I act with more intention?";
const articlesList = ref([]);
articlesList.value = Articles.filter(article => {
	return Array.isArray(article.categories)
			&& article.categories.some(c => c.trim().toLowerCase() === pageCategory.trim().toLowerCase());
});

// meta tags
let metaTitle = 'Act with Intention | Stefan Auvache'
let metaDescription = 'Explore strategies to live deliberately, make intentional choices, and align daily actions with long-term goals.'
let metaKeywords = 'intentional living, deliberate action, conscious choices, mindful productivity, intentional habits, focus and clarity'
let metaCanonical = 'www.stefanauvache.com/articles/act-with-intention'

useSeoMeta({title: metaTitle, ogTitle: metaTitle, description: metaDescription, ogDescription: metaDescription, keywords: metaKeywords, canonical: metaCanonical})
</script>