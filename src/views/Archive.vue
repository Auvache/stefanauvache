<template>
  <section class="section-padding">
    <div class="container thinnest-content">
      <div>
        <h1 class="text-sm-center">Archive</h1>

<!--        <div v-for="(articles, month) in articlesByYear[2025]">-->
<!--          <h2 class="text-black mt-4">{{month}} 2025</h2>-->
<!--          <ul class="list-unstyled">-->
<!--            <li v-for="article in articles" :key="article.slug"><router-link class="blue" :to="'/articles/' + article.slug">{{ article.title }}</router-link></li>-->
<!--          </ul>-->
<!--        </div>-->
        
        <div v-for="(articles, month) in articlesByYear[2024]">
          <h2 class="text-black mt-4">{{month}} 2024</h2>
          <ul class="list-unstyled">
            <li v-for="article in articles" :key="article.slug"><router-link class="blue" :to="'/articles/' + article.slug">{{ article.title }}</router-link></li>
          </ul>
        </div>

        <div class="d-flex flex-column flex-sm-row justify-content-center mt-5">
          <router-link class="btn" to="/articles">Articles By Category</router-link>
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
</script>