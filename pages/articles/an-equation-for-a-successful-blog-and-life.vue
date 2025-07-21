<template>
  <section class="section-padding">
    <div class="container thinnest-content">
      <div>
        <h1 class="mb-3">An equation for a success blog (and life)</h1>
        <p class="tagline fst-italic blue mb-3">By Stefan Auvache</p>

        <p>If you wanted to start a blog today and you googled “how to start a blog,” you would see step-by-step tutorials, strategies, pro tips, and practices; design a website, optimize for search engines (SEO), promote your content on social media, find a niche, etc.</p>

        <p>Seth Godin does almost none of these things. He doesn’t have any social media. He doesn’t care about search engines or website analytics or the word count of each post. His only focus is writing and publishing helpful content every day. Seth has been posting daily on his blog since 2002. He has written over 9,000 blog posts about marketing, business, leadership, self-betterment, and his personal musings, and millions of people read what he has to say. If you search “blog” on Google, his site comes up on the first page. All without following the advice of other successful people.</p>

        <p>Successful people are often successful in spite of the things they do. When someone manages to break through and start a thriving business or sell millions of copies of their book, they often make it by doing a few really useful things in the midst of a bunch of other things that weren’t actually all that helpful. For example: take this formula for building a successful blog (based on advice from all over the internet):</p>

        <p class="fst-italic">Successful blog = good content + SEO + social media + consistent posting</p>

        <p>Good content, SEO, social media, and consistent posting are all variables. These are the things that are under your control. You can put effort into writing helpful articles, improving the rank of your website on Google, and marketing your blog.</p>

        <p>This formula, however, doesn’t specify the importance of each variable. There should be a multiplier attached to each variable that represents how much impact that variable has on the overall result. These multipliers are out of our control. For instance, if having good content on the blog is twice as important as any of the other variables, the formula would look like this:</p>

        <p class="fst-italic">Successful blog = good content(2) + SEO(1) + social media(1) + consistent posting(1)</p>

        <p>Following this formula for a successful blog, your time is best spent creating useful, compelling content for your blog. Search engine optimization, social media marketing, and consistent posting come second.</p>

        <p>Here is the Seth Godin version of the equation:</p>

        <p class="fst-italic">Successful blog = writing every day + posting every day</p>

        <p>He has found that the results of working on SEO and social media marketing take care of themselves when he writes and posts daily; he ranks very well on Google, and his fan base is huge. Writing and posting daily makes him better at writing, which makes the blog more compelling. Because the blog is compelling, it markets itself through word of mouth.</p>

        <p>What are you trying to accomplish? What variables matter most in the equation for your success? Are there things that others say are essential that might not even be necessary?</p>

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