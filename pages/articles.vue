<template>
  <section class="section-padding">
    <div class="container thinnest-content">
      <div>
        <h1 class="text-sm-center mb-4">Articles</h1>

        <div>
          <div v-for="(articles, category) in articlesList">
            <h2 class="text-black">{{category}}</h2>
            <ul :id="`${category.toLowerCase().replaceAll(' ','-')}-list`" class="list-unstyled">
              <li v-for="article in articles">
                <NuxtLink :to="'/article/' + article.slug">{{article.title}}</NuxtLink>
              </li>
            </ul>
          </div>
        </div>

        <div class="d-flex flex-column flex-sm-row justify-content-center mt-5">
          <NuxtLink to="/archive">Articles By Date</NuxtLink>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import {ref} from "vue";
import Articles from "@/assets/articlesList.json"

// const categories = ["Books","Business","Creativity","Philosophy","Productivity","Technology","Tools"]
const categories = [
  "Living the Good Life",
  "Personal Betterment",
  "Becoming More Creative",
  "Interesting Ideas",
  "Improving Productivity",
  "Tools & Strategies",
  "Books"
]
const articlesList = ref({})
categories.forEach(category => {
  articlesList.value[category] = []
})

categories.forEach(category => {
  for (let article in Articles) {
    if (Articles[article].categories.includes(category)) {
      articlesList.value[category].push(Articles[article])
    }
  }
})


// meta tags
let metaTitle = 'Stefan Auvache | Articles'
let metaDescription = 'Read articles with insights on business, technology, literature, philosophy, music, and life.'
let metaKeywords = 'Stefan, Stefan Auvache, Auvache, articles, business, technology, literature, philosophy, music, lifelong learning, Stefan Auvache articles'
let metaCanonical = 'www.stefanauvache.com/articles'
useSeoMeta({title: metaTitle, ogTitle: metaTitle, description: metaDescription, ogDescription: metaDescription, keywords: metaKeywords, canonical: metaCanonical})
</script>