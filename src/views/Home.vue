<template>
  <section class="section-padding">
    <div class="container thin-content">
      <h2 class="text-black text-center mt-3 mb-4">Featured Articles</h2>
      <hr class="mb-4">
      <div class="article-card" v-for="article in sortedArticles" :key="article.slug" :id="article.slug">
        <router-link class="intro-heading" :to="'/articles/'+article.slug">{{article.title}}</router-link>
        <p class="fst-italic">{{formatDate(article.datePublished)}}</p>
        <p>{{article.summary}}</p>
        <router-link class="tp blue" :to="'/articles/'+article.slug" :aria-label="'read ' + article.title">Learn more</router-link>
      </div>

      <div class="d-flex flex-column flex-sm-row justify-content-center">
        <router-link class="btn me-0 mb-3 me-sm-3 mb-sm-0" to="/articles">More articles</router-link>
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
for (let i in Articles) {
  if (Articles[i].featured) {
    sortedArticles.push(Articles[i])
  }
}

// latest articles
// let sortedArticles = sortByKey(Articles, "datePublished", "ztoa")

// sortedArticles = sortedArticles.slice(0,5)
</script>