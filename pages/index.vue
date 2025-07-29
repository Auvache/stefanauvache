<template>
	<h1 class="ada-hide">Articles by Stefan Auvache</h1>
	<SubscribeBar />
	<ImportantArticles />
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
definePageMeta({
	layout: 'no-footer'
})

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