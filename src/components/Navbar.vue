<template>
  <nav class="bg-dark-blue">
    <div class="container medium-content py-2">
      <div class="d-flex justify-content-between align-items-center">
        <router-link class="logo" to="/">
          STEFAN AUVACHE
        </router-link>
        <div class="menu-links">
          <div>
            <button class="hamburger-icon" type="button" @click="openMenu">
                <span class="bar1 mb-1"></span>
                <span class="bar2 mb-1"></span>
                <span class="bar3"></span>
            </button>
            <ul id="dropdown" class="hamburger-menu d-none">
              <li><router-link to="/articles">Read more articles</router-link></li>
              <li><router-link to="/archive">Visit the archive</router-link></li>
              <li><router-link to="/about">Learn more</router-link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <div class="nav-buffer"></div>
  <div id="subscribeBanner">
    <div class="position-relative">
      <router-link class="white" to="/subscribe">Subscribe to <span class="d-none d-sm-inline">the </span><span class="fst-italic fw-bold">Food for Thought</span><span class="d-none d-sm-inline"> email list</span></router-link>
      <button @click="closeSubscribeBanner" type="button" class="btn-close btn-close-white" aria-label="Close subscribe banner"></button>
    </div>
  </div>
</template>
<script setup>
const openMenu = () => {
  let menu = document.getElementById("dropdown");
  menu.classList.toggle("d-none");
}

const closeSubscribeBanner = () => {
  let banner = document.getElementById("subscribeBanner");
  banner.classList.add("d-none");
}
</script>