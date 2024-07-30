<template>
  <section class="section-padding">
    <div class="container thinnest-content">
      <div>
        <h1 class="mb-3">Better Business Writing</h1>
        <p class="tagline fst-italic blue mb-5">June 17, 2024</p>

        <p>Sometimes, a writer can change your life. Scott Adams changed mine.</p>
        <p>Adams is the mastermind behind
          <a target="_blank" href="https://dilbert.com/">
            the Dilbert comic strip
          </a>. He also has a blog.
          <a target="_blank" href="https://dilbertblog.typepad.com/the_dilbert_blog/2007/06/the_day_you_bec.html">
            One of the articles on that blog
          </a>
          is about becoming a better writer.</p>
        <p>Adam's says, in a nutshell:</p>
        <ul>
          <li>Keep it simple</li>
          <li>Get rid of extra words</li>
          <li>The first sentence should grab the reader</li>
          <li>Avoid multiple thoughts in a single sentence</li>
        </ul>
        <p>Basically, writing should be as easy to understand as possible. Make your work entertaining, but not at the expense of simplicity. Scott Adams' 263-word post gave me the confidence to start writing daily (you're the man Scott).</p>
        <p>The last line of the article says:</p>
        <p>
          <em>“That's it. You just learned 80% of the rules of good writing. You're welcome.</em>”</p>
        <p>I first assumed that the remaining 20% would include granular, complex stuff like, “know your target audience” or “have an editor run through your work.”</p>
        <p>Then I read <a target="_blank" :href="affiliateLinks.books.theWarOfArt"><em>The War of Art</em></a> by Steven Pressfield.</p>
        <p>Pressfield's writing embodies many of the principles from Adams' post. His sentences are concise. His “chapters” are often a single paragraph.
          <em>The War of Art</em>
          itself barely breaks 150 pages. Anyone would be hard pressed to cut a phrase from that book without making it worse. If books were people,
          <em>The War of Art
          </em>would have 3% body fat.</p>
        <p>But the thing that makes Steven Pressfield a great writer isn't the leanness of his writing. Every portion of
          <em>The War of Art</em>
          is meaningful. His singular focus on what he calls
          <em>Resistance
          </em>captivates and inspires the reader.</p>
        <p>The main characteristic of great writing is something great to write about.</p>
        <p>If I could append a sentence to Scott Adams' nigh perfect blog post, it would be this:</p>
        <p>“<em>That's it. You just learned 80% or the rules of good writing. Now find something worth writing about.”</em>
        </p>
        <p>Write simply. Keep it lean. Convey ideas to your audience as clearly as possible. And, for the love of Scott and Steven, write about something meaningful.</p>

        <div class="sources">
          <p>Sources</p>
          <ol>
            <li>
              <a target="_blank" href="https://dilbert.com/">
                https://dilbert.com
              </a>
            </li>
            <li>
              <a target="_blank" href="https://dilbertblog.typepad.com/the_dilbert_blog/2007/06/the_day_you_bec.html">
                https://dilbertblog.typepad.com
              </a>
            </li>
            <li><a :href="affiliateLinks.books.theWarOfArt" target="_blank">The War of Art by Steven Pressfield</a>: Pressfield, S. (2002).
              <em>The war of art: Break through the blocks and win your inner creative battles</em>. Black Irish Entertainment LLC.</li>
          </ol>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import affiliateLinks from "@/assets/affiliateLinks.json";
</script>