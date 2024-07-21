<template>
  <section class="section-padding">
    <div class="container thin-content">
        <h1 class="intro-heading">Hello, my name is <span class="blue fw-bold">Stefan Auvache</span></h1>
        <hr class="mt-0 mb-3">
        <p>I am a software engineer, avid reader, and lover of music. I graduated from Brigham Young University in 2021 with a Masters Degree in Information Systems Management and have been in pursuit of the life lessons buried in technology ever since.</p>
        <p>I am a strong believer that universal, practical life lessons can be found in the disciplines of software engineering and project management. My goal is to study these lessons and share them with you.</p>
    </div>
  </section>
  <SubscribeBar />
  <section class="section-padding">
    <div class="container thin-content">
      <h2 class="t1 text-center mt-3 mb-4">Featured Articles</h2>
      <hr class="mb-4">
      <div class="article-card" v-for="article in Articles" :key="article.slug" :id="article.slug">
        <router-link :to="'/articles/'+article.slug">{{article.title}}</router-link>
        <p class="fst-italic">{{article.datePublished}}</p>
        <p>{{article.summary}}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import SubscribeBar from "@/components/SubscribeBar.vue";
import Articles from "@/assets/articlesList.json"
</script>