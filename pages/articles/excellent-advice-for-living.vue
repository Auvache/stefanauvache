<template>
  <section class="section-padding">
    <div class="container thinnest-content">
      <div>
        <h1 class="mb-3">Excellent Advice for Living</h1>
	      <p class="tagline fst-italic blue mb-3">By Stefan Auvache</p>

        <p>On his 68th birthday, <a href="https://www.kk.org" target="_blank">Kevin Kelly</a> decided to write down some advice for his now adult children. He wrote down 68 pearls of wisdom that he wished he had known at the beginning of his career and shared them with his family.</p>

        <p>It was a successful enough endeavor that he wrote some more the next year. And the year after that. And the year after that.</p>

        <p>Within five years, the list had grown to some 450 entries about setting goals, living the good life, and being a better person. In 2023, Kelly published the list in a book called <a :href="affiliateLinks.books.excellentAdviceForLiving" target="_blank">Excellent Advice for Living: Wisdom I Wish I’d Known Earlier</a>.</p>

        <p>The entries are purposefully left up to personal interpretation with no explanation further than the saying itself. This lets the reader find meaning for themselves.</p>

        <p>Having found my favorite items from the book, I will extend the same courtesy to you.</p>

        <p>Here are 20 quotes from <a :href="affiliateLinks.books.excellentAdviceForLiving" target="_blank">Excellent Advice for Living</a> that made me think:</p>

        <ol>
          <li>“Prototype your life. Try stuff instead of making grand plans.”</li>
          <li>“Habit is far more dependable than inspiration. Make progress by making habits.”</li>
          <li>“Tend to the small things. More people are defeated by blisters than by mountains.”</li>
          <li>“Separate the process of creating from improving. You can’t write and edit, or sculpt and polish, or make and analyze at the same time. If you do, the editor stops the creator.”</li>
          <li>“You are what you do. Not what you say, not what you believe, not how you vote, but what you spend your time on.”</li>
          <li>“Experience is overrated. Most breakthrough accomplishments were done by people doing them for the first time.”</li>
          <li>“A multitude of bad ideas is necessary for one good idea.”</li>
          <li>“You don’t need more time because you already have all the time that you will ever get; you need more focus.”</li>
          <li>“Work to become, not to acquire.”</li>
          <li>“Contemplating the weaknesses of others is easy; contemplating the weaknesses in yourself is hard, but it pays a much higher reward.”</li>
          <li>“Don’t ever work for someone you don’t want to become.”</li>
          <li>“To be remarkable, read books.”</li>
          <li>“When you lead, your real job is to create more leaders, not more followers.”</li>
          <li>“Efficiency is highly overrated; goofing off is highly underrated… the best work ethic requires a good rest ethic.”</li>
          <li>“What you do on your bad days matters more than what you do on your good days.”</li>
          <li>“You’ll get 10 times better results by elevating good behavior than punishing bad behavior.”</li>
          <li>“Make stuff that is good for people to have.”</li>
          <li>“We tend to overestimate what we can do in a day, and underestimate what we can achieve in a decade.”</li>
          <li>“Five years from now you will wish you had started today.”</li>
          <li>“There is no perfection, only progress. Done is much better than perfect.”</li>
        </ol>

      </div>
	    <ArticleShareLinks :slug="articleInfo.slug" />
    </div>
  </section>
</template>

<script setup>
import affiliateLinks from "@/assets/affiliateLinks";
import articlesList from "@/assets/articlesList";
import formatDate from "~/functions/formatDate";

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