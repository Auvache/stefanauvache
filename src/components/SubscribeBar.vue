<template>
  <section class="py-3 bg-dark-blue">
    <div class="container medium-content text-center">
      <div>
        <p class="white">Subscribe to my <span class="fw-bold fst-italic">Food 4 Thought</span> news letter for recommendations and lessons from technology, music, books, and life.</p>
        <div>
          <form class="subscribe d-flex flex-column flex-sm-row justify-content-center align-items-center" @submit.prevent="">
            <label for="email" class="sr-only">Subscribe</label>
            <input id="email" name="email" type="text" class="me-0 mb-2 me-sm-2 mb-sm-0" placeholder="Email Address" />
            <input type="submit" class="btn btn-white" value="Subscribe">
          </form>
        </div>
      </div>
    </div>
  </section>
</template>