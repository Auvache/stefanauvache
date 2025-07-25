<template>
	<section id="subscribe" class="section-padding bg-black-denim pb-0">
		<div class="container thin-content text-center">
			<h1 class="white fst-italic">Get timeless principles for modern life, once a week, directly to your inbox.<br>
				Subscribe to <span class="fw-bold fst-italic">Food For Thought</span> today.</h1>
			<div class="subscribe d-flex flex-column flex-sm-row justify-content-center align-items-center mb-3" style="min-height: 250px;">
				<component is="script" async data-uid="0396ab84d5" src="https://stefan-bradley.ck.page/0396ab84d5/index.js"></component>
			</div>
		</div>
	</section>
	<section class="section-padding">
		<div class="container thin-content">
			<h2 class="t2 text-center text-black mt-3 mb-5">Most Important Articles</h2>
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
				<NuxtLink class="text-center" to="/articles">Read more articles</NuxtLink>
			</div>
		</div>
	</section>
	<section class="section-padding bg-black-denim">
		<div class="container thinnest-content">
			<h2 class="text-white">About Stefan Auvache</h2>
			<hr class="white">
			<div class="text-white">
				<p>Modern times call for actionable principles.</p>
				<p>We’ve all worked hard for things we didn’t actually want. We’ve chased goals that looked good on paper but left us burned out or unfulfilled. How do we know what’s worth pursuing—before it’s too late?</p>
				<p>I believe the answers lie in how we work, plan, and focus. The same principles that power successful teams and organizations—agile development, strategic planning, systems thinking—can be used to build a more intentional, fulfilling life.</p>
				<p>My work is grounded in four pillars:</p>
				<ul class="list-unstyled text-white">
					<li><strong>Agile Living</strong> – Live iteratively. Adapt often. Learn from feedback.</li>
					<li><strong>Simple Systems</strong> – Build routines that empower ease and growth.</li>
					<li><strong>Intentional Action</strong> – Work deeply. Act deliberately. Find the right tools.</li>
					<li><strong>Meaningful Focus</strong> – Choose what matters. Ignore what doesn’t.</li>
				</ul>
				<p>These pillars help me avoid wasted effort, make better decisions, and stay focused on what actually matters. They can do the same for you.</p>
				<p>If you want practical insights rooted in modern disciplines—blended with timeless ideas from history, philosophy, and everyday experience—you’re in the right place.</p>
				<hr class="white">
				<ul class="list-unstyled">
					<li><NuxtLink class="link" to="/subscribe">Subscribe for weekly articles, directly to your inbox</NuxtLink></li>
					<li><NuxtLink to="/articles">See the articles most helpful for you today</NuxtLink></li>
					<li><NuxtLink to="/categories">Browse articles by category</NuxtLink></li>
					<li><NuxtLink to="/contact">Get in touch with me directly</NuxtLink></li>
				</ul>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import Articles from "assets/articlesList.json"

definePageMeta({
	layout: 'no-footer'
})

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

// meta tags
let metaTitle = 'Stefan Auvache | Newsletter, Articles, and More'
let metaDescription = 'Stay up to date with the Food For Thought newsletter, exclusive content, and special offers delivered straight to your inbox. Stay informed and never miss out. Join the community today'
let metaKeywords = 'Stefan, Stefan Auvache, Auvache, subscribe, newsletter, email list, Food For Thought, articles, business, technology, literature, philosophy, music, lifelong learning'
let metaCanonical = 'www.stefanauvache.com'
useSeoMeta({title: metaTitle, ogTitle: metaTitle, description: metaDescription, ogDescription: metaDescription, keywords: metaKeywords, canonical: metaCanonical})
</script>

<style lang="scss" scoped>
h1 {
	margin-bottom: -1rem;
}
</style>