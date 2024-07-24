<template>
  <section class="section-padding">
    <div class="container thinnest-content">
      <div>
        <h1 v-if="article.title" class="mb-1">{{article.title}}</h1>
        <p v-if="article.datePublished" class="tagline fst-italic blue">{{formatDate(article.datePublished)}}</p>

        <p>There are some tasks that call to us. There are things we long to do. Unfortunately, those tasks are typically suffocated by other things we wish we didn’t have to do, but must, to keep the ship afloat.</p>
        <p>Here is a mantra for when you find yourself overwhelmed by the ocean of work sitting in front of you.</p>
        <p>Eliminate, delegate, automate, do.</p>
        <h2>Eliminate</h2>
        <p>What would happen if you didn’t do something? What if you didn’t attend a meeting, manage your social media accounts, or try to wake up early every morning?</p>
        <p>Everyone wastes time doing things that simply don’t need to be done. Ask yourself if there is anything you do that simply doesn’t need to be completed. Then don’t do that thing.</p>
        <h2>Delegate</h2>
        <p>Is there something that needs to be done, but not necessarily by you? Is there something you do that others are already doing? Can someone else report back to you on a meeting? Can you give part of a project to a team member and trust them to get it done?</p>
        <p>Do not push things unnecessarily onto other people in a bout of laziness. If you need help, ask for it. Leverage those around you to get work done.</p>
        <h2>Automate</h2>
        <p>If it must be done and it must be done by you, is there a way to make the task easier in the future? Can you make a spreadsheet to automate budget calculations? Can you set up an automatic email response?</p>
        <p>Automate processes to reduce workload.</p>
        <h2>Do</h2>
        <p>You should now have a list of tasks that must be done, and must be done by you. Now, do your work.</p>
        <p>Block out a chunk of time, shut out distractions and do your work. Do similar tasks at the same time. Answer emails in one session. Don’t answer work messages while you are making a presentation, fixing a chunk of code, or designing a new company logo. For the love of all, don’t watch YouTube while you are working. Focus on the task at hand.</p>
        <p>Focus on what really matters and what you alone can accomplish. This applies to work, school, household chores, sports, training, building relationships, and just about any situation in which you have something to accomplish.</p>
        <p>Eliminate, delegate, automate, do.</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import getArticleData from "@/functions/getArticleData";
import affiliateLinks from "@/assets/affiliateLinks.json";
import formatDate from "@/functions/formatDate";
import {onBeforeMount, ref} from "vue";
const article = ref({"title" : "", "datePublished" : ""})

onBeforeMount(() => {
  article.value = getArticleData()
})
</script>