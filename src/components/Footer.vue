<template>
  <SubscribeBar />
  <footer>
    <section class="bg-gray text-center py-4">
      <div class="container">
        <div class="row">
          <p class="m-0 tagline">Property of Stefan Auvache Bradley, {{store.year}}</p>
        </div>
      </div>
    </section>
  </footer>
</template>
<script setup>
import {store} from "@/functions/store";
import SubscribeBar from "@/components/SubscribeBar.vue";
</script>