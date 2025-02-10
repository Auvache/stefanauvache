<template>
  <div v-if="displayModal" id="upsellEmailModal" class="fade-in-upsell">
    <div class="upsellContent">
      <button @click="closeModal" type="button" class="btn-close btn-close-white" aria-label="Close"></button>
      <p class="white mb-0">Subscribe to the <span class="fw-bold fst-italic">Food For Thought</span> email list for weekly articles on practical life lessons from the worlds of technology, business, literature, and music.</p>
      <router-link class="btn btn-white mt-5" to="/subscribe">Subscribe</router-link>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";

const closeModal = () => {
  displayModal.value = false
  setCookie('subscribeModalDeclined', 'true', 90)
}

const getCookies = function(){
  let pairs = document.cookie.split(";");
  let cookies = {};
  for (let i=0; i<pairs.length; i++){
    let pair = pairs[i].split("=");
    cookies[(pair[0]+'').trim()] = unescape(pair.slice(1).join('='));
  }
  return cookies;
}

const setCookie = (name, value, daysUntilExpiration) => {
  const date  = new Date();
  let timestamp = date.getTime();
  let newTimestamp = timestamp + (daysUntilExpiration * 24 * 60 * 60 * 1000);
  date.setTime(newTimestamp);
  let expires = "expires="+ date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

const displayModal = ref(true)
const cookies = getCookies();
displayModal.value = !cookies.subscribeModalDeclined;
</script>