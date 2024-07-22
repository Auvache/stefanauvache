<template>
  <section class="section-padding">
    <div class="container thin-content">
      <h1 class="intro-heading">The Pursuit of Lifelong Learning</h1>
      <hr class="mt-0 mb-3">
      <p>Hi, my name is <span class="blue fw-bold">Stefan</span>. I am a software engineer, avid reader, and a lover of music. I graduated from Brigham Young University in 2021 with a Masters Degree in Information Systems Management and have been in pursuit of the life lessons buried in technology ever since.</p>
      <p>I am a believer in lifelong education. Universal, practical life lessons are deeply ingrained in the world around us, whether they be found in technology, project management, or music. My goal is to find and understand some of these lessons, and then to share them with you.</p>
    </div>
  </section>
  <SubscribeBar />
  <section class="section-padding">
    <div class="container thin-content">
      <h2 class="t2 text-center mt-3 mb-4">Featured Articles</h2>
      <hr class="mb-4">
      <div class="article-card" v-for="article in sortedArticles" :key="article.slug" :id="article.slug">
        <router-link :to="'/articles/'+article.slug">{{article.title}}</router-link>
        <p class="fst-italic">{{formatDate(article.datePublished)}}</p>
        <p>{{article.summary}}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import SubscribeBar from "@/components/SubscribeBar.vue";
import Articles from "@/assets/articlesList.json"
import formatDate from "@/functions/formatDate";
import sortByKey from "@/functions/sortByKey";
let sortedArticles = sortByKey(Articles, "datePublished", "ztoa")
</script>