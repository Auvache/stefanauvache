<template>
  <section class="section-padding">
    <div class="container thinnest-content">
      <div>
        <h1 class="mb-3">Monk Week - How Taking Exams Early Changed My Life</h1>
        <p class="tagline fst-italic blue mb-3">July 30, 2024</p>

        <p>I never wait in line if I can avoid it. Placing myself unnecessarily in a line is a conscious admonition to myself that I don't care about my time, and therefore don't care about my life.</p>
        <p>This quality of mine manifested in college. On the last day of exam week, a quarter-mile-long line of students cut the campus in half, stretching from the testing center to the cafeteria. I watched kids stand in line for hours, nervously waiting to take an exam. </p>
        <p>That blows. </p>
        <p>I avoided that line like the plague. My method for avoiding the lines and the stress of finals week was this; take all exams as soon as they are available. This led to me walking straight into the testing center at 7am on the first day of finals week, then walking back in at 8:30am right after finishing the first exam to take my second one. I called this tradition finals day. I was usually done with all of my exams by 3 or 4pm.</p>
        <p>My sister and I attended the same university at roughly the same time. During my first semester, we had planned to fly home together for the Christmas break between semesters. Our flight was booked for the last day of finals week. My sister doesn't abhor lines. Like most students, she took her time studying and taking exams throughout the week. </p>
        <p>This left me with an interesting dilemma; everyone on campus was studying except for me. I had 100 hours (give or take) before I was flying home. I had no car, lived on campus, and all of my friends were studying.</p>
        <p>I had stumbled into a week with no school, no work, and no friends. I took some walks around campus, caught up on some reading, and, as one does, started to think about what I wanted to do with my life. I had accidentally become a 21st-century collegiate monk.</p>
        <p>During my week as a monk, I realized that my current trajectory was unclear. There was a lot of raw energy and life in me, but no path to go down. I grabbed my notebook, laptop, and headed for the library. I camped out there for almost three straight days.</p>
        <p>My soul searching started with binge reading. The list included:</p>
        <ul>
          <li><a :href="affiliateLinks.books.howToWinFriendsAndInfluencePeople" target="_blank">How to Win Friends and Influence People by Dale Carnegie</a></li>
          <li><a :href="affiliateLinks.books.focalPoint" target="_blank">Focal Point by Brain Tracy</a></li>
          <li><a :href="affiliateLinks.books.influence" target="_blank">Influence by Robert Cialdini</a></li>
          <li><a :href="affiliateLinks.books.theRichestManInBabylon" target="_blank">The Richest Man in Babylon by George Clason</a></li>
          <li><a :href="affiliateLinks.books.the4HourWorkWeek" target="_blank">The 4-Hour Workweek by Timothy Ferriss</a></li>
          <li><a :href="affiliateLinks.books.freakonomics" target="_blank">Freakonomics by Steven Levitt and Stephen Dubner</a></li>
        </ul>
        <p>After stewing on what other people had to say about life, efficiency, and success, I started to write down the big questions that were on my mind.</p>
        <p>What do I want to get out of life? </p>
        <p>What do I want life to look like when I graduate? </p>
        <p>What are my values? </p>
        <p>Who am I?</p>
        <p>The longer I wrote, the deeper and more overwhelming the questions became. But that is a good thing. If you want to make any kind of changes in the direction or quality of your life, you need to ask questions that you don't know the answers to, then honestly try to answer them. </p>
        <p>I am not alone in my discovery of periodic monklike living. </p>
        <p>Carl Jung would retreat to a place he called <a href="https://en.wikipedia.org/wiki/Bollingen_Tower" target="_blank">the Tower</a> for months at a time, writing in the morning and spending the rest of his time reading books and walking in the countryside. Bill Gates attributes his best ideas to semiannual <a href="https://www.cnbc.com/2019/07/26/bill-gates-took-solo-think-weeks-in-a-cabin-in-the-woods.html" target="_blank">Think Weeks</a> where he locks himself away, reads books, and thinks about the big issues on his mind. </p>
        <p>You don't have to be successful to set aside time for deep reflection. Setting aside time to read, think, and plan makes you more successful.</p>
        <p>When I emerged from the depths after my first monk week, I realized that what I really wanted was the freedom to live how he wanted to live. I didn't want to work 80 hours a week in an office, climb the business ladder, or manage other people. I wanted to do something engaging that made decent money and allowed me to spend my time doing this I love to do, and that is what I have done.</p>
        <p>My week in the library was a calibration. It oriented my decision-making values. Most every important decision I have made since my freshman year at college has been influenced by values and ideas discovered during monk weeks. </p>
        <p>The next time you have a week off, or a vacation, or a free weekend, take one day, disconnect from the internet, and think about who you want to be. Then write about it.</p>
        <p>Be a monk, not a punk.</p>

        <div class="resources">
          <p>Resources</p>
          <ul>
            <li><a :href="affiliateLinks.books.howToWinFriendsAndInfluencePeople" target="_blank">How to Win Friends and Influence People by Dale Carnegie</a></li>
            <li><a :href="affiliateLinks.books.focalPoint" target="_blank">Focal Point by Brain Tracy</a></li>
            <li><a :href="affiliateLinks.books.influence" target="_blank">Influence by Robert Cialdini</a></li>
            <li><a :href="affiliateLinks.books.theRichestManInBabylon" target="_blank">The Richest Man in Babylon by George Clason</a></li>
            <li><a :href="affiliateLinks.books.the4HourWorkWeek" target="_blank">The 4-Hour Workweek by Timothy Ferriss</a></li>
            <li><a :href="affiliateLinks.books.freakonomics" target="_blank">Freakonomics by Steven Levitt and Stephen Dubner</a></li>
            <li><a href="https://en.wikipedia.org/wiki/Bollingen_Tower" target="_blank">Carl Jung's Tower</a></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import affiliateLinks from "@/assets/affiliateLinks";
import articlesList from "@/assets/articlesList";
import formatDate from "~/functions/formatDate";

const router = useRouter()
const { currentRoute } = router
const articleInfo = articlesList.find(article => article.slug === currentRoute.value.fullPath.replace('/article/',''))
console.log(articleInfo)
// meta tags
let metaTitle = `${articleInfo.title}`
let metaDescription = `${articleInfo.summary}`
let metaKeywords = `Stefan, Stefan Auvache, Auvache, ${articleInfo.keywords}`
let metaCanonical = `www.stefanauvache.com/article/${articleInfo.slug}`
useSeoMeta({title: metaTitle, ogTitle: metaTitle, description: metaDescription, ogDescription: metaDescription, keywords: metaKeywords, canonical: metaCanonical})
</script>