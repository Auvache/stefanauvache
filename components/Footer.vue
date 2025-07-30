<template>
  <div>
	  <SubscribeBar />
	  <ImportantArticles v-if="!hideFooterArticlesList.includes(route.path)" />
    <footer>
      <section class="bg-black-denim text-center py-4 border-top border-white">
        <div class="container">
          <div class="row">
	          <NuxtLink class="logo" to="/">
		          STEFAN AUVACHE
	          </NuxtLink>
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