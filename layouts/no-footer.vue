<template>
  <div>
    <Navbar />
    <slot />
	  <FooterSimple />
  </div>
</template>
<script setup lang="ts">
import FooterSimple from "~/components/FooterSimple.vue";
</script>