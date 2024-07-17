<template>
  <nav class="bg-gray">
    <div class="container medium-content py-3">
      <div class="d-flex justify-content-between align-items-center">
        <router-link class="logo" to="/">STEFAN BRADLEY</router-link>
        <div>
          <ul class="list-group list-group-horizontal list-unstyled">
            <li class="mx-2 my-0"><router-link to="/articles">Articles</router-link></li>
            <li class="mx-2 my-0"><router-link to="/music">Music</router-link></li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>