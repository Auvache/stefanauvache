<template>
  <section class="section-padding">
    <div class="container thinnest-content">
      <div>
        <h1 class="mb-3">Widen your lens, lengthen your timeline</h1>
        <p class="tagline fst-italic blue mb-3">January 10, 2025</p>

        <p>When Steven Martin was 17 years old, he decided to learn to play the banjo. He bought a book (and a banjo) and went about trying to learn some chords. At first, he couldn’t hear the difference between trying to play a C-chord and just strumming the strings. Everything sounded the same and making progress was difficult.</p>

        <p>Though it was frustrating at first, his motto was this - “if I just stay with it, one day, I will have played for 40 years. Anybody who sticks with it for 40 years will be able to play it.” 38 years later, Steven Martin won his first Grammy for Best Country Instrumental Music Performance.</p>

        <p>There is a sentiment often attributed to Bill Gates that goes something like this:</p>

        <p>We overestimate what we can do in a day and underestimate what we can do in a decade.</p>

        <p>On the day-to-day, progress can seem painstakingly slow, and it can be incredibly disheartening to compare ourselves to the people we wish we were. Whether you’ve been writing a book, working on a bachelor’s degree, or learning to play an instrument, it is easy to feel like you aren’t making progress. Widen your lens, lengthen your timeline, and stick with it. All experts in the world were once beginners. Provided you are open to feedback and are striving to get better, you will improve, and improvement adds up over time.</p>

        <p>Eventually, you, too, will have “played the banjo for 40 years.”</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import articlesList from "@/assets/articlesList";

const router = useRouter()
const { currentRoute } = router
const articleInfo = articlesList.find(article => article.slug === currentRoute.value.fullPath.replace('/article/',''))
// meta tags
let metaTitle = `${articleInfo.title}`
let metaDescription = `${articleInfo.summary}`
let metaKeywords = `Stefan, Stefan Auvache, Auvache, ${articleInfo.keywords}`
let metaCanonical = `www.stefanauvache.com/article/${articleInfo.slug}`
useSeoMeta({title: metaTitle, ogTitle: metaTitle, description: metaDescription, ogDescription: metaDescription, keywords: metaKeywords, canonical: metaCanonical})
</script>