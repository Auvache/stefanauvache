<template>
  <section class="section-padding">
    <div class="container thinnest-content">
      <div>
        <h1 class="mb-3">Starting Successful Creative Projects</h1>
        <p class="tagline fst-italic blue mb-3">October 25, 2024</p>
        <img src="/img/articles/creative-projects.jpg" alt="" class="mb-3">

        <p>Ryan Holiday has written 15 books, sold six million copies of those books, and spent more than 200 weeks on bestseller lists for his work. The secret to his creative success doesn't come from the goal to write loads of books, or even to sell a certain number of copies. His success comes from a daily reading and writing practice. Process over product, as it were.</p>

        <p>In his book <a :href="affiliateLinks.books.perennialSeller" target="_blank">Perennial Seller</a>, his says this about creative projects.</p>

        <p>"If there is any magic in creative expression, it's how small, even silly ideas can become big, important, aw-inspiring works if a person invests enough time in them."</p>

        <p>He also says this.</p>

        <p>"The mark of a future perennial seller is a creator who doesn't believe he is God's gift to the world, but instead thinks he has created something of value and is excited and dedicated to get it out there."</p>

        <p>Most often, you won't find success by setting out to sell a bunch of books, run a billion dollar company, or win a grammy. It comes from an unrefined idea that you work on long enough until it becomes something good, then something better, then something great. If your goal is to be a great author, you are barking up the wrong tree. If your goal is to share something wonderful you have discovered or created, you are on the right track.</p>

        <div class="resources">
          <p>Resources</p>
          <ul>
            <li><a :href="affiliateLinks.books.perennialSeller" target="_blank">Perennial Seller by Ryan Holiday</a></li>
          </ul>
        </div>
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
const articleInfo = articlesList.find(article => article.slug === currentRoute.value.fullPath.replace('/article/',''))
// meta tags
let metaTitle = `${articleInfo.title}`
let metaDescription = `${articleInfo.summary}`
let metaKeywords = `Stefan, Stefan Auvache, Auvache, ${articleInfo.keywords}`
let metaCanonical = `www.stefanauvache.com/article/${articleInfo.slug}`
useSeoMeta({title: metaTitle, ogTitle: metaTitle, description: metaDescription, ogDescription: metaDescription, keywords: metaKeywords, canonical: metaCanonical})
</script>