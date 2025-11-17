<template>
  <section class="section-padding">
    <div class="container thinnest-content">
      <div>
	      <div class="text-center mb-5">
		      <h1 class="text-sm-center">Article Archive</h1>
		      <p>All articles written by date&mdash;the good, the bad, and the ugly</p>
	      </div>

<!--        <div v-for="(articles, month) in articlesByYear[2026]">-->
<!--          <h2 class="text-black mt-4">{{month}} 2026</h2>-->
<!--          <ul class="list-unstyled">-->
<!--            <li v-for="article in articles" :key="article.slug"><NuxtLink class="blue" :to="'/articles/' + article.slug">{{ article.title }}</NuxtLink></li>-->
<!--          </ul>-->
<!--        </div>-->

        <div v-for="(articles, month) in articlesByYear[2025]">
          <h2 class="text-black mt-4">{{month}} 2025</h2>
          <ul class="list-unstyled">
            <li v-for="article in articles" :key="article.slug"><NuxtLink :to="'/articles/' + article.slug">{{ article.title }}</NuxtLink></li>
          </ul>
        </div>

        <div v-for="(articles, month) in articlesByYear[2024]">
          <h2 class="text-black mt-4">{{month}} 2024</h2>
          <ul class="list-unstyled">
            <li v-for="article in articles" :key="article.slug"><NuxtLink :to="'/articles/' + article.slug">{{ article.title }}</NuxtLink></li>
          </ul>
        </div>

        <div class="d-flex flex-column flex-sm-row justify-content-center mt-5">
          <NuxtLink to="/articles">Featured Articles</NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Articles from "@/assets/articlesList.json"
import sortByKey from "@/functions/sortByKey"

const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let sortedArticles = sortByKey(Articles, 'datePublished', 'ztoa')

let articlesByYear = {}
sortedArticles.forEach((item) => {
  let date = new Date(item.datePublished)
  let year = date.getFullYear().toString()
  let month = months[date.getMonth()].toString()
  if (!articlesByYear[year]) {
    articlesByYear[year] = {}
  }
  if (!articlesByYear[year][month]) {
    articlesByYear[year][month] = {}
  }
  articlesByYear[year][month][item.slug] = item
})

// meta tags
let metaTitle = 'All Articles | Stefan Auvache'
let metaDescription = 'Explore articles on Agile Personal Development—iterative frameworks, life experiments, and anti-perfectionism. Learn to iterate toward a life you actually want.'
let metaKeywords = 'agile personal development, iterative self improvement, life experiments, goal setting alternatives, Stefan Auvache articles, personal development frameworks'
let metaCanonical = 'https://www.stefanauvache.com/all-articles'
useSeoMeta({title: metaTitle, ogTitle: metaTitle, description: metaDescription, ogDescription: metaDescription, keywords: metaKeywords, canonical: metaCanonical, robots: 'index, follow'})
</script>