<template>
  <nav class="bg-black-denim">
    <div class="container medium-content py-2">
      <div class="d-flex justify-content-between align-items-center">
        <NuxtLink class="logo" to="/articles">
          STEFAN AUVACHE
        </NuxtLink>
        <div class="menu-links">
          <div>
            <button class="hamburger-icon" type="button" @click="toggleMenu" aria-label="Toggle menu">
                <span class="bar1 mb-1"></span>
                <span class="bar2 mb-1"></span>
                <span class="bar3"></span>
            </button>
            <ul id="dropdown" class="hamburger-menu d-none">
              <li><NuxtLink @click="toggleMenu" to="/subscribe">Subscribe</NuxtLink></li>
              <li><NuxtLink @click="toggleMenu" to="/articles">Featured Articles</NuxtLink></li>
              <li><NuxtLink @click="toggleMenu" to="/categories">Categories</NuxtLink></li>
              <li><NuxtLink @click="toggleMenu" to="/all-articles">All Articles</NuxtLink></li>
              <li><NuxtLink @click="toggleMenu" to="/contact">Contact Information</NuxtLink></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <div class="nav-buffer"></div>
  <div v-if="showSubscribeBanner" id="subscribeBanner" class="bg-black-denim">
    <div class="position-relative">
      <NuxtLink class="white" to="/subscribe">Subscribe to <span class="d-none d-sm-inline">the </span><span class="fst-italic fw-bold">Food for Thought</span><span class="d-none d-sm-inline"> email list</span></NuxtLink>
      <button @click="closeSubscribeBanner" type="button" class="btn-close btn-close-white" aria-label="Close subscribe banner"></button>
    </div>
  </div>
</template>

<script setup>
const router = useRouter()
const { currentRoute } = router
const hideBannerPageList = ['/subscribe', '/music']
const showSubscribeBanner = ref(!hideBannerPageList.includes(currentRoute.value.path))
const toggleMenu = () => {
  let menu = document.getElementById("dropdown");
  menu.classList.toggle("d-none");
}

const closeSubscribeBanner = () => {
  let banner = document.getElementById("subscribeBanner");
  banner.classList.add("d-none");
}
</script>