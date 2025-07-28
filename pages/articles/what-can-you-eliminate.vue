<template>
  <section class="section-padding">
    <div class="container thinnest-content">
      <div>
        <h1 class="mb-3">What can you eliminate?</h1>
	      <p class="tagline fst-italic blue mb-3">By Stefan Auvache</p>

        <p>When Steve Jobs returned to Apple after over a decade of absence, he found a company bogged down by an unsustainable number of products and projects that profited the company basically nothing. His first order of business was to cut 70% of Apple’s product line (and fired 30% of its employees). By eliminating projects that weren’t making money, Apple’s engineers were now free to work on the projects that had potential. Four years after Jobs' return, Apple released the iPod.</p>

        <p>What would happen if you didn’t do something? What if you didn’t attend a meeting, manage your social media accounts, or try to wake up early every morning? Our time and resources are limited. When we use them up on things we don’t care about, we steal them away from the things we love. Matthew McConaughey said he would rather, “make A’s in three things,” than make, “B’s in five things.” What is something you could give up to make the other parts of your life less stressed, easier to manage, and higher quality?</p>

        <p>What can you eliminate?</p>

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