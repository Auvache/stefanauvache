<template>
  <section class="section-padding">
    <div class="container thinnest-content">
      <div>
        <h1 v-if="article.title" class="mb-1">{{article.title}}</h1>
        <p v-if="article.datePublished" class="tagline fst-italic blue">{{formatDate(article.datePublished)}}</p>

        <p>“If you haven’t read hundreds of books, you are functionally illiterate, and you will be incompetent, because your personal experiences alone aren’t broad enough to sustain you.” - Jim Mattis</p>
        <p>“You dropped a hundred and fifty grand on a f@#%*^’ education you coulda' got for a dollar fifty in late charges at the public library.” - Good Will Hunting</p>
        <p>Many are blessed with the opportunity to gain a structured education. Many are not. Whether you have a masters degree in mathematics or started working at 16 years old, there comes a point in life when education is no longer thrust upon you as part of the system. There are no default teachers and professors. No assignments, deadlines, or grades to deepen our learning. In the absence of structure, our time and minds are freed to study things that we find engaging. Often, we choose to study nothing. We allow our learning to stagnate and erode away.</p>
        <p>A lack of educational structure is daunting. Whether you have completed a formal education or never took the opportunity to do so, there is a way to be a lifelong student:</p>
        <p>Find interesting, powerful books and read them.&nbsp;</p>
        <p>Without further blabbing, here are the books that have changed my life. I recommend these books to everyone.</p>
        <p class="t3">The Alchemist - Paulo Coelho&nbsp;</p>
        <p>A young shepherd embarks on a journey to find his personal treasure. Through the ups and downs of his quest, he realizes that the treasure isn’t just the destination. The treasure is the journey.&nbsp;</p>
        <p>The beauty of life isn’t where we are headed; it is that we are alive. Follow what drives you. Do hard things. If this seems cliche, remember this: behind most cliches are the secrets to life.</p>
        <p class="t3">Man’s Search for Meaning - Viktor Frankl</p>
        <p>Dr. Viktor Frankl spent most of World War II fighting for his life in concentration camps, including the infamous Auschwitz. The first half of the book documents his experiences as a prisoner. The second half of the book describes logotherapy, a form of therapy developed by Dr. Frankl. Logotherapy seeks to heal those who have experienced trauma by finding meaning in their suffering.</p>
        <p>This book should be required reading for every sixteen year old in the world. We don’t ask ourselves what the meaning of life is. Life asks us that question when we face trials. We answer by how we respond to those trials.&nbsp;</p>
        <p class="t3">The War of Art - Steven Pressfield</p>
        <p>Our desire to do anything worthwhile is met by Resistance with a capital R. Resistance is the personification of the force that keeps us from doing our work. As a human being with work to do, your main goal each day is this: overcome Resistance.&nbsp;</p>
        <p>This book is a paradigm-shifter for what it means to work hard. Whenever I find myself not wanting to sit and focus, work, write, run, lift weights, or get out of bed, my mind now points to Resistance. Steven Pressfield identifies the enemy of productivity and empowers the reader to overcome it. I cannot more highly recommend this book.</p>
        <p class="t3">Deep Work - Cal Newport</p>
        <p>The key to satisfying work isn’t the task at hand, it is the depth of focus that you achieve in completing the task. Remove distractions, schedule uninterrupted chunks of time, and work deeply. Your job satisfaction and quality of life will increase.</p>
        <p>Focus on that one thing at a time. Multitasking is for people who don’t care about what they are doing. Your potential for doing great work starts with your dedication to working deeply.</p>
        <p class="t3">Little Princes - Connor Grennan</p>
        <p>In an attempt to justify quitting his job and traveling around the world, Connor Grennan begins his year of wandering by volunteering at an orphanage outside of Kathmandu for three months. When he learns that most of the boys at the orphanage are victims of child trafficking, he begins a lifelong quest to reunite them with their parents and cultures.&nbsp;</p>
        <p>Selfless service changes you. This memoir reminds me over and over again that happiness and meaning are found in serving others. I simply love this book. It is an amazing story.</p>
        <p class="t3">Freakonomics - Steven Levitt and Stephen Dubner</p>
        <p>Things aren’t always as they seem. Asking questions and honestly trying to answer them can help you more deeply understand the world.&nbsp;</p>
        <p>Freakonomics was my entry point into the world of nonfiction reading. Steven Levitt and Stephen Dubner taught me that real-world stories and research can be endlessly entertaining, thought provoking, and meaningful.</p>
        <p class="t3">Mastery - Robert Greene</p>
        <p>Robert Greene presents the path to mastery as seen throughout history. Find what you love enough to master, focus intensely on learning everything you can through apprenticeship, break off on your own to create within your field, and continue to work until the skills and knowledge of your craft become a part of who you are. Mastery isn’t just something that everyone is capable of; it is our duty as members of society to find and follow our path to mastery.</p>
        <p>Robert Greene taught me to search my soul for passion, and then to pursue it with everything I have. His books also contain an outrageous number of compelling stories from history. He is a master and inspires me to someday be a master as well.</p>
        <p class="t3">Meditations - Marcus Aurelius</p>
        <p>The personal writings of Marcus Aurelius, Roman Emperor, about how to live properly. Meditations is a compilation of Marcus’ writings to himself, intended for his eyes only.</p>
        <p>Marcus changed my journaling. Thanks to Meditations, I eliminated any expectations I had for myself in daily writing and began to write whatever was on my mind. This method of journaling kickstarted a journey to get to know myself better.</p>
        <p>These books are game changers for me. They can change the game for you, too. Read them.</p>

        <div class="sources">
          <p>Sources</p>
          <ol>
            <li>
              <a target="_blank" href="https://www.goodreads.com/quotes/9949532-if-you-haven-t-read-hundreds-of-books-you-are-functionally">
                <span style="color:rgb(17, 85, 204);">https://www.goodreads.com</span>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.americanrhetoric.com/MovieSpeeches/specialengagements/moviespeechgoodwillhunting.html#:~:text=And%20two%3A%20You%20dropped%20a,charges%20at%20the%20public%20library">
                <span style="color:rgb(17, 85, 204);">https://www.americanrhetoric.com</span>
              </a>
            </li>
            <li>The Alchemist by Paulo Coelho: Coelho, P. (1993).
              <em>The alchemist</em>. HarperCollins.</li>
            <li>Man's Search for Meaning by Viktor Frankl: Frankl, V. E. (2006).
              <em>Man's search for meaning</em>. Beacon Press.</li>
            <li>The War of Art by Steven Pressfield: Pressfield, S. (2002).
              <em>The war of art: Break through the blocks and win your inner creative battles</em>. Black Irish Entertainment LLC.</li>
            <li>Deep Work by Cal Newport: Newport, C. (2016).
              <em>Deep work: Rules for focused success in a distracted world</em>. Grand Central Publishing.</li>
            <li>Little Princes by Connor Grennan: Grennan, C. (2011).
              <em>Little princes: One man's promise to bring home the lost children of Nepal</em>. William Morrow.</li>
            <li>Freakonomics by Steven D. Levitt and Stephen J. Dubner: Levitt, S. D., &amp; Dubner, S. J. (2005).
              <em>Freakonomics: A rogue economist explores the hidden side of everything</em>. William Morrow.</li>
            <li>Mastery by Robert Greene: Greene, R. (2012).
              <em>Mastery</em>. Viking Adult.</li>
            <li>Meditations by Marcus Aurelius (translated by Gregory Hays): Aurelius, M. (2002).
              <em>Meditations (G. Hays, Trans.)</em>. Modern Library.</li>
          </ol>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import getArticleData from "@/functions/getArticleData";
import formatDate from "@/functions/formatDate";
import {onBeforeMount, ref} from "vue";
const article = ref({"title" : "", "datePublished" : ""})

onBeforeMount(() => {
  article.value = getArticleData()
})
</script>