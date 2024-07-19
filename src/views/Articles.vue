<template>
  <section class="section-padding">
    <div class="container thinnest-content">
      <div class="row">
        <h1>Articles</h1>
        <ul class="list-unstyled">
          <li v-for="article in Articles" :key="article.slug"><router-link :to="'/articles/' + article.slug">{{ article.title }}</router-link></li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import Articles from "@/assets/articlesList.json"
</script>