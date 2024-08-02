<template>
  <section class="section-padding">
    <div class="container thinnest-content">
      <div>
        <h1 class="mb-3">Books that have changed my life</h1>
        <p class="tagline fst-italic blue mb-5">June 15, 2024</p>

        <p class="quote">“If you haven't read hundreds of books, you are functionally illiterate, and you will be incompetent, because your personal experiences alone aren't broad enough to sustain you.”<br> - Jim Mattis</p>
        <p class="quote">“You dropped a hundred and fifty grand on a f@#%*^' education you coulda' got for a dollar fifty in late charges at the public library.”<br> - Will, Good Will Hunting</p>
        <p>Many are blessed with the opportunity to gain a structured education. Many are not. Whether you have a masters degree in mathematics or started working at 16 years old, there comes a point in life when education is no longer thrust upon you as part of the system. There are no more teachers. No assignments, deadlines, or grades. We are free to study the things that we find engaging at our own pace.</p>
        <p>Often, we choose to study nothing. We allow our learning to stagnate and erode away.</p>
        <p>Lack of structure is a daunting educational hurdle to overcome. There is, however, a surefire way to be a lifelong student:</p>
        <p>Find interesting, powerful books and read them.</p>
        <p>Without further blabbing, here are the books that have changed my life. I cannot recommend them more highly to anyone.</p>

        <h2 class="t3"><a class="blue" :href="affiliateLinks.books.theAlchemist" target="_blank">The Alchemist by Paulo Coelho</a></h2>
        <p>The beauty of life isn't where we are headed; it is that we are alive. Follow what drives you. In the end, it is easier to do the hard thing than to live with yourself when you take the easy road.</p>

        <h2 class="t3"><a class="blue" :href="affiliateLinks.books.mansSearchForMeaning" target="_blank">Man's Search for Meaning by Viktor Frankl</a></h2>
        <p>We don't ask ourselves what the meaning of life is. Life asks us that question when we face trials. We answer by how we respond to those trials. We give life meaning by responding honorably to hardship.</p>

        <h2 class="t3"><a class="blue" :href="affiliateLinks.books.theWarOfArt" target="_blank">The War of Art by Steven Pressfield</a></h2>
        <p>Our desire to do anything worthwhile is met by Resistance with a capital R. Resistance is the personification of the force that keeps us from doing our work. As a human being with work to do, your main goal each day is this: overcome Resistance.</p>

        <h2 class="t3"><a class="blue" :href="affiliateLinks.books.deepWork" target="_blank">Deep Work by Cal Newport</a></h2>
        <p>The key to satisfying work isn't the task at hand, it is the depth of focus that you achieve in completing the task. Multitasking is for people who don't care about what they are doing. Focus on one thing at a time.</p>

        <h2 class="t3"><a class="blue" :href="affiliateLinks.books.littlePrinces" target="_blank">Little Princes by Connor Grennan</a></h2>
        <p>This is a true story about how selfless service changes who you are. It reminds me over and over again that happiness and meaning are found in serving others. You may not be able to change the world, but you can change the world for someone.</p>

        <h2 class="t3"><a class="blue" :href="affiliateLinks.books.freakonomics" target="_blank">Freakonomics by Steven D. Levitt and Stephen J. Dubner</a></h2>
        <p>Thinking can be endlessly entertaining. Things aren't always as they seem. Don't be afraid to ask questions.</p>

        <h2 class="t3"><a class="blue" :href="affiliateLinks.books.mastery" target="_blank">Mastery by Robert Greene</a></h2>
        <p>Mastery isn't just something that everyone is capable of; it is our duty as members of society to find and follow our path to mastery. Search your soul for passion, and then to pursue it with everything you have.</p>

        <h2 class="t3"><a class="blue" :href="affiliateLinks.books.meditations" target="_blank">Meditations by Marcus Aurelius</a></h2>
        <p>Write about who you are and who you want to be. Strive to be excellent. This is how you change your life.</p>


        <div class="sources">
          <p>Sources</p>
          <ol>
            <li>
              <a target="_blank" href="https://www.goodreads.com/quotes/9949532-if-you-haven-t-read-hundreds-of-books-you-are-functionally">
                https://www.goodreads.com
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.americanrhetoric.com/MovieSpeeches/specialengagements/moviespeechgoodwillhunting.html#:~:text=And%20two%3A%20You%20dropped%20a,charges%20at%20the%20public%20library">
                https://www.americanrhetoric.com
              </a>
            </li>
            <li><a :href="affiliateLinks.books.theAlchemist" target="_blank">The Alchemist by Paulo Coelho</a>: Coelho, P. (1993).
              <em>The alchemist</em>. HarperCollins.</li>
            <li><a :href="affiliateLinks.books.mansSearchForMeaning" target="_blank">Man's Search for Meaning by Viktor Frankl</a>: Frankl, V. E. (2006).
              <em>Man's search for meaning</em>. Beacon Press.</li>
            <li><a :href="affiliateLinks.books.theWarOfArt" target="_blank">The War of Art by Steven Pressfield</a>: Pressfield, S. (2002).
              <em>The war of art: Break through the blocks and win your inner creative battles</em>. Black Irish Entertainment LLC.</li>
            <li><a :href="affiliateLinks.books.deepWork" target="_blank">Deep Work by Cal Newport</a>: Newport, C. (2016).
              <em>Deep work: Rules for focused success in a distracted world</em>. Grand Central Publishing.</li>
            <li><a :href="affiliateLinks.books.littlePrinces" target="_blank">Little Princes by Connor Grennan</a>: Grennan, C. (2011).
              <em>Little princes: One man's promise to bring home the lost children of Nepal</em>. William Morrow.</li>
            <li><a :href="affiliateLinks.books.freakonomics" target="_blank">Freakonomics by Steven D. Levitt and Stephen J. Dubner</a>: Levitt, S. D., &amp; Dubner, S. J. (2005).
              <em>Freakonomics: A rogue economist explores the hidden side of everything</em>. William Morrow.</li>
            <li><a :href="affiliateLinks.books.mastery" target="_blank">Mastery by Robert Greene</a>: Greene, R. (2012).
              <em>Mastery</em>. Viking Adult.</li>
            <li><a :href="affiliateLinks.books.meditations" target="_blank">Meditations by Marcus Aurelius (translated by Gregory Hays)</a>: Aurelius, M. (2002).
              <em>Meditations (G. Hays, Trans.)</em>. Modern Library.</li>
          </ol>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import affiliateLinks from "@/assets/affiliateLinks.json";
</script>