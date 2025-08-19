<template>
  <section class="section-padding">
    <div class="container thinnest-content">
      <div>
        <h1 class="mb-3">{{articleInfo.title}}</h1>
        <p class="tagline fst-italic blue mb-3">By Stefan Auvache</p>
        <img v-if="articleInfo.image !== 'title.jpg'" :src="`/img/articles/${articleInfo.image}`" alt="" class="mb-3">

	      <p>In the 1970s, Carol Dweck began a career-defining study of how kids respond to failure. In some of her earliest experiments, children were given a relatively easy puzzle to solve. When they completed the first puzzle, they were given a much more difficult one to solve. She observed how the children responded to the second puzzle.</p>

	      <p>Some of the kids enjoyed working on the puzzle even though they failed to complete it. Others became overwhelmed with frustration almost immediately and refused to continue working on the puzzle. The difference between the resilient kids and the melt-down kids, she discovered, wasn’t talent or intelligence—it was their mindset. Some students believed they could improve with effort while others believed that their abilities were innate and couldn’t be improved. Over the following decades, Dweck tested her discovery in classrooms and labs. By the early 2000s, she had formalized the concept and could categorize her subjects into two groups: those with fixed mindsets and those with growth mindsets.</p>

	      <p>Dweck found that children with fixed mindsets perform well until things get difficult or they experience failure. They ride a wave of confidence that comes crashing down when they make a mistake or have trouble understanding something. These are the kids who implode when they fail a test or freak out when they lose their 4.0 GPA. Dweck also found that kids in the growth-mindset category can make mistakes without losing their minds. They understand that, while unpleasant, setbacks and failures are opportunities for learning.</p>

	      <p>The same is true of adults. Fear of failure, looking stupid, and making mistakes prevents people every day from learning things and getting better. Those who are willing to fail become more capable in the long run than those who let their fear and anxiety prevent them from taking risks and making mistakes. A growth mindset leads to long-term learning and success. A fixed mindset leads to stagnation and, ironically, future failures.</p>

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