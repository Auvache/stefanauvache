<template>
  <section class="section-padding">
    <div class="container thinnest-content">
      <div>
        <h1 class="text-sm-center mb-4">In pursuit of personal betterment</h1>
        <p>When I found out that I was going to be a dad, my life changed forever.</p>
        <p>I realized that a little person was going to watch my every move, and that I needed to start acting with more intention. We influence those around us with our actions. If we are to influence the world for good, we must start by being good ourselves.</p>
        <p>In my pursuit of personal betterment, I have found universal, practical principles that catalyze improvement across disciplines. Principles of software engineering can strengthen relationships. Business management philosophies can help improve your abilities as an athlete, writer, or parent.</p>
        <p>My goal is to take the tools, principles, and philosophies that have most benefited my character, and to share them with everyone I can.</p>
        <ul class="list-unstyled">
          <li><NuxtLink to="/articles">Read my articles</NuxtLink></li>
<!--          <li><NuxtLink to="/music">Listen to my music</NuxtLink></li>-->
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
// meta tags
let metaTitle = 'Stefan Auvache | In Pursuit of Personal Betterment'
let metaDescription = 'Education, both formal and personal, always changes lives for the better. Universal, practical life lessons lie waiting to be discovered in literature, business, technology, and even music.'
let metaKeywords = 'Stefan, Stefan Auvache, Auvache, about, articles, business, technology, literature, philosophy, music, lifelong learning, Stefan Auvache articles'
let metaCanonical = 'www.stefanauvache.com/about'
useSeoMeta({title: metaTitle, ogTitle: metaTitle, description: metaDescription, ogDescription: metaDescription, keywords: metaKeywords, canonical: metaCanonical})
</script>
