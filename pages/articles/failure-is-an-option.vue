<template>
  <section class="section-padding">
    <div class="container thinnest-content">
      <div>
        <h1 class="mb-3">Failure Is an Option</h1>
	      <p class="tagline fst-italic blue mb-3">By Stefan Auvache</p>

	      <p class="quote">“It’s only a mistake if you don’t learn from it.” —Cary Elwes</p>

	      <p>After more than a decade of success, executives at Pixar worried that the company was becoming too formulaic and dogmatic. Were there too many rules? Were there unnecessary hurdles in the creative process? Pixar was founded on innovative storytelling and wanted to continue to reimagine the way that stories were created.</p>

	      <p>To shake things up, Pixar launched the Incubator Project, giving a first-time director the chance to lead a project without constant company oversight. The director would have access to a seasoned production team and a workspace two blocks away from the main campus to minimize executive influence.</p>

	      <p>The concept for the new film overflowed with quirky, Pixar-typical potential. What happens when the last two blue-footed newts left on Earth are forced together by scientists to repopulate and save their species—but they can’t stand each other? Almost everyone agreed that, while challenging, the concept would make for an excellent film if properly nurtured.</p>

	      <p>Unfortunately for the production team, separation from Pixar culture meant separation from the lessons that Pixar had learned over the years—lessons that had turned Pixar into a storytelling powerhouse. While the concept for the film was promising, the team couldn’t push through plot holes and barriers. The storyline was never fully vetted or refined enough to meet Pixar’s high standards. By the time executives decided to intervene, the project was losing money and momentum. Team morale was low, and the film had become creatively unsalvageable. To free up resources for other projects, the film was shelved and never made it to production.</p>

	      <p>The tadpole movie, as it came to be called, was a failure that cost the studio a lot of time and resources. Pixar, however, did not let the failure go to waste. They internalized key lessons about the importance of refining a concept through iteration and confirmed that their formulas and rules were essential to creative success. Accepting failure and shelving the project also freed up resources to work on the film <em>Inside Out</em>, which became a smashing success.</p>

	      <p>Pixar’s ability to embrace failure is a corporate example of a principle that applies to us on a personal level. Failure is not only an option—it is imperative to the learning process. As you and I go about trying to do the things we want to do, we will inevitably fail. Sometimes we will recover from our mistakes and sometimes they will lead to catastrophe. Success is not the absence of failure. It is the product of using failure to improve.</p>

	      <p>Don’t shy away from projects or pathways that may end in failure. Fail we</p>

      </div>
	    <ArticleShareLinks :slug="articleInfo.slug" />
    </div>
  </section>
</template>

<script setup>
import articlesList from "@/assets/articlesList";

const router = useRouter()
const { currentRoute } = router
const articleInfo = articlesList.find(article => article.slug === currentRoute.value.fullPath.replace('/articles/',''))
// meta tags
let metaTitle = `${articleInfo.title}`
let metaDescription = `${articleInfo.summary}`
let metaKeywords = `Stefan, Stefan Auvache, Auvache, ${articleInfo.keywords}`
let metaCanonical = `www.stefanauvache.com/articles/${articleInfo.slug}`
useSeoMeta({title: metaTitle, ogTitle: metaTitle, description: metaDescription, ogDescription: metaDescription, keywords: metaKeywords, canonical: metaCanonical})
</script>