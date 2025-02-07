<template>
  <section class="section-padding">
    <div class="container thin-content">
      <h1 class="t2 text-center text-black mt-3 mb-4">Featured Articles</h1>
      <hr class="mb-4">
      <div class="article-card" v-for="article in sortedArticles" :key="article.slug" :id="article.slug">
        <router-link class="intro-heading" :to="'/articles/'+article.slug">{{article.title}}</router-link>
        <p class="fst-italic">{{formatDate(article.datePublished)}}</p>
        <p>{{article.summary}}</p>
      </div>

      <div class="d-flex flex-column flex-sm-row justify-content-center">
        <router-link to="/articles">Keep reading...</router-link>
      </div>

    </div>
  </section>
</template>

<script setup>
import Articles from "@/assets/articlesList.json"
import formatDate from "@/functions/formatDate";
import sortByKey from "@/functions/sortByKey";

// featured articles
let sortedArticles = []
let evergreenArticles = []
for (let i in Articles) {
  if (Articles[i].featured) {
    if (Articles[i].image) {
      Articles[i].imagePath = require("@/assets/img/" + Articles[i].image)
    }
    sortedArticles.push(Articles[i])
  }
}

// latest articles
// let sortedArticles = sortByKey(Articles, "datePublished", "ztoa")

// sortedArticles = sortedArticles.slice(0,5)
</script>