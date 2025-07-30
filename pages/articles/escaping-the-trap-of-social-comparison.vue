<template>
  <section class="section-padding">
    <div class="container thinnest-content">
      <div>
        <h1 class="mb-3">{{articleInfo.title}}</h1>
        <p class="tagline fst-italic blue mb-3">By Stefan Auvache</p>

	      <p>At the end of the 19th century, two inventors found themselves locked in what is now called the War of the Currents: Thomas Edison and Nikola Tesla. Edison had built his empire on direct current (DC) electricity, while Tesla championed alternating current (AC) as the future of electric energy.</p>

	      <p>As the battle between AC and DC played out, Edison’s mission subtly shifted from improving his own systems to defeating Tesla. Edison poured his energy into public smear campaigns, shocking animals in street demonstrations to prove AC’s supposed dangers. He diverted effort from his own work into sabotaging Tesla’s reputation. His entire strategy centered on comparison: How do I beat Tesla?</p>

	      <p>Meanwhile, Tesla pressed forward with his own vision. He didn’t concern himself with Edison’s campaign or tactics. He focused on building a safer, more efficient system—one that eventually powered the world.</p>

	      <h2>Social Comparison</h2>
	      <p>Scoreboard syndrome, co-comparison, keeping up with the Joneses all fall under the umbrella of Social Comparison Theory. Social comparison was first conceptualized by Dr. Leon Festinger, a pioneer in the field of social psychology, in the 1950s. He proposed that people have a natural tendency to evaluate their abilities, opinions, and progress by comparing themselves to others, especially when objective benchmarks are unavailable. Social comparison misaligns our priorities and wastes resources. It kills motivation and undermines progress. For Edison, social comparison pulled focus away from innovation and channeled it into sabotage, which cost him, his work, and his legacy dearly.</p>

	      <p>In the age of social media, social comparison is especially pernicious. Anybody can pretend to be anything they want to be, and they usually pretend to be better off than they actually are. Fitness influencers showcase impossible physiques, often backed by filters, performance-enhancing drugs, or lighting tricks. Self-proclaimed business gurus flaunt wealth and claim they’ve hacked the system while quietly making money by selling courses to people chasing their image. Picture-perfect relationships, parenting hacks, and even zen-level inner peace can all be easily staged online (#WokeUpLikeThis). The danger is that people compare their real, imperfect, messy lives to carefully-curated performances. Social comparison is beefed up to not just compare us to each other, but to ideals that almost no one can achieve.</p>

	      <p>Even those who have been successful in their fields—people who have actually done the things that you want to achieve—aren’t great measuring sticks for personal progress. When we compare ourselves with our idols, our successes are overshadowed. No matter how hard you try and how lucky you are, you will never sell as many books as <em>Stephen King</em> and you will never sell as many records as <em>Michael Jackson</em>. That doesn’t mean you can’t be a successful author or recording artist. When you chase someone else’s scoreboard, you diminish your own victories.</p>

	      <h2>Be Your Own Measuring Stick</h2>
	      <p>Long-term success isn’t about being better than anybody else—it’s about making meaningful progress on your own path. If your only measure for success is beating <em>J.K. Rowling</em> in book sales or starting a company that makes more money than Microsoft, you will be unhappy for the rest of your life (even if you achieve your goal). When we constantly compare ourselves to the most successful people in the world, we devalue the progress we achieve along the way.</p>

	      <p>Use your own goals and progress as a measure of success. Don’t compare yourself with other people and don’t become part of the problem by posturing success online. Run your own race. Escape the trap of social comparison by setting worthwhile goals, working to achieve them, and celebrating the progress you make along the way.</p>

	      <p>Be happy for others when they succeed and be happy for yourself when you do the same.</p>

	      <p>Be your own measuring stick.</p>

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