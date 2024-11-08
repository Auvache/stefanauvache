<template>
  <section class="section-padding">
    <div class="container thinnest-content">
      <div>
        <h1 class="text-sm-center mb-4">Articles</h1>

        <p>When I found out that I was going to be a dad, my life changed forever. </p>
        <p>I realized that a little person was going to watch my every move, and that I needed to start acting with more intention. We influence those around us with our actions. If we are to influence the world for good, we must start by being good ourselves.</p>
        <p>In my pursuit of personal betterment, I have found universal, practical principles that catalyze improvement across disciplines. Principles of software engineering can strengthen relationships. Business management philosophies can help improve your abilities as an athlete, writer, or parent.</p>
        <p>My goal is to take the tools, principles, and philosophies that have most benefited my character, and to share them with everyone I can.</p>
        <p>Here are some of my best articles on lessons learned from business, technology, and literature.</p>

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