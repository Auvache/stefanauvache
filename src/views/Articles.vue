<template>
  <section class="section-padding">
    <div class="container thinnest-content">
      <div class="row">
        <h1 class="text-sm-center">Articles</h1>
        <h2 class="t4">2024</h2>
        <ul class="list-unstyled">
          <li v-for="article in sortedArticles" :key="article.slug"><router-link :to="'/articles/' + article.slug">{{ article.title }}</router-link></li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import Articles from "@/assets/articlesList.json"
import sortByKey from "@/functions/sortByKey"

let sortedArticles = sortByKey(Articles, 'title', 'atoz')
</script>