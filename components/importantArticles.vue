<template>
	<section class="section-padding">
		<div class="container thin-content">
			<h2 class="t2 text-center text-black mt-3 mb-5">
				The Most Useful Articles
				<span class="text-nowrap">For You Right Now</span>
			</h2>
			<div id="featuredArticles">
				<div class="article-card" v-for="article in sortedArticles" :key="article.slug" :id="article.slug">
					<NuxtLink :to="article.articlePath" class="text-decoration-none" >
						<img :src="`/img/articles/${article.imagePath}`" alt="">
						<h2 class="intro-heading">{{article.title}}</h2>
					</NuxtLink>
					<hr>
					<p>{{article.summary}}</p>
				</div>
			</div>
			<div class="d-flex flex-column justify-content-center mt-5 thinnest-content">
				<NuxtLink class="btn mb-3" to="/subscribe">Subscribe for weekly updates</NuxtLink>
				<NuxtLink v-if="route.path !== '/articles'" class="btn" to="/articles">Browse more articles</NuxtLink>
			</div>
		</div>
	</section>
</template>
<script setup lang="ts">
import Articles from "assets/articlesList.json"
const route = useRoute()
// featured articles
let sortedArticles = []

for (let i in Articles) {
	let article = Articles[i];
	if (article.featured && article.rank !== 0) {
		article.articlePath = '/articles/' + article.slug;
		if (article.image) {
			article.imagePath = article.image;
		}
		sortedArticles.push(article);
	}
}

sortedArticles.sort((a, b) => a.rank - b.rank);
</script>