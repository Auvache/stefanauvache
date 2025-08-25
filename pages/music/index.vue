<template>
  <section id="musicPage" class="section-padding bg-black-denim">
    <div class="container thinnest-content">
      <div class="text-center">
	      <img style="width: 500px; max-width: 90%" src="../../assets/img/album.jpg" alt="">
	      <h1 class="t2 text-white mt-4 mb-4"><i>I Want to Be Yours and Other Songs</i></h1>
	      <ul class="list-unstyled d-flex justify-content-center gap-4">
		      <li>
			      <a href="https://open.spotify.com/album/5eKwmWSEEHLnJ8vkiuajYi?si=HCP8CVs0QnmP-Kg63nbWWw" target="_blank">
				      <img src="../../assets/img/spotify.png" alt="">
			      </a>
		      </li>
		      <li>
			      <a href="https://music.apple.com/us/album/i-want-to-be-yours-and-other-songs/1825329218" target="_blank">
				      <img src="../../assets/img/apple-music.png" alt="">
			      </a>
		      </li>
		      <li>
			      <a href="https://music.youtube.com/playlist?list=OLAK5uy_nUM_0UgLmueqyFZWiRh4DhLUf3POgcAK0&si=XPkbV5cmMaHIrQhf" target="_blank">
				      <img src="../../assets/img/youtube-music.png" alt="">
			      </a>
		      </li>
		      <li>
			      <a href="https://music.amazon.com/albums/B0FH1WG69X?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_Zp0S2gvnHLBS3elfrvMslWb3J" target="_blank">
				      <img src="../../assets/img/amazon-music.png" alt="">
			      </a>
		      </li>
	      </ul>
	      <p class="text-white mb-4"><i>Listen wherever you stream music</i></p>

	      <div class="email">
		      <a class="text-white" href="mailto:stefan@stefanauvache.com">stefan@stefanauvache.com</a>
	      </div>

      </div>
    </div>
  </section>
</template>

<script setup>
definePageMeta({
	layout: 'clean'
})

// meta tags
let metaTitle = 'Stefan Auvache | Music'
let metaDescription = 'I Want to Be Yours and Other Songs | Album by Stefan Auvache.'
let metaKeywords = 'Stefan, Stefan Auvache, Auvache, music, share music, love music, Stefan Auvache music, spotify, apple music, youtube music, amazon music'
let metaCanonical = 'www.stefanauvache.com/music'
useSeoMeta({title: metaTitle, ogTitle: metaTitle, description: metaDescription, ogDescription: metaDescription, keywords: metaKeywords, canonical: metaCanonical})
</script>

<style lang="scss" scoped>
body,html {
	margin: 0;
	padding: 0;
	border: none;
	scroll-padding-top: 0;
	background-color: #000;
}
* {
	box-sizing: border-box;
}
#musicPage {
	height: 100%;
}
ul {
	img {
		width: 60px;
	}
}
</style>