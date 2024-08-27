<template>
  <Navbar />
  <div id="mainContent" class="loading">
    <router-view/>
<!--    <EmailListUpsell />-->
  </div>
  <Footer />
</template>

<script setup>
import '@/scss/_global.scss'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import EmailListUpsell from '@/components/EmailListUpsell.vue'
</script>
