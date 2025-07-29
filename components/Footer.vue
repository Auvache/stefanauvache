<template>
  <div>
	  <SubscribeBar />
	  <ImportantArticles v-if="!hideFooterArticlesList.includes(route.path)" />
    <footer>
      <section class="bg-black-denim text-center py-4">
        <div class="container">
          <div class="row">
            <p class="m-0 tagline text-white">Property of Stefan Auvache Bradley, 2025</p>
          </div>
        </div>
      </section>
    </footer>
  </div>
</template>
<script setup lang="ts">
const route = useRoute()
const hideFooterArticlesList = ['/articles']
</script>