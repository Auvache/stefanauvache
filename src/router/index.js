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
  // articles
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
          content: 'You don\'t have to be successful to set aside time for deep reflection. Setting aside time to read, think, and plan makes you more successful.'
        },
        {
          name: 'keywords',
          content: 'think week, meditation, reflection, monk week, life calibration'
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
