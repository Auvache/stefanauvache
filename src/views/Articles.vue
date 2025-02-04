<template>
  <section class="section-padding">
    <div class="container thinnest-content">
      <div>
        <h1 class="text-sm-center mb-4">Articles</h1>

        <div v-for="(articles, category) in articlesList">
          <h2 class="text-black">{{category}}</h2>
          <ul class="list-unstyled">
            <li v-for="article in articles">
              <router-link :to="'/articles/' + article.slug">{{article.title}}</router-link>
            </li>
          </ul>
        </div>

        <div class="d-flex flex-column flex-sm-row justify-content-center mt-5">
          <router-link class="btn" to="/archive">Articles By Date</router-link>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import {ref} from "vue";
import Articles from "@/assets/articlesList.json"

const categories = ["Books","Business","Creativity","Philosophy","Productivity","Technology","Tools"]
const articlesList = ref({})
categories.forEach(category => {
  articlesList.value[category] = []
})
console.log(articlesList.value)

categories.forEach(category => {
  for (let article in Articles) {
    if (Articles[article].categories.includes(category)) {
      articlesList.value[category].push(Articles[article])
    }
  }
})

</script>