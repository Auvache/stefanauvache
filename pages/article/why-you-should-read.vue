<template>
  <section class="section-padding">
    <div class="container thinnest-content">
      <div>
        <h1 class="mb-3">Why You Should Read</h1>
        <p class="tagline fst-italic blue mb-3">October 4, 2024</p>

        <p>George Yeomans Pocock saw barely any formal education after the age of 14. His was a life dedicated to the sport of rowing, specifically the art of handcrafting racing shells; long, narrow boats fit for a small team of rowers. He was born on the banks of the Thames in London to a father who built boats for a living. After winning money in a rowing contest, he and his brother Dick emigrated from England to British Columbia, Canada. His road eventually led him to the University of Washington in Seattle where he was able to hone and perfect his craft.</p>

        <p>The young athletes who rowed for the university treated Pocock with the utmost respect. Despite his lack of formal education, he was very well read. He spoke eloquently and wisely when he chose to speak. He had a reputation as a stoic, humble master-craftsman, and the boys dared not enter his workshop for fear of interrupting his work.</p>

        <p>In lieu of structured schooling, Pocock built his education through reading.</p>

        <p>I am a proponent of higher education. If you can, attend university. Taken seriously, it will undoubtedly leave you a more educated, well-rounded person. But university degrees require resources, like time and money, and those can be hard to come by.</p>

        <p>Luckily, university isn’t the only method of education.</p>

        <p>A reading habit will do more for your personal education level than earning a university degree. Here are three reasons why.</p>

        <p>First, competence is more important than credential. Just because you attend a university doesn’t mean you will be good at what you study. Reading is a focus on personal competence. By reading, application, and practice, there is (almost) nothing you cannot learn (if you want to be a doctor, you should go to school). For the record, without a good reading habit, you won’t do well at university anyway.</p>

        <p>Second, books are nigh universally available. The average cost of a four year degree in the United States is over $100,000. You can own the 10 most important books in your chosen field for less than $200, or borrow them from the public library for nothing at all.</p>

        <p>Third, university studies are temporary. A lifelong reading habit will undoubtedly leave you more educated than any four-year university ever could.</p>

        <p>So, what should you read?</p>

        <p>Find someone who has the career or lifestyle that you wish to emulate and ask them for book recommendations. Everyone from authors to presidents to rappers has an online book list filled with useful titles that are meaningful to them.</p>

        <p>For the most part, you can google someone you admire followed by “reading list” (i.e. Stephen King reading list) and find recommendations in the first few results.</p>

        <p class="fw-bold">Online book lists I use</p>
        <ul>
          <li><NuxtLink to="/article/books-that-have-changed-my-life">Here are some of the books that have changed my life</NuxtLink></li>
          <li><a href="https://ryanholiday.net/the-reading-list/" target="_blank">Ryan Holiday’s life-changing books</a></li>
          <li><a href="https://thoughtcatalog.com/ryan-holiday/2014/10/the-16-best-books-about-marketing-period/" target="_blank">Books on marketing</a></li>
          <li><a href="https://medium.com/@neciudan/tech-books-you-have-to-read-to-be-a-better-software-engineer-bc719127c218" target="_blank">Books on software engineering</a></li>
          <li><a href="https://barackobama.medium.com/my-2024-summer-reading-music-lists-b097561ba000" target="_blank">President Obama’s 2024 reading list</a></li>
          <li><a href="https://www.jordanbpeterson.com/books/" target="_blank">Jordan Peterson’s recommended books on philosophy, classic literature, psychology, neuroscience, religion, history, and modern times</a></li>
          <li><a href="https://radicalreads.com/jay-z-favorite-books/" target="_blank">Books Jay-Z lives by</a></li>
          <li><a href="https://markmanson.net/33-life-changing-books" target="_blank">Mark Manson’s nonfiction reading list</a></li>
        </ul>

        <div class="resources">
          <p>Resources</p>
          <ul>
            <li><a :href="affiliateLinks.books.theBoysInTheBoat" target="_blank">The Boys in the Boat by Daniel James Brown</a></li>
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
// meta tags
let metaTitle = `${articleInfo.title}`
let metaDescription = `${articleInfo.summary}`
let metaKeywords = `Stefan, Stefan Auvache, Auvache, ${articleInfo.keywords}`
let metaCanonical = `www.stefanauvache.com/article/${articleInfo.slug}`
useSeoMeta({title: metaTitle, ogTitle: metaTitle, description: metaDescription, ogDescription: metaDescription, keywords: metaKeywords, canonical: metaCanonical})
</script>