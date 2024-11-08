import {createRouter, createWebHistory} from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home'),
    meta: {
      title: 'Stefan Auvache',
      canonical: 'https://www.stefanauvache.com',
      metaTags: [
        {
          name: 'description',
          content: 'Education, both formal and personal, always changes lives for the better. Universal, practical life lessons lie waiting to be discovered in literature, business, technology, and even music.'
        },
        {
          name: 'keywords',
          content: 'Stefan Auvache, articles, learning, lifelong learning, education, philosophy, articles, literature, business, technology, music'
        },
        {
          name: 'robots',
          content: 'index, follow'
        }
      ]
    },
  },
  {
    path: '/:catchAll(.*)*',
    name: "PageNotFound",
    component: () => import('../views/PageNotFound'),
    meta: {
      title: 'Requested Page Not Found',
      metaTags: [
        {
          name: 'description',
          content: 'Requested Page Not Found on'
        }
      ]
    },
  },

  // pages
  {
    path: '/articles',
    name: 'Articles',
    component: () => import('../views/Articles.vue'),
    meta: {
      title: 'Articles',
      canonical: 'https://www.stefanauvache.com/articles',
      metaTags: [
        {
          name: 'description',
          content: 'Read articles with insights on business, technology, literature, philosophy, music, and life.'
        },
        {
          name: 'keywords',
          content: 'articles, business, technology, literature, philosophy, music, lifelong learning, Stefan Auvache articles'
        },
        {
          name: 'robots',
          content: 'index, follow'
        }
      ]
    },
  },
  {
    path: '/archive',
    name: 'Archive',
    component: () => import('../views/Archive.vue'),
    meta: {
      title: 'Archive',
      canonical: 'https://www.stefanauvache.com/archive',
      metaTags: [
        {
          name: 'description',
          content: 'Read articles with insights on business, technology, literature, philosophy, music, and life.'
        },
        {
          name: 'keywords',
          content: 'articles, business, technology, literature, philosophy, music, lifelong learning, Stefan Auvache articles'
        },
        {
          name: 'robots',
          content: 'index, follow'
        }
      ]
    },
  },
  {
    path: '/music',
    name: 'Music',
    component: () => import('../views/Music.vue'),
    meta: {
      title: 'Music',
      canonical: 'https://www.stefanauvache.com/music',
      metaTags: [
        {
          name: 'description',
          content: 'Music I love, music I make'
        },
        {
          name: 'keywords',
          content: 'music, share music, love music'
        },
        {
          name: 'robots',
          content: 'index, follow'
        }
      ]
    },
  },
  {
    path: '/subscribe',
    name: 'Subscribe',
    component: () => import('../views/Subscribe.vue'),
    meta: {
      title: 'Subscribe to Food For Thought',
      canonical: 'https://www.stefanauvache.com/subscribe',
      metaTags: [
        {
          name: 'description',
          content: 'Subscribe to my Food For Thought newsletter for the latest updates, exclusive content, and special offers delivered straight to your inbox. Stay informed and never miss out. Join our community today!'
        },
        {
          name: 'keywords',
          content: 'subscribe, newsletter, email list, Food For Thought, articles, business, technology, literature, philosophy, music, lifelong learning, Stefan Auvache'
        },
        {
          name: 'robots',
          content: 'index, follow'
        }
      ]
    },
  },
  // articles
  {
    path: '/articles/agile-development-a-pattern-for-improvement',
    name: 'AgileDevelopmentAPatternForImprovement',
    component: () => import('../views/articles/AgileDevelopmentAPatternForImprovement.vue'),
    meta: {
      title: 'Agile Development: A Pattern for Improvement',
      canonical: 'https://www.stefanauvache.com/articles/agile-development-a-pattern-for-improvement',
      metaTags: [
        {
          name: 'description',
          content: 'Make a plan to get a little closer to where you want to be. Act on that plan. Measure the outcome of your actions. Then, use what you have learned to adjust your vision for the future and plan your next move. Your life will start moving in the direction you really want it to go.'
        },
        {
          name: 'keywords',
          content: 'agile development, the agile life, agile, business principles applied to life, personal development, project management'
        },
        {
          name: 'robots',
          content: 'index, follow'
        }
      ]
    },
  },
  {
    path: '/articles/be-curious-not-opinionated',
    name: 'BeCuriousNotOpinionated',
    component: () => import('../views/articles/BeCuriousNotOpinionated.vue'),
    meta: {
      title: 'Be Curious, Not Opinionated',
      canonical: 'https://www.stefanauvache.com/articles/be-curious-not-opinionated',
      metaTags: [
        {
          name: 'description',
          content: 'Explore the power of curiosity over opinion in shaping perspectives and fostering learning. Discover how curiosity leads to deeper understanding and innovation, with insights on how to navigate conversations and debates with an open mind.'
        },
        {
          name: 'keywords',
          content: 'Curiosity over opinion, curiosity, Benefits of being curious, How to foster curiosity, Opinion vs. curiosity, Ultracrepidarian, Humility in learning, Innovation through curiosity, Effective communication tips, How to approach debates'
        },
        {
          name: 'robots',
          content: 'index, follow'
        }
      ]
    },
  },
  {
    path: '/articles/better-business-writing',
    name: 'BetterBusinessWriting',
    component: () => import('../views/articles/BetterBusinessWriting.vue'),
    meta: {
      title: 'Better Business Writing',
      canonical: 'https://www.stefanauvache.com/articles/better-business-writing',
      metaTags: [
        {
          name: 'description',
          content: 'Writing should be as easy to understand and as meaningful as possible. Make your work entertaining, but not at the expense of simplicity.'
        },
        {
          name: 'keywords',
          content: 'writing, better writing, business writing, meaningful writing, improve writing, write better articles, war of art, scott adams, steven pressfield, dilbert'
        },
        {
          name: 'robots',
          content: 'index, follow'
        }
      ]
    },
  },
  {
    path: '/articles/biography-method',
    name: 'BiographyMethod',
    component: () => import('../views/articles/BiographyMethod.vue'),
    meta: {
      title: 'The Biography Method: Enhancing Social Interactions Through Curiosity',
      canonical: 'https://www.stefanauvache.com/articles/biography-method',
      metaTags: [
        {
          name: 'description',
          content: 'Discover the Biography Method, inspired by Fred Rogers\' empathetic approach to connecting with others. Learn how to build deeper relationships by actively listening, asking thoughtful questions, and showing genuine curiosity about people\'s life stories.'
        },
        {
          name: 'keywords',
          content: 'Fred Rogers, Biography Method, active listening, empathy in communication, deep connections, François Clemmons, Mr. Rogers\' Neighborhood, Marcus Aurelius quote, building relationships, Dale Carnegie, effective communication, personal storytelling, understanding others.'
        },
        {
          name: 'robots',
          content: 'index, follow'
        }
      ]
    },
  },
  {
    path: '/articles/books-that-have-changed-my-life',
    name: 'BooksThatHaveChangedMyLife',
    component: () => import('../views/articles/BooksThatHaveChangedMyLife.vue'),
    meta: {
      title: 'Books That Have Changed My Life',
      canonical: 'https://www.stefanauvache.com/articles/books-that-have-changed-my-life',
      metaTags: [
        {
          name: 'description',
          content: 'Find interesting, powerful books and read them. These books that have changed my life.'
        },
        {
          name: 'keywords',
          content: 'books, best books, interesting books, powerful books, book recommendations, life-changing books, favorite books, literature, business books'
        },
        {
          name: 'robots',
          content: 'index, follow'
        }
      ]
    },
  },
  {
    path: '/articles/eliminate-automate-delegate-do',
    name: 'EliminateAutomateDelegateDo',
    component: () => import('../views/articles/EliminateAutomateDelegateDo.vue'),
    meta: {
      title: 'Eliminate Automate Delegate Do',
      canonical: 'https://www.stefanauvache.com/articles/eliminate-automate-delegate-do',
      metaTags: [
        {
          name: 'description',
          content: 'Eliminate tasks that don\'t need to be done, automate tasks that can be automated, delegate tasks that that can be should be done by others, and do the rest of your work.'
        },
        {
          name: 'keywords',
          content: 'efficiency, eliminate, automate, delegate, do, improve work efficiency, low level tasks, self improvement'
        },
        {
          name: 'robots',
          content: 'index, follow'
        }
      ]
    },
  },
  {
    path: '/articles/excellent-advice-for-living',
    name: 'ExcellentAdviceForLiving',
    component: () => import('../views/articles/ExcellentAdviceForLiving.vue'),
    meta: {
      title: 'Excellent Advice for Living',
      canonical: 'https://www.stefanauvache.com/articles/excellent-advice-for-living',
      metaTags: [
        {
          name: 'description',
          content: 'Discover valuable life advice from Kevin Kelly\'s book "Excellent Advice for Living: Wisdom I Wish I’d Known Earlier." Explore 20 insightful quotes that inspire personal growth, goal setting, and living a fulfilling life.'
        },
        {
          name: 'keywords',
          content: 'Kevin Kelly, Excellent Advice for Living, wisdom quotes, life advice, personal growth, goal setting, inspirational quotes, life lessons, self-improvement, personal development, motivation, good habits, meaningful life, living well, Kevin Kelly book.'
        },
        {
          name: 'robots',
          content: 'index, follow'
        }
      ]
    },
  },
  {
    path: '/articles/world-class-feedback-loops',
    name: 'WorldClassFeedbackLoops',
    component: () => import('../views/articles/WorldClassFeedbackLoops.vue'),
    meta: {
      title: 'Creating World-Class Feedback Loops',
      canonical: 'https://www.stefanauvache.com/articles/world-class-feedback-loops',
      metaTags: [
        {
          name: 'description',
          content: 'Learn how to create world-class feedback loops that drive continuous improvement in any area of life or business. Discover strategies used by successful entrepreneurs like Paul Graham and Gordon Ramsay to enhance performance and achieve excellence through effective feedback systems.'
        },
        {
          name: 'keywords',
          content: 'feedback loops, world-class feedback, continuous improvement, growth mindset, effective feedback, Paul Graham feedback strategy, Gordon Ramsay success tips, iterative improvement, objective feedback sources, professional feedback loop'
        },
        {
          name: 'robots',
          content: 'index, follow'
        }
      ]
    },
  },
  {
    path: '/articles/grow-your-focus',
    name: 'GrowYourFocus',
    component: () => import('../views/articles/GrowYourFocus.vue'),
    meta: {
      title: 'Grow Your Focus',
      canonical: 'https://www.stefanauvache.com/articles/grow-your-focus',
      metaTags: [
        {
          name: 'description',
          content: 'Anyone can learn to improve their focus. Even if your ability to focus sucks, your capacity to focus is greater than you think. You can focus.'
        },
        {
          name: 'keywords',
          content: 'focus, improve focus, self improvement, train focus, learn to focus'
        },
        {
          name: 'robots',
          content: 'index, follow'
        }
      ]
    },
  },
  {
    path: '/articles/have-you-considered-the-cost',
    name: 'HaveYouConsideredTheCost',
    component: () => import('../views/articles/HaveYouConsideredTheCost.vue'),
    meta: {
      title: 'Have You Considered the Cost',
      canonical: 'https://www.stefanauvache.com/articles/have-you-considered-the-cost',
      metaTags: [
        {
          name: 'description',
          content: 'Find something that engages you. Work to master it. That will bring you satisfaction. Don\'t be afraid to pursue something challenging. Don\'t be afraid to suck at something.'
        },
        {
          name: 'keywords',
          content: 'mastery, craft, engaging work, self improvement, robert greene, bob dylan, masters, improve skills, master skills'
        },
        {
          name: 'robots',
          content: 'index, follow'
        }
      ]
    },
  },
  {
    path: '/articles/mastery',
    name: 'Mastery',
    component: () => import('../views/articles/Mastery.vue'),
    meta: {
      title: 'Mastery',
      canonical: 'https://www.stefanauvache.com/articles/mastery',
      metaTags: [
        {
          name: 'description',
          content: 'Find something that engages you. Work to master it. That will bring you satisfaction. Don\'t be afraid to pursue something challenging. Don\'t be afraid to suck at something.'
        },
        {
          name: 'keywords',
          content: 'mastery, craft, engaging work, self improvement, robert greene, bob dylan, masters, improve skills, master skills'
        },
        {
          name: 'robots',
          content: 'index, follow'
        }
      ]
    },
  },
  {
    path: '/articles/monk-week',
    name: 'MonkWeek',
    component: () => import('../views/articles/MonkWeek.vue'),
    meta: {
      title: 'Monk Week',
      canonical: 'https://www.stefanauvache.com/articles/monk-week',
      metaTags: [
        {
          name: 'description',
          content: 'Discover how a week of introspection during finals changed the author\'s life in "Monk Week." Explore the benefits of taking time for self-reflection, reading influential books, and setting personal values. Learn how this experience inspired a life of freedom and thoughtful decision-making.'
        },
        {
          name: 'keywords',
          content: 'Monk Week, self-reflection, introspection, life-changing experience, finals week, personal values, life goals, self-discovery, reading for self-improvement, How to Win Friends and Influence People, The 4-Hour Workweek, Bill Gates Think Week, Carl Jung The Tower, setting life goals, personal development, avoiding stress, deep thinking, career planning, life efficiency, soul searching, setting priorities, deep reflection.'
        },
        {
          name: 'robots',
          content: 'index, follow'
        }
      ]
    },
  },
  {
    path: '/articles/netflix-chaos-monkey-and-preparing-for-the-worst',
    name: 'NetflixChaosMonkeyAndPreparingForTheWorst',
    component: () => import('../views/articles/NetflixChaosMonkeyAndPreparingForTheWorst.vue'),
    meta: {
      title: 'Netflix, Chaos Monkey, and Preparing for the Worst',
      canonical: 'https://www.stefanauvache.com/articles/netflix-chaos-monkey-and-preparing-for-the-worst',
      metaTags: [
        {
          name: 'description',
          content: 'Find something that engages you. Work to master it. That will bring you satisfaction. Don\'t be afraid to pursue something challenging. Don\'t be afraid to suck at something.'
        },
        {
          name: 'keywords',
          content: 'mastery, craft, engaging work, self improvement, robert greene, bob dylan, masters, improve skills, master skills'
        },
        {
          name: 'robots',
          content: 'index, follow'
        }
      ]
    },
  },
  {
    path: '/articles/premature-optimization',
    name: 'PrematureOptimization',
    component: () => import('../views/articles/PrematureOptimization.vue'),
    meta: {
      title: 'Premature Optimization',
      canonical: 'https://www.stefanauvache.com/articles/premature-optimization',
      metaTags: [
        {
          name: 'description',
          content: 'Explore how Shaun White, the world\'s most famous snowboarder, transitioned into music with his band, Bad Things, and the powerful lesson he learned about the dangers of premature optimization. Discover why over-preparation can hinder success and how embracing challenges leads to greatness.'
        },
        {
          name: 'keywords',
          content: 'Shaun White, professional snowboarder, Bad Things band, Lollapalooza performance, premature optimization, over-preparation, productivity tips, Donald Knuth quote, Steven Pressfield, success strategies, overcoming resistance.'
        },
        {
          name: 'robots',
          content: 'index, follow'
        }
      ]
    },
  },
  {
    path: '/articles/relative-sacrifice',
    name: 'RelativeSacrifice',
    component: () => import('../views/articles/RelativeSacrifice.vue'),
    meta: {
      title: 'Mastery',
      canonical: 'https://www.stefanauvache.com/articles/relative-sacrifice',
      metaTags: [
        {
          name: 'description',
          content: 'Explore the concept of relative sacrifice in relationships and life, delving into how the value of a sacrifice varies between individuals. This thought-provoking article, inspired by a quote from Gabby Reece and a biblical parable, examines the impact of sacrifices in different contexts—from financial donations to everyday gestures like cooking dinner. Learn how understanding the relative weight of sacrifices can improve your relationships and show appreciation for the efforts of those around you.'
        },
        {
          name: 'keywords',
          content: 'Relative sacrifice, Sacrifice meaning, Gabby Reece quote, Sacrifice in relationships, Understanding sacrifice, Marriage sacrifices, Value of sacrifice, Biblical parables on sacrifice, Luke 21:1-4 meaning, Sacrifice comparison, Acts of sacrifice, Importance of sacrifice, Emotional sacrifices, Relationship dynamics, Identifying sacrifices in relationships'
        },
        {
          name: 'robots',
          content: 'index, follow'
        }
      ]
    },
  },
  {
    path: '/articles/starting-successful-creative-projects',
    name: 'StartingSuccessfulCreativeProjects',
    component: () => import('../views/articles/StartingSuccessfulCreativeProjects.vue'),
    meta: {
      title: 'Starting Successful Creative Projects',
      canonical: 'https://www.stefanauvache.com/articles/starting-successful-creative-projects',
      metaTags: [
        {
          name: 'description',
          content: 'Success comes from an unrefined idea that you work on long enough until it becomes something good, then something better, then something great.'
        },
        {
          name: 'keywords',
          content: 'creativity, craft, ryan holiday, long term success'
        },
        {
          name: 'robots',
          content: 'index, follow'
        }
      ]
    },
  },
  {
    path: '/articles/unplanned-work',
    name: 'The9090Principle',
    component: () => import('../views/articles/The9090Principle.vue'),
    meta: {
      title: 'Mastery',
      canonical: 'https://www.stefanauvache.com/articles/unplanned-work',
      metaTags: [
        {
          name: 'description',
          content: 'Find something that engages you. Work to master it. That will bring you satisfaction. Don\'t be afraid to pursue something challenging. Don\'t be afraid to suck at something.'
        },
        {
          name: 'keywords',
          content: 'mastery, craft, engaging work, self improvement, robert greene, bob dylan, masters, improve skills, master skills'
        },
        {
          name: 'robots',
          content: 'index, follow'
        }
      ]
    },
  },
  {
    path: '/articles/weaving-baskets-and-better-essays',
    name: 'WeavingBasketsAndBetterEssays',
    component: () => import('../views/articles/WeavingBasketsAndBetterEssays.vue'),
    meta: {
      title: 'Weaving Baskets and Better Essays',
      canonical: 'https://www.stefanauvache.com/articles/weaving-baskets-and-better-essays',
      metaTags: [
        {
          name: 'description',
          content: 'Write better essays with the \"Basket Weaving\" method. Learn how to organize your thoughts, assign colors to main ideas, and create cohesive, impactful papers. Discover how this innovative approach, inspired by anthropology studies, can streamline your writing process and improve your academic performance.'
        },
        {
          name: 'keywords',
          content: 'better essays, essay writing tips, cohesive writing, organize thoughts, writing method, academic writing, anthropology class, colorful writing technique, essay organization, main ideas in writing, writing process, improve writing skills, college essays, efficient writing, writing strategy, study tips.'
        },
        {
          name: 'robots',
          content: 'index, follow'
        }
      ]
    },
  },
  {
    path: '/articles/why-you-should-read',
    name: 'WhyYouShouldRead',
    component: () => import('../views/articles/WhyYouShouldRead.vue'),
    meta: {
      title: 'Why You Should Read',
      canonical: 'https://www.stefanauvache.com/articles/why-you-should-read',
      metaTags: [
        {
          name: 'description',
          content: 'Discover the inspiring story of George Yeomans Pocock, a master-craftsman, and learn why building a reading habit can be more valuable than earning a university degree. Explore how lifelong reading sharpens competence, is cost-effective, and surpasses temporary academic studies.'
        },
        {
          name: 'keywords',
          content: 'George Yeomans Pocock, rowing, racing shells, handcrafting boats, University of Washington, reading habit, education, lifelong learning, university alternatives, personal competence, affordable education, book recommendations'
        },
        {
          name: 'robots',
          content: 'index, follow'
        }
      ]
    },
  },
  {
    path: '/articles/work-deeply',
    name: 'WorkDeeply',
    component: () => import('../views/articles/WorkDeeply.vue'),
    meta: {
      title: 'Work Deeply',
      canonical: 'https://www.stefanauvache.com/articles/work-deeply',
      metaTags: [
        {
          name: 'description',
          content: 'Discover the transformative power of deep work with insights from Cal Newport. Learn how focusing on singular tasks can enhance productivity and quality of work.'
        },
        {
          name: 'keywords',
          content: 'deep work, productivity tips, Cal Newport, focus at work, deep work strategy, concentration techniques, work-life balance, eliminate distractions, boost productivity'
        },
        {
          name: 'robots',
          content: 'index, follow'
        }
      ]
    },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        top: 80
      };
    } else if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
  routes
})

router.beforeEach((to, from, next) => {
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
  const nearestWithCanonical = to.matched.slice().reverse().find(r => r.meta && r.meta.canonical);
  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
  if(nearestWithTitle) {
    document.title = nearestWithTitle.meta.title;
  } else if(previousNearestWithMeta) {
    document.title = previousNearestWithMeta.meta.title;
  }
  if(nearestWithCanonical) {
    const canonical = document.createElement('link')
    canonical.setAttribute('rel', 'canonical')
    canonical.setAttribute('href', nearestWithCanonical.meta.canonical)
    document.head.append(canonical)
  }
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));
  if(!nearestWithMeta) return next();
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');
    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });
    tag.setAttribute('data-vue-router-controlled', '');
    return tag;
  }).forEach(tag => document.head.appendChild(tag));
  next();


  let modals = document.querySelectorAll('[id$=Modal]')
  for (let i = 0; i < modals.length; i++) {
    let modalName = modals[i].id.replace('Modal','')
    closeModal(modalName)
  }
});

export default router
