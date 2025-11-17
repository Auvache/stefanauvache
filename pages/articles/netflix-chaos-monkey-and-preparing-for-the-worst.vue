<template>
  <section class="section-padding">
    <div class="container thinnest-content">
      <div>
        <h1 class="mb-3">{{articleInfo.title}}</h1>
	      <p class="tagline fst-italic blue mb-3">By Stefan Auvache</p>
	      <img v-if="articleInfo.image !== 'title.jpg'" :src="`/img/articles/${articleInfo.image}`" alt="" class="mb-3">

        <p>On April 21, 2011, <a href="https://money.cnn.com/2011/04/21/technology/amazon_server_outage/index.htm" target="_blank">an entire Amazon AWS availability zone went down</a>, taking a large chunk of the internet down with it. Companies like Reddit, Foursquare, and Quora lost their internet presence with no idea how long it would take to get it back. For some companies, a crash of longer than an hour can cost hundreds of millions of dollars.</p>

        <p>Netflix, one of Amazon’s biggest AWS customers, however, was left unscathed by the outage.</p>

        <p>A few years before the outage, the IT guys at Netflix decided that it would be good to prepare for the worst. What would happen if some of our servers went down? What should we do if traffic spikes and our resources can’t handle it? A few key technical solutions were decided upon and implemented to prepare Netflix for the worst.</p>

        <p>One of them is Chaos Monkey.</p>

        <p><a href="https://www.geeksforgeeks.org/what-is-netflixs-chaos-monkey/" target="_blank">Chaos Monkey</a> is a program that looks at all AWS resources used by Netflix and starts randomly shutting them down to see what would happen in a controlled environment away from real customers. The initial results were, as intended, chaos. The site went down, features stopped working, and all manner of unforeseeable problems occurred. Netflix now had a long list of issues to fix that were previously hidden. By forcing the system to break, engineers were able to patch newly found holes, create redundancies, and prevent those same outages from happening again. Three years later, when AWS lost an availability zone, Netflix was ready. It took most companies a whole day to be back to their full capacity. For Netflix, one day is 200 million hours of streaming, and their customers didn’t miss a minute of it.</p>

        <p>Are you prepared for outages?</p>

        <p>While we can’t run an automated program to detect all of the potential, unseen problems in our lives, we can create our own personal Chaos Monkey by brainstorming the things that could go wrong in a given situation or project.</p>

        <p>In business, this is called a premortem; imagine what can go wrong, then work backwards to identify the source of failure and prevent it. An ounce of temporary pessimism followed by some problem solving and fortification can help you weather future storms and protect the things that are most important to you.</p>

        <p>This applies on both a personal and a professional level.</p>

        <p>What would happen if you lost your job? If you weren’t admitted to your chosen university? What if a project took twice as long to complete as initially estimated, or someone at work quit without warning? If you identify something that is out of your control, you can prepare yourself to withstand an outage. If you identify something inside your control, you can work to prevent and outage.</p>

        <p>In the biblical Genesis, <a href="https://www.nationalgallery.org.uk/paintings/glossary/joseph-old-testament#:~:text=He%20was%20taken%20to%20Egypt,was%20made%20governor%20of%20Egypt." target="_blank">the story of the first Joseph</a> is laid out. Joseph can see glimpses of the future by interpreting dreams. His brothers don’t like that very much, so they sell him to some slavers (talk about sibling rivalry). The slavers take him some 250 miles away to Egypt where he is sold into servitude. Joseph’s talent for interpreting dreams is eventually discovered. A while later, Pharaoh has a pair of recurring dreams that he can’t shake. Seven healthy cows are swallowed up by the Nile River, and seven sickly cows take their place. The same happens with crops. Pharaoh hears about Joseph, the slave who can interpret dreams, and tells him about the dream.</p>

        <p>The result is one of the first recorded premortem discussions in history. Joseph says that there will be seven years of plenty, with lots of crops, cows, rain, and prosperity. After those good years, Egypt will be hit with seven years of famine. If the Egyptians play their cards right, they can prepare during the time of harvest and prevent the famine from ravaging their society.</p>

        <p>Failure and success are lagging indicators. Your actions build up over time and lead to a particular result. When you prepare for famine, whether it be of food and water or AWS resources, you can prevent catastrophe.</p>

        <p>What things are out of your control? What can you do to prevent catastrophic events from ruining your plans, your systems and your life?</p>

        <p>What eventual outcomes are in your control? What measures can you take now to prevent those things from happening?</p>

        <p>Are you prepared for outages?</p>

      </div>
	    <ArticleShareLinks :slug="articleInfo.slug" />
    </div>
  </section>
</template>

<script setup>
import affiliateLinks from "@/assets/affiliateLinks";
import articlesList from "@/assets/articlesList";
import formatDate from "~/functions/formatDate";

const router = useRouter()
const { currentRoute } = router
const articleInfo = articlesList.find(article => article.slug === currentRoute.value.fullPath.replace('/articles/',''))
// meta tags
let metaTitle = `${articleInfo.title}`
let metaDescription = `${articleInfo.description}`
let metaKeywords = `Stefan, Stefan Auvache, Auvache, ${articleInfo.categories.join(', ')}, ${articleInfo.keywords}`
let metaCanonical = `www.stefanauvache.com/articles/${articleInfo.slug}`
useSeoMeta({title: metaTitle, ogTitle: metaTitle, description: metaDescription, ogDescription: metaDescription, keywords: metaKeywords, canonical: metaCanonical, robots: 'index, follow'})
</script>