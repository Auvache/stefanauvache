<template>
  <section class="section-padding">
    <div class="container thinnest-content">
      <div>
        <h1 class="text-sm-center">All Articles</h1>

<!--        <div v-for="(articles, month) in articlesByYear[2026]">-->
<!--          <h2 class="text-black mt-4">{{month}} 2026</h2>-->
<!--          <ul class="list-unstyled">-->
<!--            <li v-for="article in articles" :key="article.slug"><NuxtLink class="blue" :to="'/article/' + article.slug">{{ article.title }}</NuxtLink></li>-->
<!--          </ul>-->
<!--        </div>-->

        <div v-for="(articles, month) in articlesByYear[2025]">
          <h2 class="text-black mt-4">{{month}} 2025</h2>
          <ul class="list-unstyled">
            <li v-for="article in articles" :key="article.slug"><NuxtLink class="blue" :to="'/article/' + article.slug">{{ article.title }}</NuxtLink></li>
          </ul>
        </div>

        <div v-for="(articles, month) in articlesByYear[2024]">
          <h2 class="text-black mt-4">{{month}} 2024</h2>
          <ul class="list-unstyled">
            <li v-for="article in articles" :key="article.slug"><NuxtLink class="blue" :to="'/article/' + article.slug">{{ article.title }}</NuxtLink></li>
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
let metaTitle = 'Stefan Auvache | All Articles'
let metaDescription = 'Read articles with insights on business, technology, literature, philosophy, music, and life.'
let metaKeywords = 'Stefan, Stefan Auvache, Auvache, articles, all articles, business, technology, literature, philosophy, music, lifelong learning, Stefan Auvache articles'
let metaCanonical = 'www.stefanauvache.com/all-articles'
useSeoMeta({title: metaTitle, ogTitle: metaTitle, description: metaDescription, ogDescription: metaDescription, keywords: metaKeywords, canonical: metaCanonical})
</script>