<template>
  <section class="section-padding">
    <div class="container thinnest-content">
      <div>
        <h1 class="mb-3">title</h1>
        <p class="tagline fst-italic blue mb-3">month 1, 2024</p>


        <div class="resources">
          <p>Resources</p>
          <ul>
            <li><a :href="affiliateLinks.books.toolsOfTitans" target="_blank">Tools of Titans by Timothy Ferriss</a></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import affiliateLinks from "@/assets/affiliateLinks.json";
</script>