<template>
  <div v-if="displayModal" id="upsellEmailModal" class="fade-in-upsell">
    <div class="upsellContent">
      <button @click="closeModal" type="button" class="btn-close btn-close-white" aria-label="Close"></button>
      <p class="white mb-0">Subscribe to the <span class="fw-bold fst-italic">Food For Thought</span> email list for weekly articles on practical life lessons from the worlds of technology, business, literature, and music.</p>
      <div class="subscribe d-flex flex-column flex-sm-row justify-content-center align-items-center">
        <component is="script" async data-uid="0396ab84d5" src="https://stefan-bradley.ck.page/0396ab84d5/index.js"></component>
      </div>
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
  console.log(date)
  let timestamp = date.getTime();
  console.log(timestamp)
  let newTimestamp = timestamp + (daysUntilExpiration * 24 * 60 * 60 * 1000);
  console.log(newTimestamp)
  date.setTime(newTimestamp);
  console.log(date)
  let expires = "expires="+ date.toUTCString();
  console.log(expires)
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

const displayModal = ref(true)
const cookies = getCookies();
displayModal.value = !cookies.subscribeModalDeclined;
</script>