<template>
  <section class="section-padding">
    <div class="container thin-content">
      <div class="fade-in-up-slow">
        <h1 class="intro-heading">In Pursuit of Lifelong Learning</h1>
        <hr class="mt-0 mb-3">
        <p>My name is <span class="blue fw-normal">Stefan</span>. I am a software engineer, avid reader, and a lover of music.</p>
        <p>I am a believer that education, both formal and personal, always changes lives for the better. Universal, practical life lessons lie waiting to be discovered in literature, business, technology, and even music.</p>
        <p class="fw-normal blue">My goal is to find and learn these lessons, and then to share them with you.</p>
      </div>
    </div>
  </section>
  <SubscribeBar />
  <section class="section-padding">
    <div class="container thin-content">
      <h2 class="text-black text-center mt-3 mb-4">Latest Articles</h2>
      <hr class="mb-4">
      <div class="article-card" v-for="article in sortedArticles" :key="article.slug" :id="article.slug">
        <router-link class="intro-heading" :to="'/articles/'+article.slug">{{article.title}}</router-link>
        <p class="fst-italic">{{formatDate(article.datePublished)}}</p>
        <p>{{article.summary}}</p>
        <router-link class="tp blue" :to="'/articles/'+article.slug" :aria-label="'read ' + article.title">Learn more</router-link>
      </div>
      <p class="text-center"><router-link class="btn" to="/articles">See all articles</router-link></p>
    </div>
  </section>
</template>

<script setup>
import SubscribeBar from "@/components/SubscribeBar.vue";
import Articles from "@/assets/articlesList.json"
import formatDate from "@/functions/formatDate";
import sortByKey from "@/functions/sortByKey";
let sortedArticles = sortByKey(Articles, "datePublished", "ztoa")
sortedArticles = sortedArticles.slice(0,5)
</script>