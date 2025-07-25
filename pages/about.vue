<template>
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

<script setup>
// meta tags
let metaTitle = 'Stefan Auvache | About'
let metaDescription = 'Education, both formal and personal, always changes lives for the better. Universal, practical life lessons lie waiting to be discovered in literature, business, technology, and even music.'
let metaKeywords = 'Stefan, Stefan Auvache, Auvache, about, articles, agile living, agile, simple systems, intentional action, meaningful focus, Stefan Auvache articles'
let metaCanonical = 'www.stefanauvache.com/about'
useSeoMeta({title: metaTitle, ogTitle: metaTitle, description: metaDescription, ogDescription: metaDescription, keywords: metaKeywords, canonical: metaCanonical})
</script>
