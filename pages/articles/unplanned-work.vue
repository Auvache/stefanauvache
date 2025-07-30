<template>
  <section class="section-padding">
    <div class="container thinnest-content">
      <div>
        <h1 class="mb-3">{{articleInfo.title}}</h1>
	      <p class="tagline fst-italic blue mb-3">By Stefan Auvache</p>
        <img src="/img/articles/unplanned-work.jpg" alt="" class="mb-3">

        <p class="quote">"The first 90 percent of the code accounts for the first 90 percent of the development time. The remaining 10 percent of the code accounts for the other 90 percent of the development time."<br/> - Tom Cargill</p>

        <p>Creative projects take an immense amount of work. Whether you are coding new software, writing a book, building muscle, or raising children, there is more work to do than you plan and prepare for. In software, this is jokingly called the ninety-ninety rule; once you code the first 90%, you need to code the second 90%.</p>

        <p>In <a :href="affiliateLinks.books.thePhoenixProject" target="_blank">Gene Kim’s novelization of a chaotic business on the verge of collapse,</a> Bill, the protagonist, is forced to take a job as the VP of an IT department that never gets anything done on time and is spiraling out of control. Among other things, he identifies one major source of the problem as unplanned work.</p>

        <p>Unplanned work is a nigh universal experience. It is the firefighting and damage control and unforeseen consequences that prevent planned work from getting done. Luckily for us (and Bill), there are ways to prevent and minimize the damage caused by unplanned work.</p>

        <h2>Visibility</h2>

        <p>First, visibility. If you don’t know everything that has to happen to complete a project, you cannot accurately plan a timeline for the completion of said project. If you don’t know how many projects and responsibilities you have, you can’t coordinate resources to work on your projects, and nothing gets done.</p>

        <p>This is as true in IT, business, and manufacturing as it is in raising kids, getting a degree, and personal hygiene. It would be great to have a fulfilling career, a business on the side, a rock band to play in, a published novel, a thriving social life, and still have time to take your kids to the park and take the dog on a walk. But you can’t, and you won’t. If you can’t gauge how full the proverbial plate is, you can’t accurately manage your work.</p>

        <p>In Bill’s case, he set up a notecard system to track all work that needed to be completed in the IT department. At first, it seemed to create more work for everyone. Who wants to organize hundreds of notecards? The team quickly realized that it didn’t create more work; it shined a light on how much work there was to actually accomplish.</p>

        <p>You can do something similar in your personal workload, whether it be school work, career oriented, or general time management.</p>

        <p>Write down a list of every piece of work you need to do. It can be as granular as you need it to be. Set meetings (work meetings, classes, dropping your kid off at soccer practice) count as work to be done.</p>

        <p>The list might overwhelm you, and you probably forgot something. But that’s ok. The point is to get a view of how much work you have on your plate.</p>

        <h2>Prioritize, organize, and do work</h2>

        <p>Once Bill (our fated hero) knows how much work there is to do, he prioritizes the work based on what is most important. Everything else is frozen. Nothing else is to distract the workers from their goal.</p>

        <p>Now that you have a list of everything you need to do this week, what are your top priorities? <NuxtLink to="/articles/eliminate-automate-delegate-do">Are there any items that you could remove from your plate?</NuxtLink> How many of these things can you reasonably do with the time you have available?</p>

        <p>Odds are, some things won’t make the cut. Luckily, some things can be pushed off to the next chunk of work time (next week, next month, never :) ). This level of organization also empowers efficient, non-distracted work, which will help you be more productive.</p>

        <h2>Account for unplanned work</h2>

        <p>Here is the secret to avoiding the overwork and failure caused by the ninety-ninety rule; account for unplanned work. Double the amount of time you think it will take you to complete each task. Don’t make commitments that you can only accomplish if all of your work goes as smoothly as possible and nothing blows up in your face.</p>

        <p>If everything goes well and you finish all of your work, great! Look at what is going on next week. If something pops up that takes time and/or resources away from your work (you get sick, there is a surprise assignment, your kid throws up all over the car, etc.), you will be prepared, or at least more prepared.</p>

        <p>If I look at my 40-hour workweek, I can reasonably schedule activities that I think will take 30 hours to accomplish. When something "small" or "quick" pops up, I often have time to take care of it without having to drop other things I am working on.</p>

        <br/>
        <p>Problems arise. Setbacks occur. Additional changes are needed and the end product ends up being not quite what you need. If you don’t account for inevitable, necessary unplanned work ahead of time, you will have to find more time by dropping something else, which causes pain for you and other affected parties.</p>

        <p>Almost like clockwork, my five-month-old son blows out of his diaper as soon as he goes in his car seat. This used to make us 10-15 minutes late when leaving the house. Now, we see that unplanned work creeping (in this case, leaking) into the schedule, and account for it.</p>

        <p>Sometimes, we are even early.</p>

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
let metaDescription = `${articleInfo.summary}`
let metaKeywords = `Stefan, Stefan Auvache, Auvache, ${articleInfo.keywords}`
let metaCanonical = `www.stefanauvache.com/articles/${articleInfo.slug}`
useSeoMeta({title: metaTitle, ogTitle: metaTitle, description: metaDescription, ogDescription: metaDescription, keywords: metaKeywords, canonical: metaCanonical})
</script>