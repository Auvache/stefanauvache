<template>
  <section class="section-padding">
    <div class="container thinnest-content">
      <div>
        <h1 class="mb-3">{{articleInfo.title}}</h1>
        <p class="tagline fst-italic blue mb-3">By Stefan Auvache</p>
        <img src="/img/articles/agile.jpg" alt="" class="mb-3">

        <p>Long ago, two tribes lived in the same valley. One of the tribes was called The Dreamers. This tribe was filled with people who constantly came up with all sorts of ideas. The other tribe was filled with people who loved to make things. They called themselves the Builders.</p>

        <p>One day, one of the dreamers dreamt up something so wonderful that he just had to build it. Unable to build it himself, he sent for a member of the other tribe to help turn the dream into a reality. Upon meeting, the dreamer talked all about his wonderful idea and asked the builder for his help. Delighted by the idea (and the compensation offered him by the dreamer), the builder agreed to help. In three month’s time, the builder would return with exactly the thing the dreamer wanted.</p>

        <p>The months went by, and the day finally came. The builder returned with the thing. However, much to the dreamer’s dismay, the thing wasn’t what he had pictured at all. Furious, he accused the builder of wasting his time and demanded he begin again. The builder was taken aback. He insisted that the thing was built exactly as had been discussed three months earlier and that the dreamer was trying to cheat him. War broke out between the tribes (or something, I don’t really know. It isn’t important).</p>

        <p>In modern times, this war is waged in the world of software development. Getting an idea from marketers, product designers, and CEOs (the dreamers) to the engineers that make that idea come to life (the builders) is way more difficult than you might think. It’s like couple’s counseling, except there is no counselor, and one person is speaking Spanish while the other is speaking Italian.</p>

        <p>In 2001, a bunch of engineers and business professionals said that enough was enough and got together to solve the problem. The group came up with Agile Development (I call her Agile for short). Instead of building and polishing a product before showing it to the client, an engineer would get a first version of the product ready as quickly as possible, then get feedback from the client, just like writing a rough draft for a high-school essay. After getting feedback from the client, the engineer can alter and improve the first version to create a “second draft” before returning to the client for more feedback. This iterative process continues until the product is finished and the client is happy.</p>

        <p>As the idea of Agile started to spread, life for project managers and engineers improved drastically. Timelines for projects became more manageable. Development became faster and more accurate. Agile changed the world of software engineering forever.</p>

        <p>Stripped of its software terms and business jargon, Agile becomes a simple, powerful cycle for personal development:</p>

        <ul>
          <li>Plan</li>
          <li>Act</li>
          <li>Measure</li>
          <li>Iterate</li>
        </ul>

        <p>Make a plan to get a little closer to where you want to be. Act on that plan. Measure the outcome of your actions. Then, use what you have learned to adjust your vision for the future and plan your next move. Your life will start moving in the direction you really want it to go.</p>

      </div>
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