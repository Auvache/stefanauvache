<template>
  <div class="fade-in-up">
    <SubscribeBar v-if="showSubscriptionForm" />
    <footer>
      <section class="bg-gray text-center py-4">
        <div class="container">
          <div class="row">
            <p class="m-0 tagline">Property of Stefan Auvache Bradley, {{store.year}}</p>
          </div>
        </div>
      </section>
    </footer>
  </div>
</template>
<script setup>
import {store} from "@/functions/store";
import SubscribeBar from "@/components/SubscribeBar.vue";
import {ref, watch} from "vue";
import {useRoute} from "vue-router";

const showSubscriptionForm = ref(true)
const route = useRoute()

watch(route, () => {
  showSubscriptionForm.value = !location.href.includes('/subscribe');
})
</script>