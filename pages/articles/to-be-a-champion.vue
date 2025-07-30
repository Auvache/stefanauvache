<template>
  <section class="section-padding">
    <div class="container thinnest-content">
      <div>
        <h1 class="mb-3">{{articleInfo.title}}</h1>
        <p class="tagline fst-italic blue mb-3">By Stefan Auvache</p>

        <p>Nick Saban is one of the greatest college football coaches ever. He has won seven national championships, nine conference championships, and coached four Heisman Trophy winners. While head coach for the University of Alabama, his team spent 109 weeks ranked number one, winning 201 games and losing only 29.</p>

        <p>This is what he told his players.</p>

        <p class="quote">“Don't think about winning the SEC Championship. Don't think about the national championship. Think about what you needed to do in this drill, on this play, in this moment. That's the process: Let's think about what we can do today, the task at hand.”</p>

        <p>Winning a championship is a lagging indicator. It is a link in a very long chain of triumphs and failures. The decisions that we make each day create the future. If you want to be a champion, you need to take the small moments seriously. You choose to ace a final exam by studying daily during the semester, not by cramming the week before finals. You choose to have a great relationship with your kids by spending time with them every day, not by buying them something huge for Christmas or birthdays. When you put effort into small, daily wins, personal championships are inevitable.</p>

        <p>Trophies aren’t won in the fourth quarter. They aren’t even won in the first half. They are won at practice. They are won in the weight room and at team dinners. Success is determined by how you choose to handle the 100,000 little moments that precede the championship game. Every rep, every assignment, every meal, every morning, every project, every drive, every conversation. Focus on the task at hand. Do your work every day.</p>

      </div>
	    <ArticleShareLinks :slug="articleInfo.slug" />
    </div>
  </section>
</template>

<script setup>
import articlesList from "@/assets/articlesList";

const router = useRouter()
const { currentRoute } = router
const articleInfo = articlesList.find(article => article.slug === currentRoute.value.fullPath.replace('/articles/',''))
// meta tags
let metaTitle = `${articleInfo.title}`
let metaDescription = `${articleInfo.summary}`
let metaKeywords = `Stefan, Stefan Auvache, Auvache, ${articleInfo.keywords}`
let metaCanonical = `www.stefanauvache.com/articles/${articleInfo.slug}`
useSeoMeta({title: metaTitle, ogTitle: metaTitle, description: metaDescription, ogDescription: metaDescription, keywords: metaKeywords, canonical: metaCanonical})
</script>