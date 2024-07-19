import {createRouter, createWebHistory} from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home'),
    meta: {
      title: 'Stefan Bradley',
      canonical: 'https://www.stefanbradley.net',
      metaTags: [
        {
          name: 'description',
          content: ''
        },
        {
          name: 'keywords',
          content: ''
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
      title: 'About Me',
      canonical: 'https://www.stefanbradley.net/articles',
      metaTags: [
        {
          name: 'description',
          content: ''
        },
        {
          name: 'keywords',
          content: ''
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
      title: 'About Me',
      canonical: 'https://www.stefanbradley.net/music',
      metaTags: [
        {
          name: 'description',
          content: ''
        },
        {
          name: 'keywords',
          content: ''
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
      canonical: 'https://www.stefanbradley.net/articles/better-business-writing',
      metaTags: [
        {
          name: 'description',
          content: ''
        },
        {
          name: 'keywords',
          content: ''
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
      canonical: 'https://www.stefanbradley.net/articles/books-that-have-changed-my-life',
      metaTags: [
        {
          name: 'description',
          content: ''
        },
        {
          name: 'keywords',
          content: ''
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
      canonical: 'https://www.stefanbradley.net/articles/mastery',
      metaTags: [
        {
          name: 'description',
          content: ''
        },
        {
          name: 'keywords',
          content: ''
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

// for accessibility
// router.afterEach(() => {
//   document.getElementById('firstTabIndex').focus()
// })

export default router
