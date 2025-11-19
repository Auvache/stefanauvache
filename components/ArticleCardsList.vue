<template>
	<section class="py-3">
		<div class="container thin-content px-0">
			<h2 class="ada-hide">Articles</h2>
			<div id="featuredArticles">
				<div class="article-card" v-for="article in sortedArticles" :key="article.slug" :id="article.slug">
					<NuxtLink :to="`/articles/${article.slug}`" class="text-decoration-none" >
						<img :src="`/img/articles/${article.image}`" alt="">
						<h2 class="intro-heading">{{article.title}}</h2>
					</NuxtLink>
					<p>{{article.summary}}</p>
				</div>
			</div>
		</div>
	</section>
</template>
<script setup lang="ts">
import Articles from "assets/articlesList.json"
const props = defineProps({
	slugs: Array
})
const route = useRoute()
// featured articles
let sortedArticles = []
console.log(props.slugs)
function getArticlesBySlugs(slugsToFind) {
	return slugsToFind
	.map(slug => Articles.find(article => article.slug === slug))
	.filter(article => article !== undefined); // Remove any not found
}

sortedArticles = getArticlesBySlugs(props.slugs)
</script>