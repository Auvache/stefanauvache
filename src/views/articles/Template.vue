<template>
  <section class="section-padding">
    <div class="container thinnest-content">
      <div>
        <h1 class="mb-3">title</h1>
        <p class="tagline fst-italic blue mb-5">month 1, 2024</p>


        <div class="sources">
          <p>Sources</p>
          <ol>
            <li><a :href="affiliateLinks.books.toolsOfTitans" target="_blank">Tools of Titans</a>: Ferriss, T. (2016).
              <em>Tools of titans: The tactics, routines, and habits of billionaires, icons, and world-class performers</em>. Houghton Mifflin Harcourt.</li>
            <li><a :href="affiliateLinks.books.theWarOfArt" target="_blank">The War of Art by Steven Pressfield</a>: Pressfield, S. (2002).
              <em>The war of art: Break through the blocks and win your inner creative battles</em>. Black Irish Entertainment LLC.</li>
          </ol>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import affiliateLinks from "@/assets/affiliateLinks.json";
</script>