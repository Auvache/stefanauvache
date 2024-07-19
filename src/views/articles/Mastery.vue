<template>
  <section class="section-padding">
    <div class="container thinnest-content">
      <div>
        <h1>{{article.title}}</h1>
        <p>{{article.datePublished}}</p>

        <p>I have a passion for craft. As a guitar player, as a software engineer, and as a writer, I find fulfillment in deepening my understanding in something. The pathway to depth of craftsmanship is called mastery, and it turns my crank.&nbsp;</p>
        <p>I recently read Stephen King’s memoir,
          <em>On Writing.
          </em>He talks about the hour-after-hour, story-after-story grind that led him to write
          <em>Carrie,
          </em>his first successful book. I also recently relistened to
          <em>The Heist
          </em>by Macklemore and Ryan Lewis. In the song
          <em>Ten Thousand Hours,
          </em>Macklemore says, “the greats weren’t great because at birth they could paint. The greats were great because they paint a lot.”</p>
        <p>No one is great at the start of something creative. Stephen King wrote for years before he published his first book. His books have sold over 400 million copies! Several of his books have been made into blockbuster films, such as
          <em>It, Shawshank Redemption,
          </em>and
          <em>The Shining.</em>
          He is a master storyteller.&nbsp;</p>
        <p>Two books come to me when I think about mastery. Both are by guys named Rob.</p>
        <p>The first is
          <em>Mastery
          </em>by Robert Greene.&nbsp;</p>
        <p>In his book, Greene lays out the path to mastery; follow what you are passionate about, prioritize learning over making money when you are applying for jobs, become an apprentice to a mentor, then strike out on your own and create something new. This path leads to the intuitive, finger-tip-feel competence of craft we call mastery.&nbsp;</p>
        <p>You cannot master what you do not love to do. The reason I have gained any depth in my skills as a guitarist and a software developer is because I enjoy the practice of both disciplines.</p>
        <p>
          <em>“In order to master a field, you must love the subject and feel a profound connection to it. Your interest must transcend the field itself and border on the religious”</em>
        </p>
        <p>The second book I think of is
          <em>Chronicles: Volume One</em>
          by Bob Dylan</p>
        <p>
          <em>“I can’t say when it occurred to me to write my own songs. I couldn’t have come up with anything comparable or halfway close to the folk songs lyrics I was singing to define the way I felt about the world. I guess it happens to you by degrees. You just don’t wake up one day and decide that you need to write songs.”</em>
        </p>
        <p>You aren’t born a master songwriter or a master salesman; it “happens to you by degrees.” The reason that Bob Dylan’s songs are relevant 60+ years after he wrote them isn’t because he is a great singer or guitarist. It’s his capacity as a writer to describe the world around him that makes his work so special. He is a master storyteller, and the writing in
          <em>Chronicles</em>
          is proof enough.&nbsp;</p>
        <p>To master a craft is to choose work that you enjoy. The quality of your work and your life will undoubtedly improve as you focus on mastery of the subject matter.</p>
        <p>It is far easier to enjoy life when you do what you love and you do it well.&nbsp;</p>
        <p>It is worth pointing out that the better you get at something, the more you will enjoy doing it (see
          <em>Deep Work
          </em>by Cal Newport).</p>
        <p>If you, like me, want to find satisfaction in your life, develop a skill or talent that you enjoy. It could be writing poetry, negotiating business deals, playing basketball, or smoking meat.&nbsp;</p>
        <p>Remember this:</p>
        <ol>
          <li>When you start, you will suck.</li>
          <li>When you dig for depth, you discover satisfaction.</li>
        </ol>
        <p>My first job in the world of coding was for a copyright office at a university. I made $13 an hour. It took me two weeks to figure out how to make any changes to the website I was now in charge of maintaining. Luckily, I worked with some really understanding people. When I finally got my bearings and started making some progress with updating the site, it felt pretty dang good. Years later, I still find that same satisfaction in software development because I am constantly deepening my understanding and pushing the boundaries of my abilities.</p>
        <p>Don’t be afraid to pursue something challenging.&nbsp;</p>
        <p>Don’t be afraid to suck at something.&nbsp;</p>
        <p>Find something that engages you. Work to master it. That will bring you satisfaction.</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import getArticleData from "@/functions/getArticleData";
let article = getArticleData()
</script>