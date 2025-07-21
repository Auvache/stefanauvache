<template>
  <section class="section-padding">
    <div class="container thinnest-content">
      <div>
        <h1 class="mb-3">Do your work</h1>
        <p class="tagline fst-italic blue mb-3">By Stefan Auvache</p>

        <p>“Bolt, if you can beat Ricardo in the school sports day race, I’ll give you a box lunch.”</p>

        <p>For 8-year-old Usain, a box lunch meant juicy jerk chicken with rice, peas, and roasted sweet potatoes. How could he say no?</p>

        <p>Usain had always loved to compete, just like all of the other kids he knew. But for him, speed was a means to an end. It empowered him to run around with his friends for hours in the Jamaican bush and to easily take down batsmen in an intense cricket match. He didn’t care for organized sprinting. At least not until Mr. Nugent, one of his elementary school teachers, put jerk chicken on the line. Usain had no problem eating the whole box after winning that first race. The food wasn’t even the best part.</p>

        <p>“Winning was like an explosion, a rush. Joy, freedom, fun - it hit me all at once. For the first time, the buzz of serious competition had forced me to step up. I was a champ, and as I tumbled to the ground at the end of the lanes I knew one thing: being Number One felt pretty good.”</p>

        <p>Over the following years, Usain had his fair share of coaches and training plans. He jokes that his first coach was his dog. His dad didn’t want him to play in the bush too far from home, so Usain would take the dog with him to play while his dad was at work. When the dog’s ears perked up, Usain knew that dad’s motorcycle was rolling up the road and that play time was over. Both Usain and the dog would sprint home as fast as they could.</p>

        <p>At 18 years old, Usain started training with Glen Mills, the coach who would remain by his side for the rest of his career. Coach Mills tailored a training regimen to Usain’s strengths and weaknesses. The plan included more weightlifting and core exercises than Usain had ever done in his life. It also included extensive warm-ups, massage therapy, and extra exercises at home after practice. Even with partial compliance on Usain’s behalf, results came quickly. Usain was diligent with the sprinting portions of his workouts, but was less so with weight training. He would often go through the motions without intensity and would sometimes skip training sessions completely. After taking silver at the World Championships in Osaka, Japan in 2007, Coach Mills had words for Usain.</p>

        <p>“You’re slacking off in the gym. You think you’re doing the work, but you’re not… You’re doing part of the work and, yes, it feels tough, but you need to do it all. Get that fact into your headquarters.”</p>

        <p>While second place in the World Championships would have been enough for other coaches, Mills knew that Usain wasn’t reaching his potential. A great plan doesn’t do any good unless it is put into action. That conversation with Coach Mills lit a fire inside of Usain. He didn’t want to lose any race ever again for lack of his own preparation.</p>

        <p>Usain stopped skipping out on training sessions. He followed Coach Mills’ plan as diligently as he could. The following year, 14 years after the box-lunch wager with Mr. Nugent, Usain Bolt won three gold medals and broke three world records in the 2008 Beijing Olympic Games.</p>

        <p>No amount of planning can make up for a lack of execution. Doing your work is the only thing that will actually take you anywhere. Carefully selecting a long list of books to read doesn’t make you a reader, just like finding the perfect diet and training plan doesn’t make you faster, stronger, or thinner. A plan is worth nothing to you if you don’t follow through.</p>

        <p>Once you have your plan in place, do your work.</p>

      </div>
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