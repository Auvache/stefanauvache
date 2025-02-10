<template>
  <section class="section-padding">
    <div class="container thin-content">
      <h1 class="t2 text-center text-black mt-3 mb-4">Featured Articles</h1>
      <div id="featuredArticles">
        <div class="article-card" v-for="article in sortedArticles" :key="article.slug" :id="article.slug">
          <router-link :to="'/articles/'+article.slug" >
            <img :src="article.imagePath" alt="">
            <h2 class="intro-heading">{{article.title}}</h2>
          </router-link>
          <p>{{article.summary}}</p>
        </div>

      </div>
      <div class="d-flex flex-column flex-sm-row justify-content-center mt-5">
        <router-link to="/articles">Keep reading...</router-link>
      </div>

    </div>
  </section>
</template>

<script setup>
import Articles from "@/assets/articlesList.json"
import sortByKey from "@/functions/sortByKey";

// featured articles
let sortedArticles = []
for (let i in Articles) {
  if (Articles[i].featured) {
    if (Articles[i].image) {
      Articles[i].imagePath = require("@/assets/img/articles/" + Articles[i].image)
    }
    sortedArticles.push(Articles[i])
  }
}

// latest articles
// let sortedArticles = sortByKey(Articles, "datePublished", "ztoa")

// sortedArticles = sortedArticles.slice(0,5)
</script>

<style scoped lang="scss">
#featuredArticles {
  display: grid;
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  img {
    width: 100%;
  }
}

</style>