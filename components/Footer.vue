<template>
  <div>
	  <SubscribeBar />
	  <ImportantArticles v-if="!hideFooterArticlesList.includes(route.path)" />
    <footer>
      <About />
    </footer>
  </div>
</template>
<script setup lang="ts">
const route = useRoute()
const hideFooterArticlesList = ['/']
</script>