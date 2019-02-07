<template>
  <section id="about">
    <div class="container">
      <h1>Contact</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem minima corrupti animi sequi eius voluptatem eos ab et molestiae iste architecto nostrum necessitatibus, consectetur repudiandae reiciendis nobis accusantium dolor. Reprehenderit?</p>
      <nuxt-link v-bind:to="'/'" class="button--grey">Back</nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: 'Contact Nuxt App',
      meta: [
        { hid: 'description', name: 'description', content: 'This is my contact description here.'},
        { hid: 'keywords', name: 'keywords', content: 'contact, nuxt, app'},
      ]
    }
  }
}
</script>

<style>

</style>
